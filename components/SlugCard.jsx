import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Container,
} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import Aos from "aos";
// function
import { slicer } from "../helper/functions";
// style
import styles from '../styles/SlugCard.module.css';
import { ThemeContext } from '../context/ThemeContextProvider';


const MainCard = ({ posts }) => {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <div>
            {
                posts?.map((item, index) => {
                    return (
                        <div className={styles.container} key={index}>
                            <Card
                                sx={{ maxWidth: 845, mb: 3, mt: 5 }}
                                data-aos="fade-left"
                                className={styles.cardContainer}
                            >
                                <CardMedia
                                    sx={{ height: 500 }}
                                    image={item.node.photoCover.url}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ my: 3 }}
                                    >
                                        {item.node.title}
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
                                            <p style={{ color: "#212120" }} >
                                                <Link href={`/authors/${item.node.author.slug}`} className={styles.linkText}>
                                                    {item.node.author.name}
                                                </Link>
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
                                            Created At:{" "}
                                            <p style={{ color: "#212120" }}>
                                                {moment(item.node.createdAt).format("MMM DD, Y")}
                                            </p>
                                        </h5>
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: "Josefin Sans",
                                            lineHeight: "30px",
                                        }}
                                    >
                                        {slicer(item.node.text.text)}
                                    </p>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        my: 2,
                                    }}
                                >

                                    <Link href={`/posts/${item.node.slug}`}>
                                        {
                                            toggle ? <Button variant='disabled' sx={{ fontFamily: 'Josefin Sans' }}>Pending..</Button> :
                                                <Button
                                                    color="secondary"
                                                    size="medium"
                                                    variant="contained"
                                                    sx={{ fontFamily: "Josefin Sans", color: 'wheat' }}
                                                    onClick={() => setToggle(true)}
                                                >
                                                    Read More
                                                </Button>
                                        }
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
};

export default MainCard;