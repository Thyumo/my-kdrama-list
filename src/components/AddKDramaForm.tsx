import React, { useState } from "react";

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	Select,
	MenuItem,
	Button,
	styled,
} from "@material-ui/core";

import { STATUSES } from "../Constants";
import { KDramaInsertInput } from "../types";

const SubmitButton = styled(Button)({
	display: "flex",
	alignSelf: "flex-end",
	width: "30%",
	marginTop: 20,
});

interface Props {
	isOpen: boolean;
	handleClose: () => void;
	addKDrama: (data: KDramaInsertInput) => void;
}

const AddKDramaForm: React.FC<Props> = ({ isOpen, handleClose, addKDrama }) => {
	const [status, setStatus] = useState<string>(STATUSES.PLANNED);
	const [title, setTitle] = useState<string>("");
	const [image, setImage] = useState<string>("");
	const [totalEpisodes, setTotalEpisodes] = useState<number>(0);

	const inputData: KDramaInsertInput = {
		title,
		image,
		status,
		totalEpisodes,
	};

	return (
		<Dialog fullWidth open={isOpen} onClose={handleClose}>
			<DialogTitle>Add KDrama</DialogTitle>
			<DialogContent style={{ display: "flex", flexDirection: "column" }}>
				<DialogContentText>
					Enter the new KDrama's information
				</DialogContentText>
				<TextField
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					autoFocus
					margin="dense"
					label="Title"
				/>
				<TextField
					value={image}
					onChange={(e) => setImage(e.target.value)}
					margin="dense"
					label="Image Link"
				/>
				<Select
					onChange={(e) => setStatus(e.target.value as string)}
					value={status}
					required
					style={{ margin: "21px 0px 4px 0px" }}
				>
					<MenuItem value={STATUSES.WATCHING}>Watching</MenuItem>
					<MenuItem value={STATUSES.COMPLETED}>Completed</MenuItem>
					<MenuItem value={STATUSES.PLANNED}>Planned</MenuItem>
				</Select>
				<TextField
					value={totalEpisodes}
					onChange={(e) => setTotalEpisodes(parseInt(e.target.value))}
					type="number"
					margin="dense"
					label="Total Episodes"
				/>
				<SubmitButton
					type="submit"
					color="primary"
					variant="outlined"
					onClick={() => {
						addKDrama(inputData);
						handleClose();
					}}
				>
					Add
				</SubmitButton>
			</DialogContent>
		</Dialog>
	);
};

export default AddKDramaForm;
