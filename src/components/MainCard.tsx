import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Button,
	Typography,
} from "@material-ui/core";

import { KDrama } from "../types";
import { STATUSES } from "../Constants";

interface Props {
	kDrama: KDrama;
	increaseEpisodes: (id: string, current: number) => void;
	setStatus: (id: string, status: string) => void;
}

const MainCard: React.FC<Props> = ({ kDrama, increaseEpisodes, setStatus }) => {
	const isWatching = kDrama.status === STATUSES.WATCHING;

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
				<Typography style={{ paddingLeft: "5px" }} variant="h4">
					{isWatching ? "Currently watching:" : "Next planned:"}
				</Typography>
				<Typography
					style={{ paddingLeft: "5px", fontWeight: "bold" }}
					variant="h3"
				>
					{kDrama.title ?? "No currently watched KDrama"}
				</Typography>
				<CardActions style={{ justifyContent: "space-between" }}>
					<Button
						variant="outlined"
						color="primary"
						onClick={() =>
							setStatus(
								kDrama._id,
								isWatching ? STATUSES.COMPLETED : STATUSES.WATCHING
							)
						}
					>
						{isWatching ? "Complete" : "Start Watching"}
					</Button>
					<Button
						onClick={() =>
							increaseEpisodes(kDrama._id, kDrama.currentEpisode || 0)
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
