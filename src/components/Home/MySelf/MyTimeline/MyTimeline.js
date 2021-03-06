import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Bounce from "react-reveal/Bounce";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const MyTimeline = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 style={{ color: "rgb(255, 218, 8)" }}>My timeline</h3>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              9:30 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Bounce right cascade>
              <Paper
                style={{
                  backgroundColor: "rgba(255,255,255,0.2",
                  color: "white",
                }}
                elevation={3}
                className={classes.paper}
              >
                <Typography variant="h6" component="h1">
                  Eat
                </Typography>
                <Typography>Because I need strength</Typography>
              </Paper>
            </Bounce>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              10:00 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Bounce left cascade>
              <Paper
                style={{
                  backgroundColor: "rgba(255,255,255,0.2",
                  color: "white",
                  textAlign: "center",
                }}
                elevation={3}
                className={classes.paper}
              >
                <Typography variant="h6" component="h1">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </Bounce>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Bounce right cascade>
              <Paper
                style={{
                  backgroundColor: "rgba(255,255,255,0.2",
                  color: "white",
                }}
                elevation={3}
                className={classes.paper}
              >
                <Typography variant="h6" component="h1">
                  Sleep
                </Typography>
                <Typography>Because I need rest</Typography>
              </Paper>
            </Bounce>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Bounce left cascade>
              <Paper
                style={{
                  backgroundColor: "rgba(255,255,255,0.2",
                  color: "white",
                  textAlign: "center",
                }}
                elevation={3}
                className={classes.paper}
              >
                <Typography variant="h6" component="h1">
                  Repeat
                </Typography>
                <Typography>Because this is the life I love!</Typography>
              </Paper>
            </Bounce>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default MyTimeline;
