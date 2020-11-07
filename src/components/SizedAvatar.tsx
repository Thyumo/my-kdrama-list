import React from "react";
import { Avatar, styled } from "@material-ui/core";
import QuestionMarkIcon from "@material-ui/icons/Help";

interface Props {
	image: string | null | undefined;
	size: number;
	onClick: () => void;
}

const RoundAvatar = styled(({ size, ...other }) => <Avatar {...other} />)({
	height: (props: { size: number }) => props.size,
	width: (props: { size: number }) => props.size,
});

const SizedAvatar: React.FC<Props> = ({ image, size, onClick }) => {
	if (image) return <RoundAvatar size={size} onClick={onClick} src={image} />;
	return (
		<RoundAvatar size={size} onClick={onClick}>
			<QuestionMarkIcon style={{ fontSize: size }} />
		</RoundAvatar>
	);
};

export default SizedAvatar;
