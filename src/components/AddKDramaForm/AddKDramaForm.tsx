import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import { StyledButtonGroup } from "./styled";

import { STATUSES, STATUS_TEXT } from "../../Constants";
import { KDramaInsertInput, KDrama, KDramaUpdateInput } from "../../types";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  addKDrama: (data: KDramaInsertInput) => void;
  editMode?: boolean;
  editedKDrama?: KDrama;
  updateKDrama: (data: KDramaUpdateInput) => void;
  deleteKDrama: () => void;
}

interface FormErrors {
  title?: string;
  episodes?: string;
  currEp?: string;
}

const AddKDramaForm: React.FC<Props> = ({
  isOpen,
  closeModal,
  addKDrama,
  editMode,
  editedKDrama,
  updateKDrama,
  deleteKDrama,
}) => {
  const [status, setStatus] = useState<string>(STATUSES.PLANNED);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [totalEpisodes, setTotalEpisodes] = useState<number>(0);
  const [currentEpisode, setCurrentEpisode] = useState<number>(0);
  const [errors, setErrors] = useState<FormErrors>();

  useEffect(() => {
    if (editMode) {
      setStatus(editedKDrama?.status || "");
      setTitle(editedKDrama?.title || "");
      setImage(editedKDrama?.image || "");
      setTotalEpisodes(editedKDrama?.totalEpisodes || 0);
      setCurrentEpisode(editedKDrama?.currentEpisode || 0);
    }
  }, [editMode, editedKDrama]);

  const inputData = {
    title,
    image,
    status,
    totalEpisodes,
    currentEpisode,
  };

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!title || title.length === 0) {
      newErrors.title = "Title must not be empty";
      isValid = false;
    }

    if (totalEpisodes <= 0) {
      newErrors.episodes = "Episodes must be over 0";
      isValid = false;
    }

    if (status === STATUSES.WATCHING) {
      if (currentEpisode <= 0) {
        newErrors.currEp = "Current episode must be over 0";
        isValid = false;
      }
      if (currentEpisode >= totalEpisodes) {
        newErrors.currEp =
          "Current episode must be lower than the total number of episodes";
        isValid = false;
      }
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleClose = () => {
    setStatus(STATUSES.PLANNED);
    setTitle("");
    setImage("");
    setTotalEpisodes(0);
    closeModal();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (editMode) {
        updateKDrama(inputData);
      } else {
        addKDrama(inputData);
      }
      handleClose();
    }
  };

  const handleDelete = () => {
    handleClose();
    deleteKDrama();
  };

  useEffect(() => {
    switch (status) {
      case STATUSES.PLANNED:
        setCurrentEpisode(0);
        break;
      case STATUSES.WATCHING:
        setCurrentEpisode(1);
        break;
      case STATUSES.COMPLETED:
        setCurrentEpisode(totalEpisodes);
        break;
    }
  }, [status, totalEpisodes]);

  return (
    <Dialog fullWidth open={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add KDrama</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <DialogContentText>
            Enter the new KDrama's information
          </DialogContentText>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            margin="dense"
            label="Title*"
            error={!!errors?.title}
            helperText={errors?.title}
          />
          <TextField
            value={image}
            onChange={(e) => setImage(e.target.value)}
            margin="dense"
            label="Image Link"
          />
          <Select
            onChange={(e) => setStatus(e.target.value as string)}
            value={status}
            required
            style={{ margin: "21px 0px 4px 0px" }}
          >
            {Object.values(STATUSES).map((status) => (
              <MenuItem value={status}>{STATUS_TEXT[status]}</MenuItem>
            ))}
          </Select>
          <TextField
            value={totalEpisodes}
            onChange={(e) => setTotalEpisodes(parseInt(e.target.value))}
            type="number"
            margin="dense"
            label="Total Episodes*"
            error={!!errors?.episodes}
            helperText={errors?.episodes}
          />
          <TextField
            value={currentEpisode}
            onChange={(e) => setCurrentEpisode(parseInt(e.target.value))}
            type="number"
            margin="dense"
            label="Current Episode*"
            error={!!errors?.currEp}
            helperText={errors?.currEp}
          />
          <StyledButtonGroup>
            <Button type="submit" color="primary" variant="outlined">
              {editMode ? "Edit" : "Add"}
            </Button>
            {editMode && (
              <Button onClick={handleDelete} color="primary" variant="outlined">
                Delete
              </Button>
            )}
          </StyledButtonGroup>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddKDramaForm;
