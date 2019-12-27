import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import loadFirebase from '../../lib/db'
import Link from 'next/link'
import ButtonAppBar from '../../components/buttonAppBar'

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hero: {
      background: 'url(/colorful-pencils.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      textAlign: 'center',
      padding: '15vh 0',
      color: 'white',
      marginTop: '-68px',
      '& h1': {
          fontSize: '60px',
          lineHeight: 1,
      },
      '& p': {
        fontSize: '20px',
        lineHeight: 1,
    }
    },
    content: {
        flexGrow: 1,
        textAlign: 'center',
        '& p': {
            fontSize: '24px',
            textAlign: 'left',
            margin: 'auto',
            padding: '30px 20%',
        }
    },
    backButton: {
        textDecoration: 'none',
        zIndex: '2',
        margin: '20px',
        color: 'white',
        fontSize: '20px'
    }
});

class Note extends React.Component {
    static async getInitialProps(context) {
        const id = context.query.id;
        var title = '';
        var content = '';
        var img = '';
        const firebase = await loadFirebase();
        const db = firebase.firestore();

        let noteRef = db.collection('notes');
        let note = await noteRef.doc(context.query.id).get()
        .then(snapshot => {
            title = snapshot.data().title;
            content = snapshot.data().content;
            img = snapshot.data().img;
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        
        return {id, title, content, img}
    }

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content,
            img: this.props.img
        }
    }

    async componentDidMount() {
        const firebase = await loadFirebase();
        const db = firebase.firestore();

        let noteRef = db.collection('notes');
        let note = noteRef.doc(this.props.id).get()
        .then(snapshot => {
            this.setState({
                title: snapshot.data().title,
                content: snapshot.data().content,
                img: snapshot.data().img
            })
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });

    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Head>
                <title>Note</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <ButtonAppBar title={this.state.title}/>
                <Grid container spacing={0}>
                    <Link href="/notes">
                        <a className={classes.backButton}>&#8592; back to notes</a>
                    </Link>
                    <Grid className={classes.hero} style={{background: 'url(' + this.state.img + ')'}} item xs={12}>
                        <h1>{this.state.title}</h1>
                    </Grid>
                    <Grid className={classes.content} item xs={12}>
                        <p>{this.state.content}</p>
                    </Grid>

                    <Nav />
                </Grid>
    
            </div>
        )
    }

}

Note.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Note);