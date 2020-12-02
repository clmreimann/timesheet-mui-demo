import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import TimerIcon from "@material-ui/icons/Timer";
import WorkEntry from "../model/WorkEntry";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "auto",
      marginTop: theme.spacing(2),
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

function WorkStatusIcon(props: any) {
  let icon;
  switch (props.workEntry.status) {
    case 0:
      icon = <TimerIcon />;
      break;
    case 1:
      icon = <SaveIcon />;
      break;
    case 2:
      icon = <ArrowForwardIcon />;
      break;
    case 3:
      icon = <CheckIcon />;
      break;
    case 4:
      icon = <ClearIcon />;
      break;
    default:
      icon = <SaveIcon />;
      break;
  }

  return <ListItemIcon>{icon}</ListItemIcon>;
}

export default function WorkSubmissions() {
  const entries: Array<WorkEntry> = [
    {
      id: 1,
      name: "Heribert Leutner",
      date: new Date(2020, 11, 24),
      task: "Fundament",
      work: 3,
      status: 1,
      comment: "Grundstein gelegt"
    },
    {
      id: 2,
      name: "Heribert Leutner",
      date: new Date(2020, 11, 25),
      task: "Fundament",
      work: 2,
      status: 1,
      comment: "Fundament gegossen"
    },
    {
      id: 3,
      name: "Heribert Leutner",
      date: new Date(2020, 11, 25),
      task: "Rohbau",
      work: 6,
      status: 1,
      comment: "Maurerarbeiten"
    },
    {
      id: 4,
      name: "Heribert Leutner",
      date: new Date(2020, 11, 25),
      task: "Rohbau",
      work: 2,
      status: 2,
      comment: "Maurerarbeiten"
    },
    {
      id: 5,
      name: "Heribert Leutner",
      date: new Date(2020, 11, 26),
      task: "Elektrik",
      work: 2,
      status: 3,
      comment: "Leitungen gelegt"
    }
  ];

  const initialState: Array<number> = [];
  const [checked, setChecked] = React.useState(initialState);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListSubheader>
        <Typography variant="subtitle1" component="h1" gutterBottom>
          Elbphilharmonie
        </Typography>
      </ListSubheader>
      {entries.map((value, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <React.Fragment key={value.id}>
            <ListItem
              key={`item-${value.id}`}
              role={undefined}
              dense
              button
              onClick={handleToggle(index)}
            >
              <ListItemIcon>
                <WorkStatusIcon workEntry={value} />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="subtitle2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {`${value.work} h - `}
                    </Typography>
                    {`${value.task}`}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="subtitle2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {`${value.date.toLocaleDateString()} - `}
                    </Typography>
                    {`${value.comment}`}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
