import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { Cosmetic } from "../entities/cosmetic.entity";

@Resolver(() => Cosmetic)
export class CosmeticReselover { 
    constructor(private readonly cosmeticRepository = getRepository(Cosmetic)) {}

  @Mutation(() => Cosmetic)
  async createCosmetic(@Arg('name') name: string, @Arg('manufacturer') manufacturer: string) { 

    const cosmetic = new Cosmetic();
    cosmetic.name = name;
    cosmetic.manufacturer = manufacturer;
    return await this.cosmeticRepository.save(cosmetic);

  }


}