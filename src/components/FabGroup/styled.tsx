import { Fab, ButtonGroup, Button, styled } from "@material-ui/core";
import { green, lightGreen } from "@material-ui/core/colors";

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

export { RankingFab, FilterButton, FilterButtonGroup, FilterGroupFab };
