import NotificationService from "./NotificationService"

class AppNotificationService extends NotificationService {
  constructor (user: string, collection: string, nft: string) {
    super(user, collection, nft)
  }

  /**
   * Builds a custom App notification based off the event message
   * @returns a message
   */
  public buildMessage (): string {
    return `Hey! A new auction has just started for NFT #${this.nft}# from Collection #${this.collection}#!`
  }

  /**
   * Sends a push notification to the user using the given message
   * @param message 
   */
  public async sendPushNotifiation (message: string): Promise<void> {
    // used only to simulate different execution times
    const randomNumber = Math.random() * (2000 - 200) + 200;
    await new Promise(resolve => setTimeout(resolve, randomNumber)).catch(console.error)
    console.log(`Messaging user #${this.user}# using #APP# preference with message: ${message}`)
  }
}

export default AppNotificationService
