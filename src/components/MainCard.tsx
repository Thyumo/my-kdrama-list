import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Button,
	Typography,
} from "@material-ui/core";

import { KDrama } from "../types";
import { STATUSES, ACTIONS } from "../Constants";

interface Props {
	kDrama: KDrama;
	setEpisodes: (id: string, current: number) => void;
	setStatus: (id: string, status: string) => void;
}

const MainCard: React.FC<Props> = ({ kDrama, setEpisodes, setStatus }) => {
	const isWatching = kDrama.status === STATUSES.WATCHING;

	const handleStart = () => {
		setStatus(kDrama._id, STATUSES.WATCHING);
		setEpisodes(kDrama._id, 1);
	};

	const handleComplete = () => {
		setStatus(kDrama._id, STATUSES.COMPLETED);
		setEpisodes(kDrama._id, kDrama.totalEpisodes);
	};

	return (
		<Card
			style={{
				width: "800px",
				marginTop: "50px",
			}}
			elevation={5}
		>
			<CardContent style={{ padding: "0px" }}>
				{kDrama?.image && (
					<img
						style={{ objectFit: "cover" }}
						width="800px"
						height="450px"
						src={kDrama.image}
						alt="kdrama"
					/>
				)}
				<Typography style={{ paddingLeft: "15px" }} variant="h4">
					{isWatching ? "Currently watching:" : "Next planned:"}
				</Typography>
				<Typography
					style={{ paddingLeft: "15px", fontWeight: "bold" }}
					variant="h3"
				>
					{kDrama.title ?? "No currently watched KDrama"}
				</Typography>
				<CardActions style={{ justifyContent: "space-between", padding: "8px 15px 15px 15px" }}>
					<Button
						variant="outlined"
						color="primary"
						onClick={() => (isWatching ? handleComplete() : handleStart())}
					>
						{ACTIONS[kDrama.status]}
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
		</Card>
	);
};

export default MainCard;
