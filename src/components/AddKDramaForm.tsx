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
} from "@material-ui/core";

import { STATUSES } from "../Constants";
import { KDramaInsertInput } from "../types";

interface Props {
	isOpen: boolean;
	handleClose: () => void;
	addKDrama: (data: KDramaInsertInput) => void;
}

const AddKDramaForm: React.FC<Props> = ({ isOpen, handleClose, addKDrama }) => {
	const [status, setStatus] = useState<string>(STATUSES.PLANNED);
	const [title, setTitle] = useState<string>("");
	const [image, setImage] = useState<string>("");

	const inputData: KDramaInsertInput = {
		title,
		image,
		status,
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
				<Button
					type="submit"
					color="primary"
					style={{
						display: "flex",
						alignSelf: "flex-end",
						width: "30%",
						marginTop: 20,
					}}
					variant="outlined"
					onClick={() => {
						addKDrama(inputData);
						handleClose();
					}}
				>
					Add
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default AddKDramaForm;
