class EmailNotification {
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

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const email = new EmailNotification(
  123,
  "12.00",
  "hate ya 😡",
  "tana@gmail,com"
);
const sms = new SMSNotification(123, "11.23", "miss ya 🥰", 1999999);

console.log(sms);
console.log(email);

email.send();
sms.send();
