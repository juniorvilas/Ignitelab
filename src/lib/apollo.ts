import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ofo59p00ty01z4czeggc9l/master',
    cache: new InMemoryCache()
});