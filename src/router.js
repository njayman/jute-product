import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Main from './components/layouts/Main';
export default function Routes({ navHeightSet, footHeightSet, subHeight }) {
    const [subtractHeight, setSubtractHeight] = useState()
    useEffect(() => {
        setSubtractHeight(subHeight)
    }, [subHeight])
    return (
        <React.Fragment>
            <Router>
                <Navbar navHeightSet={nh => navHeightSet(nh)} />
                <div style={{ minHeight: `calc(100vh - ${subtractHeight}px)` }}>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/product" component={Products} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
                <Footer footHeightSet={fh => footHeightSet(fh)} />
            </Router>
        </React.Fragment>
    )
}
