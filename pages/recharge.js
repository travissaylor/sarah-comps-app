import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import ButtonAppBar from '../components/buttonAppBar'
import fetch from 'isomorphic-unfetch'

class Recharge extends React.Component{
    static async getInitialProps() {
        const res = await fetch('https://www.reddit.com/r/ClashRoyale/comments/eer26e/an_option_to_organize_the_order_of_your_emotes.json')
        const json = await res.json()
        console.log(json);
        const img = json[0].data.children[0].data.thumbnail;
        return {img}
    }

    constructor(props) {
        super(props);
        this.state = {
            img: this.props.img
        }
    }

    async componentDidMount() {
        const res = await fetch('https://www.reddit.com/r/ClashRoyale/comments/eer26e/an_option_to_organize_the_order_of_your_emotes.json')
        const json = await res.json()
        
        const img = json[0].data.children[0].data.thumbnail;
        this.setState({
            img: this.props.img
        })
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
                <img src={this.state.img} />
            </div>
        )
    }
}

export default Recharge