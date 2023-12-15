class Notification {
  constructor(notificationId, createdTime, content, reciver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.reciver = reciver;
  }
  send() {
    console.log(`Notification has been sent to ${this.reciver}`);
  }
}
class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, reciver) {
    super(notificationId, createdTime, content, reciver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
}

const email = new EmailNotification(
  123,
  "12.00",
  "hate ya 😡",
  "tana@gmail,com"
);
const sms = new SMSNotification(123, "11.23", "miss ya 🥰", 1999999);

email.send();
sms.send();
