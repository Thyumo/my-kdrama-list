import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Button,
	Typography,
	styled,
} from "@material-ui/core";

import { KDrama } from "../types";
import { STATUSES, ACTIONS_TEXT, STATUS_TEXT } from "../Constants";

const StyledCard = styled(Card)({
	width: 800,
	marginTop: 50,
});

const CardImage = styled("img")({
	height: 450,
	width: 800,
	objectFit: "cover",
});

interface Props {
	kDrama: KDrama;
	setEpisodes: (id: string, current: number) => void;
	setStatus: (id: string, status: string) => void;
}

const MainCard: React.FC<Props> = ({ kDrama, setEpisodes, setStatus }) => {
	const handleStart = () => {
		setStatus(kDrama._id, STATUSES.WATCHING);
		setEpisodes(kDrama._id, 1);
	};

	const handleComplete = () => {
		setStatus(kDrama._id, STATUSES.COMPLETED);
		setEpisodes(kDrama._id, kDrama.totalEpisodes);
	};

	const ACTIONS: { [key: string]: () => void } = {
		watching: handleComplete,
		completed: () => {},
		planned: handleStart,
	};

	return (
		<StyledCard elevation={5}>
			<CardContent style={{ padding: "0px" }}>
				{kDrama?.image && <CardImage src={kDrama.image} alt="kdrama" />}
				<Typography style={{ paddingLeft: "15px" }} variant="h4">
					{STATUS_TEXT[kDrama.status]}
				</Typography>
				<Typography
					style={{ paddingLeft: "15px", fontWeight: "bold" }}
					variant="h3"
				>
					{kDrama.title ?? "No currently watched KDrama"}
				</Typography>
				<CardActions
					style={{ justifyContent: "flex-end", padding: "8px 15px 15px 15px" }}
				>
					<Button
						variant="outlined"
						color="primary"
						onClick={() => ACTIONS[kDrama.status]()}
					>
						{ACTIONS_TEXT[kDrama.status]}
					</Button>
					<Button
						onClick={() =>
							setEpisodes(kDrama._id, (kDrama.currentEpisode || 0) + 1)
						}
						variant="outlined"
						color="primary"
					>
						{`${kDrama.currentEpisode ?? "0"}/${kDrama.totalEpisodes}`}
					</Button>
				</CardActions>
			</CardContent>
		</StyledCard>
	);
};

export default MainCard;
