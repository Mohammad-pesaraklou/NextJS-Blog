import { useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material'
import Aos from 'aos';
import Link from 'next/link';
// styles
import styles from '../styles/Landing.module.css';
// helper function
import { slicer } from '../helper/functions';
// component
import Loader from '../components/Loader';
import AuthorPost from './AuthorPost';


const AuthorCard = ({ data }) => {


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Container>
            <div className={styles.container}>
                <Grid container spacing={10}>
                    <Grid item sm={12} md={6}>
                        <Card className={styles.cardContainer} sx={{ maxWidth: 745, mb: 3, mt: 5 }} data-aos="fade-left">
                            <CardMedia
                                sx={{ height: 500 }}
                                image={data.author?.avatar.url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.author?.title}
                                </Typography>
                                <div className={styles.authorSection}>
                                    <h5
                                        style={{
                                            display: "flex",
                                            gap: "5px",
                                            fontFamily: "Josefin Sans",
                                            color: "#f59115",
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        Created By:{" "}
                                        <p style={{ color: "#212120" }}>
                                            {data.author.name}
                                        </p>
                                    </h5>
                                </div>
                                <p style={{ fontFamily: 'Josefin Sans' }}>
                                    {data.author?.description.text}
                                </p>
                            </CardContent>
                            <Link href={`/`} >
                                <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                                    <Button size="medium" variant='contained' sx={{ fontFamily: "Josefin Sans" }}>Back Home</Button>
                                </CardActions>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <AuthorPost posts={data} />
                    </Grid>
                </Grid>
            </div >
        </Container>
    );
};

export default AuthorCard;