import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Aos from 'aos';
import Link from 'next/link';
import { useEffect } from 'react';
// style
import styles from '../styles/AuthorDetails.module.css';


const AuthorPost = ({ posts }) => {


    console.log(posts);

    useEffect(() => {
        Aos.init({ duration: 2000 })
        
    })

    return (
        <div className={styles.container}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        mb: 5,
                        width: 400,
                        p: 2
                    },
                }}
                data-aos="fade-left"

            >

                <Paper elevation={3}
                    className={styles.box}
                >
                    <div className={styles.headerContainer}>
                        <h1 className={styles.header}>Author Posts</h1>
                    </div>

                    <div>
                        {
                            posts.posts.map(item => {
                                console.log(item);
                                return (
                                    <Link href={`/posts/${item.slug}`}>
                                        <div className={styles.container}>
                                            <div className={styles.text}>
                                                <img className={styles.photo} src={item.photoCover.url} />
                                                <li style={{ listStyleType: 'none' }}>{item.title}</li>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                </Paper>
            </Box>
        </div>
    );
};

export default AuthorPost;