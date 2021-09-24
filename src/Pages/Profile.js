import { FiberManualRecord } from '@mui/icons-material'
import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import Link from '@mui/material/Link';
export default function Profile() {
    return (
        <Container>
            <Header>Company Profile</Header>
            <Typography variant="body1" align="justify" sx={{ marginTop: '2em' }}>
                CV. Griya Cipta Pradhana memiliki ijin dengan No SIUP.858/22-08/PK/XI/2010 dan Tanda Daftar Perusahaan.220837005029 dengan Alamat kantor di  Jl. Pidada III No 8 Denpasar Utara – Bali
            </Typography>
            <Typography paragraph align="justify" sx={{ fontStyle: 'italic', color: 'GrayText' }}>
                CV. Cipta Griya Pradhana has business permit No. SIUP.858 / 22-08 / PK / XI / 2010 and company Certificate of Registration no : .220837005029 with office address at Jalan Pidada III No 8 Dnpasar Utara - Bali
            </Typography>

            <Typography variant="body1" align="justify" sx={{ marginTop: '2em' }}>
                Untuk menjadi perusahaan Konstruksi yang berkelanjutan, terpercaya , integritas yang kuat, inovatif, kreatif dan kepuasan klien kami berorientasi dengan menerapkan teknik terbaru dan sistem berbasis teknologi konstruksi terbaru dari sudut pandang Engineering Design, Material, Produk, Sumber Daya Manusia, Cuaca dan Peralatan.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ fontStyle: 'italic', color: 'GrayText' }}>
                To be sustainable and trusted construction company, strong integrity, innovative, creative and client satisfaction oriented by applying newest technic  and system, base on the latest construction technology from point of view Engineering Design, Material, Product, Human Resources, Wheather and Equipments.
            </Typography>

            <Typography variant="body1" align="justify" sx={{ marginTop: '2em' }}>
                Dengan hal tersebut harapan kami kedepannya dapat mempertahankan yang terbaik hubungan dengan pelanggan dalam jangka panjang dan berkelanjutan.
                kami berinvestasi dalam penelitian dan pembangunan berkelanjutan untuk revolusi metode konstruksi dengan Inovasi, Reinvention, Rekreasi, Redesign, Reengineering dan Mengintegrasikan semua aspek untuk melakukan nilai yang sangat baik. Memberdayakan sumber daya manusia terus menerus dalam kontribusi profesional kepada pelanggan, perusahaan, tim dan jasa konstruksi di Bali.
            </Typography>
            <Typography variant="body1" align="justify" sx={{ fontStyle: 'italic', color: 'GrayText' }}>
                With the hope that we can maintain the best future customer relationships over the long term and sustainable. we invest in research and sustainable development for the revolution construction methods with innovation, Reinvention, Recreation, Redesign, Reengineering and Integrating all aspects to do a very good value. Empowering human resources continuously in professional contribution to customers, companies, teams and construction services in Bali.
            </Typography>

            <Typography paragraph align="justify" sx={{ marginTop: '2em' }}>
                Saat ini CV. Griya Cipta Pradhana telah mengerjakan beberapa proyek dari konsumen dan juga proyek pribadi, antara lain yaitu : Proyek Pribadi di Pererenan Tumbak Bayuh ( rumah bertingkat type 65m2 dengan luas tanah 200m2), Proyek Konsumen Rumah Kos di  Penatih seluas 70m2, Proyek Konsumen ruko di jalan Diponegoro (lantai 3), Proyek Rumah Kost mewah di Pemogan (lantai 2, 10 Kamar ),proyek Rumah 4 Unit di Bypass pemogan, Proyek Villa di Tabanan, Proyek Rumah type 110 di Penamparan gatsu, Proyek Rumah type 100 Di tabanan, Proyek Rumah type 225 Di Cimahi Bandung, Proyek Renovasi Villa di Batu Bolong Canggu, Proyek Renovasi Villa Di Jl Nelayan canggu, Proyek Rumah type 55 2 Unit di Goa Gong Ungasan, Proyek partisi Gudang Di Gianyar, Proyek Rumah type 135 di Singaraja, Proyek Villa 3 Lantai di Goa Gong, Proyek Villa Di Seminyak, Renovasi Rumah Mewah di Sesetan, Renovasi Ruang Reception Villa di Canggu, Proyek Botique shop di canggu, Proyek Toko 3 unit di Tabanan, Proyek Rumah Lt2 di Sanur, Proyek Gudang Baja Berat & Kantor Lantai 3 di Suradipa - Ahmad yani Denapasar, Proyek Hotel dan Villa di Lovina, Proyek Struktur Pabrik Minyak Kutus Kutus dan beberapa proyek design perumahan  maupun rumah pribadi.
            </Typography>
            <Grid container spacing={3} sx={{ margin: '3em 0' }}>
                <Grid item>
                    <Link sx={{textTransform: 'none', textDecoration: 'none'}} href="https://api.whatsapp.com/send?phone=6281238610811&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target='_blank'>
                        <Button variant="contained">Contact US</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="mailto:sandi@griyaciptapradhana.com" target="_blank" sx={{textTransform: 'none', textDecoration: 'none'}}>
                    <Button variant="outlined">Email US</Button>
                    </Link>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item sx={{ color: 'red' }}>
                    <FiberManualRecord />
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        KAMI BERIKAN DESIGN / GAMBAR, PRESENTASI, SOLUSI RUMAH YG ANDA HARAPKAN SECARA GRATIS.........
                    </Typography>
                </Grid>
            </Grid>

        </Container>
    )
}
