import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

//Styles
const useStyles = makeStyles({
  h4: {
    marginLeft: "60px",
  },

  TextField: {
    marginTop: "13px",
    marginLeft: "40px",
  },
  card: {
    width: "190px",
    height: "150px",
  },
  title: {
    fontSize: 10,
    textAlign: "left",
  },
});

//CARD Show the task
export default function SimpleCard({
  driver,
  type,
  location,
  description,
  startTime,
  week,
  day,
  taskDeletionHandler,
}) {
  const classes = useStyles();

  const deleteTask = () => {
    taskDeletionHandler({
      driver: driver,
      type: type,
      location: location,
      description: description,
      week: week,
      day: day,
      startTime: startTime,
    });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h8" component="h5" className={classes.title}>
          Driver: {driver}
        </Typography>
        <Typography variant="h8" component="h5" className={classes.title}>
          Type: {type}
        </Typography>
        <Typography variant="h8" component="h5" className={classes.title}>
          Location: {location}
        </Typography>
        <Typography variant="h8" component="h5" className={classes.title}>
          Description: {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.buttonDelete}
          size="small"
          onClick={() => deleteTask()}
        >
          Delete
        </Button>
        <Button className={classes.buttonUpdate} size="small">
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
