import { useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
// styles
import styles from '../styles/Landing.module.css';
// helper function
import { slicer } from '../helper/functions';
import Aos from 'aos';
import Link from 'next/link';

const LandingPosts = ({ mainPosts }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })


    return (
        <div className={styles.container}>
            {
                mainPosts?.map(item => {
                    return (
                        <Link href={`posts/${item?.slug}`}>
                            <Card sx={{ maxWidth: 545, mb: 3, mt: 5 }} key={item.id} data-aos="fade-left">
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={item?.photoCover.url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item?.title}
                                    </Typography>
                                    <p style={{ fontFamily: 'Josefin Sans' }}>
                                        {slicer(item?.text.text)}
                                    </p>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                                    <Button size="medium" variant='contained' sx={{ fontFamily: "Josefin Sans" }}>Read More</Button>
                                </CardActions>
                            </Card>
                        </Link>
                    )
                })
            }
        </div >
    );
};

export default LandingPosts;