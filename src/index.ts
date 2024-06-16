import "reflect-metadata";
import { createConnection } from "typeorm";
import Fastify from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { createSchema } from "./schema";
import ormconfig from "./ormconfig";

async function startServer() {
  const fastify = Fastify();

  await createConnection(ormconfig);

  const { typeDefs, resolvers } = await createSchema();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();

  fastify.register(server.createHandler());

  fastify.listen(3000, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

startServer();
