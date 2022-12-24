import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://ovz1.j47206473.wmekm.vps.myjino.ru:49423/api/graphql',
    cache: new InMemoryCache(),
})

export default client