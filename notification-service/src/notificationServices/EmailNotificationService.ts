import NotificationService from "./NotificationService"

class EmailNotificationService extends NotificationService {
  constructor (user: string, collection: string, nft: string) {
    super(user, collection, nft)
  }

  /**
   * Builds a custom Email notification based off the event message
   * @returns a message
   */
  public buildMessage (): string {
    return `<html><body>This is an email for your interest in a collection!. An auction has just been started for NFT #${this.nft}# from Collection #${this.collection}#.</html></body>`
  }

  /**
   * Sends an email to the user using the given message
   * @param message 
   */
  public async sendEmail (message: string): Promise<void> {
    // used only to simulate different execution times
    const randomNumber = Math.random() * (2000 - 200) + 200;
    await new Promise(resolve => setTimeout(resolve, randomNumber)).catch(console.error)
    console.log(`Messaging user #${this.user}# using #EMAIL# preference with message: ${message}`)
  }
}

export default EmailNotificationService
