import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import loadFirebase from '../../lib/db'
import Link from 'next/link'
import ButtonAppBar from '../../components/buttonAppBar'

class Note extends React.Component {
    static async getInitialProps(context) {
        const id = context.query.id;
        var title = '';
        var content = '';
        const firebase = await loadFirebase();
        const db = firebase.firestore();

        let noteRef = db.collection('notes');
        let note = await noteRef.doc(context.query.id).get()
        .then(snapshot => {
            title = snapshot.data().title;
            content = snapshot.data().content;
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        
        return {id, title, content}
    }

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content
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
                content: snapshot.data().content
            })
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });

    }

    render() {
        return (
            <div>
                <Head>
                <title>Note</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <ButtonAppBar title={this.state.title}/>
                <Link href="/notes">
                    <a>back to notes</a>
                </Link>
                <div className="Hero">
                    <h1>Title: {this.state.title}</h1>
                    <p>{this.state.content}</p>
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

export default Note