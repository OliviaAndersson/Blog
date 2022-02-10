import { newPage } from "./models/page";

window.onload = function () {
  let blogList: string = localStorage.getItem("blogs");
  let blogListObject: newPage[] = JSON.parse(blogList);

  createPersonalizedPage(blogListObject);
  document.getElementById("latest").innerHTML = " ";
};

function createPersonalizedPage(blogListObject: newPage[]) {
  let index: number;

  for (let i = 0; i < blogListObject.length; i++) {
    if (blogListObject[i].active === true) {
      index = i;
    } else {
    }
  }
  document
    .getElementById("hero")
    .setAttribute(
      "style",
      `background-image: url("${blogListObject[index].backgroundImage}")`
    );

  let by: HTMLDivElement = document.createElement("div");

  if (blogListObject[index].color === "#0d2149") {
    by.id = "by-blue";
  } else if (blogListObject[index].color === "#788475") {
    by.id = "by-green";
  } else if (blogListObject[index].color === "#fec0aa") {
    by.id = "by-pink";
  } else if (blogListObject[index].color === "#86626E") {
    by.id = "by-purple";
  } else if (blogListObject[index].color === "#f6bd60") {
    by.id = "by-yellow";
  } else {
    by.id = "by-burgundy";
  }
  by.innerHTML = "by: " + blogListObject[index].logIn.name;

  document.getElementById("hero").appendChild(by);
  document.getElementById("head").innerHTML = blogListObject[index].name;

  let create: HTMLDivElement = document.createElement("div");
  let button: HTMLButtonElement = document.createElement("button");

  if (blogListObject[index].color === "#0d2149") {
    create.id = "create-post-blue";
  } else if (blogListObject[index].color === "#788475") {
    create.id = "create-post-green";
  } else if (blogListObject[index].color === "#fec0aa") {
    create.id = "create-post-pink";
  } else if (blogListObject[index].color === "#86626E") {
    create.id = "create-post-purple";
  } else if (blogListObject[index].color === "#f6bd60") {
    create.id = "create-post-yellow";
  } else {
    create.id = "create-post-burgundy";
  }

  button.innerHTML = "Skapa inlägg";

  create.appendChild(button);
  document.getElementById("create-container").appendChild(create);

  createPosts(blogListObject, index);
}

function createPosts(blogListObject, index: number) {
  let posts: HTMLDivElement = document.getElementById(
    "posts"
  ) as HTMLDivElement;

  // if (
  //   blogListObject[index].posts.length == 0 ||
  //   blogListObject[index].posts === null
  // ) {
  //   document.getElementById("no-posts").innerHTML = "Du har inga inlägg än!";
  // } else {
  for (
    let i = blogListObject[index].posts.length + 1;
    i < blogListObject[index].posts.length;
    i--
  ) {
    console.log(i);

    let postDiv: HTMLDivElement = document.createElement("div");
    let h1: HTMLHeadingElement = document.createElement("h1");
    let h2: HTMLHeadingElement = document.createElement("h2");
    let img: HTMLImageElement = document.createElement("img");
    let p: HTMLParagraphElement = document.createElement("p");

    postDiv.className = "new-post";
    postDiv.id = "" + i + "";
    h1.id = "header";
    p.id = "bread";

    if (blogListObject[index].color === "#0d2149") {
      h2.id = "blue";
    } else if (blogListObject[index].color === "#788475") {
      h2.id = "green";
    } else if (blogListObject[index].color === "#fec0aa") {
      h2.id = "pink";
    } else if (blogListObject[index].color === "#86626E") {
      h2.id = "purple";
    } else if (blogListObject[index].color === "#f6bd60") {
      h2.id = "yellow";
    } else {
      h2.id = "burgundy";
    }

    h1.innerHTML = blogListObject[index].posts[i].header;
    h2.innerHTML = blogListObject[index].posts[i].date;
    img.src = "" + blogListObject[index].posts[i].picture + "";
    p.innerHTML = blogListObject[index].posts[i].bread;

    postDiv.appendChild(h1);
    postDiv.appendChild(h2);
    postDiv.appendChild(img);
    postDiv.appendChild(p);

    posts.appendChild(postDiv);
  }

  //Latest posts
  for (
    let i = blogListObject[index].posts.length - 1;
    i < blogListObject[index].posts.length - 2;
    i--
  ) {
    // for (let i = 0; i < blogListObject[index].posts.length; i++) {

    let li: HTMLLIElement = document.createElement("li");
    let a: HTMLAnchorElement = document.createElement("a");
    let h3: HTMLHeadingElement = document.createElement("h3");
    let p: HTMLParagraphElement = document.createElement("p");

    h3.innerHTML = blogListObject[index].posts[i].header;
    p.innerHTML = blogListObject[index].posts[i].date;

    if (blogListObject[index].color === "#0d2149") {
      p.id = "blue";
    } else if (blogListObject[index].color === "#788475") {
      p.id = "green";
    } else if (blogListObject[index].color === "#fec0aa") {
      p.id = "pink";
    } else if (blogListObject[index].color === "#86626E") {
      p.id = "purple";
    } else {
      p.id = "burgundy";
    }

    a.appendChild(h3);
    a.appendChild(p);

    li.appendChild(a);

    document.getElementById("latest").appendChild(li);
  }
  // (blogListObject[index].posts.length-1)
  document.getElementById("log-in").addEventListener("click", () => {
    logOut(blogListObject, index);
  });
}

function logOut(blogListObject, index) {
  blogListObject[index].active = false;

  let listToString = JSON.stringify(blogListObject);
  localStorage.setItem("blogs", listToString);
}
