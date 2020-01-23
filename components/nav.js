import React from 'react'
import Router from 'next/router'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import BatteryCharging60Icon from '@material-ui/icons/BatteryCharging60';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
     style={{ width: '100%', position: 'fixed', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        Router.push({
          pathname: '/' + newValue,
        })
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
      <BottomNavigationAction label="Notes" value="notes" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Recharge" value="recharge" icon={<BatteryCharging60Icon />} />
    </BottomNavigation>
  );
}




