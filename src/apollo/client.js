import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://oeebg.space/api/graphql',
    cache: new InMemoryCache(),
})

export default client

// jino 'https://oeebg.space/api/graphql'
// serv ''