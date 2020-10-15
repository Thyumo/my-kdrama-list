import React from "react";
import {
	styled,
	Dialog,
	DialogTitle,
	Typography,
	Avatar,
	TableRow,
	Table,
	TableCell,
} from "@material-ui/core";
import QuestionMarkIcon from "@material-ui/icons/Help";

import { KDrama } from "../types";
import StyledRating from "./StyledRating";

const SmallAvatar = styled(Avatar)({
	height: 70,
	width: 70,
});

interface Props {
	kDramas: KDrama[];
	isOpen: boolean;
	handleClose: () => void;
}

const Ranking: React.FC<Props> = ({ kDramas, isOpen, handleClose }) => (
	<Dialog open={isOpen} onClose={handleClose} fullWidth>
		<DialogTitle>
			<Typography variant="h3">Ranking</Typography>
		</DialogTitle>
		<Table>
			{kDramas
				.filter(({ rating }) => rating && rating !== 0)
				.sort((a, b) => b.rating! - a.rating!)
				.map(({ title, rating, image }, index) => (
					<TableRow>
						<TableCell>
							<Typography variant="h4">{index + 1}</Typography>
						</TableCell>
						<TableCell>
							{image ? (
								<SmallAvatar src={image} />
							) : (
								<SmallAvatar>
									<QuestionMarkIcon style={{ fontSize: "150px" }} />
								</SmallAvatar>
							)}
						</TableCell>
						<TableCell>
							<Typography variant="h5">{title}</Typography>
						</TableCell>
						<TableCell>
							<StyledRating readOnly value={rating} />
						</TableCell>
					</TableRow>
				))}
		</Table>
	</Dialog>
);

export default Ranking;
