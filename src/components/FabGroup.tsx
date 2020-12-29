import React, { useState } from "react";
import { Fab, ButtonGroup, Button, styled } from "@material-ui/core";
import { green, lightGreen } from "@material-ui/core/colors";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/AddCircle";
import FilterIcon from "@material-ui/icons/FilterList";
import StarIcon from "@material-ui/icons/StarOutlined";

import { STATUSES } from "../Constants";

const RankingFab = styled(Fab)({
	position: "fixed",
	right: "80px",
	bottom: "320px",
	color: "white",
	backgroundColor: lightGreen[600],
});

const FilterGroupFab = styled(Fab)({
	position: "fixed",
	right: "80px",
	bottom: "240px",
	backgroundColor: green[700],
	color: "white",
});

const FilterButtonGroup = styled(ButtonGroup)({
	position: "fixed",
	right: "160px",
	bottom: "200px",
});

const FilterButton = styled(Button)({
	color: green[700],
	borderColor: green[700],
});

interface Props {
	logOut: () => Promise<void>;
	handleFormOpen: () => void;
	handleRankingOpen: () => void;
	setFilter: (status: string | null) => void;
}

const FabGroup: React.FC<Props> = ({
	logOut,
	handleFormOpen,
	handleRankingOpen,
	setFilter,
}) => {
	const [showFilterList, setShowFilterList] = useState<boolean>(false);

	const handleClick = (status: string | null) => {
		setFilter(status);
		setShowFilterList(false);
	};

	const toggleFilterList = () => {
		setShowFilterList(!showFilterList);
	};

	return (
		<>
			<RankingFab onClick={handleRankingOpen}>
				<StarIcon />
			</RankingFab>
			<FilterGroupFab onClick={toggleFilterList}>
				<FilterIcon />
			</FilterGroupFab>
			{showFilterList && (
				<FilterButtonGroup variant="outlined" orientation="vertical">
					<FilterButton onClick={() => handleClick(STATUSES.PLANNED)}>
						Planned
					</FilterButton>
					<FilterButton onClick={() => handleClick(STATUSES.WATCHING)}>
						Watching
					</FilterButton>
					<FilterButton onClick={() => handleClick(STATUSES.COMPLETED)}>
						Completed
					</FilterButton>
					<FilterButton onClick={() => handleClick(null)}>All</FilterButton>
				</FilterButtonGroup>
			)}
			<Fab
				style={{ position: "fixed", right: "80px", bottom: "160px" }}
				color="secondary"
				onClick={handleFormOpen}
			>
				<AddIcon />
			</Fab>
			<Fab
				style={{ position: "fixed", right: "80px", bottom: "80px" }}
				color="primary"
				onClick={() => logOut()}
			>
				<ExitToAppIcon />
			</Fab>
		</>
	);
};

export default FabGroup;