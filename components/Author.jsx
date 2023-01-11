import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
// Data
import { getAuthors } from '../services';
// style
import styles from '../styles/Category.module.css';


const Author = () => {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2000 })
        getAuthors().then((res) => {
            console.log(res);
            setAuthor(res.authors)
        })
    }, [])

    return (
        <div className={styles.container}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 300,
                        height: 328,
                    },
                }}
                data-aos="fade-left"

            >

                <Paper elevation={3}
                    className={styles.box}
                >
                    <div className={styles.headerContainer}>
                        <h1 className={styles.header}>Authors</h1>
                    </div>
                    {
                        author?.map(item => {
                            return (
                                <div key={item?.id}>

                                    <Link href={`/authors/${item.slug}`}>
                                        <div className={styles.authorText}>
                                            <img className={styles.avatar} src={item.avatar.url} alt={"avatar image"} />
                                            <li style={{ listStyleType: 'none' }}>{item?.name}</li>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Paper>
            </Box>
        </div>
    );
};

export default Author;