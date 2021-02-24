import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail />,
                title: "Free Cocktails",
                info: " is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaHiking />,
                title: "Endless Hiking",
                info: " is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaShuttleVan />,
                title: "Free Shuttle",
                info: " is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaBeer />,
                title: "Strongest Beer",
                info: " is simply dummy text of the printing and typesetting industry."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services"/>
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
