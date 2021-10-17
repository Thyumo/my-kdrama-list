import React, { useState, useMemo, useCallback } from "react";
import { Typography, CircularProgress, Grid, styled } from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";
import {
  useGetAllKDramasQuery,
  useSetKDramaStatusMutation,
  useSetEpisodesMutation,
  useSetRatingMutation,
} from "../graphql-operations";

import KDramaList from "./DramaList/DramaList";
import MainCard from "./MainCard/MainCard";
import FabGroup from "./FabGroup/FabGroup";
import KDramaForm from "./KDramaForm/kDramaForm";
import Ranking from "./Ranking";

import {
  GetAllKDramasQuery,
  KDrama,
} from "../types";
import { PAGE_SIZE, STATUSES } from "../Constants";
import { findDefaultDisplayed, replaceKDrama, throwError } from "../utils";

const StyledBackgroundGrid = styled(Grid)({
  background:
    "linear-gradient(130deg, rgba(174,229,238,1) 0%, rgba(75,160,255,1) 100%)",
  height: "100vh",
  borderRadius: "0% 0% 80% 0%",
});

const Board: React.FC = () => {
  const [kDramas, setKDramas] = useState<KDrama[]>([]);
  const [displayedKDrama, setDisplayedKDrama] = useState<KDrama | undefined>();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isRankingOpen, setIsRankingOpen] = useState<boolean>(false);
  const [currentListPage, setCurrentListPage] = useState<number>(0);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const filteredKDramas = useMemo(
    () =>
      kDramas.filter(({ status }) =>
        statusFilter ? status === statusFilter : true
      ),
    [statusFilter, kDramas]
  );

  const { logOut } = useRealmApp();
  const [setKDramaStatusMutation] = useSetKDramaStatusMutation();
  const [setEpisodesMutation] = useSetEpisodesMutation();
  const [setRatingMutation] = useSetRatingMutation();
  const { loading } = useGetAllKDramasQuery({
    onCompleted: (data: GetAllKDramasQuery) => {
      if (data?.kDramas) {
        const result = data.kDramas as KDrama[];
        setKDramas(result);
        const watchedKDrama =
          result.find(({ status }) => status === STATUSES.WATCHING) ||
          result.find(({ status }) => status === STATUSES.PLANNED);
        setDisplayedKDrama(watchedKDrama);
      }
    },
  });

  const handleEdit = () => {
    setIsEdit(true);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setIsEdit(false);
  };

  const resetKDramaList = useCallback(
    () => {
      setKDramas(kDramas);
    }, [kDramas]
  );

  const addKDramaToList = (newKDrama: KDrama) => {
    setKDramas([...kDramas, newKDrama]);
  };

  const updateKDramaInList = useCallback(
    (updatedKDrama: KDrama) => {
      setKDramas(replaceKDrama(updatedKDrama, kDramas));
    }, [kDramas]
  );

  const removeKDramaFromList = (removedKDrama: KDrama) => {
    const newListPage =
      kDramas.length % PAGE_SIZE === 1
        ? currentListPage - 1
        : currentListPage;
    setKDramas([...kDramas.filter(({ _id }) => _id !== removedKDrama._id)]);
    setDisplayedKDrama(findDefaultDisplayed(kDramas));
    setCurrentListPage(newListPage);
  }

  const setEpisodes = useCallback(
    async (currentEpisodes: number) => {
      try {
        setDisplayedKDrama({
          ...displayedKDrama!,
          currentEpisode: currentEpisodes,
        });
        const result = await setEpisodesMutation({
          variables: { id: displayedKDrama!._id, counter: currentEpisodes },
        });
        const updatedKDrama = result.data?.kDrama as KDrama;
        setDisplayedKDrama(updatedKDrama);
        updateKDramaInList(updatedKDrama);
      } catch (err) {
        resetKDramaList();
        throwError(err, "Couldn't set episodes");
      }
    }, [displayedKDrama, setEpisodesMutation, updateKDramaInList, resetKDramaList]
  );

  const setStatus = useCallback(
    async (status: string) => {
      try {
        setDisplayedKDrama({ ...displayedKDrama!, status: status });
        const result = await setKDramaStatusMutation({
          variables: { id: displayedKDrama!._id, status },
        });
        const updatedKDrama = result.data?.kDrama as KDrama;
        setDisplayedKDrama(updatedKDrama);
        updateKDramaInList(updatedKDrama);
      } catch (err) {
        resetKDramaList();
        throwError(err, "Couldn't set status");
      }
    },
    [displayedKDrama, setKDramaStatusMutation, updateKDramaInList, resetKDramaList]
  );

  const setRating = useCallback(
    async (rating: number) => {
      try {
        const result = await setRatingMutation({
          variables: { id: displayedKDrama!._id, rating },
        });
        const updatedKDrama = result.data?.kDrama as KDrama;
        updateKDramaInList(updatedKDrama);
      } catch (err) {
        resetKDramaList();
        throwError(err, "Couldn't set rating");
      }
    },
    [displayedKDrama, setRatingMutation, updateKDramaInList, resetKDramaList]
  );

  const renderCard = useCallback(() => {
    if (loading) return <CircularProgress size={200} />;

    if (!displayedKDrama)
      return <Typography variant="h2">No KDrama in Queue</Typography>;

    return (
      <MainCard
        kDrama={displayedKDrama}
        setStatus={setStatus}
        setEpisodes={setEpisodes}
        setRating={setRating}
      />
    );
  }, [loading, displayedKDrama, setStatus, setEpisodes, setRating]);

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
        currentPage={currentListPage}
        setCurrentPage={setCurrentListPage}
        isLoading={loading}
      />
      <FabGroup
        setFilter={setStatusFilter}
        openAddForm={() => setIsFormOpen(true)}
        openEditForm={handleEdit}
        openRanking={() => setIsRankingOpen(true)}
        resetPage={() => setCurrentListPage(0)}
        logOut={logOut}
      />
      <KDramaForm
        resetKDramaList={resetKDramaList}
        setDisplayedKDrama={setDisplayedKDrama}
        addKDramaToList={addKDramaToList}
        updateKDramaInList={updateKDramaInList}
        removeKDramaFromList={removeKDramaFromList}
        closeModal={handleClose}
        isOpen={isFormOpen}
        editMode={isEdit}
        editedKDrama={isEdit ? displayedKDrama : undefined}
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
