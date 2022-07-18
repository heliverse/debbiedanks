import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

export default function FormDialog(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Dialog open={openPopup}>
      {/* <DialogTitle>Title</DialogTitle>
      <DialogContent>Content</DialogContent> */}
      <DialogTitle>Contact Sales</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let’s get this conversation started. Tell us your thoughts, and we’ll
          get in touch as soon as we can.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="First Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="lastName"
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="workEmail"
          label="Work Email"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="phonenumber"
          label="Phone Number"
          type="phonenumber"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="message"
          label="Message"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Contact Sales</Button>
      </DialogActions>
    </Dialog>
  );
}
