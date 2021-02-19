import React, { useState } from "react";
import { Fab } from "@material-ui/core";

import {
  FilterGroupFab,
  RankingFab,
  FilterButtonGroup,
  FilterButton,
} from "./styled";
import {
  ExitToAppIcon,
  AddIcon,
  FilterIcon,
  StarIcon,
  SettingsIcon,
  EditIcon,
} from "../icons";

import { STATUSES } from "../../Constants";

interface Props {
  logOut: () => Promise<void>;
  openAddForm: () => void;
  openRanking: () => void;
  setFilter: (status: string | null) => void;
  resetPage: () => void;
  openEditForm: () => void;
}

const FabGroup: React.FC<Props> = ({
  logOut,
  openAddForm,
  openRanking,
  setFilter,
  resetPage,
  openEditForm,
}) => {
  const [showFilterList, setShowFilterList] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const handleClick = (status: string | null) => {
    setFilter(status);
    resetPage();
    setShowFilterList(false);
  };

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      <RankingFab onClick={openRanking}>
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
        onClick={openAddForm}
      >
        <AddIcon />
      </Fab>
      <Fab
        style={{ position: "fixed", right: "80px", bottom: "80px" }}
        color="primary"
        onClick={toggleSettings}
      >
        <SettingsIcon />
      </Fab>
      {showSettings && (
        <>
          <Fab
            style={{ position: "fixed", right: "160px", bottom: "80px" }}
            color="primary"
            onClick={() => logOut()}
          >
            <ExitToAppIcon />
          </Fab>
          <Fab
            style={{ position: "fixed", right: "240px", bottom: "80px" }}
            color="primary"
            onClick={openEditForm}
          >
            <EditIcon />
          </Fab>
        </>
      )}
    </>
  );
};

export default FabGroup;
