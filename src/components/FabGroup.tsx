import React from "react";
import { Fab } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/AddCircle";

interface Props {
	logOut: () => Promise<void>;
	handleOpen: () => void;
}

const FabGroup: React.FC<Props> = ({ logOut, handleOpen }) => (
	<>
		<Fab
			style={{ position: "fixed", right: "80px", bottom: "160px" }}
			color="secondary"
		>
			<AddIcon onClick={handleOpen} />
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

export default FabGroup;
