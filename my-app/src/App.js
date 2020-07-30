import React, { useState } from "react";
import SimpleCard from "./Card";
import SimpleModal from "./Modal";
import GroupedSelect from "./GroupedSelect";
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
  Box,
} from "@material-ui/core";
import alasql from "alasql";

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
  button: {
    position: "absolute",
    width: 100,
    border: "1px solid #000",
    top: "13px",
    right: "32px",
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

//APP TABLE
export default function App() {
  const classes = useStyles();
  const [driver, setDriver] = React.useState();
  const [week, setWeek] = React.useState();
  const [data, setData] = React.useState([
    {
      driver: "petro",
      type: "dropoff",
      day: "monday",
      week: 2,
      startTime: 10,
      endTime: 12,
      location: "toronto",
      description: "make shampoo deliveries",
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

  let result = alasql("SELECT * FROM ? WHERE driver=? and week=?", [
    data,
    driver,
    week,
  ]);

  let tasksCatalog = {};
  result.map((task) => {
    tasksCatalog[`${task.day}-${task.startTime}`] = task;
  });
  console.log(tasksCatalog);

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
                <StyledTableCell align="right">Time</StyledTableCell>
                <StyledTableCell align="right">Sunday</StyledTableCell>
                <StyledTableCell align="right">Monday</StyledTableCell>
                <StyledTableCell align="right">Tuesday</StyledTableCell>
                <StyledTableCell align="right">Wednesday</StyledTableCell>
                <StyledTableCell align="right">Thursday</StyledTableCell>
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
                  <StyledTableCell align="right" className={"sunday"}>
                    {tasksCatalog[`sunday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`sunday-${hours.indexOf(hour)}`].driver
                        }
                        type={
                          tasksCatalog[`sunday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`sunday-${hours.indexOf(hour)}`].location
                        }
                        description={
                          tasksCatalog[`sunday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={"monday"}>
                    {tasksCatalog[`monday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`monday-${hours.indexOf(hour)}`].driver
                        }
                        type={
                          tasksCatalog[`monday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`monday-${hours.indexOf(hour)}`].location
                        }
                        description={
                          tasksCatalog[`monday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={"tuesday"}>
                    {tasksCatalog[`tuesday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`tuesday-${hours.indexOf(hour)}`].driver
                        }
                        type={
                          tasksCatalog[`tuesday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`tuesday-${hours.indexOf(hour)}`]
                            .location
                        }
                        description={
                          tasksCatalog[`tuesday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={"wednesday"}>
                    {tasksCatalog[`wednesday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`wednesday-${hours.indexOf(hour)}`]
                            .driver
                        }
                        type={
                          tasksCatalog[`wednesday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`wednesday-${hours.indexOf(hour)}`]
                            .location
                        }
                        description={
                          tasksCatalog[`wednesday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={"thursday"}>
                    {tasksCatalog[`thursday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`thursday-${hours.indexOf(hour)}`].driver
                        }
                        type={
                          tasksCatalog[`thursday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`thursday-${hours.indexOf(hour)}`]
                            .location
                        }
                        description={
                          tasksCatalog[`thursday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={"friday"}>
                    {tasksCatalog[`friday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`friday-${hours.indexOf(hour)}`].driver
                        }
                        type={
                          tasksCatalog[`friday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`friday-${hours.indexOf(hour)}`].location
                        }
                        description={
                          tasksCatalog[`friday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={"saturday"}>
                    {tasksCatalog[`saturday-${hours.indexOf(hour)}`] ? (
                      <SimpleCard
                        driver={
                          tasksCatalog[`saturday-${hours.indexOf(hour)}`].driver
                        }
                        type={
                          tasksCatalog[`saturday-${hours.indexOf(hour)}`].type
                        }
                        location={
                          tasksCatalog[`saturday-${hours.indexOf(hour)}`]
                            .location
                        }
                        description={
                          tasksCatalog[`saturday-${hours.indexOf(hour)}`]
                            .description
                        }
                      />
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
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
