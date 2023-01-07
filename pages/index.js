import { Container, Grid, Typography } from "@mui/material";
import LandingPosts from "../components/LandingPosts";
import PostCard from "../components/PostCard";
import { getFeaturedPost, getPosts } from "../services";
import styles from "../styles/Home.module.css";

function Home({ posts, mainPosts }) {
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
          POst category
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = (await getFeaturedPost()) || [];
  const mainPosts = (await getPosts()) || [];
  return {
    props: {
      posts,
      mainPosts,
    },
  };
}

export default Home;
