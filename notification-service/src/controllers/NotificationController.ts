import { NotificationDataInterface } from '../types/NotificationMessageInterface'
import EmailNotification from '../services/EmailNotificationService'
import SmsNotification from '../services/SmsNotificationService'
import AppNotification from '../services/AppNotificationService'
import PhoneNotification from '../services/PhoneNotificationService'
import { notificationPreferences } from '../types/NotificationPreferences'

class NotificationController {
  public message: NotificationDataInterface

  constructor (message: NotificationDataInterface) {
    this.message = message
  }

  /**
   * Shoots a notification based off the information found in the message value
   */
  public async shootNotification (): Promise<void> {
    await Promise.all(this.message.user.notificationPreferences.map(async notificationPreference => {
      switch (notificationPreference) {
        case notificationPreferences.SMS:
          const smsNotification = new SmsNotification(this.message.user.name, this.message.collection.name, this.message.nft.name)
          const smsMessage = smsNotification.buildMessage()
          await smsNotification.sendSms(smsMessage)
          break
        case notificationPreferences.EMAIL:
          const emailNotification = new EmailNotification(this.message.user.name, this.message.collection.name, this.message.nft.name)
          const emailMessage = emailNotification.buildMessage()
          await emailNotification.sendEmail(emailMessage)
          break
        case notificationPreferences.PHONECALL:
          const phoneNotification = new PhoneNotification(this.message.user.name, this.message.collection.name, this.message.nft.name)
          const phoneMessage = phoneNotification.buildMessage()
          await phoneNotification.makePhoneCall(phoneMessage)
          break
        case notificationPreferences.APP:
          const appNotification = new AppNotification(this.message.user.name, this.message.collection.name, this.message.nft.name)
          const appMessage = appNotification.buildMessage()
          await appNotification.sendPushNotifiation(appMessage)
          break
      }
    }))
  }
}

export default NotificationController
