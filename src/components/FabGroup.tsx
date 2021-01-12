import React, { useState } from "react";
import { Fab, ButtonGroup, Button, styled } from "@material-ui/core";
import { green, lightGreen } from "@material-ui/core/colors";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/AddCircle";
import FilterIcon from "@material-ui/icons/FilterList";
import StarIcon from "@material-ui/icons/StarOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";

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
  deleteKDrama: () => void;
  handleFormOpen: () => void;
  handleRankingOpen: () => void;
  setFilter: (status: string | null) => void;
  resetPage: () => void;
}

const FabGroup: React.FC<Props> = ({
  logOut,
  deleteKDrama,
  handleFormOpen,
  handleRankingOpen,
  setFilter,
  resetPage,
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
            onClick={deleteKDrama}
          >
            <DeleteIcon />
          </Fab>
        </>
      )}
    </>
  );
};

export default FabGroup;
