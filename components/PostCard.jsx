import { useEffect, useState } from 'react';
import Aos from 'aos';
import Link from 'next/link';
// carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// styles
import styles from '../Styles/PostCard.module.css';
// data
import { getFeaturedPost } from '../services';

const PostCard = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        Aos.init({ duration: 2000 })
        getFeaturedPost().then(res => {
            setPosts(res.posts)
        })
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

    const handleDragStart = (e) => e.preventDefault();

    let items = posts?.map((i, indx) => {
        return (
            <div className={styles.sliderContainer} data-aos="fade-left" key={indx}>

                <Link className={styles.linkContainer} href={`/posts/${i.slug}`}>
                    <img src={i.photoCover?.url}
                        className={styles.imgSlider}
                        alt="cover"
                        onDragStart={handleDragStart}
                    />
                    <p className={styles.text}>
                        {i.title}
                    </p>
                </Link>
            </div>
        )
    })



    return (
        <div className={styles.container}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        </div>
    );
};



export default PostCard;

