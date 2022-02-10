import { logIn, newPage } from "./models/page";

import { postPicture, postNoPicture } from "./models/post";

let pictureQuestion: boolean;

window.onload = function () {
  let blogList: string = localStorage.getItem("blogs");
  let blogListObject: newPage[] = JSON.parse(blogList);

  let index: number;

  let pictureQuestion: boolean;

  let findHeader: string = document.getElementById("head").innerHTML;

  for (let i = 0; i < blogListObject.length; i++) {
    if (blogListObject[i].name === findHeader) {
      console.log(i);
      index = i;
    } else {
    }
  }

  // for (let i = 0; i < blogListObject.length; i++) {
  //   if (blogListObject[i].active === true) {
  //     console.log(i);
  //   } else {
  //   }
  // }

  document.getElementById("yes").addEventListener("click", () => {
    document.getElementById("picture-container").style.display = "block";

    pictureQuestion = true;
    getDate(pictureQuestion, index);
  });

  document.getElementById("no").addEventListener("click", () => {
    document.getElementById("text").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("picture-container").style.display = "none";

    pictureQuestion = true;
    getDate(pictureQuestion, index);
  });

  document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("text").style.display = "block";
    document.getElementById("yes").style.display = "block";
    document.getElementById("no").style.display = "block";
  });
};

function getDate(pictureQuestion: boolean, index: number) {
  let today = new Date();
  let month: string;

  if (today.getMonth() + 1 == 1) {
    month = "Januari";
  } else if (today.getMonth() + 1 == 2) {
    month = "Februari";
  } else if (today.getMonth() + 1 == 3) {
    month = "Mars";
  } else if (today.getMonth() + 1 == 4) {
    month = "April";
  } else if (today.getMonth() + 1 == 5) {
    month = "Maj";
  } else if (today.getMonth() + 1 == 6) {
    month = "Juni";
  } else if (today.getMonth() + 1 == 7) {
    month = "Juli";
  } else if (today.getMonth() + 1 == 8) {
    month = "Augusti";
  } else if (today.getMonth() + 1 == 9) {
    month = "September";
  } else if (today.getMonth() + 1 == 10) {
    month = "Oktober";
  } else if (today.getMonth() + 1 == 11) {
    month = "November";
  } else {
    month = "December";
  }

  let todayDate: string =
    today.getDate() + " " + month + " " + today.getFullYear();

  console.log(todayDate);

  document.getElementById("submit").addEventListener("click", () => {
    yesNoPicture(todayDate, pictureQuestion, index);
  });
}

function yesNoPicture(date: string, pictureQuestion: boolean, index: number) {
  console.log(pictureQuestion);
  if (pictureQuestion == true) {
    updateObjectYesPicture(date, index);
    console.log("hej");
  } else {
    updateObjectNoPicture(date, index);
    console.log("hej då");
  }
}

function updateObjectYesPicture(date: string, index: number) {
  let blogList: string = localStorage.getItem("blogs");
  let blogListObject: newPage[] = JSON.parse(blogList);

  let header: HTMLInputElement = document.getElementById(
    "header"
  ) as HTMLInputElement;

  let picture: HTMLInputElement = document.getElementById(
    "picture"
  ) as HTMLInputElement;

  let content: HTMLInputElement = document.getElementById(
    "content"
  ) as HTMLInputElement;

  let post = new postPicture(header.value, date, picture.value, content.value);
  blogListObject[index].posts.push(post);

  let listToString = JSON.stringify(blogListObject);
  localStorage.setItem("blogs", listToString);
}

function updateObjectNoPicture(date: string, index: number) {
  let blogList: string = localStorage.getItem("blogs");
  let blogListObject: newPage[] = JSON.parse(blogList);

  let header: HTMLInputElement = document.getElementById(
    "header"
  ) as HTMLInputElement;

  let content: HTMLInputElement = document.getElementById(
    "content"
  ) as HTMLInputElement;

  let post = new postNoPicture(header.value, date, content.value);
  blogListObject[index].posts.push(post);

  let listToString = JSON.stringify(blogListObject);
  localStorage.setItem("blogs", listToString);
}
