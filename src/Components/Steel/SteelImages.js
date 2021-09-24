import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import image1 from '../../Assets/Baja/baja (1).jpg'
import image2 from '../../Assets/Baja/baja (2).jpg'
import image3 from '../../Assets/Baja/baja (3).jpg'
import image4 from '../../Assets/Baja/baja (4).jpg'
import image5 from '../../Assets/Baja/baja (5).jpg'
import image6 from '../../Assets/Baja/baja (6).jpg'



export default function SteelImages() {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <section>
            <div style={{
                    columns: `${matchesMD ? 1 : 3}`,
                    columnGap: '5px'
                }}>
                    {projects.map((img, i) =>
                        <figure key={i} style={{margin: 0}}>
                            <img src={img.img} alt={img.title}  style={{ width: '100%' }} />
                        </figure>
                    )}
                </div>
        </section>
    )
}
const projects = [
    { img: image1, title: 'image_1' },
    { img: image2, title: 'image_2' },
    { img: image3, title: 'image_3' },
    { img: image4, title: 'image_4' },
    { img: image5, title: 'image_5' },
    { img: image6, title: 'image_6' },
]