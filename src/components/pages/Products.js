import React, { useState } from 'react'
import Jute1 from '../../static/jute1.jpeg'
import Jute2 from '../../static/jute2.jpg'
import Jute3 from '../../static/jute3.jpeg'
import Jute4 from '../../static/jute4.jpeg'
import Jute5 from '../../static/jute5.jpg'
const productObject = [{
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
}, {
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
}, {
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
}]
export default function Products() {
    const [products] = useState(productObject)
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Our products</h1>
            <div className="product-cotainer">
                {products.map((product, id) => (
                    <div key={id} className="card">
                        <img className="card-img" src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button>View details</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
