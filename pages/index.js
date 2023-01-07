import { Container, Grid, Typography } from "@mui/material";
// GraphQL Data
import { getCategory, getFeaturedPost, getPosts } from "../services";
// styles
import styles from "../styles/Home.module.css";
// components
import PostCard from "../components/PostCard.jsx";
import LandingPosts from "../components/LandingPosts";
import Category from "../components/Category";

function Home({ posts, mainPosts, category }) {

  return (
    <Container>
      <div>
        <Typography
          className={styles.featuredText}
          variant="h2"
          sx={{ ml: { xs: "24px", sm: 0 } }}
          fontFamily={"Josefin Sans"}
          color={"#f59115"}
          mt={9}
        >
          Featured Posts
        </Typography>
        <PostCard posts={posts?.posts} />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LandingPosts mainPosts={mainPosts.posts} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Category categories={category?.categories} />
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = (await getFeaturedPost()) || [];
  const mainPosts = (await getPosts()) || [];
  const category = (await getCategory()) || [];

  return {
    props: {
      posts,
      mainPosts,
      category,
    },
  };
}

export default Home;
