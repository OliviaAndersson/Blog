import { logIn, newPage } from "./models/page";

window.onload = function () {
  document.getElementById("next-button").addEventListener("click", () => {
    let username: HTMLInputElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    let password: HTMLInputElement = document.getElementById(
      "password"
    ) as HTMLInputElement;

    let new5 = new logIn(username.value, password.value, 2);

    console.log(new5);
    document.getElementById("personal-container").style.display = "none";

    document.getElementById("page-container").style.display = "block";
    document.getElementById("hej").addEventListener("click", () => {
      let namel: HTMLInputElement = document.getElementById(
        "name"
      ) as HTMLInputElement;

      let page5 = new newPage(new5, "#f", "ddd", namel.value, "fiskar", []);

      console.log(page5);
    });
  });
};
