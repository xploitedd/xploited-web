import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_PAT}`
        }
    }
})

const apolloClient = new ApolloClient({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default apolloClient