import React from "react";
import { Avatar, Grid, Tooltip, withStyles, styled } from "@material-ui/core";
import QuestionMarkIcon from "@material-ui/icons/Help";

import { KDrama } from "../types";

interface Props {
	list: KDrama[];
	isLoading: boolean;
}

const TitleTooltip = withStyles(() => ({
	tooltip: {
		fontSize: 20,
	},
}))(Tooltip);

const BigAvatar = styled(Avatar)({
	height: 150,
	width: 150,
});

const StyledGrid = styled(Grid)({
	marginTop: 30,
	marginBottom: 20,
	width: 800,
});

const DramaList: React.FC<Props> = ({ list }) => {
	return (
		<StyledGrid container direction="row" justify="space-evenly">
			{list.map((kDrama) => (
				<TitleTooltip key={kDrama._id} title={kDrama.title}>
					{kDrama.image ? (
						<BigAvatar src={kDrama.image} />
					) : (
						<BigAvatar>
							<QuestionMarkIcon style={{ fontSize: "150px" }} />
						</BigAvatar>
					)}
				</TitleTooltip>
			))}
		</StyledGrid>
	);
};

export default DramaList;
