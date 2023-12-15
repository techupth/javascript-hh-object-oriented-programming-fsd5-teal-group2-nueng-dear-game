class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(email) {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification extends EmailNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
  send(phoneNumber) {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const emailNotif = new EmailNotification(
  "ID001",
  "10:00 AM",
  "Hello!",
  "example@email.com"
);
const smsNotif = new SMSNotification(
  "ID002",
  "11:00 AM",
  "Hi there!",
  "123456789"
);

emailNotif.send();
smsNotif.send();
