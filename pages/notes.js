import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import loadFirebase from '../lib/db'
import ButtonAppBar from '../components/buttonAppBar'

class Notes extends React.Component {
    static async getInitialProps() {
        const firebase = await loadFirebase();
        const db = firebase.firestore();
        var notes = [];
        let notesRef = db.collection('notes');
        let allNotes = await notesRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            notes.push({id: doc.id, title: doc.data().title, content: doc.data().content});
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
        let notesRef = db.collection('notes');
        let allNotes = notesRef.get()
        .then(snapshot => {
            var notesData = [];
          snapshot.forEach(doc => {
            notesData.push({id: doc.id, title: doc.data().title, content: doc.data().content});
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
        return(
            <div>
                <Head>
                <title>Notes</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <ButtonAppBar title='Notes'/>
                <div className="Hero">
                    <h1 className="title">Notes</h1>
                    <div className="row">
                    {this.state.notes.map(note => 
                        <Link href="/note/[id]" as={"/note/" + note.id} >
                            <a className="card">{note.title}</a>
                        </Link>
                    )}
                    </div>
                </div>
                <Nav />
                <style jsx>{`
                .hero {
                    width: 100%;
                    color: #333;
                }
                .title {
                    margin: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15;
                    font-size: 48px;
                }
                .title,
                .description {
                    text-align: center;
                }
                .row {
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                }
                .card {
                padding: 18px 18px 24px;
                width: 220px;
                text-align: left;
                text-decoration: none;
                color: #434343;
                border: 1px solid #9b9b9b;
                }
                
                `}</style>
            </div>
        )
    }
}

export default Notes