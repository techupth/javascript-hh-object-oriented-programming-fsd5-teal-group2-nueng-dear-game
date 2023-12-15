//  Start coding here
class userCl {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class postListCL {
  constructor(post) {
    this.post = [];
  }
  addPost(newPost) {
    newPost.id = newPost.id + 1;
    this.post.push(newPost);
  }
  sharePost() {
    console.log(`You've shared post ${this.post[0]} to your friend.`);
  }
}
class postCl {
  constructor(title, content, comment) {
    this.id = postList.post.length;
    this.title = title;
    this.content = content;
    this.comment = [comment];
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}
class commentCl {
  constructor(id, content, createdBy, like) {
    this.id = String(id);
    this.content = String(content);
    this.createdBy = String(createdBy);
    this.like = Number(like);
  }
  addLike() {
    this.like++;
  }
  // add(text) {
  //   post.id[this.id].comment.push(String(text));
  // }
}

class FacbookCl {
  constructor(groupList, pageList) {
    this.groupList = [groupList];
    this.pageList = [pageList];
  }
  addGroup(group) {
    this.groupList.push(group);
  }
}

class fackbookPageCl {
  constructor(name) {
    this.name = String(name);
  }
}
class facebookGroupCl {
  constructor(name) {
    this.name = String(name);
  }
}
class notificationCl {
  constructor(id) {
    this.id = id;
  }
  send(post) {
    console.log(`Notification: ${
      post.comment[this.id].createdBy
    } has just commented on this "${post.title}", ${
      post.comment[this.id].createdBy
    }:"${post.comment[this.id].content}"
    `);
  }
}

///////////post
const postList = new postListCL();
const post1 = new postCl(
  "my first post",
  "hi this is my frist POST!! 🤣",
  "you look stupid"
);
postList.addPost(post1);

const post2 = new postCl("my second post", "miss me?", "Good Job 💖");
postList.addPost(post2);

///////comment
const inwza007 = new commentCl("01", "that is cute 😘", "inwza007", 1);
const goku1998 = new commentCl("01", "wanna go out? ✈", "Goku1998", 6);
const sadboy69 = new commentCl("01", "Can I have your number", "SadBoY69", 0);
const kodKoolNinja = new commentCl("01", "Nice Cake 🍑", "KodkOOLNinJA~", 9999);

post1.addComment(inwza007);
post1.addComment(goku1998);
post2.addComment(sadboy69);
post2.addComment(kodKoolNinja);
/////////

const noti1 = new notificationCl(1);
const noti2 = new notificationCl(2);

console.log(post1);
console.log(post2);
console.log(postList);
noti1.send(post1);
noti2.send(post1);
noti1.send(post2);
noti2.send(post2);
