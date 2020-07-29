import React, { useState, useEffect } from "react";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  FormControl,
  Select,
  Box,
  Modal,
  Backdrop,
  Fade,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";
import alasql from "alasql";

//CARD Show the task
const SimpleCard = ({ type }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          TASK
        </Typography>
        <Typography variant="h8" component="h5" className={classes.pos}>
          {type}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button className={classes.buttonDelete} size="small">
          Delete
        </Button>
        <Button className={classes.buttonUpdate} size="small">
          Update
        </Button> */}
      </CardActions>
    </Card>
  );
};

//Modal ADD Task
const SimpleModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [driver, setDriver] = React.useState();
  const [type, setType] = React.useState();
  const [day, setDay] = React.useState();
  const [week, setWeek] = React.useState();
  const [startTime, setStartTime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  const [location, setLocation] = React.useState();
  const [description, setDescription] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.taskCreationHandler(
      driver,
      type,
      day,
      week,
      startTime,
      endTime,
      location,
      description
    );
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
                  <MenuItem value={"Pickup"}>Pickup</MenuItem>
                  <MenuItem value={"Dropoff"}>Dropoff</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Day</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setDay(e.target.value)}
                >
                  <MenuItem value={1}>Sunday</MenuItem>
                  <MenuItem value={2}>Monday</MenuItem>
                  <MenuItem value={3}>Tuesday </MenuItem>
                  <MenuItem value={4}>Wednesday</MenuItem>
                  <MenuItem value={5}>Thurday</MenuItem>
                  <MenuItem value={6}>Friday</MenuItem>
                  <MenuItem value={7}>Saturday</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Week</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setWeek(e.target.value)}
                >
                  <MenuItem value={1}>Week 1</MenuItem>
                  <MenuItem value={2}>week 2</MenuItem>
                  <MenuItem value={3}>week 3</MenuItem>
                  <MenuItem value={4}>week 4</MenuItem>
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
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">EndTime</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  onChange={(e) => setEndTime(e.target.value)}
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
                onClose={true}
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
};

//Drop Down
const GroupedSelect = (props) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Drivers</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          onChange={(e) => props.selectDriverHandler(e.target.value)}
        >
          <option aria-label="None" value="" />
          <option value={"petro"}>Petro</option>
          <option value={"alex"}>Alex</option>
          <option value={"arthur"}>Arthur</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Week</InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          onChange={(e) => props.selectWeekHandler(e.target.value)}
        >
          <MenuItem value={1}>Week 1</MenuItem>
          <MenuItem value={2}>week 2</MenuItem>
          <MenuItem value={3}>week 3</MenuItem>
          <MenuItem value={4}>week 4</MenuItem>
          <MenuItem value={5}>week 5</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Download</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value={1}>2 days</MenuItem>
          <MenuItem value={2}>4 days</MenuItem>
          <MenuItem value={3}>7 days</MenuItem>
          <MenuItem value={4}>14 days</MenuItem>
          <MenuItem value={5}>28 days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    paddingRight: "50px",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//Styles
const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  grid: {
    marginTop: "15px",
  },
  formControl: {
    width: "200px",
    height: "50px",
    marginLeft: "40px",
  },
  paper: {
    position: "absolute",
    width: 500,
    height: "350px",
    background: "white",
    marginLeft: "40px",
  },
  h4: {
    marginLeft: "60px",
  },

  TextField: {
    marginTop: "13px",
    marginLeft: "40px",
  },

  button: {
    position: "absolute",
    width: 100,
    border: "1px solid #000",
    top: "13px",
    right: "32px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100px",
    height: "50px",
  },
  title: {
    fontSize: 10,
    marginLeft: "40px",
  },
  pos: {
    marginBottom: 12,
  },
});

const hours = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

//APP TABLE
export default function App() {
  const classes = useStyles();
  const [driver, setDriver] = React.useState();
  const [week, setWeek] = React.useState();
  const [data, setData] = React.useState([
    {
      driver: "petro",
      type: "Dropoff",
      day: "Monday",
      week: 2,
      startTime: 10,
      endTime: 12,
      location: "toronto",
      description: "Make shampoo deliveries",
    },
  ]);

  const createNewTask = (
    driver,
    type,
    day,
    week,
    startTime,
    endTime,
    location,
    description
  ) => {
    setData(
      data.concat({
        driver: driver,
        type: type,
        day: day,
        week: week,
        startTime: startTime,
        endTime: endTime,
        location: location,
        description: description,
      })
    );
  };

  useEffect(() => {
    let res = alasql("SELECT * FROM ? WHERE driver=? and week=?", [
      data,
      driver,
      week,
    ]);
    console.log(res);
  });

  return (
    <div className={classes.grid}>
      <Grid container spacing={12}>
        <Box>
          <GroupedSelect
            selectWeekHandler={(week) => setWeek(week)}
            selectDriverHandler={(driver) => setDriver(driver)}
          />
        </Box>
        <Box>
          <SimpleModal
            taskCreationHandler={(
              driver,
              type,
              day,
              week,
              startTime,
              endTime,
              location,
              description
            ) =>
              createNewTask(
                driver,
                type,
                day,
                week,
                startTime,
                endTime,
                location,
                description
              )
            }
          />
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Sunday</StyledTableCell>
                <StyledTableCell align="right">Monday</StyledTableCell>
                <StyledTableCell align="right">Tuesday</StyledTableCell>
                <StyledTableCell align="right">Wednesday</StyledTableCell>
                <StyledTableCell align="right">Thurday</StyledTableCell>
                <StyledTableCell align="right">Friday</StyledTableCell>
                <StyledTableCell align="right">Saturday</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hours.map((hour) => (
                <StyledTableRow key={hour}>
                  <StyledTableCell component="th" scope="row">
                    {hour}
                  </StyledTableCell>
                  <SimpleCard />
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </StyledTableRow>
              ))}
              <TableRow>
                <TableCell component="th" scope="row">
                  {/* {startTime} */}
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
// key={startTime}
