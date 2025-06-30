'use client'


import FancyParallax from './FancyParallax'
import { ParallaxProvider } from 'react-scroll-parallax'

function Parax() {
    return (
        <ParallaxProvider>
            <FancyParallax />
        </ParallaxProvider>
    )
}

export default Parax