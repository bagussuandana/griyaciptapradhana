import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import rumah1 from '../Assets/Home/rumah (1).jpg'
import rumah2 from '../Assets/Home/rumah (2).jpg'
import rumah3 from '../Assets/Home/rumah (3).jpg'
import villa1 from '../Assets/Home/villa (1).jpg'
import villa2 from '../Assets/Home/villa (2).jpg'
import villa3 from '../Assets/Home/villa (3).jpg'
import ruko1 from '../Assets/Home/ruko (1).jpg'
import ruko2 from '../Assets/Home/ruko (2).jpg'
import ruko3 from '../Assets/Home/ruko (3).jpg'
import kos1 from '../Assets/Home/kos1.jpg'
import kos2 from '../Assets/Home/kos2.JPG'
import kos3 from '../Assets/Home/kos3.jpg'
import kolam1 from '../Assets/Home/kolam (1).jpg'
import kolam2 from '../Assets/Home/kolam (2).jpg'
import kolam3 from '../Assets/Home/kolam (3).jpg'


export default function Home() {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    return (

        <Container>
            <Typography variant="h2" sx={{ marginTop: "2em", marginBottom: "1em" }}>
                CV. Griya Cipta Pradhana
            </Typography>
            <Typography variant="h6">
                KONTRAKTOR , BUILDING CONTRACTOR , VILLA BUILDER, SWIMMING POOL BUILDER
            </Typography>
            <Typography paragraph align="justify" sx={{ marginTop: '1em' }}>
                Merupakan kebanggan bagi kami dapat memperkenalkan perusahaan kami CV.GRIYA CIPTA PRADHANA kepada Anda melalui halaman profil perusahaan ini. Perusahaan kami didirikan pada tahun 2010 dan memiliki pengalaman dalam merancang - membangun berbagai proyek dari tahap awal hingga akhir yang antara lain jenis proyek yang kami kerjakan yaitu :
            </Typography>
            <Typography paragraph align="justify" sx={{ marginTop: '1em', fontStyle: 'italic' }}>
                It is a great pleasure to introduce our company CV.GRIYA CIPTA PRADHANA to you through pages of this company profile. Our company was establised in 2010 and have experiences in designing and construction various project from the preminary stage up to final construction for :
            </Typography>
            <Grid container direction='column' sx={{marginTop: '2em'}}>
                <Typography variant="h6" sx={{margin: '1em 0'}}>Rumah/House</Typography>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} md={4}>
                        <img src={rumah1} alt="rumah 1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={rumah2} alt="rumah 2" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={rumah3} alt="rumah 3" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction='column' sx={{marginTop: '2em'}}>
                <Typography variant="h6" sx={{margin: '1em 0'}}>Villa/Hotel</Typography>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} md={4}>
                        <img src={villa1} alt="villa 1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={villa2} alt="villa 2" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={villa3} alt="villa 3" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction='column' sx={{marginTop: '2em'}}>
                <Typography variant="h6" sx={{margin: '1em 0'}}>Ruko/Shop/Office</Typography>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} md={4}>
                        <img src={ruko1} alt="ruko 1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={ruko2} alt="ruko 2" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={ruko3} alt="ruko 3" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>

            
            <Grid container direction='column' sx={{marginTop: '2em'}}>
                <Typography variant="h6" sx={{margin: '1em 0'}}>Kos Kosan/Boarding House</Typography>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} md={4}>
                        <img src={kos1} alt="kos 1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={kos2} alt="kos 2" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={kos3} alt="kos 3" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction='column' sx={{marginTop: '2em'}}>
                <Typography variant="h6" sx={{margin: '1em 0'}}>Kolam Renang/Swiming Pool</Typography>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} md={4}>
                        <img src={kolam1} alt="kolam 1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={kolam2} alt="kolam 2" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={kolam3} alt="kolam 3" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>

        </Container>

    )
}
