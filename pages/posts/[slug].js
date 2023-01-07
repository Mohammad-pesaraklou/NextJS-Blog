import React, { useEffect } from "react";
import { getPostDetails, getPosts } from "../../services";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";
// style
import styles from "./PostDetail.module.css";
import Aos from "aos";
import Link from "next/link";

const PostDetails = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(data);

  return (
    <Container>
      <div className={styles.container}>
        <Card
          sx={{ maxWidth: 845, mb: 3, mt: 5 }}
          data-aos="fade-left"
          className={styles.cardContainer}
        >
          <CardMedia sx={{ height: 500 }} image={data?.photoCover.url} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ my: 3 }}
            >
              {data?.title}
            </Typography>
            <p style={{ fontFamily: "Josefin Sans", lineHeight: "30px" }}>
              {data?.text.text}
            </p>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
            }}
          >
            <Link href={"/"}>
              <Button
                size="medium"
                variant="contained"
                sx={{ fontFamily: "Josefin Sans" }}
              >
                Back Home
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  let data = null;
  try {
    data = await getPostDetails(params.slug);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const posts = (await getPosts()) || [];

  const paths = posts?.posts.map((item) => {
    return {
      params: {
        slug: item.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
