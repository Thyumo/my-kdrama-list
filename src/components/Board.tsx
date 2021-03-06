import React, { useState, useMemo, useCallback } from "react";
import { Typography, CircularProgress, Grid, styled } from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";
import {
  useGetAllKDramasQuery,
  useAddKDramaMutation,
  useSetKDramaStatusMutation,
  useSetEpisodesMutation,
  useSetRatingMutation,
  useDeleteKDramaMutation,
  useUpdateKDramaMutation,
} from "../graphql-operations";

import KDramaList from "./DramaList/DramaList";
import MainCard from "./MainCard/MainCard";
import FabGroup from "./FabGroup/FabGroup";
import AddKDramaForm from "./AddKDramaForm/AddKDramaForm";
import Ranking from "./Ranking";

import {
  GetAllKDramasQuery,
  KDrama,
  KDramaInsertInput,
  KDramaUpdateInput,
} from "../types";
import { PAGE_SIZE, STATUSES } from "../Constants";
import { replaceKDrama } from "../utils";

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
  const [addKDramaMutation] = useAddKDramaMutation();
  const [updateKDramaMutation] = useUpdateKDramaMutation();
  const [deleteKDramaMutation] = useDeleteKDramaMutation();
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

  const handleAdd = async (data: KDramaInsertInput) => {
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

  const handleUpdate = async (data: KDramaUpdateInput) => {
    const currentKDramas = [...kDramas];
    try {
      const result = await updateKDramaMutation({
        variables: { id: displayedKDrama?._id, kDrama: data },
      });
      const updatedKDrama = result.data?.kDrama as KDrama;
      setDisplayedKDrama(updatedKDrama);
      setKDramas(replaceKDrama(updatedKDrama, currentKDramas));
    } catch (err) {
      setKDramas(currentKDramas);
      throw new Error("Couldn't update KDrama");
    }
  };

  const handleDelete = async () => {
    const currentKDramas = [...kDramas];
    const newListPage =
      currentKDramas.length % PAGE_SIZE === 1
        ? currentListPage - 1
        : currentListPage;
    try {
      const result = await deleteKDramaMutation({
        variables: { id: displayedKDrama?._id },
      });
      const deleted = result.data?.kDrama as KDrama;
      setKDramas([...currentKDramas.filter(({ _id }) => _id !== deleted._id)]);
      setDisplayedKDrama(
        currentKDramas.find(({ status }) => status === STATUSES.WATCHING) ||
          currentKDramas.find(({ status }) => status === STATUSES.PLANNED)
      );
      setCurrentListPage(newListPage);
    } catch (err) {
      setKDramas(currentKDramas);
      throw new Error("Couldn't delete KDrama");
    }
  };

  const setEpisodes = useCallback(
    async (id: string, current: number) => {
      const currentKDramas = [...kDramas];
      try {
        setDisplayedKDrama({
          ...displayedKDrama!,
          currentEpisode: current,
        });
        const result = await setEpisodesMutation({
          variables: { id, counter: current },
        });
        const updatedKDrama = result.data?.kDrama as KDrama;
        currentKDramas[
          currentKDramas.findIndex(({ _id }) => _id === updatedKDrama._id)
        ] = updatedKDrama;
        setDisplayedKDrama(updatedKDrama);
        setKDramas(currentKDramas);
      } catch (err) {
        setKDramas(currentKDramas);
        throw new Error("Couldn't increase episodes");
      }
    },
    [kDramas, displayedKDrama, setEpisodesMutation, setDisplayedKDrama]
  );

  const setStatus = useCallback(
    async (id: string, status: string) => {
      const currentKDramas = [...kDramas];
      try {
        setDisplayedKDrama({ ...displayedKDrama!, status: status });
        const result = await setKDramaStatusMutation({
          variables: { id, status },
        });
        const updatedKDrama = result.data?.kDrama as KDrama;
        currentKDramas[
          currentKDramas.findIndex(({ _id }) => _id === updatedKDrama._id)
        ] = updatedKDrama;
        setDisplayedKDrama(updatedKDrama);
        setKDramas(currentKDramas);
      } catch (err) {
        setKDramas(currentKDramas);
        throw new Error("Couldn't set status");
      }
    },
    [kDramas, displayedKDrama, setKDramaStatusMutation, setDisplayedKDrama]
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
      <AddKDramaForm
        addKDrama={handleAdd}
        updateKDrama={handleUpdate}
        closeModal={handleClose}
        isOpen={isFormOpen}
        editMode={isEdit}
        editedKDrama={isEdit ? displayedKDrama : undefined}
        deleteKDrama={handleDelete}
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
