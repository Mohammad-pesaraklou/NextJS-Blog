import { Container, Grid, Typography } from "@mui/material";
// GraphQL Data
import {
  getAuthors,
  getCategory,
  getCategoryPost,
  getFeaturedPost,
  getPosts,
} from "../services";
// styles
import styles from "../styles/Home.module.css";
// components
import PostCard from "../components/PostCard.jsx";
import LandingPosts from "../components/LandingPosts";
import Category from "../components/Category";
import Author from "../components/Author";

function Home({ mainPosts, category }) {
  return (
    <Container>
      <div>
        <Typography
          className={styles.featuredText}
          variant="h2"
          sx={{ ml: { sm: "24px", sm: 0 } }}
          fontFamily={"Josefin Sans"}
          color={"#f59115"}
          mt={9}
        >
          Featured Posts
        </Typography>
        <PostCard />
      </div>
      <Grid container>
        <Grid item sm={12} md={6}>
          <LandingPosts mainPosts={mainPosts.posts} />
        </Grid>
        <Grid item sm={12} md={6}>
          <Category />
          <Author />
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const mainPosts = (await getPosts()) || [];

  return {
    props: {
      mainPosts,
    },
  };
}

export default Home;
