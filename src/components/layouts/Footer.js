import React, { useEffect, useRef } from 'react'

export default function Footer({ footHeightSet }) {
    const footerRef = useRef(null)
    useEffect(() => {
        if (footerRef.current) {

            let footerheight = footerRef.current.offsetHeight;
            footHeightSet(footerheight)

        }
    }, [footerRef, footHeightSet])
    return (
        <footer ref={footerRef}>
            <p>Hello</p>
        </footer>
    )
}
