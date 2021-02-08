import React from "react";
import { Fab } from "@material-ui/core";

import SizedAvatar from "../MainCard/SizedAvatar";
import { TitleTooltip, StyledInnerGrid, StyledOuterGrid } from "./styled";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

import { KDrama } from "../../types";
import { PAGE_SIZE } from "../../Constants";

interface Props {
  list: KDrama[];
  setDisplayedKDrama: (kDrama: KDrama) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isLoading: boolean;
}

const DramaList: React.FC<Props> = ({
  list,
  currentPage,
  setCurrentPage,
  setDisplayedKDrama,
}) => {
  const displayedDramas = list.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handleClick = (kDrama: KDrama) => {
    setDisplayedKDrama(kDrama);
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) setCurrentPage(previousPage);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage * PAGE_SIZE < list.length) setCurrentPage(nextPage);
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
