import { Prisma, Restaurant } from '@prisma/client'
import prismaClient from '@shared/providers/prisma'
import IRestaurantsRepository from '../IRestaurantsRespository'

export default class RestaurantsRepository implements IRestaurantsRepository {
  async save(data: Prisma.RestaurantCreateInput): Promise<Restaurant> {
    return prismaClient.restaurant.create({
      data,
    })
  }

  async findAll(page: number): Promise<Restaurant[]> {
    return prismaClient.restaurant.findMany({
      skip: (page - 1) * 10,
      take: 10,
    })
  }

  async findById(id: string): Promise<Restaurant | undefined> {
    const restaurant = await prismaClient.restaurant.findUnique({
      where: { id },
      include: {
        products: true,
      },
    })

    return restaurant || undefined
  }

  async findByUserId(userId: string): Promise<Restaurant | undefined> {
    const restaurant = await prismaClient.restaurant.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
      include: {
        products: true,
      },
    })

    return restaurant || undefined
  }

  async update(
    id: string,
    data: Prisma.RestaurantUpdateInput
  ): Promise<Restaurant> {
    return prismaClient.restaurant.update({
      where: { id },
      data,
    })
  }

  async deleteByUserId(userId: string): Promise<void> {
    await prismaClient.restaurant.deleteMany({
      where: {
        user: {
          id: userId,
        },
      },
    })
  }
}
