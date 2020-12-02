import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import TimerIcon from "@material-ui/icons/Timer";
import HolidayEntry from "../model/HolidayEntry";
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
  switch (props.holidayEntry.status) {
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

export default function MyHoliday() {
  const entries: Array<HolidayEntry> = [
    {
      id: 1,
      name: "Heribert Leutner",
      start: new Date(2020, 3, 2),
      end: new Date(2020, 3, 6),
      days: 5,
      status: 1,
      comment: "Ich fliege nach Florida"
    },
    {
      id: 2,
      name: "Heribert Leutner",
      start: new Date(2020, 3, 2),
      end: new Date(2020, 3, 6),
      days: 5,
      status: 1,
      comment: "Ich fliege nach Florida"
    },
    {
      id: 3,
      name: "Heribert Leutner",
      start: new Date(2020, 3, 2),
      end: new Date(2020, 3, 6),
      days: 5,
      status: 1,
      comment: "Ich fliege nach Florida"
    },
    {
      id: 4,
      name: "Heribert Leutner",
      start: new Date(2020, 3, 2),
      end: new Date(2020, 3, 6),
      days: 5,
      status: 2,
      comment: "Ich fliege nach Florida"
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
      {entries.map((value, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={value.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(index)}
          >
            <ListItemIcon>
              <WorkStatusIcon holidayEntry={value} />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={`${value.start.toLocaleDateString()} - ${value.end.toLocaleDateString()}`}
              secondary={`${value.comment}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
