import { Typography } from '@mui/material'
import React from 'react'

export default function Header(props) {
    return (
        <div style={{marginTop: '8em', marginBottom: '3em'}}>
            <Typography variant="h2" color="secondary">{ props.children}</Typography>
        </div>
    )
}
