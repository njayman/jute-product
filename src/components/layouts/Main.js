import React from 'react'
import HomeBody from '../partials/home/Body'
import Calltoaction from '../partials/home/Calltoaction'
import CarouselBody from '../partials/home/CarouselBody'

export default function Main() {
    return (
        <div>
            <div className="scroll-bg">
                <Calltoaction />
                <CarouselBody />
            </div>
            <div className="container">
                <HomeBody />
            </div>
        </div>
    )
}
