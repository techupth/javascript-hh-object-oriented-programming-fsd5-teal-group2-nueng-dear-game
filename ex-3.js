class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost() {
    console.log(
      `You've shared post "${
        this.posts[this.posts.length - 1].title
      }" to your friend.`
    );
  }
}

class Post {
  constructor(id, title, content, comments) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = comments;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    this.like += 1;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(comment, postTitle) {
    console.log(
      `Notification: ${comment.createdBy} has just commented on this post— "${postTitle}"`
    );
  }
}

const user = new User("001", "Neung", "Neung0511@gmail.com");
console.log(user);

const postList = new PostList([]);
postList.addPost(
  new Post("001", "Sample Post", "I love Piza", "I love Burger")
);
postList.sharePost();
console.log(postList);

const post = new Post("001", "Sample Post", "This is a sample post.", []);
post.addComment(new Comment("001", "Great post!", "Your friend"));
console.log(post);

const comment = new Comment("001", "Nice post!", "Your friend");
comment.addLike();
console.log(comment);

const facebook = new Facebook([], []);
facebook.addGroup(new FacebookGroup("Sample Group"));
facebook.addPage(new FacebookPage("Sample Page"));
console.log(facebook);

const facebookPage = new FacebookPage("Sample Page");
console.log(facebookPage);

const facebookGroup = new FacebookGroup("Sample Group");
console.log(facebookGroup);

const notification = new Notification("001");
notification.send(comment, post.title);
console.log(notification);
