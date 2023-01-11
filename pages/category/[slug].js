import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import Aos from "aos";
// function
import { slicer } from "../../helper/functions";
import { getCategory, getCategoryPost } from "../../services";
// styles
import styles from "./slug.module.css";
// components
import SecondCategory from "../../components/SecondCategory";
import MainCard from "../../components/SlugCard";

const CategoryPosts = ({ posts }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <MainCard posts={posts} />
            </Grid>
            <Grid item sm={12} md={6}>
              <SecondCategory />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPosts;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}
export async function getStaticPaths() {
  const data = (await getCategory()) || [];

  const paths = data.categories.map((item) => {
    return {
      params: {
        slug: item?.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
