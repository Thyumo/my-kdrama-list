import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Fab,
	CircularProgress,
	Grid,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useRealmApp } from "../realm/RealmApp";
import { useGetAllKDramasQuery } from "../graphql-operations";
import { GetAllKDramasQuery, KDrama } from "../types";
import { STATUSES } from "../Constants";
import KDramaList from "./DramaList";

const Board: React.FC = () => {
	const [kDramas, setKDramas] = useState<KDrama[]>([]);
	const { logOut } = useRealmApp();
	const { loading } = useGetAllKDramasQuery({
		onCompleted: (data: GetAllKDramasQuery) => {
			if (data?.kDramas) {
				setKDramas(data.kDramas as KDrama[]);
			}
		},
	});

	const renderCardContent = () => {
		if (loading) return <CircularProgress />;

		const currentKDrama = kDramas.find(
			({ status }) => status === STATUSES.WATCHING
		);

		return (
			<CardContent style={{ padding: "0px" }}>
				{currentKDrama?.image && (
					<img width="800px" src={currentKDrama.image} alt="kdrama" />
				)}
        <Typography style={{ paddingLeft: "5px" }} variant="h4">
          Currently watching:
        </Typography>
				<Typography style={{ paddingLeft: "5px" }} variant="h3">
					{currentKDrama?.title ?? "No currently watched KDrama"}
				</Typography>
			</CardContent>
		);
	};

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justify="space-between"
		>
			<Card
				style={{
					width: "800px",
					marginTop: "50px",
				}}
			>
				{renderCardContent()}
			</Card>
			<KDramaList
        list={kDramas.filter(({ status }) => status !== STATUSES.WATCHING).slice(0, 4)}
        isLoading={loading}
			/>
			<Fab style={{ position: "fixed", right: "80px", bottom: "80px" }} color="primary" onClick={() => logOut()}>
				<ExitToAppIcon />
			</Fab>
		</Grid>
	);
};

export default Board;
