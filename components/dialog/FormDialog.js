import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
const Title = styled(Typography)`
  margin-top: 20px;
  font-size: 32px;
`;

const Paragraph = styled(Typography)`
  font-size: 15px;
`;

export default function FormDialog(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Dialog open={openPopup} scroll="paper" maxWidth="xs">
      <Title variant="h4" textAlign="center">
        Contact Sales
      </Title>
      <DialogContent>
        <Paragraph variant="h7">
          Let’s get this conversation started. Tell us your thoughts, and we’ll
          get in touch as soon as we can.
        </Paragraph>
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
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Contact Sales
        </Button>
      </DialogActions>
    </Dialog>
  );
}
