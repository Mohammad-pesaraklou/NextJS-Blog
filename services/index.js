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
        createdAt
        author {
          name
          id
          avatar {
            url
          }
        }
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
        slug
        text {
          text
        }
        createdAt
        id
        photoCover {
          url
        }
        author {
          name
          id
          slug
          avatar {
            url
          }
        }
      }
    }
  `;

  const data = await request(END_POINT, query, { slug });

  return data.post;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              name
              id
              slug
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            photoCover {
              url
            }
            text {
              text
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(END_POINT, query, { slug });

  return result.postsConnection.edges;
};

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        id
        name
        avatar {
          url
        }
        slug
      }
    }
  `;

  const result = await request(END_POINT, query);

  return result;
};

export const getAuthorsDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      author(where: { slug: $slug }) {
        name
        id
        slug
        avatar {
          url
        }
        description {
          text
        }
      }
      posts {
        photoCover {
          url
        }
        title
        slug
      }
    }
  `;

  const result = await request(END_POINT, query, { slug });
  return result;
};

export const getComments = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        id
        name
        email
        text
      }
    }
  `;

  const data = await request(END_POINT, query, { slug });

  return data;
};


export const submitComment = async (obj) => {
  const result = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};