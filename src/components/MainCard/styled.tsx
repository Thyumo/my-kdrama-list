import { Card, CardActions, styled } from "@material-ui/core";

const StyledCard = styled(Card)({
  width: 800,
  marginTop: 50,
});

const CardImage = styled("img")({
  height: 450,
  width: 800,
  objectFit: "cover",
});

const PaddedCardActions = styled(CardActions)({
  justifyContent: "space-between",
  padding: "8px 15px 15px 15px",
});

export { StyledCard, CardImage, PaddedCardActions };
