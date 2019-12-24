import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import ButtonAppBar from '../components/buttonAppBar'
import fetch from 'isomorphic-unfetch'

class Recharge extends React.Component{
    static async getInitialProps() {
        var quoteRes = null;
        var quoteData = null;
        var quote = null;
        var escapedQuote = null;
        var gif = null;
        try {
            quoteRes = await fetch('https://michael-scott-quotes.herokuapp.com/quote');
            quoteData = await quoteRes.json();
            quote = quoteData.quote;
            escapedQuote = encodeURI('michael scott ' + quote);
        } catch (error) {
            console.log(error);
        }

        try {
            const gifRes = await fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + escapedQuote);
            const gifData = await gifRes.json();
            gif = gifData.data[0].images.fixed_height_downsampled.webp
        } catch(error) {
            console.log(error);
            const gifRes = await fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=michael%20scott');
            const gifData = await gifRes.json();
            gif = gifData.data[0].images.fixed_height_downsampled.webp
        } 
        
        return {quote, gif, escapedQuote}
    }

    constructor(props) {
        super(props);
        this.state = {
            quote: this.props.quote,
            gif: this.props.gif
        }
    }

    async componentDidMount() {
        var quoteRes = null;
        var quoteData = null;
        var quote = null;
        var escapedQuote = null;
        var gif = null;
        try {
            quoteRes = await fetch('https://michael-scott-quotes.herokuapp.com/quote');
            quoteData = await quoteRes.json();
            quote = quoteData.quote;
            escapedQuote = encodeURI('michael scott ' + quote);
        } catch (error) {
            console.log(error);
        }
        try {
            const gifRes = await fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + escapedQuote);
            const gifData = await gifRes.json();
            gif = gifData.data[0].images.fixed_height_downsampled.webp
        } catch(error) {
            console.log(error);
            const gifRes = await fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=michael%20scott');
            const gifData = await gifRes.json();
            gif = gifData.data[0].images.fixed_height_downsampled.webp
        } finally {
            this.setState({
                quote: this.quote,
                gif: this.gif
            });
        }
    }

    render() {
        return (
            <div>
                <Head>
                <title>Recharge</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <ButtonAppBar title='Recharge'/>
                <Nav />

                <h1>Michael Scott Quote</h1>
                <p>{this.state.quote}</p>
                <img src={this.state.gif} />
            </div>
        )
    }
}

export default Recharge