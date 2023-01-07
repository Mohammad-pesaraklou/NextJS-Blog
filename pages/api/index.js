// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient } from "graphql-request";

const graphqlEndPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// export default async function asynchandler(req, res) {
//   const graphQLClient = new GraphQLClient(graphqlEndPoint, {
//     headers: {
//       authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
//     },
//   });
// }
