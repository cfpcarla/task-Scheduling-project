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

// function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Task alredy exist . Do you want to replace this task?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             No
//           </Button>
//           <Button onClick={handleClose} color="primary" autoFocus>
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

//Modal ADD Task
export default function SimpleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [driver, setDriver] = React.useState();
  const [type, setType] = React.useState();
  const [day, setDay] = React.useState();
  const [week, setWeek] = React.useState();
  const [startTime, setStartTime] = React.useState();
  const [location, setLocation] = React.useState();
  const [description, setDescription] = React.useState();
  const [data, setData] = React.useState([
    {
      driver: "petro",
      type: "dropoff",
      day: "monday",
      week: 2,
      startTime: 10,
      location: "toronto",
      description: "make shampoo deliveries",
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    let conflictTask = alasql(
      "SELECT * FROM ? WHERE driver= ? AND  day= ? AND startTime= ? AND week= ?",
      [data, driver, day, startTime, week]
    );
    if (conflictTask.length > 0) {
      alert("Task alredy exist!");
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
      setOpen(false);
    }
  }

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
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
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
            </div>
          </Fade>
        </Modal>
      </form>
    </div>
  );
}
