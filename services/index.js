import request, { gql } from "graphql-request";

const END_POINT =
  "https://api-us-west-2.hygraph.com/v2/clc392yl62mde01tec19x5nrg/master";

export const getFeaturedPost = async () => {
  const FeaturedQuery = gql`
    query MyQuery {
      posts(where: { featuredPost: true }) {
        slug
        title
        photoCover {
          url
        }
      }
    }
  `;

  const result = await request(END_POINT, FeaturedQuery);

  return result;
};

export const getPosts = async () => {
  const PostsQuery = gql`
    query MyPostsQuery {
      posts {
        id
        photoCover {
          url
        }
        text {
          text
        }
        title
        slug
      }
    }
  `;

  const data = await request(END_POINT, PostsQuery);

  return data;
};

export const getCategory = async () => {
  const categoryQuery = gql`
    query MyQuery {
      categories {
        id
        name
        slug
      }
    }
  `;

  const data = await request(END_POINT, categoryQuery);

  return data;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        text {
          text
        }
        id
        photoCover {
          url
        }
      }
    }
  `;

  const data = await request(END_POINT, query, { slug });

  return data.post;
};
