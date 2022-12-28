import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://65.21.56.211:4000/api/graphql',
    cache: new InMemoryCache(),
})

export default client