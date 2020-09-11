import React, { useState, useMemo } from "react";
import {
	Card,
	CardContent,
	Typography,
	CircularProgress,
	Grid,
	Button,
	CardActions,
} from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";
import {
	useGetAllKDramasQuery,
	useAddKDramaMutation,
	useSetKDramaStatusMutation,
} from "../graphql-operations";
import { GetAllKDramasQuery, KDrama, KDramaInsertInput } from "../types";
import { STATUSES } from "../Constants";
import KDramaList from "./DramaList";
import FabGroup from "./FabGroup";
import AddKDramaForm from "./AddKDramaForm";

const Board: React.FC = () => {
	const [kDramas, setKDramas] = useState<KDrama[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [statusFilter, setStatusFilter] = useState<string | null>(null);
	const filteredKDramas = useMemo(
		() =>
			kDramas.filter(({ status }) =>
				statusFilter ? status === statusFilter : true
			),
		[statusFilter, kDramas]
	);

	const { logOut } = useRealmApp();
	const [addKDramaMutation] = useAddKDramaMutation();
	const [setKDramaStatusMutation] = useSetKDramaStatusMutation();
	const { loading } = useGetAllKDramasQuery({
		onCompleted: (data: GetAllKDramasQuery) => {
			if (data?.kDramas) {
				setKDramas(data.kDramas as KDrama[]);
			}
		},
	});

	const handleSubmit = async (data: KDramaInsertInput) => {
		const currentKDramas = [...kDramas];
		try {
			const result = await addKDramaMutation({ variables: { kDrama: data } });
			const newKDrama = result.data?.kDrama as KDrama;
			setKDramas([...currentKDramas, newKDrama]);
		} catch (err) {
			setKDramas(currentKDramas);
			throw new Error("Couldn't add new KDrama");
		}
	};

	const setStatus = async (id: string, status: string) => {
		const currentKDramas = [...kDramas];
		try {
			const result = await setKDramaStatusMutation({
				variables: { id, status },
			});
			console.log(result);
			const updatedKDrama = result.data?.kDrama as KDrama;
			currentKDramas[
				currentKDramas.findIndex(({ _id }) => _id === updatedKDrama._id)
			] = updatedKDrama;
			setKDramas(currentKDramas);
		} catch (err) {
			setKDramas(currentKDramas);
			throw new Error("Couldn't set status");
		}
	};

	const renderCardContent = () => {
		if (loading) return <CircularProgress />;

		const currentKDrama = kDramas.find(
			({ status }) =>
				status === STATUSES.WATCHING || status === STATUSES.PLANNED
		);

		const isWatching = currentKDrama?.status === STATUSES.WATCHING;

		if (!currentKDrama)
			return <Typography variant="h2">No KDrama in Queue</Typography>;

		return (
			<CardContent style={{ padding: "0px" }}>
				{currentKDrama?.image && (
					<img width="800px" src={currentKDrama.image} alt="kdrama" />
				)}
				<Typography style={{ paddingLeft: "5px" }} variant="h4">
					{isWatching ? "Currently watching:" : "Next planned:"}
				</Typography>
				<Typography style={{ paddingLeft: "5px" }} variant="h3">
					{currentKDrama?.title ?? "No currently watched KDrama"}
				</Typography>
				<CardActions>
					<Button
						variant="outlined"
						color="primary"
						onClick={() =>
							setStatus(
								currentKDrama?._id,
								isWatching ? STATUSES.COMPLETED : STATUSES.WATCHING
							)
						}
					>
						{isWatching ? "Complete" : "Start Watching"}
					</Button>
				</CardActions>
			</CardContent>
		);
	};

	return (
		<Grid
			style={{
				background: "linear-gradient(90deg, rgba(174,229,238,1) 0%, rgba(75,160,255,1) 100%)",
				height: "100vh",
				borderRadius: "0% 0% 80% 0%"
			}}
			container
			direction="column"
			alignItems="center"
			justify="space-evenly"
		>
			<Card
				style={{
					width: "800px",
					marginTop: "50px",
				}}
				elevation={5}
			>
				{renderCardContent()}
			</Card>
			<KDramaList list={filteredKDramas.slice(0, 4)} isLoading={loading} />
			<FabGroup
				setFilter={setStatusFilter}
				handleOpen={() => setIsOpen(true)}
				logOut={logOut}
			/>
			<AddKDramaForm
				addKDrama={handleSubmit}
				handleClose={() => setIsOpen(false)}
				isOpen={isOpen}
			/>
		</Grid>
	);
};

export default Board;
