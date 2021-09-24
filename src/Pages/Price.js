import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Guest from '../Layouts/Guest'
import img1 from '../Assets/Price/price (1).jpg'
import img2 from '../Assets/Price/price (2).jpg'
import img3 from '../Assets/Price/price (3).jpg'
import img4 from '../Assets/Price/price (4).jpg'
import Header from '../Components/Header'
export default function Price() {
    return (
        <Container>
            <Header>Biaya Jasa/ Service Cost</Header>
            <Typography sx={{margin: "2em 0"}} align="justify" variant="h6">Jasa yang kami tawarkan untuk Anda adalah jasa arsitek, kontraktor / pemborong di Bali, yang meliputi jasa:</Typography>
            <Grid container spacing={1}>
                <Grid item xs={6} md={3}>
                    <img src={img1} alt="img 1" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={img2} alt="img 2" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={img3} alt="img 3" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={img4} alt="img 4" style={{width: "100%"}}/>
                </Grid>
            </Grid>
            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            1. Jasa di bidang kontraktor / pemborong dengan  tenaga professional. Harga mulai Rp 3.600.000 per m2.
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            (untuk perhitungan biaya ini kami cenderung menggunakan volume - spesifikasi dari bahan yang digunakan dan kerumitan dalam mengerjakan bangunan itu sendiri, banyak orang menganggap secara umum untuk menentukan biaya bangunan dapat di hitung dari luas bangunan m2 ( Panjang X Lebar ), padahal sebenarnya banyak kriteria yang dapat menentukan besarnya biaya membangun, seperti : bentuk design, ornamen/hiasan tambahan,  jenis material, lokasi membangun, keadaan tanah, akses transportasi, hasil finishing yg biasa atau sangat bagus, lama pengerjaan yg diminta, garansi).
            </Typography>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            2. Pengolahan Siteplan = Rp. 1.000 – 5.000 / m2.
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            Pemahaman kondisi sekitar serta pembuatan layout jalan dan kavling.
            </Typography>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            3. Pembuatan Konsep dan Perencanaan Arsitektural = Rp. 50.000 – 100.000 / m2
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            Gambar Pra-rencana, pemilihan tema desain, studi fasade, dan perencanaan denah.
            </Typography>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            4. Pembuatan Rancangan Teknik Terinci = Rp. 25.000 – 50.000 / m2
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            Berupa pembuatan Gambar Kerja sebagai acuan pengerjaan oleh tukang di lapangan Meliputi gambar2 rencana dan detail yang diperlukan dalam pembangunan.
            </Typography>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            5. Perhitungan Struktur = Rp. 10.000 – 20.000 / m2
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            Penentuan spesifikasi dan dimensi elemen struktur dari konstruksi rumah 1 dan 2 lantai.  Hitungan dan Gambar Struktur untuk melengkapi RAB.
            </Typography>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            6. Pembuatan Perspektif Interior / Eksterior  = Rp. 500.000 – 1.000.000 / view
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            3Studio MAX image with V-ray rendering dan material mapping (foto realistis) view ditentukan oleh klien.
            </Typography>

            
            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            7. Pembuatan RAB  = Rp. 10.000 – 15.000 / m2
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            Penentuan spesifikasi dan harga bangunan serta perkiraan harga pokok pembangunan.
            </Typography>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginTop: "2em"}}>
            8. Pembuatan Gambar IMB = Rp. 15.000 – 18.000 / m2
            </Typography>
            <Typography paragraph align="justify" sx={{marginTop: "1em"}}>
            Gambar arsitektur disediakan oleh owner  .
            </Typography>
        </Container>
    )
}
