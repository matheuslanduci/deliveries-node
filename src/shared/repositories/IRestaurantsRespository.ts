import { Prisma, Restaurant } from '@prisma/client'

export default interface IRestaurantsRepository {
  save(data: Prisma.RestaurantCreateInput): Promise<Restaurant>
  findAll(page: number): Promise<Restaurant[]>
  findById(id: string): Promise<Restaurant | undefined>
  findByUserId(userId: string): Promise<Restaurant | undefined>
  update(id: string, data: Prisma.RestaurantUpdateInput): Promise<Restaurant>
  deleteByUserId(userId: string): Promise<void>  
}
