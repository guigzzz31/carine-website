import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import HomePage from './pages/HomePage';
import Podologie from './pages/Podologie';
import Posturologie from './pages/Posturologie';
import Diabetologie from './pages/Diabetologie';
import Honoraires from './pages/Honoraires';
import Pedicurie from './pages/Pedicurie';
import Reflexologie from './pages/Reflexologie';
import Contact from './pages/Contact';



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00695f',
      main: '#009688',
      dark: '#33ab9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00a152',
      main: '#00e676',
      dark: '#33eb91',
      contrastText: '#000',
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          color="theme"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Acceuil" href="/acceuil" {...a11yProps(0)} />
          <LinkTab label="Podologie" href="/podologie" {...a11yProps(1)} />
          <LinkTab label="Posturologie" href="/posturologie" {...a11yProps(2)} />
          <LinkTab label="Pédicurie" href="/pedicurie" {...a11yProps(3)} />
          <LinkTab label="Diabétologie" href="/diabetologie" {...a11yProps(4)} />
          <LinkTab label="Réflexologie" href="/reflexologie" {...a11yProps(5)} />
          <LinkTab label="Honoraires" href="/honoraires" {...a11yProps(6)} />
          <LinkTab label="Contact" href="/contact" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Podologie />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Posturologie />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Pedicurie />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Diabetologie />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Reflexologie />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Honoraires />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Contact />
      </TabPanel>
    </div>
  );
}