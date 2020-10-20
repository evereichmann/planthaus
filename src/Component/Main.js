import React, { Component } from 'react'
import Menu from './Menu'
import Carousel from './Carousel'
import EmailJS from './EmailJS'

export default class Main extends Component {
    render() {
        return (
            <div style={{border: "2px solid black", padding: "1%"}}>
                <h1>PlantHaus</h1>
                < Menu />
                < Carousel />
                < EmailJS />
            </div>
        )
    }
}
