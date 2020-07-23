import React from "react";
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const SimpleModal = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Add a new task</h2>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Task
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
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

//colocar monday...
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
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
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

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container spacing={12}>
        <Box>
          <GroupedSelect />
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
                  <StyledTableCell align="right"></StyledTableCell>
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
