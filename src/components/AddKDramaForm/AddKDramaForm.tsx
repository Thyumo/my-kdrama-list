import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

import { SubmitButton } from "./styled";

import { STATUSES } from "../../Constants";
import { KDramaInsertInput } from "../../types";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  addKDrama: (data: KDramaInsertInput) => void;
}

interface FormErrors {
  title?: string;
  episodes?: string;
}

const AddKDramaForm: React.FC<Props> = ({ isOpen, handleClose, addKDrama }) => {
  const [status, setStatus] = useState<string>(STATUSES.PLANNED);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [totalEpisodes, setTotalEpisodes] = useState<number>(0);
  const [errors, setErrors] = useState<FormErrors>();

  const inputData: KDramaInsertInput = {
    title,
    image,
    status,
    totalEpisodes,
  };

  const validate = (): boolean => {
    let isValid = true;
    const currentErrors: FormErrors = {};

    if (!title || title.length === 0) {
      currentErrors.title = "Title must not be empty";
      isValid = false;
    }

    if (totalEpisodes <= 0) {
      currentErrors.episodes = "Episodes must be over 0";
      isValid = false;
    }

    setErrors(currentErrors);

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      addKDrama(inputData);
      handleClose();
      setStatus(STATUSES.PLANNED);
      setTitle("");
      setImage("");
      setTotalEpisodes(0);
    }
  };

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
            <MenuItem value={STATUSES.WATCHING}>Watching</MenuItem>
            <MenuItem value={STATUSES.COMPLETED}>Completed</MenuItem>
            <MenuItem value={STATUSES.PLANNED}>Planned</MenuItem>
          </Select>
          <TextField
            value={totalEpisodes}
            onChange={(e) => setTotalEpisodes(parseInt(e.target.value))}
            type="number"
            margin="dense"
            label="Total Episodes"
            error={!!errors?.episodes}
            helperText={errors?.episodes}
          />
          <SubmitButton type="submit" color="primary" variant="outlined">
            Add
          </SubmitButton>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddKDramaForm;
