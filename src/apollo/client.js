import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://oeebg.space:49423//api/graphql',
    cache: new InMemoryCache(),
})

export default client