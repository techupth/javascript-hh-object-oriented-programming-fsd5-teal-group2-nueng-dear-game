class Notification {
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

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, email) {
    super(notificationId, createdTime, content, email);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content, phoneNumber);
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
