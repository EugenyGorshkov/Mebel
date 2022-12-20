import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/api/graphql',
    cache: new InMemoryCache(),
})

export default client