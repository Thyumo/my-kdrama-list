import React, { useState } from "react";
import { Grid, Tooltip, withStyles, Fab, styled } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { KDrama } from "../types";
import SizedAvatar from "./SizedAvatar";

interface Props {
  list: KDrama[];
  setDisplayedKDrama: (kDrama: KDrama) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isLoading: boolean;
}

const TitleTooltip = withStyles(() => ({
  tooltip: {
    fontSize: 20,
  },
}))(Tooltip);

const StyledInnerGrid = styled(Grid)({
  marginTop: 30,
  marginBottom: 20,
  width: 900,
});

const StyledOuterGrid = styled(Grid)({
  width: 1020,
});

const DramaList: React.FC<Props> = ({
  list,
  currentPage,
  setCurrentPage,
  setDisplayedKDrama,
}) => {
  const displayedNumber = 4;
  const displayedDramas = list.slice(
    currentPage * displayedNumber,
    (currentPage + 1) * displayedNumber
  );

  const handleClick = (kDrama: KDrama) => {
    setDisplayedKDrama(kDrama);
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage < 0) return;
    setCurrentPage(previousPage);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage * displayedNumber > list.length) return;
    setCurrentPage(nextPage);
  };

  return (
    <StyledOuterGrid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Fab color="primary" onClick={handlePreviousPage}>
        <ArrowLeftIcon fontSize="large" />
      </Fab>
      <StyledInnerGrid container direction="row" justify="space-evenly">
        {displayedDramas.map((kDrama) => (
          <TitleTooltip key={kDrama._id} title={kDrama.title}>
            <SizedAvatar
              size={150}
              image={kDrama.image}
              onClick={() => handleClick(kDrama)}
            />
          </TitleTooltip>
        ))}
      </StyledInnerGrid>

      <Fab color="primary" onClick={handleNextPage}>
        <ArrowRightIcon fontSize="large" />
      </Fab>
    </StyledOuterGrid>
  );
};

export default DramaList;
