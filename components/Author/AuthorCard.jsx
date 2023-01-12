import { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material'
import Aos from 'aos';
import Link from 'next/link';
import { useContext } from 'react';
// styles
import styles from '../../styles/Landing.module.css';
// component
import AuthorPost from './AuthorPost';
// context
import { ThemeContext } from '../../context/ThemeContextProvider';


const AuthorCard = ({ data }) => {

    const [toggle, setToggle] = useState(false);
    const { setActiveNav } = useContext(ThemeContext)

    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])

    console.log(data);

    const themeHandler = (e) => {
        setToggle(true)
        setActiveNav(e.target.textContent)
    }

    return (
        <Container>
            <div className={styles.container}>
                <Grid container spacing={10} mt={.1}>
                    <Grid item sm={12} md={6}>
                        <Card className={styles.cardContainer} sx={{ maxWidth: 745, mb: 3, mt: 5 }} data-aos="fade-left">
                            <CardMedia
                                sx={{ height: 700 }}
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
                                    <h5
                                        style={{
                                            display: "flex",
                                            gap: "5px",
                                            fontFamily: "Josefin Sans",
                                            color: "#f59115",
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        Field:{" "}
                                        <p style={{ color: "#212120" }}>
                                            {data.author.field}
                                        </p>
                                    </h5>
                                </div>
                                <p style={{ fontFamily: 'Josefin Sans' }}>
                                    {data.author?.description.text}
                                </p>
                            </CardContent>
                            <Link href={`/`} >
                                <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                                    {toggle ? (
                                        <Button
                                            variant="disabled"
                                            sx={{ fontFamily: "Josefin Sans" }}
                                        >
                                            Pending..
                                        </Button>
                                    ) : (
                                        <Button
                                            color="secondary"
                                            size="medium"
                                            variant="contained"
                                            sx={{ fontFamily: "Josefin Sans", color: "wheat" }}
                                        >
                                            back
                                            <span
                                                onClick={themeHandler}
                                                style={{ marginLeft: "3px" }}
                                                value="Home"
                                            >
                                                Home
                                            </span>
                                        </Button>
                                    )}
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