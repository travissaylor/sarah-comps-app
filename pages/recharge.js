import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import ButtonAppBar from '../components/buttonAppBar'
import fetch from 'isomorphic-unfetch'

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hero: {
      background: 'url(/glass-water.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      textAlign: 'center',
      padding: '15vh 0',
      color: 'white',
      '& h1': {
          fontSize: '60px',
          lineHeight: 1,
      },
      '& p': {
        padding: '15px',
        fontSize: '20px',
        lineHeight: 1,
      }
    },
    quote: {
        textAlign: 'center',
        margin: 'auto',
        padding: '0 20%',
        '& img,h2': {
            width: '100%',
        },
        '& h2': {
            fontSize: '30px',
            color: '#006cc0'
        }
    }
});

class Recharge extends React.Component{
    static async getInitialProps() {
        const options = {credentials: 'same-origin'};
        const res = await fetch('https://api.reddit.com/r/rarepuppers/top/?t=week', options);
        const json = await res.json()
        var rand = Math.floor(Math.random() * json.data.children.length);
        var index = 0;
        while(json.data.children[rand].thumbnail_width === null) {
            rand = Math.floor(Math.random() * json.data.children.length);
            if(index > json.data.children.length - 1) {
                console.log("Image Never Found in Query")
                break;
            }
            index++;
        }
        const img = json.data.children[rand].data.url;
        const quote = json.data.children[rand].data.title;

        return {img, quote}
    }

    constructor(props) {
        super(props);
        this.state = {
            quote: this.props.quote,
            img: this.props.img
        }
    }

    async componentDidMount() {
        const options = {credentials: 'same-origin'};
        const res = await fetch('https://api.reddit.com/r/rarepuppers/top/?t=week', options);
        const json = await res.json()
        var rand = Math.floor(Math.random() * json.data.children.length);
        var index = 0;
        while(json.data.children[rand].thumbnail_width === null) {
            rand = Math.floor(Math.random() * json.data.children.length);
            if(index > json.data.children.length - 1) {
                console.log("Image Never Found in Query")
                break;
            }
            index++;
        }

        const quote = json.data.children[rand].data.title;
        const img = json.data.children[rand].data.url;

        this.setState({
            quote: quote,
            img: img
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <div style={{flexGrow: 1, marginBottom: '56px'}}>
                <Head>
                <title>Recharge</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <ButtonAppBar title='Recharge'/>
                <Nav />

                <Grid container spacing={0}>
                    <Grid className={classes.hero} item xs={12}>
                        <h1 className="title">Relax</h1>
                        <p>Take a break and enjoy some wholesome content</p>
                    </Grid>
                    <Grid className={classes.quote} item xs={12}>
                        <h2>{this.state.quote}</h2>
                        <img src={this.state.img} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Recharge.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Recharge);