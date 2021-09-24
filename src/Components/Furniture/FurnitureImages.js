import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import image1 from '../../Assets/Furniture/mebel (1).jpg'
import image2 from '../../Assets/Furniture/mebel (2).jpg'
import image3 from '../../Assets/Furniture/mebel (3).jpg'
import image4 from '../../Assets/Furniture/mebel (4).jpg'
import image5 from '../../Assets/Furniture/mebel (5).jpg'
import image6 from '../../Assets/Furniture/mebel (6).jpg'
import image7 from '../../Assets/Furniture/mebel (7).jpg'
import image8 from '../../Assets/Furniture/mebel (8).jpg'
import image9 from '../../Assets/Furniture/mebel (9).jpg'
import image10 from '../../Assets/Furniture/mebel (10).jpg'
import image11 from '../../Assets/Furniture/mebel (11).jpg'
import image12 from '../../Assets/Furniture/mebel (12).jpg'
import image13 from '../../Assets/Furniture/mebel (13).jpg'
import image14 from '../../Assets/Furniture/mebel (14).jpg'
import image15 from '../../Assets/Furniture/mebel (15).jpg'
import image16 from '../../Assets/Furniture/mebel (16).jpg'
import image17 from '../../Assets/Furniture/mebel (17).jpg'
import image18 from '../../Assets/Furniture/mebel (18).jpg'
import image19 from '../../Assets/Furniture/mebel (19).jpg'
import image20 from '../../Assets/Furniture/mebel (20).jpg'
import image21 from '../../Assets/Furniture/mebel (21).jpg'
import image22 from '../../Assets/Furniture/mebel (22).jpg'
import image23 from '../../Assets/Furniture/mebel (23).jpg'
import image24 from '../../Assets/Furniture/mebel (24).jpg'
import image25 from '../../Assets/Furniture/mebel (25).jpg'

export default function FurnitureImages() {
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
    { img: image7, title: 'image_7' },
    { img: image8, title: 'image_8' },
    { img: image9, title: 'image_9' },
    { img: image10, title: 'image_10' },
    { img: image11, title: 'image_11' },
    { img: image12, title: 'image_12' },
    { img: image13, title: 'image_13' },
    { img: image14, title: 'image_14' },
    { img: image15, title: 'image_15' },
    { img: image16, title: 'image_16' },
    { img: image17, title: 'image_17' },
    { img: image18, title: 'image_18' },
    { img: image19, title: 'image_19' },
    { img: image20, title: 'image_20' },
    { img: image21, title: 'image_21' },
    { img: image22, title: 'image_22' },
    { img: image23, title: 'image_23' },
    { img: image24, title: 'image_24' },
    {img: image25, title: 'image_25'},
]