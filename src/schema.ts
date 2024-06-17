import { buildTypeDefsAndResolvers } from "type-graphql";
import { TestResolver } from "./resolvers/testResolver";
import { CosmeticReselover } from "./resolvers/cosmeticResolver";

export const createSchema = async () => {
  return buildTypeDefsAndResolvers({
    resolvers: [TestResolver, CosmeticReselover],
  });
};
