import { useContext } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Aos from 'aos';
import Link from 'next/link';
import { useEffect } from 'react';
import { BiFootball } from 'react-icons/bi';
import { ThemeContext } from '../context/ThemeContextProvider';
// style
import styles from '../styles/Category.module.css';

const Category = ({ categories }) => {

    const { activeNav, setActiveNav } = useContext(ThemeContext)

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

                    <div>

                        <div className={styles.text}>
                            <Link href={`/category/football-club`}>
                                <li onClick={(e) => setActiveNav(e.target.textContent)}>Football CLub</li>
                            </Link>
                        </div>
                        <div className={styles.text}>
                            <Link href={`/category/football-player`}>
                                <li onClick={(e) => setActiveNav(e.target.textContent)}>Football Player</li>
                            </Link>
                        </div>
                    </div>

                </Paper>
            </Box>
        </div>
    );
};

export default Category;