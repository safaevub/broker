import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    border: '1px solid black',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="About the Provider" {...a11yProps(0)} />
        <Tab label="Certifications" {...a11yProps(1)} />
        <Tab label="Security Profile" {...a11yProps(2)} />
        <Tab label="Content Provided" {...a11yProps(3)} />
        <Tab label="Access to Content" {...a11yProps(4)} />
        <Tab label="Provenance" {...a11yProps(5)} />
        <Tab label="Policy" {...a11yProps(6)} />
        <Tab label="Pricing" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        About the Provider
      </TabPanel>
      <TabPanel value={value} index={1}>
        Certifications
      </TabPanel>
      <TabPanel value={value} index={2}>
        Security Profile
      </TabPanel>
      <TabPanel value={value} index={3}>
        Content Provided
      </TabPanel>
      <TabPanel value={value} index={4}>
        Access to Content
      </TabPanel>
      <TabPanel value={value} index={5}>
        Provenance
      </TabPanel>
      <TabPanel value={value} index={6}>
        Policy
      </TabPanel>
      <TabPanel value={value} index={7}>
        Pricing
      </TabPanel>
    </div>
  );
}
