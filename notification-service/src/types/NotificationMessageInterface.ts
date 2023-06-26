export interface NotificationMessageInterface {
 message: NotificationDataInterface
}

export interface NotificationDataInterface {
  nft: { id: string, name: string },
  collection: { name: string },
  user: { name: string, notificationPreferences: string[] }
}