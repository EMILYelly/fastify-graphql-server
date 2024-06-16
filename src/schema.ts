import { buildTypeDefsAndResolvers } from "type-graphql";
import { TestResolver } from "./resolvers/testResolver";

export const createSchema = async () => {
  return buildTypeDefsAndResolvers({
    resolvers: [TestResolver],
  });
};
