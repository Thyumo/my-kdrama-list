import React, { useState, useMemo, useCallback } from "react";
import { Typography, CircularProgress, Grid, styled } from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";
import {
	useGetAllKDramasQuery,
	useAddKDramaMutation,
	useSetKDramaStatusMutation,
	useSetEpisodesMutation,
	useSetRatingMutation,
} from "../graphql-operations";
import { GetAllKDramasQuery, KDrama, KDramaInsertInput } from "../types";
import { STATUSES } from "../Constants";
import KDramaList from "./DramaList";
import MainCard from "./MainCard";
import FabGroup from "./FabGroup";
import AddKDramaForm from "./AddKDramaForm";
import Ranking from "./Ranking";

const StyledBackgroundGrid = styled(Grid)({
	background:
		"linear-gradient(130deg, rgba(174,229,238,1) 0%, rgba(75,160,255,1) 100%)",
	height: "100vh",
	borderRadius: "0% 0% 80% 0%",
});

const Board: React.FC = () => {
	const [kDramas, setKDramas] = useState<KDrama[]>([]);
	const watchedKDrama = kDramas.find(
		({ status }) => status === STATUSES.WATCHING || status === STATUSES.PLANNED
	);
	const [displayedKDrama, setDisplayedKDrama] = useState<KDrama | undefined>();
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
	const [isRankingOpen, setIsRankingOpen] = useState<boolean>(false);
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
	const [setEpisodesMutation] = useSetEpisodesMutation();
	const [setRatingMutation] = useSetRatingMutation();
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

	const setEpisodes = useCallback(
		async (id: string, current: number) => {
			const currentKDramas = [...kDramas];
			try {
				const result = await setEpisodesMutation({
					variables: { id, counter: current },
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
		[kDramas, setEpisodesMutation]
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

	const setRating = useCallback(
		async (id: string, rating: number) => {
			const currentKDramas = [...kDramas];
			try {
				const result = await setRatingMutation({
					variables: { id, rating },
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
		[kDramas, setRatingMutation]
	);

	const renderCard = useCallback(() => {
		if (loading) return <CircularProgress size={200} />;

		if (!(watchedKDrama || displayedKDrama))
			return <Typography variant="h2">No KDrama in Queue</Typography>;

		return (
			<MainCard
				kDrama={displayedKDrama || watchedKDrama!}
				setStatus={setStatus}
				setEpisodes={setEpisodes}
				setRating={setRating}
			/>
		);
	}, [
		loading,
		watchedKDrama,
		displayedKDrama,
		setStatus,
		setEpisodes,
		setRating,
	]);

	return (
		<StyledBackgroundGrid
			container
			direction="column"
			alignItems="center"
			justify="space-evenly"
		>
			{renderCard()}
			<KDramaList
				setDisplayedKDrama={setDisplayedKDrama}
				list={filteredKDramas}
				isLoading={loading}
			/>
			<FabGroup
				setFilter={setStatusFilter}
				handleFormOpen={() => setIsFormOpen(true)}
				handleRankingOpen={() => setIsRankingOpen(true)}
				logOut={logOut}
			/>
			<AddKDramaForm
				addKDrama={handleSubmit}
				handleClose={() => setIsFormOpen(false)}
				isOpen={isFormOpen}
			/>
			<Ranking
				handleClose={() => setIsRankingOpen(false)}
				isOpen={isRankingOpen}
				kDramas={kDramas}
			/>
		</StyledBackgroundGrid>
	);
};

export default Board;
