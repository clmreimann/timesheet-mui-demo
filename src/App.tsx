import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import SvAppBar from "./SvAppBar";
import SvDrawer from "./SvDrawer";
import WorkSubmissions from "./views/WorkSubmissions";
import WorkApprovals from "./views/WorkApprovals";
import MyHoliday from "./views/MyHoliday";
import HolidayApprovals from "./views/HolidayApprovals";

function About() {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Timesheet prototype with Material-UI
      </Typography>
      <ProTip />
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/clmreimann">
          Clemens Reimann
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default function App() {
  const [state, setState] = React.useState({
    open: false,
    selectedView: 4
  });

  const open = state.open;
  const selectedView = state.selectedView;

  const toggleDrawer = (open: boolean) => {
    setState((state) => ({ ...state, open: open }));
  };

  const viewSelected = (index: number) => {
    setState((state) => ({ ...state, selectedView: index }));
  };

  let currentView;
  switch (selectedView) {
    case 0:
      currentView = <WorkSubmissions />;
      break;
    case 1:
      currentView = <WorkApprovals />;
      break;
    case 2:
      currentView = <MyHoliday />;
      break;
    case 3:
      currentView = <HolidayApprovals />;
      break;
    default:
      currentView = <About />;
      break;
  }

  return (
    <div>
      <SvAppBar onToggleDrawer={toggleDrawer} />
      <SvDrawer
        onToggleDrawer={toggleDrawer}
        open={open}
        selectedView={selectedView}
        onViewSelected={viewSelected}
      />
      <Container maxWidth="lg">{currentView}</Container>
    </div>
  );
}
