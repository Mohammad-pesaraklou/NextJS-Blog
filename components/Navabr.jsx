import Link from 'next/link'


import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
// styles
import styles from '../Styles/Navbar.module.css';


const Navbar = () => {

    const { activeNav, setActiveNav } = useContext(ThemeContext);



    const themeHandler = (e) => {
        setActiveNav(e.target.textContent)
    }

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
                    <p className={styles.navList} onClick={themeHandler}
                        style={{
                            background: activeNav == 'Home' ? '#f59115' : 'none',
                            border: activeNav == 'Home' && 'none',
                            color: activeNav == 'Home' && 'black',
                        }}
                    >
                        Home
                    </p>
                </Link>
                <Link href={'/about'} className={styles.listChild}>
                    <p className={styles.navList} onClick={themeHandler}
                        style={{
                            background: activeNav == 'about' ? '#f59115' : 'none',
                            border: activeNav == 'about' && 'none',
                            color: activeNav == 'about' && 'black',
                        }}

                    >
                        About Us
                    </p>
                </Link>
                <Link href={`/category/football-player`} className={styles.listChild}>
                    <p className={styles.navList} style={{
                        background: activeNav == 'Football Player' ? '#f59115' : 'none',
                        border: activeNav == 'Football Player' && 'none',
                        color: activeNav == 'Football Player' && 'black',
                    }} onClick={themeHandler}>
                        Football Player
                    </p>
                </Link>
                <Link href={'/category/football-club'} onClick={themeHandler} className={styles.listChild}>
                    <p className={styles.navList}
                        style={{
                            background: activeNav == 'Football CLub' ? '#f59115' : 'none',
                            border: activeNav == 'Football CLub' && 'none',
                            color: activeNav == 'Football CLub' && 'black',
                        }}
                    >
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
                    <p className={styles.navList} style={{
                        background: activeNav == 'Football Player' ? '#f59115' : 'none',
                        border: activeNav == 'Football Player' && 'none',
                        color: activeNav == 'Football Player' && 'black',
                    }} onClick={themeHandler}>
                        Football Player
                    </p>
                </Link>
                <Link href={'/category/football-club'} onClick={themeHandler} className={styles.listChild}>
                    <p className={styles.navList}
                        style={{
                            background: activeNav == 'Football CLub' ? '#f59115' : 'none',
                            border: activeNav == 'Football CLub' && 'none',
                            color: activeNav == 'Football CLub' && 'black',
                        }}
                    >
                        Football CLub
                    </p>
                </Link>
            </div>
        </div >
    );
};

export default Navbar;