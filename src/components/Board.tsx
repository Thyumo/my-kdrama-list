import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	CircularProgress,
	Grid,
} from "@material-ui/core";

import { useRealmApp } from "../realm/RealmApp";
import {
	useGetAllKDramasQuery,
	useAddKDramaMutation,
} from "../graphql-operations";
import { GetAllKDramasQuery, KDrama, KDramaInsertInput } from "../types";
import { STATUSES } from "../Constants";
import KDramaList from "./DramaList";
import FabGroup from "./FabGroup";
import AddKDramaForm from "./AddKDramaForm";

const Board: React.FC = () => {
	const [kDramas, setKDramas] = useState<KDrama[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { logOut } = useRealmApp();
	const [addKDramaMutation] = useAddKDramaMutation();
	const { loading } = useGetAllKDramasQuery({
		onCompleted: (data: GetAllKDramasQuery) => {
			if (data?.kDramas) {
				setKDramas(data.kDramas as KDrama[]);
			}
		},
	});

	const handleSubmit = async (data: KDramaInsertInput) => {
		const currentKDramas = [...kDramas];
		try {
			const result = await addKDramaMutation({ variables: { kDrama: data } });
			const newKDrama = result.data?.kDrama as KDrama;
			setKDramas([...currentKDramas, newKDrama]);
		} catch (err) {
			setKDramas(currentKDramas);
			throw new Error("Couldn't add new KDrama");
		}
	};

	const renderCardContent = () => {
		if (loading) return <CircularProgress />;

		const currentKDrama = kDramas.find(
			({ status }) => status === STATUSES.WATCHING
		);

		return (
			<CardContent style={{ padding: "0px" }}>
				{currentKDrama?.image && (
					<img width="800px" src={currentKDrama.image} alt="kdrama" />
				)}
				<Typography style={{ paddingLeft: "5px" }} variant="h4">
					Currently watching:
				</Typography>
				<Typography style={{ paddingLeft: "5px" }} variant="h3">
					{currentKDrama?.title ?? "No currently watched KDrama"}
				</Typography>
			</CardContent>
		);
	};

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justify="space-between"
		>
			<Card
				style={{
					width: "800px",
					marginTop: "50px",
				}}
			>
				{renderCardContent()}
			</Card>
			<KDramaList
				list={kDramas
					.filter(({ status }) => status !== STATUSES.WATCHING)
					.slice(0, 4)}
				isLoading={loading}
			/>
			<FabGroup handleOpen={() => setIsOpen(true)} logOut={logOut} />
			<AddKDramaForm addKDrama={handleSubmit} handleClose={() => setIsOpen(false)} isOpen={isOpen} />
		</Grid>
	);
};

export default Board;
