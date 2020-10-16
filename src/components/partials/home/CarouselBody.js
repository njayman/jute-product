import React, { useState, useEffect } from 'react'
import Jute1 from '../../../static/jute1.jpeg'
import Jute2 from '../../../static/jute2.jpg'
import Jute3 from '../../../static/jute3.jpeg'
import Jute4 from '../../../static/jute4.jpeg'
import Jute5 from '../../../static/jute5.jpg'
const desdata = [{
    image: Jute1,
    name: "Basket",
    description: "Basket made from fine jute fibres"
}, {
    image: Jute2,
    name: "Vanity bag",
    description: "Vanity bag made from fine jute fibres"
}, {
    image: Jute3,
    name: "Shopping bag",
    description: "Shopping bag made from fine jute fibres"
}, {
    image: Jute4,
    name: "Transparent bag",
    description: "Transparent bag made from fine jute fibres"
}, {
    image: Jute5,
    name: "Sack",
    description: "Sacks made from fine jute fibres"
},]

export default function CarouselBody() {
    const [descriptions] = useState(desdata)
    const [desno, setDesno] = useState(0)
    useEffect(() => {
        const changedesc = setTimeout(() => {
            if (desno === descriptions.length - 1) {
                setDesno(0)
            } else {
                setDesno(d => d + 1)
            }
        }, 2000)
        return clearTimeout(changedesc)
    }, [desno, descriptions.length])
    return (
        <div className="carousel-body">
            <img className="carousel-img" src={descriptions[desno].image} alt={descriptions[desno].name} />
            <h3>{descriptions[desno].name}</h3>
            <p>{descriptions[desno].description}</p>
        </div>
    )
}

