import React, { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardActions,
	Button,
	Typography,
	styled,
} from "@material-ui/core";

import StyledRating from "./StyledRating";
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

const PaddedCardActions = styled(CardActions)({
	justifyContent: "space-between",
	padding: "8px 15px 15px 15px",
});

interface Props {
	kDrama: KDrama;
	setEpisodes: (id: string, current: number) => void;
	setStatus: (id: string, status: string) => void;
	setRating: (id: string, rating: number) => void;
}

const MainCard: React.FC<Props> = ({
	kDrama,
	setEpisodes,
	setStatus,
	setRating,
}) => {
	const [localRating, setLocalRating] = useState<number>(kDrama.rating ?? 0);

	useEffect(() => {
		setLocalRating(kDrama.rating ?? 0);
	}, [kDrama, setLocalRating]);

	const handleStart = () => {
		setStatus(kDrama._id, STATUSES.WATCHING);
		setEpisodes(kDrama._id, 1);
	};

	const handleComplete = () => {
		setStatus(kDrama._id, STATUSES.COMPLETED);
		setEpisodes(kDrama._id, kDrama.totalEpisodes);
	};

	const handleIncreaseEpisodes = () => {
		if (kDrama.status === STATUSES.PLANNED) {
			handleStart();
		} else {
			setEpisodes(kDrama._id, (kDrama.currentEpisode || 0) + 1);
		}
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
				<Typography style={{ paddingLeft: "15px" }} variant="h5">
					{STATUS_TEXT[kDrama.status]}
				</Typography>
				<Typography
					style={{ paddingLeft: "15px", fontWeight: "bold" }}
					variant="h4"
				>
					{kDrama.title ?? "No currently watched KDrama"}
				</Typography>
				<PaddedCardActions>
					<StyledRating
						value={localRating}
						onChange={(e, value) => {
							setLocalRating(value as number);
							setRating(kDrama._id, value as number);
						}}
					/>
					<div>
						<Button
							style={{ marginRight: 5 }}
							variant="outlined"
							color="primary"
							onClick={() => ACTIONS[kDrama.status]()}
						>
							{ACTIONS_TEXT[kDrama.status]}
						</Button>
						<Button
							onClick={handleIncreaseEpisodes}
							variant="outlined"
							color="primary"
						>
							{`${kDrama.currentEpisode ?? "0"}/${kDrama.totalEpisodes}`}
						</Button>
					</div>
				</PaddedCardActions>
			</CardContent>
		</StyledCard>
	);
};

export default MainCard;
