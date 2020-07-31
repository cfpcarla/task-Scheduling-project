import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
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
    width: "200px",
    height: "100px",
  },
  title: {
    fontSize: 10,
    textAlign: "left",
  },
});

//CARD Show the task
export default function SimpleCard({ driver, type, location, description }) {
  const classes = useStyles();
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
      <CardActions></CardActions>
    </Card>
  );
}
