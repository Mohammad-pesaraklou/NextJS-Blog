import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Aos from 'aos';
import Link from 'next/link';
import { useEffect } from 'react';
import { BiFootball } from 'react-icons/bi';
// style
import styles from '../styles/Category.module.css';

const Category = ({ categories }) => {

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
                        m: 1,
                        width: '80%',
                        height: 328,
                    },
                }}
                data-aos="fade-left"
            >

                <Paper elevation={3}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.header}>Categories</h1>
                    </div>
                    {categories.map(item => {
                        return (
                            <div key={item?.id}>

                                <div className={styles.text}>
                                    <Link href={`/category/:${item.slug}`}>
                                        <li>{item?.name}</li>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </Paper>
            </Box>
        </div>
    );
};

export default Category;