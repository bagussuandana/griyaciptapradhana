import React, { useState } from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

export default function Guest(props) {
    const [value, setValue] = useState(0);
    return (
        <section>
            <NavBar value={value} setValue={setValue} />
            <div style={{ marginBottom: "4em" }}></div>
            {props.children}
            <div style={{ marginBottom: "8em" }}></div>
            <Footer value={value} setValue={setValue} />
        </section>
    )
}
