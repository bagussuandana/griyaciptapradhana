import { Menu } from '@mui/icons-material'
import { AppBar, Avatar, IconButton, SwipeableDrawer, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
export default function NavBar(props) {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const [openDrawer, setOpenDrawer] = useState(false);
    const routes = [
        { name: 'Home', link: '/', activeIndex: 0 },
        { name: 'Profile', link: '/about', activeIndex: 1 },
        { name: 'Biaya Jasa', link: '/price', activeIndex: 2 },
        { name: 'Desain 2D-3D', link: '/design', activeIndex: 3 },
        { name: 'Proyek', link: '/project', activeIndex: 4 },
        { name: 'Konstruksi Baja', link: '/steel', activeIndex: 5 },
        { name: 'Furniture', link: '/furniture', activeIndex: 6 },
    ]
    useEffect(() => {
        routes.forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                    } break;
                default:
                    break;
            }
        })
    }, [props.value, routes, props])
    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    };
    const tabs = (
        <React.Fragment>
            <Tabs
                value={props.value}
                onChange={handleChange}
                aria-label="GCP Navigation"
                textColor="inherit"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
            >
                {routes.map((route, i) => (
                    <Tab key={i} label={route.name} component={Link} to={route.link} />
                ))}
            </Tabs>
        </React.Fragment>
    )
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                anchor="right"
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
            >
                <Tabs
                    value={props.value}
                    onChange={handleChange}
                    aria-label="GCP Navigation"
                    textColor="inherit"
                    indicatorColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    orientation="vertical"
                    sx={{marginTop: "4em"}}
                >
                    {routes.map((route, i) => (
                        <Tab onClick={() => setOpenDrawer(false)} key={i} label={route.name} component={Link} to={route.link} />
                    ))}
                </Tabs>
            </SwipeableDrawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                color="inherit"
            >
                <Menu />
            </IconButton>
        </React.Fragment>
    )
    return (
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.modal + 1 }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    component={Link}
                    to="/"
                    onClick={() => props.setValue(0)}
                >
                    <Avatar alt="CV. Griya Cipta Pradhana" src={logo} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {matchesSM ? 'CV. GCP' : 'CV. Griya Cipta Pradhana'}
                </Typography>
                {matchesMD ? drawer : tabs}
            </Toolbar>
        </AppBar>
    )
}
