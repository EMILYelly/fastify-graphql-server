import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { Test } from "../entities/test.entity";

@Resolver(() => Test)
export class TestResolver {
  constructor(private readonly testRepository = getRepository(Test)) {}

  @Query(() => Boolean)
  async testQuery(): Promise<boolean> {
    return true;
  }

  @Mutation(() => Test)
  async createTest(@Arg("name") name: string): Promise<Test> {
    const test = new Test();
    test.name = name;
    return this.testRepository.save(test);
  }

  @Query(() => [Test])
  async tests(): Promise<Test[]> {
    return this.testRepository.find();
  }
}
