import React, {Component} from 'react'
import Menu from './Menu'
import Carousel from './Carousel'
// import EmailJS from './EmailJS'
import SocialMedia from './SocialMedia'
import Instgram from './Instagram'

export default class Main extends Component {
    render() {
        return (
            <div style={{border: "2px solid black", padding: "1%"}}>
                <img style={{border: "2px solid black", padding: "1%", display: "inline-block", verticalAlign: "middle"}} src=""  alt=""/><h1 style={{display: "inline-block", margin: "5px", verticalAlign: "middle" }}>PlantHaus</h1>
                < Menu />
                < Carousel />
                < SocialMedia />
                < Instgram />
                {/* < EmailJS /> */}
            </div>
        )
    }
}
