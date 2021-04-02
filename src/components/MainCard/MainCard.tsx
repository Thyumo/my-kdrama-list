import React, { useState, useEffect } from "react";
import { CardContent, Button, Typography } from "@material-ui/core";

import { CardImage, StyledCard, PaddedCardActions } from "./styled";
import StyledRating from "../shared/StyledRating";

import { KDrama } from "../../types";
import { STATUSES, ACTIONS_TEXT, STATUS_TEXT } from "../../Constants";

interface Props {
  kDrama: KDrama;
  setEpisodes: (id: string, current: number) => void;
  setStatus: (id: string, status: string) => void;
  setRating: (id: string, rating: number) => void;
}

const MainCard: React.FC<Props> = ({
  kDrama,
  setEpisodes,
  setStatus,
  setRating,
}) => {
  const [localRating, setLocalRating] = useState<number>(kDrama.rating ?? 0);

  useEffect(() => {
    setLocalRating(kDrama.rating ?? 0);
  }, [kDrama, setLocalRating]);

  const handleStart = () => {
    setStatus(kDrama._id, STATUSES.WATCHING);
    setEpisodes(kDrama._id, 1);
  };

  const handleComplete = () => {
    setStatus(kDrama._id, STATUSES.COMPLETED);
    setEpisodes(kDrama._id, kDrama.totalEpisodes);
  };

  const handleIncreaseEpisodes = () => {
    if (kDrama.currentEpisode && kDrama.currentEpisode >= kDrama.totalEpisodes)
      return;
    if (kDrama.status === STATUSES.PLANNED) {
      handleStart();
    } else {
      const newCurrentEpisode = (kDrama.currentEpisode || 0) + 1;
      setEpisodes(kDrama._id, newCurrentEpisode);
      if (newCurrentEpisode === kDrama.totalEpisodes) {
        setStatus(kDrama._id, STATUSES.COMPLETED);
      }
    }
  };

  const ACTIONS: { [key: string]: () => void } = {
    watching: handleComplete,
    completed: () => {},
    planned: handleStart,
  };

  return (
    <StyledCard elevation={5}>
      <CardContent style={{ padding: "0px" }}>
        {kDrama?.image && <CardImage src={kDrama.image} alt="kdrama" />}
        <Typography style={{ paddingLeft: "15px" }} variant="h5">
          {STATUS_TEXT[kDrama.status]}
        </Typography>
        <Typography
          style={{ paddingLeft: "15px", fontWeight: "bold" }}
          variant="h4"
        >
          {kDrama.title ?? "No currently watched KDrama"}
        </Typography>
        <PaddedCardActions>
          <StyledRating
            value={localRating}
            onChange={(e, value) => {
              setLocalRating(value as number);
              setRating(kDrama._id, value as number);
            }}
          />
          <div>
            <Button
              style={{ marginRight: 5 }}
              variant="outlined"
              color="primary"
              onClick={() => ACTIONS[kDrama.status]()}
            >
              {ACTIONS_TEXT[kDrama.status]}
            </Button>
            <Button
              onClick={handleIncreaseEpisodes}
              variant="outlined"
              color="primary"
            >
              {`${kDrama.currentEpisode ?? "0"}/${kDrama.totalEpisodes}`}
            </Button>
          </div>
        </PaddedCardActions>
      </CardContent>
    </StyledCard>
  );
};

export default MainCard;
