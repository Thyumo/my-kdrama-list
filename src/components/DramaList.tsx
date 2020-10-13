import React, { useState } from "react";
import {
	Avatar,
	Grid,
	Tooltip,
	withStyles,
	Fab,
	styled,
} from "@material-ui/core";
import QuestionMarkIcon from "@material-ui/icons/Help";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { KDrama } from "../types";

interface Props {
	list: KDrama[];
	setDisplayedKDrama: (kDrama: KDrama) => void;
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

const StyledInnerGrid = styled(Grid)({
	marginTop: 30,
	marginBottom: 20,
	width: 900,
});

const StyledOuterGrid = styled(Grid)({
	width: 1020,
});

const DramaList: React.FC<Props> = ({ list, setDisplayedKDrama }) => {
	const [currentPage, setCurrentPage] = useState<number>(0);

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
						{kDrama.image ? (
							<BigAvatar
								onClick={() => handleClick(kDrama)}
								src={kDrama.image}
							/>
						) : (
							<BigAvatar>
								<QuestionMarkIcon style={{ fontSize: "150px" }} />
							</BigAvatar>
						)}
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
