import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBinoculars} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail />,
                title: "Food and Drink",
                info: " is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaHiking />,
                title: "Endless Hiking",
                info: " is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaShuttleVan />,
                title: "Car Park",
                info: " is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaBinoculars />,
                title: "Bird-Watching",
                info: " is simply dummy text of the printing and typesetting industry."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Discover activities"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
