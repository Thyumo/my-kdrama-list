import React, { useState } from "react";
import { Fab, ButtonGroup, Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/AddCircle";
import FilterIcon from "@material-ui/icons/FilterList";

import { STATUSES } from "../Constants";

interface Props {
	logOut: () => Promise<void>;
	handleOpen: () => void;
	setFilter: (status: string | null) => void;
}

const FabGroup: React.FC<Props> = ({ logOut, handleOpen, setFilter }) => {
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
			<Fab
				style={{
					position: "fixed",
					right: "80px",
					bottom: "240px",
					backgroundColor: "green",
					color: "white",
				}}
				onClick={toggleFilterList}
			>
				<FilterIcon />
			</Fab>
			{showFilterList && (
				<ButtonGroup
					variant="outlined"
					orientation="vertical"
					style={{ position: "fixed", right: "160px", bottom: "200px" }}
				>
					<Button
						style={{ color: "green", borderColor: "green" }}
						onClick={() => handleClick(STATUSES.PLANNED)}
					>
						Planned
					</Button>
					<Button
						style={{ color: "green", borderColor: "green" }}
						onClick={() => handleClick(STATUSES.WATCHING)}
					>
						Watching
					</Button>
					<Button
						style={{ color: "green", borderColor: "green" }}
						onClick={() => handleClick(STATUSES.COMPLETED)}
					>
						Completed
					</Button>
					<Button
						style={{ color: "green", borderColor: "green" }}
						onClick={() => handleClick(null)}
					>
						All
					</Button>
				</ButtonGroup>
			)}
			<Fab
				style={{ position: "fixed", right: "80px", bottom: "160px" }}
				color="secondary"
				onClick={handleOpen}
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
