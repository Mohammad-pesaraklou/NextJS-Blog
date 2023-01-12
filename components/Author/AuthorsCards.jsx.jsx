import { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material'
import Aos from 'aos';
import Link from 'next/link';
import { useContext } from 'react';
// styles
import styles from './style.module.css';
// component
import { slicer } from '../../helper/functions'
// context
import { ThemeContext } from '../../context/ThemeContextProvider';

const AuthorsCards = ({ authors }) => {


    const [toggle, setToggle] = useState(false);
    const { setActiveNav } = useContext(ThemeContext)

    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, []);


    const themeHandler = (e) => {
        setActiveNav(e.target.textContent)
        setToggle(true)
    }


    return (
        <div>
            {
                authors?.map(item => {
                    return (
                        <div className={styles.container} key={item.slug}>
                            <Grid container spacing={10}>
                                <Grid item sm={12}>
                                    <Card className={styles.cardContainer} sx={{ maxWidth: 745, mb: 3, mt: 5 }} data-aos="fade-left">
                                        <CardMedia
                                            sx={{ height: 700 }}
                                            image={item?.avatar.url}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item?.title}
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
                                                        {item.name}
                                                    </p>
                                                </h5>
                                            </div>
                                            <p style={{ fontFamily: 'Josefin Sans' }}>
                                                {
                                                    slicer(item.description.text)
                                                }
                                            </p>
                                        </CardContent>
                                        <Link href={`/`} >
                                            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, gap: '10px' }}>
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
                                                        sx={{ fontFamily: "Josefin Sans", color: "white" }}
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
                                                {
                                                    toggle ?
                                                        <Button size="medium" onClick={themeHandler} variant='disabled' sx={{ fontFamily: "Josefin Sans", fontSize: '17px' }}>Pending..</Button> :
                                                        <Link href={`/authors/${item.slug}`}>
                                                            <Button size="medium" onClick={themeHandler} variant='contained' color="secondary" sx={{ fontFamily: "Josefin Sans", color: 'white' }}>Read More</Button>
                                                        </Link>
                                                }
                                            </CardActions>
                                        </Link>
                                    </Card>
                                </Grid>

                            </Grid>
                        </div >
                    )
                })
            }
        </div>
    );
};

export default AuthorsCards;