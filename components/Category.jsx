import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Aos from 'aos';
import Link from 'next/link';
// context
import { ThemeContext } from '../context/ThemeContextProvider';
// data
import { getCategory } from '../services';
// style
import styles from '../styles/Category.module.css';

const Category = () => {

    const [categories, setCategories] = useState(null)
    const { activeNav, setActiveNav } = useContext(ThemeContext)

    const themeHandler = (e) => {
        setActiveNav(e.target.textContent)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
        getCategory().then(res => {
            setCategories(res.categories)
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
                        <h1 className={styles.header}>Categories</h1>
                    </div>
                    {categories?.map(item => {
                        return (
                            <div key={item?.id}>

                                <div className={styles.text}>
                                    <Link href={`/category/${item.slug}`}>
                                        <li onClick={() => setActiveNav(item.name)}>{item?.name}</li>
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