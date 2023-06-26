import { UserInterface } from '../types/UserInterface'
import UsersMock from '../mocks/UserMocks'

class UserService {

  /**
   * Finds the user with given user id
   * @param userId 
   * @returns a user
   */
  public findOne (userId: string): UserInterface | undefined {
    return UsersMock.find((user) => user.id === userId)
  }

  /**
   * Finds users based on collection interest
   * @param collectionId 
   * @returns a list of users
   */
  public findByCollectionInterest (collectionId: string): UserInterface[] {
    return UsersMock.filter((user) => user.interestCollections?.find(collections => collections.id === collectionId))
  }
}

export default new UserService()
