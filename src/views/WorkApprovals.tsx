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
  const entriesP1: Array<WorkEntry> = [
    {
      id: 1,
      name: "Max Müller",
      date: new Date(2020, 11, 24),
      task: "Design Frontend",
      work: 3,
      status: 1,
      comment: "create design concept for frontend"
    },
    {
      id: 2,
      name: "Max Müller",
      date: new Date(2020, 11, 25),
      task: "Backend Architecture",
      work: 6,
      status: 1,
      comment: "create concept for backend architecture"
    },
    {
      id: 3,
      name: "Max Müller",
      date: new Date(2020, 11, 26),
      task: "Backend Development",
      work: 2,
      status: 3,
      comment: "build database structure"
    }
  ];

  const entriesP2: Array<WorkEntry> = [
    {
      id: 4,
      name: "Julia Becker",
      date: new Date(2020, 11, 25),
      task: "Design Frontend",
      work: 2,
      status: 1,
      comment: "create design concept for frontend"
    },
    {
      id: 5,
      name: "Julia Becker",
      date: new Date(2020, 11, 25),
      task: "Backend Architecture",
      work: 2,
      status: 2,
      comment: "create concept for backend architecture"
    }
  ];

  function WorkEntryItems(props: any) {
  
    let entries: Array<WorkEntry> = props.workEntries;

    return (
      <React.Fragment key={props.key}>
        <ListSubheader>
          <Typography variant="subtitle1" component="h1" gutterBottom>
            {props.title}
          </Typography>
        </ListSubheader>        
        {
          entries.map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <React.Fragment key={value.id}>
                <ListItem
                  key={value.id}
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
                    primary={`${value.date.toLocaleDateString()} - ${value.task}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {`${value.work} h - ${value.name} - `}
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
          })          
        }
      </React.Fragment>
    );
  }

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
      <WorkEntryItems workEntries={entriesP1} key="P1" title="Webshop for Company XYZ"/>
      <WorkEntryItems workEntries={entriesP2} key="P2" title="Dashboard for Company ABC"/>  
    </List>
  );
}
