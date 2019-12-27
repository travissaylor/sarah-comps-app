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
        var rand = Math.floor(Math.random() * json[0].data.children.length);
        var index = 0;
        console.log(json);
        while(json[0].data.children[rand].thumbnail_width === null) {
            rand = Math.floor(Math.random() * json[0].data.children.length);
            if(index > json[0].data.children.length - 1) {
                console.log("Image Never Found in Query")
                break;
            }
            index++;
        }
        const img = json[0].data.children[rand].data.url;

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
        var rand = Math.floor(Math.random() * json[0].data.children.length);
        var index = 0;
        console.log(json);
        while(json[0].data.children[rand].thumbnail_width === null) {
            rand = Math.floor(Math.random() * json[0].data.children.length);
            if(index > json[0].data.children.length - 1) {
                console.log("Image Never Found in Query")
                break;
            }
            index++;
        }

        const img = json[0].data.children[rand].data.url;

        this.setState({
            img: img
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
                <div>
                    <img src={this.state.img} />
                </div>
            </div>
        )
    }
}

export default Recharge