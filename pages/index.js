import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import ButtonAppBar from '../components/buttonAppBar'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  hero: {
    background: 'url(colorful-lemon.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    padding: '30px 30px',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
    textAlign: 'center',
    '& h1': {
      fontSize: '80px',
      lineHeight: '1',
      fontWeight: '800',
      margin: 0,
    },
    '& p': {
      fontSize: '24px',
    },
    '& div': {
      background: 'radial-gradient(rgba(0,0,0,.15), rgba(0,0,0,0), rgba(0,0,0,0))',
      padding: '30px 0',
      [theme.breakpoints.up('sm')]: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
      }
    }
  },
  noteBlock: {
    background: 'url(/notes-spread.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '30px 30px',
    [theme.breakpoints.up('sm')]: {
      height: '50vh',
    },
    '&:hover': {
      cursor: 'pointer'
    },
    '& h3,p': {
      color: 'white',
      fontStyle: 'none',
      margin: 0
    },
    '& h3': {
      fontSize: '60px',
      lineHeight: '1',
      fontWeight: '800',
    },
    '& p': {
      fontSize: '20px',
    },
    '& div': {
      background: 'radial-gradient(rgba(0,0,0,.2), rgba(0,0,0,0), rgba(0,0,0,0))',
      [theme.breakpoints.up('sm')]: {
        // background: 'rgba(115, 3, 192, 0.7)',
        margin: 0,
        position: 'absolute',
        top: '20%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
      }
    }
  },
  rechargeBlock: {
    background: 'url(/relax-chair.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '30px 30px',
    [theme.breakpoints.up('sm')]: {
      height: '50vh',
    },
    '&:hover': {
      cursor: 'pointer'
    },
    '& h3,p': {
      color: 'white',
      fontStyle: 'none',
      margin: 0
    },
    '& h3': {
      fontSize: '60px',
      lineHeight: '1',
      fontWeight: '800',
    },
    '& p': {
      fontSize: '20px',
    },
    '& div': {
      padding: '0 0 50px 0',
      background: 'radial-gradient(rgba(0,0,0,.2), rgba(0,0,0,0), rgba(0,0,0,0))',
      [theme.breakpoints.up('sm')]: {
        // background: 'rgba(236, 56, 188, 0.7)',
        margin: 0,
        position: 'absolute',
        top: '75%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
      }
    }
  },
});

class Home extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div style={{flexGrow: 1}}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ButtonAppBar title='Home'/>
        
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className={classes.hero}>
            <div>
              <h1 className="title">Comps Emotional Support</h1>
              <p className="description">
                When life throws you lemons, I will emotionally support you while you make lemonade 
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid item xs={12} className={classes.noteBlock}>
              <Link href="/notes">
                <div className="card">
                  <h3>Special Notes</h3>
                  <p>Read a note that was written with lots of love and your situation in mind!</p>
                  <p>Go to Notes <span style={{fontSize: '40px', verticalAlign: 'sub'}}>&#8594;</span></p>
                </div>
              </Link>
            </Grid>

            <Grid item xs={12} className={classes.rechargeBlock}>
              <Link href="/recharge">
                <div className="card">
                  <h3>Recharge Yourself</h3>
                  <p>Feeling overwhelmed? Take a second to cheer yourself up!</p>
                  <p>Recharge Yourself <span style={{fontSize: '40px', verticalAlign: 'sub'}}>&#8594;</span></p>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Nav />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);

