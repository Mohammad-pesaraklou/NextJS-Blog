import { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
import Aos from 'aos';
import Link from 'next/link';
import { useRouter } from 'next/router';
// styles
import styles from '../styles/Landing.module.css';
// helper function
import { slicer } from '../helper/functions';
// component
import Loader from '../components/Loader';
import moment from 'moment';


const LandingPosts = ({ mainPosts }) => {

    const [toggle, setToggle] = useState(false)

    const router = useRouter()

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    if (router.isFallback) {
        return <Loader />
    }


    return (
        <div className={styles.container}>
            {
                mainPosts?.map(item => {
                    return (
                        <Card className={styles.cardContainer} sx={{ maxWidth: 545, mb: 3, mt: 5 }} key={item.id} data-aos="fade-left">
                            <CardMedia
                                sx={{ height: 300 }}
                                image={item?.photoCover.url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item?.title}
                                </Typography>
                                <div className={styles.authorSection}>
                                    <h5
                                        className={styles.authorHeadText}
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
                                            {item.author.name}
                                        </p>
                                    </h5>
                                    <h5
                                        className={styles.authorHeadText}
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
                                            {moment(item.createdAt).format("MMM DD, Y")}
                                        </p>
                                    </h5>
                                </div>
                                <p style={{ fontFamily: 'Josefin Sans' }}>
                                    {slicer(item?.text.text)}
                                </p>
                            </CardContent>
                            <Link href={`posts/${item?.slug}`} >
                                <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                                    {
                                        toggle ?
                                            <Button size="medium" onClick={() => setToggle(!toggle)} variant='disabled' sx={{ fontFamily: "Josefin Sans", fontSize: '17px' }}>Pending..</Button> :
                                            <Button size="medium" onClick={() => setToggle(!toggle)} variant='contained' sx={{ fontFamily: "Josefin Sans" }}>Read More</Button>
                                    }
                                </CardActions>
                            </Link>
                        </Card>
                    )
                })
            }
        </div >
    );
};

export default LandingPosts;