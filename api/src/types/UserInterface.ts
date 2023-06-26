import { CollectionInterface } from "./CollectionInterface"

export interface UserInterface {
  id: string
  name: string
  email: string
  notificationPreferences?: UserNotificationPreference[]
  interestCollections?: CollectionInterface[]
}

export enum UserNotificationPreference {
  SMS,
  EMAIL,
  APP,
  PHONECALL,
  // ...
}