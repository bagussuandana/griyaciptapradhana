import { Grid } from '@mui/material'
import React from 'react'

export default function Error(props) {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                {props.children}
            </Grid>
        </Grid>
    )
}
