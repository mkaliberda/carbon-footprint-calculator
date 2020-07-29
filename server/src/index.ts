import { ApolloServerExpressConfig } from 'apollo-server-express';
import config from './config';
import ExpressApollo from './express-appollo';
import typeDefs from './graphql/types';
import resolvers from './graphql/resolves';

// Initialize Express

const ExpressServer = new ExpressApollo();

const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
};

ExpressServer.init(config.allowedOrigins, schema);

/**
 * Listen to port
 */
ExpressServer.httpServer.listen(process.env.PORT || config.port, () => {
  console.log(`?  Server ready at ${config.port}`);
  console.log(
    `? Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `? Subscriptions ready at ws://localhost:${config.port}${ExpressServer.server.subscriptionsPath}`
  );
});
