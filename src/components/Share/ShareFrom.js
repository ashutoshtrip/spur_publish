import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./ShareForm.css";
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ShareForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" className="stpry-post" onClick={handleOpen} >
        Post Story
        </Button>
      
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="makeStyles-paper-4">
           
          <Form>
            <h2 id="story-form-title"> One Last Step !</h2>



            <div className="name-div">
  <Form.Group controlId="formBasicName">
    <Form.Label className="email-label">Name</Form.Label>
    <Form.Control type="name" placeholder="enter name" className="name-text" />
   
  </Form.Group>
</div>
<div className="pos-div">
  <Form.Group controlId="formBasicName">
    <Form.Label className="pos-label">Designation</Form.Label>
    <Form.Control type="name" placeholder="enter designation" className="pos-text" />
   
  </Form.Group>
</div>

<div className="email-div">
  <Form.Group controlId="formBasicEmail">
    <Form.Label  className="email-label">e-mail</Form.Label>
    <Form.Control type="email" placeholder="enter email" className="email-text"/>
   <br></br>
  <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
  </div>

  <div className="submit-btn-story-form">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}