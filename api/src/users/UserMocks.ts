import { UserInterface, UserNotificationPreference } from './UserInterface'
import CollectionMock from '../collections/CollectionMocks'

const usersMock: UserInterface[] = [
  {
    id: 'user-1',
    email: 'user_1@mail.com',
    name: 'User 1',
    notificationPreferences: [UserNotificationPreference.APP],
    interestCollections: [CollectionMock[0]]
  },
  {
    id: 'user-2',
    email: 'user_2@mail.com',
    name: 'User 2',
    notificationPreferences: [UserNotificationPreference.SMS, UserNotificationPreference.EMAIL],
    interestCollections: [CollectionMock[1]]
  },
  {
    id: 'user-3',
    email: 'user_3@mail.com',
    name: 'User 3',
    notificationPreferences: [UserNotificationPreference.PHONECALL],
    interestCollections: [CollectionMock[1]]
  },
  {
    id: 'user-4',
    email: 'user_4@mail.com',
    name: 'User 4',
    notificationPreferences: [UserNotificationPreference.SMS, UserNotificationPreference.APP, UserNotificationPreference.EMAIL],
    interestCollections: [CollectionMock[0]]
  },
  {
    id: 'user-5',
    email: 'user_5@mail.com',
    name: 'User 5',
    notificationPreferences: [UserNotificationPreference.SMS],
    interestCollections: [CollectionMock[0], CollectionMock[1]]
  },
  {
    id: 'user-6',
    email: 'user_6@mail.com',
    name: 'User 6',
    notificationPreferences: [UserNotificationPreference.EMAIL],
    interestCollections: [CollectionMock[2]]
  },
  {
    id: 'user-7',
    email: 'user_7@mail.com',
    name: 'User 7',
    notificationPreferences: [UserNotificationPreference.APP, UserNotificationPreference.SMS, UserNotificationPreference.PHONECALL, UserNotificationPreference.EMAIL],
    interestCollections: [CollectionMock[0], CollectionMock[1]]
  },
  {
    id: 'user-8',
    email: 'user_8@mail.com',
    name: 'User 8',
    notificationPreferences: [UserNotificationPreference.APP, UserNotificationPreference.SMS, UserNotificationPreference.PHONECALL, UserNotificationPreference.EMAIL],
    interestCollections: [CollectionMock[0]]
  }
]

export default usersMock