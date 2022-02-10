import { logIn, newPage } from "./models/page";

window.onload = function () {
  document.getElementById("next-button").addEventListener("click", createLogIn);
};

function createLogIn() {
  document.getElementById("name-wrong").innerHTML = "";
  document.getElementById("user-wrong").innerHTML = "";
  document.getElementById("password-wrong").innerHTML = "";

  let name: HTMLInputElement = document.getElementById(
    "name"
  ) as HTMLInputElement;

  let username: HTMLInputElement = document.getElementById(
    "username"
  ) as HTMLInputElement;

  let password: HTMLInputElement = document.getElementById(
    "password"
  ) as HTMLInputElement;

  if (name.value === "") {
    document.getElementById("name-wrong").innerHTML =
      "Du måste skriva in ditt namn";
    if (username.value === "") {
      document.getElementById("user-wrong").innerHTML =
        "Du måste skapa ett användarnamn";
      if (password.value === "") {
        document.getElementById("password-wrong").innerHTML =
          "Du måste skapa ett lösenord";
      } else {
      }
    } else {
    }
  } else if (username.value === "") {
    document.getElementById("user-wrong").innerHTML =
      "Du måste skapa ett användarnamn";
    if (password.value === "") {
      document.getElementById("password-wrong").innerHTML =
        "Du måste skapa ett lösenord";
    } else {
    }
  } else if (password.value === "") {
    document.getElementById("password-wrong").innerHTML =
      "Du måste skapa ett lösenord";
  } else {
    let blogList: string = localStorage.getItem("blogs");
    let blogListObject: newPage[] = JSON.parse(blogList);

    let id: number = blogListObject.length + 1;

    let newLogin = new logIn(name.value, username.value, password.value, id);
    console.log(newLogin);
    document.getElementById("personal-container").style.display = "none";

    document.getElementById("page-container").style.display = "block";
    createPage(newLogin);
  }
}

function createPage(newLogin) {
  document.getElementById("submit-button").addEventListener("click", () => {
    document.getElementById("webname-wrong").innerHTML = "";
    document.getElementById("theme-wrong").innerHTML = "";
    document.getElementById("color-wrong").innerHTML = "";
    document.getElementById("background-wrong").innerHTML = "";

    let background: string;
    let color: string;

    let webname: HTMLInputElement = document.getElementById(
      "webname"
    ) as HTMLInputElement;
    let theme: HTMLInputElement = document.getElementById(
      "theme"
    ) as HTMLInputElement;

    //Background IDs
    let bananasBackground: HTMLInputElement = document.getElementById(
      "bananas"
    ) as HTMLInputElement;

    let dragonBackground: HTMLInputElement = document.getElementById(
      "dragon"
    ) as HTMLInputElement;

    let flowersBackground: HTMLInputElement = document.getElementById(
      "flowers"
    ) as HTMLInputElement;

    let mountainsBackground: HTMLInputElement = document.getElementById(
      "mountains"
    ) as HTMLInputElement;

    let vegetablesBackground: HTMLInputElement = document.getElementById(
      "vegetables"
    ) as HTMLInputElement;

    let colorsBackground: HTMLInputElement = document.getElementById(
      "colors"
    ) as HTMLInputElement;

    //Color IDs
    let blue: HTMLInputElement = document.getElementById(
      "blue"
    ) as HTMLInputElement;

    let green: HTMLInputElement = document.getElementById(
      "green"
    ) as HTMLInputElement;

    let pink: HTMLInputElement = document.getElementById(
      "pink"
    ) as HTMLInputElement;

    let purple: HTMLInputElement = document.getElementById(
      "purple"
    ) as HTMLInputElement;

    let burgundy: HTMLInputElement = document.getElementById(
      "burgundy"
    ) as HTMLInputElement;

    let yellow: HTMLInputElement = document.getElementById(
      "yellow"
    ) as HTMLInputElement;

    if (webname.value === "") {
      document.getElementById("webname-wrong").innerHTML =
        "Du måste välja ett namn på din blogg!";
      if (theme.value === "") {
        document.getElementById("theme-wrong").innerHTML =
          "Du måste välja ett tema på din blogg!";
      } else {
      }
    } else if (theme.value === "") {
      document.getElementById("theme-wrong").innerHTML =
        "Du måste välja ett tema på din blogg!";
    } else {
    }

    if (blue.checked) {
      color = blue.value;
    } else if (green.checked) {
      color = green.value;
    } else if (yellow.checked) {
      color = yellow.value;
    } else if (pink.checked) {
      color = pink.value;
    } else if (purple.checked) {
      color = purple.value;
    } else if (burgundy.checked) {
      color = burgundy.value;
    } else {
      document.getElementById("color-wrong").innerHTML =
        "Du måste välja en färg!";
    }

    //Background-value from checked
    if (bananasBackground.checked) {
      background = bananasBackground.value;
      console.log(background);
    } else if (flowersBackground.checked) {
      background = flowersBackground.value;
    } else if (dragonBackground.checked) {
      background = dragonBackground.value;
    } else if (mountainsBackground.checked) {
      background = mountainsBackground.value;
    } else if (vegetablesBackground.checked) {
      background = vegetablesBackground.value;
    } else if (colorsBackground.checked) {
      background = colorsBackground.value;
    } else {
      document.getElementById("background-wrong").innerHTML =
        "Du måste välja bakgrundsbild!";
    }

    if (document.getElementById("webname-wrong").innerHTML != "") {
      if (document.getElementById("theme-wrong").innerHTML != "") {
      } else if (document.getElementById("color-wrong").innerHTML != "") {
      } else if (document.getElementById("background-wrong").innerHTML != "") {
      } else {
      }
    } else if (document.getElementById("theme-wrong").innerHTML != "") {
      if (document.getElementById("color-wrong").innerHTML != "") {
      } else if (document.getElementById("background-wrong").innerHTML != "") {
      } else {
      }
    } else if (document.getElementById("color-wrong").innerHTML != "") {
      if (document.getElementById("background-wrong").innerHTML != "") {
      } else {
      }
    } else if (document.getElementById("background-wrong").innerHTML != "") {
    } else {
      let createNewPage = new newPage(
        newLogin,
        color,
        background,
        webname.value,
        theme.value,
        []
      );
      // createNewPage.active = true;

      let blogList: string = localStorage.getItem("blogs");
      let blogListObject: newPage[] = JSON.parse(blogList);

      blogListObject.push(createNewPage);

      let listToString = JSON.stringify(blogListObject);
      localStorage.setItem("blogs", listToString);

      window.location.href = "http://localhost:1234/index.html";
    }
  });
}
