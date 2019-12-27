import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import loadFirebase from '../lib/db'
import ButtonAppBar from '../components/buttonAppBar'

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
      '& h1': {
          fontSize: '60px',
          lineHeight: 1,
      },
      '& p': {
        fontSize: '20px',
        lineHeight: 1,
    }
    },
    card: {
        flexGrow: 1,
        textAlign: 'center',
        width: '100%',
        '& img,h2': {
            width: '100%',
        },
        '& h2': {

        }
    }
});

class Notes extends React.Component {
    static async getInitialProps() {
        const firebase = await loadFirebase();
        const db = firebase.firestore();
        var notes = [];
        let notesRef = db.collection('notes').orderBy("id", "asc");
        let allNotes = await notesRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            notes.push({id: doc.id, title: doc.data().title, content: doc.data().content, img: doc.data().img});
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });

        return {notes}
    }

    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        }
    }

    async componentDidMount() {
        const firebase = await loadFirebase();
        const db = firebase.firestore();
        let notesRef = db.collection('notes').orderBy("id", "asc");
        let allNotes = notesRef.get()
        .then(snapshot => {
            var notesData = [];
          snapshot.forEach(doc => {
            notesData.push({id: doc.id, title: doc.data().title, content: doc.data().content, img: doc.data().img});
          });
          this.setState({
            notes: notesData
          })
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
    }

    render() {
        const {classes} = this.props;
        return(
            <div style={{flexGrow: 1, marginBottom: '56px'}}>
                <Head>
                <title>Notes</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <ButtonAppBar title='Notes'/>
                <Grid container spacing={0}>
                    <Grid className={classes.hero} item xs={12}>
                        <h1 className="title">Notes</h1>
                        <p>A few hand written from my heart</p>
                    </Grid>
                    <Grid className={classes.card} container spaceing={0}>
                    {this.state.notes.map(note => 
                        <Link href="/note/[id]" as={"/note/" + note.id} >                     
                            <Grid className={classes.card} item xs={6} sm={4}>
                                <img src={note.img}/>
                                <h2>{note.title}</h2>
                            </Grid>
                        </Link>
                    )}
                    </Grid>
                </Grid>
                <Nav />
            </div>
        )
    }
}

Notes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notes);