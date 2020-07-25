import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import alasql from "alasql";

//CARD
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
        <Button className={classes.buttonDelete} size="small">
          Delete
        </Button>
        <Button className={classes.buttonUpdate} size="small">
          Update
        </Button>
      </CardActions>
    </Card>
  );
};

//DATA
let data = [
  {
    driver: "Petro",
    type: "Dropoff",
    day: "Monday",
    week: 2,
    startTime: 10,
    endTime: 12,
  },
];

//Modal
const SimpleModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [driver, setDriver] = React.useState();
  const [type, setType] = React.useState();
  const [day, setDay] = React.useState();
  const [week, setWeek] = React.useState();
  const [startTime, setStartTime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  // const [count, setCount] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    data.push({
      driver: driver,
      type: type,
      day: day,
      week: week,
      startTime: startTime,
      endTime: endTime,
    });
    // let res = alasql("SELECT type AS type FROM ? GROUP BY type", [data]);
    // console.log(res);
    // let res2 = alasql("SELECT driver FROM ? WHERE driver", [data]);
    // console.log(res2);
  }
  // useEffect(() => {}, [setType]);

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
              <h4 id="transition-modal-title">Add new task</h4>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Driver</InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  onChange={(e) => setDriver(e.target.value)}
                >
                  <option aria-label="None" value="" />
                  <option value={"Petro"}>Petro</option>
                  <option value={"Alex"}>Alex</option>
                  <option value={"Arthur"}>Arthur</option>
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
};

//Drop Down
const GroupedSelect = () => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Drivers</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <option value={1}>Petro</option>
          <option value={2}>Alex</option>
          <option value={3}>Arthur</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Week</InputLabel>
        <Select defaultValue="" id="grouped-select">
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

function createData(
  sunday,
  monday,
  tuesday,
  wednesday,
  thurday,
  friday,
  saturday
) {
  return { sunday, monday, tuesday, wednesday, thurday, friday, saturday };
}

// const rows = [
//   createData("monday", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

//Styles
const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  grid: {
    marginTop: "1px",
  },
  formControl: {
    width: "100px",
    height: "55px",
    marginTop: "-20px",
  },
  paper: {
    position: "absolute",
    width: 400,
    background: "white",
  },
  button: {
    position: "absolute",
    width: 100,
    border: "1px solid #000",
    top: "7px",
    right: "32px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "150px",
    height: "135px",
  },
  title: {
    fontSize: 10,
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

//APP
export default function App() {
  const classes = useStyles();
  const [driver, setDriver] = React.useState();

  let res = alasql("SELECT * FROM ? WHERE driver='Petro'", [data]);
  console.log(data);

  return (
    <div className={classes.grid}>
      <Grid container spacing={12}>
        <Box>
          <GroupedSelect onChange={(e) => setDriver(e.target.value)} />
        </Box>
        <Box>
          <SimpleModal />
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
                  <StyledTableCell align="right">
                    <SimpleCard />
                  </StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

{
  /* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sunday}</StyledTableCell>
              <StyledTableCell align="right">{row.monday}</StyledTableCell>
              <StyledTableCell align="right">{row.tuesday}</StyledTableCell>
              <StyledTableCell align="right">{row.wednesday}</StyledTableCell>
              <StyledTableCell align="right">{row.thurday}</StyledTableCell>
              <StyledTableCell align="right">{row.friday}</StyledTableCell>
              <StyledTableCell align="right">{row.saturday}</StyledTableCell>
            </StyledTableRow>
          ))} */
}
