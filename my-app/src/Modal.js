import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import alasql from "alasql";

//Styles
const useStyles = makeStyles({
  paper: {
    position: "absolute",
    width: 500,
    height: "350px",
    background: "white",
  },
  h4: {
    marginLeft: "60px",
  },
  TextField: {
    marginTop: "13px",
    marginLeft: "40px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    width: 100,
    border: "1px solid #000",
    top: "13px",
    right: "32px",
  },
  formControl: {
    width: "200px",
    height: "50px",
    marginLeft: "40px",
  },
});

function AlertDialog(props) {
  const { open, time, day, week, onClose } = props;

  const handleClose = () => {
    onClose(false);
  };

  const handleNo = () => {
    onClose(false);
  };

  const handleYes = () => {
    onClose(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="simple-dialog-title">Tasks conflict</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            There is already an exiting task for the time {time} {day}, week{" "}
            {week}. Do you want to replace this task
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo} color="primary">
            No
          </Button>
          <Button onClick={handleYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//Modal ADD Task
export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [driver, setDriver] = React.useState();
  const [type, setType] = React.useState();
  const [day, setDay] = React.useState();
  const [week, setWeek] = React.useState();
  const [startTime, setStartTime] = React.useState();
  const [location, setLocation] = React.useState();
  const [description, setDescription] = React.useState();

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there is already a task for that driver, day, week and time
    let conflictingTask = alasql(
      "SELECT * FROM ? WHERE driver= ? AND  day= ? AND startTime= ? AND week= ?",
      [props.data, driver, day, startTime, week]
    );
    if (conflictingTask.length > 0) {
      setAlertOpen(true);
    } else {
      props.taskCreationHandler(
        driver,
        type,
        day,
        week,
        startTime,
        location,
        description
      );
      setModalOpen(false);
    }
  };

  const startTimeIn12HourClockSystem = () => {
    if (startTime <= 11) {
      return `${startTime} AM`;
    } else if (startTime === 12) {
      return "12 PM";
    } else {
      return `${startTime - 12} PM`;
    }
  };

  const onAlertClose = (override) => {
    if (override) {
      let conflictingTask = alasql(
        "SELECT * FROM ? WHERE driver= ? AND  day= ? AND startTime= ? AND week= ?",
        [props.data, driver, day, startTime, week]
      );
      props.taskDeletionHandler(conflictingTask);
      props.taskCreationHandler(
        driver,
        type,
        day,
        week,
        startTime,
        location,
        description
      );
    }
    setAlertOpen(false);
    setModalOpen(false);
  };

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        Add Task
      </button>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={modalOpen}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalOpen}>
            <div className={classes.paper}>
              <h4 className={classes.h4} id="transition-modal-title">
                Add new task
              </h4>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Driver</InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  onChange={(e) => setDriver(e.target.value)}
                >
                  <option aria-label="None" value="" />
                  <option value={"petro"}>Petro</option>
                  <option value={"alex"}>Alex</option>
                  <option value={"arthur"}>Arthur</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Type</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"pickup"}>Pickup</MenuItem>
                  <MenuItem value={"dropoff"}>Dropoff</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Day</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setDay(e.target.value)}
                >
                  <MenuItem value={"sunday"}>Sunday</MenuItem>
                  <MenuItem value={"monday"}>Monday</MenuItem>
                  <MenuItem value={"tuesday"}>Tuesday </MenuItem>
                  <MenuItem value={"wednesday"}>Wednesday</MenuItem>
                  <MenuItem value={"thursday"}>Thursday</MenuItem>
                  <MenuItem value={"friday"}>Friday</MenuItem>
                  <MenuItem value={"saturday"}>Saturday</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Week</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setWeek(e.target.value)}
                >
                  {[...Array(52)].map((x, i) => (
                    <MenuItem value={i + 1}>Week {i + 1}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">StartTime</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  <MenuItem value={0}> 12 Am </MenuItem>
                  <MenuItem value={1}> 1 Am </MenuItem>
                  <MenuItem value={2}> 2 Am </MenuItem>
                  <MenuItem value={3}> 3 Am </MenuItem>
                  <MenuItem value={4}> 4 Am </MenuItem>
                  <MenuItem value={5}> 5 Am </MenuItem>
                  <MenuItem value={6}> 6 Am </MenuItem>
                  <MenuItem value={7}> 7 Am </MenuItem>
                  <MenuItem value={8}> 8 Am </MenuItem>
                  <MenuItem value={9}> 9 Am </MenuItem>
                  <MenuItem value={10}> 10 Am </MenuItem>
                  <MenuItem value={11}> 11 Am </MenuItem>
                  <MenuItem value={12}> 12 Pm </MenuItem>
                  <MenuItem value={13}> 1 Pm </MenuItem>
                  <MenuItem value={14}> 2 Pm </MenuItem>
                  <MenuItem value={15}> 3 Pm </MenuItem>
                  <MenuItem value={16}> 4 Pm </MenuItem>
                  <MenuItem value={17}> 5 Pm </MenuItem>
                  <MenuItem value={18}> 6 Pm </MenuItem>
                  <MenuItem value={19}> 7 Pm </MenuItem>
                  <MenuItem value={20}> 8 Pm </MenuItem>
                  <MenuItem value={21}> 9 Pm </MenuItem>
                  <MenuItem value={22}> 10 Pm </MenuItem>
                  <MenuItem value={23}> 11 Pm </MenuItem>
                </Select>
              </FormControl>
              <TextField
                className={classes.TextField}
                onChange={(e) => setLocation(e.target.value)}
                id="outlined-textarea"
                label="Location"
                multiline
                variant="outlined"
              />
              <TextField
                className={classes.TextField}
                onChange={(e) => setDescription(e.target.value)}
                id="outlined-textarea"
                label="Description"
                multiline
                variant="outlined"
              />
              <Button
                variant="button"
                size="large"
                width="60%"
                backgroundColor="#fcff4a"
                fullWidth
                block
                gutterBottom
                className={classes.button}
                onClick={handleSubmit}
                type="submit"
              >
                Send
              </Button>
              <AlertDialog
                open={alertOpen}
                onClose={onAlertClose}
                day={day}
                time={startTimeIn12HourClockSystem()}
                week={week}
              />
            </div>
          </Fade>
        </Modal>
      </form>
    </div>
  );
}
