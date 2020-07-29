import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import * as http from 'http';

class ExpressApollo {
  public express: express.Application;
  public server: ApolloServer;
  public httpServer: http.Server;

  public init = (allowedOrigins: string[],
                 schema: ApolloServerExpressConfig): void => {
    /*
     * apolloServer - could be mock instance
     * allowedOrigins - array of allow hosts
     * Creating an server and express
    */
    this.server = new ApolloServer(schema);
    this.express = express();

    // Apply Middlerwares
    this.applyOriginCors(allowedOrigins);
    this.server.applyMiddleware({ app: this.express });
    this.httpServer = http.createServer(this.express);

    // Installing subscription handlers for websockets
    this.server.installSubscriptionHandlers(this.httpServer);
  }

  private applyOriginCors = (allowedOrigins: string[]): void => {
    // Middlerware for using CORS
    this.express.use(cors({
      // tslint:disable-next-line:typedef
      origin(origin, callback) {
        if (!origin) { return callback(undefined, true); }
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
          return callback(new Error(msg), false);
        }
        return callback(undefined, true);
      },
    }));
  }
}

export default ExpressApollo;
