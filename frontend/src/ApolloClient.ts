import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { withClientState } from 'apollo-link-state';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';

import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import config from './config';

const cache = new InMemoryCache();

// custom links
const httpLink = new HttpLink({ uri: `${config.BACKEND_URL}/graphql/` });

// local global state of application
const stateLink = withClientState({
    defaults,
    resolvers,
});

const headerLink: any = setContext((_, { headers }) => ({
  // couuld set auth headers for future
  headers: {
    ...headers,
    'X-Requested-With': 'XMLHttpRequest',
  },
}));

const errorLink = onError(({graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(networkError);
  }
});

export const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
      stateLink,
      headerLink,
      errorLink,
      httpLink,
    ]),
    resolvers,
});
