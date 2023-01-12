import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Aos from "aos";
// data
import { getAuthors } from "../../services";
// styles
import styles from "./Authors.module.css";
// components
import AuthorsCards from "../../components/Author/AuthorsCards.jsx";

const CategoryPosts = ({ authors }) => {


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Container>
            <div className={styles.mainContainer}>
                <AuthorsCards authors={authors?.authors} />
            </div>
        </Container>
    );
};

export default CategoryPosts;

export async function getStaticProps() {
    const authors = await getAuthors();

    return {
        props: { authors },
    };
}

