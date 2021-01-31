import { Grid, Tooltip, withStyles, styled } from "@material-ui/core";

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

export { TitleTooltip, StyledInnerGrid, StyledOuterGrid };
