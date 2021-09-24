import { Add, FacebookOutlined, Instagram } from '@mui/icons-material';
import { Container, Grid, IconButton, Link as MLink, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {' Copyright © '}
            <MLink color="inherit" href="https://d.visiarch.com/">
                d.visiarch.com
            </MLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    { name: 'Biaya Jasa', link: '/price', activeIndex: 1 },
    { name: 'Desain 2D-3D', link: '/design', activeIndex: 2 },
    { name: 'Proyek', link: '/project', activeIndex: 3 },
    { name: 'Konstruksi Baja', link: '/steel', activeIndex: 4 },
    { name: 'Furniture', link: '/furniture', activeIndex: 5 },
]
export default function Footer(props) {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <section>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.secondary.main,
                }}
            >
                <Container>
                    <Typography variant="h1" sx={{
                        marginTop: "-1.1em",
                        fontWeight: 900,
                        color: theme.palette.secondary.main
                    }}>
                        {matchesMD ? 'GCP' : 'Griya Cipta Pradhana'}
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} md={8} sx={{ color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                KONTRAKTOR , BUILDING CONTRACTOR , VILLA BUILDER, SWIMMING POOL BUILDER
                            </Typography>
                            <Grid container>
                                <Grid item>

                                    <Grid container sx={{ marginTop: '1em' }}>

                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h5" color="inherit">Tags</Typography>
                                            <Typography sx={{ margin: "2em" }} paragraph color="inherit" align="justify">
                                                #kontraktordibali #kontraktorbangunandibali #buildingcontractorinbali #villacontractorinbali #villabuilderinbali #buildingcontractorinbali #VillaContractorinBali #swimmingpoolinbali #howtobuildhouseinbali #borongan rumah #designbangunan #gambar kerja #imb #bangunrumahmurah #bangunkoskosan #bangunruko #villa #membuatkolamrenang #bisnisproperty di bali
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="h5" color="inherit">Sitemap</Typography>
                                            <List>
                                                {routes.map((route, i) => (
                                                    <ListItem key={i} component={Link} to={route.link} onClick={() => props.setValue(route.activeIndex)}>
                                                        <ListItemIcon sx={{color: 'whitesmoke'}}>
                                                            <Add/>
                                                        </ListItemIcon>
                                                        <ListItemText sx={{textTransform: 'none', color: 'whitesmoke'}}>{route.name}</ListItemText>
                                                    </ListItem>
                                                ))}

                                            </List>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container justifyContent="flex-end" alignContent="center" alignItems="center" sx={{ margin: "3em 0", color: 'white' }}>
                                        <Typography variant="h6" color="inherit" sx={{ marginRight: '1em' }}>Find Us</Typography>
                                        <IconButton color="inherit">
                                            <FacebookOutlined />
                                        </IconButton>
                                        <IconButton color="inherit">
                                            <Instagram />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Paper sx={{ padding: '0.2em' }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7139.2620831508075!2d115.201849!3d-8.637145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1ab227e8529a793!2sCV.%20Griya%20Cipta%20Pradhana%20-%20Kontraktor%20Bangunan%20di%20Bali%2C%20Building%20Contractor%20in%20Bali!5e1!3m2!1sen!2sid!4v1632456364054!5m2!1sen!2sid"
                                            width="100%"
                                            height="250"
                                            loading="lazy"></iframe>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Box
                component="footer"
                sx={{
                    py: 2,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>

        </section>
    )
}
