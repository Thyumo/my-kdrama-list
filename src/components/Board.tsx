import React, { useState, useMemo, useCallback } from "react";
import { Typography, CircularProgress, Grid } from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";
import {
	useGetAllKDramasQuery,
	useAddKDramaMutation,
	useSetKDramaStatusMutation,
	useIncreaseEpisodesMutation,
} from "../graphql-operations";
import { GetAllKDramasQuery, KDrama, KDramaInsertInput } from "../types";
import { STATUSES } from "../Constants";
import KDramaList from "./DramaList";
import MainCard from "./MainCard";
import FabGroup from "./FabGroup";
import AddKDramaForm from "./AddKDramaForm";

const Board: React.FC = () => {
	const [kDramas, setKDramas] = useState<KDrama[]>([]);
	const watchedKDrama = kDramas.find(
		({ status }) => status === STATUSES.WATCHING || status === STATUSES.PLANNED
	);
	const [displayedKDrama, setDisplayedKDrama] = useState<KDrama | undefined>();
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
	const [increaseEpisodesMutation] = useIncreaseEpisodesMutation();
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

	const increaseEpisodes = useCallback(
		async (id: string, current: number) => {
			const currentKDramas = [...kDramas];
			try {
				const result = await increaseEpisodesMutation({
					variables: { id, counter: current + 1 },
				});
				const updatedKDrama = result.data?.kDrama as KDrama;
				currentKDramas[
					currentKDramas.findIndex(({ _id }) => _id === updatedKDrama._id)
				] = updatedKDrama;
				setKDramas(currentKDramas);
			} catch (err) {
				setKDramas(currentKDramas);
				throw new Error("Couldn't increase episodes");
			}
		},
		[kDramas, increaseEpisodesMutation]
	);

	const setStatus = useCallback(
		async (id: string, status: string) => {
			const currentKDramas = [...kDramas];
			try {
				const result = await setKDramaStatusMutation({
					variables: { id, status },
				});
				const updatedKDrama = result.data?.kDrama as KDrama;
				currentKDramas[
					currentKDramas.findIndex(({ _id }) => _id === updatedKDrama._id)
				] = updatedKDrama;
				setKDramas(currentKDramas);
			} catch (err) {
				setKDramas(currentKDramas);
				throw new Error("Couldn't set status");
			}
		},
		[kDramas, setKDramaStatusMutation]
	);

	const renderCard = useCallback(() => {
		if (loading) return <CircularProgress size={200} />;

		if (!(watchedKDrama || displayedKDrama))
			return <Typography variant="h2">No KDrama in Queue</Typography>;

		return (
			<MainCard
				kDrama={displayedKDrama || watchedKDrama!}
				setStatus={setStatus}
				increaseEpisodes={increaseEpisodes}
			/>
		);
	}, [loading, watchedKDrama, displayedKDrama, setStatus, increaseEpisodes]);

	return (
		<Grid
			style={{
				background:
					"linear-gradient(130deg, rgba(174,229,238,1) 0%, rgba(75,160,255,1) 100%)",
				height: "100vh",
				borderRadius: "0% 0% 80% 0%",
			}}
			container
			direction="column"
			alignItems="center"
			justify="space-evenly"
		>
			{renderCard()}
			<KDramaList setDisplayedKDrama={setDisplayedKDrama} list={filteredKDramas.slice(0, 4)} isLoading={loading} />
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
