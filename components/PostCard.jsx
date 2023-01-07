import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from 'aos';
// carousel
import { Carousel } from 'react-responsive-carousel';
// styles
import styles from '../Styles/PostCard.module.css';
import Link from 'next/link';

const PostCard = ({ posts }) => {


    useEffect(() => {
        Aos.init({ duration: 2000 })
        console.log(posts);
    }, [])

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 2,
        },
        780: {
            items: 3
        }
    };

    let items = <div className={styles.sliderContainer} data-aos="fade-left">

        <Link className={styles.linkContainer} href={`/`}>
            <img src={posts.photoCover?.url}
                className={styles.imgSlider}
                alt="cover" />
            <p >
                {posts.title}
            </p>
        </Link>
    </div>

    return (
        <div >
            <Carousel
            >

                <div>
                    <img src={posts.photoCover.url} alt="image1" />
                    <p className="legend">{posts.title}</p>
                </div>
            </Carousel>
        </div>
    );
};


export default PostCard;