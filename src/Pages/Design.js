import { Container } from '@mui/material'
import React from 'react'
import DesignImages from '../Components/Design/DesignImages'
import Header from '../Components/Header'

export default function Design() {
    return (
        <section>
            <Container>
                <Header>Design 2D & 3D</Header>
                <DesignImages />
            </Container>
        </section>
    )
}