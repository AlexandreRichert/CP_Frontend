// TODO
import { ApolloClient, InMemoryCache } from "@apollo/client";
const uri = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

console.log({ uri });

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  credentials: "include",
});

export default client;