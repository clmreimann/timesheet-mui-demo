import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function SvDrawer(props: any) {
  const classes = useStyles();
  const open: boolean = props.open;
  const selectedView: number = props.selectedView;
  const toggleDrawer = (open: boolean) => (
    event: React.MouseEvent | React.KeyboardEvent
  ) => {
    props.onToggleDrawer(open);
  };
  const viewSelected = (event: React.MouseEvent, index: number) => {
    props.onViewSelected(index);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Work Submissions", "Work Approvals"].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedView === index}
            onClick={(event) => viewSelected(event, index)}
          >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["My Holiday", "Holiday Approvals"].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedView === index + 2}
            onClick={(event) => viewSelected(event, index + 2)}
          >
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key="About"
          selected={selectedView === 4}
          onClick={(event) => viewSelected(event, 4)}
        >
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
