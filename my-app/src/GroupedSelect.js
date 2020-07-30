import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@material-ui/core";

//Styles
const useStyles = makeStyles({
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
  formControl1: {
    width: "200px",
    height: "50px",
    marginLeft: "40px",
  },
});

//Drop Down
export default function GroupedSelect(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl1}>
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
      <FormControl className={classes.formControl1}>
        <InputLabel htmlFor="grouped-select">Week</InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          onChange={(e) => props.selectWeekHandler(e.target.value)}
        >
          {[...Array(52)].map((x, i) => (
            <MenuItem value={i + 1}>Week {i + 1}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl1}>
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
}
