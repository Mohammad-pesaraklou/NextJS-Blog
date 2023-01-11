import Link from 'next/link'


import { Typography } from '@mui/material';
// styles
import styles from '../Styles/Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <p className={styles.logo}
                >
                    Bloggy
                </p>
            </Link>
            <div className={styles.listTwo}>
                <Link href="/" className={styles.listChild}>
                    <p className={styles.navList}>
                        Home
                    </p>
                </Link>
                <Link href={'/about'} className={styles.listChild}>
                    <p className={styles.navList}>
                        About Us
                    </p>
                </Link>
                <Link href={`/category/football-player`} className={styles.listChild}>
                    <p className={styles.navList}>
                        Football Player
                    </p>
                </Link>
                <Link href={'/category/football-club'} className={styles.listChild}>
                    <p className={styles.navList}>
                        Football CLub
                    </p>
                </Link>

            </div>
            <div className={styles.list}>
                <Link href="/" className={styles.listChild}>
                    <p className={styles.navList}>
                        Home
                    </p>
                </Link>
                <Link href={'/about'} className={styles.listChild}>
                    <p className={styles.navList}>
                        About Us
                    </p>
                </Link>
                <Link href={`/category/football-player`} className={styles.listChild}>
                    <p className={styles.navList}>
                        Football Player
                    </p>
                </Link>
                <Link href={'/category/football-club'} className={styles.listChild}>
                    <p className={styles.navList}>
                        Football CLub
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;