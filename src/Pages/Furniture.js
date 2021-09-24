import { Container } from '@mui/material'
import React from 'react'
import FurnitureImages from '../Components/Furniture/FurnitureImages'
import Header from '../Components/Header'
import Guest from '../Layouts/Guest'

export default function Furniture() {
    return (
        <section>
            <Container>
                <Header>Furniture</Header>
                <FurnitureImages />
            </Container>
        </section>
    )
}
