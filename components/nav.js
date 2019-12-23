import React from 'react'
import Router from 'next/router'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
      <BottomNavigationAction label="Home" value="" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Notes" value="notes" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Overwhelmed" value="overwhelmed" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}




