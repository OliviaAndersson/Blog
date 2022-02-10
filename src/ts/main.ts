import { logIn, newPage } from "./models/page";
import { postPicture } from "./models/post";

window.onload = function () {
  console.log("hej");
  let blogList: string = localStorage.getItem("blogs");
  let blogListObject: newPage[] = JSON.parse(blogList);

  if (blogListObject === null || blogListObject.length == 0) {
    createExample();
  } else {
  }
  document
    .getElementById("log-in-button")
    .addEventListener("click", logInWithUsername);
};

function createExample() {
  let id: number = 1;

  let exampleLogin = new logIn("Olivia Andersson", "olianders", "hej123", id);

  let examplePage = new newPage(
    exampleLogin,
    "#788475",
    "https://i.ibb.co/mqHKdRc/flowers.jpg;SameSite=None;Secure",
    "Fruktiverse",
    "recept",
    []
  );

  let examplePost1 = new postPicture(
    "Tillbaka i Sverige",
    "11 januari 2022",
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?cs=srgb&dl=pexels-julie-aagaard-2097090.jpg&fm=jpg;SameSite=None;Secure",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
  );
  let examplePost2 = new postPicture(
    "Filmkväll",
    "13 januari 2022",
    "https://images.pexels.com/photos/2240571/pexels-photo-2240571.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-2240571.jpg&fm=jpg;SameSite=None;Secure",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
  );

  let examplePost3 = new postPicture(
    "Norrsken",
    "15 januari 2022",
    "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-1693095.jpg&fm=jpg;SameSite=None;Secure",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
  );

  let examplePost4 = new postPicture(
    "Middag",
    "20 januari 2022",
    "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260;SameSite=None;Secure",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
  );


  let examplePost5 = new postPicture(
    "Resa",
    "24 januari 2022",
    "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260;SameSite=None;Secure",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
  );


  let examplePost6 = new postPicture(
    "Växter",
    "29 januari 2022",
    "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260;SameSite=None;Secure",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
  );

  examplePage.posts.push(examplePost1, examplePost2, examplePost3, examplePost4, examplePost5,examplePost6);
  let bloglist: Object[] = [];
  bloglist.push(examplePage);

  let listToString = JSON.stringify(bloglist);
  localStorage.setItem("blogs", listToString);
}

function logInWithUsername() {
  let blogList: string = localStorage.getItem("blogs");
  let blogListObject: newPage[] = JSON.parse(blogList);

  let username: HTMLInputElement = document.getElementById(
    "username"
  ) as HTMLInputElement;
  let password: HTMLInputElement = document.getElementById(
    "password"
  ) as HTMLInputElement;

  for (let i = 0; i < blogListObject.length; i++) {
    if (blogListObject[i].logIn.username === username.value) {
      if (blogListObject[i].logIn.password === password.value) {
        blogListObject[i].active = true;
        let listToString = JSON.stringify(blogListObject);
        localStorage.setItem("blogs", listToString);

        window.location.href = "http://localhost:1234/myPage.html";
      } else {
        document.getElementById("wrong").innerHTML = "Fel lösenord!";
        password.value = "";
      }
    } else {
      document.getElementById("wrong").innerHTML =
        "Vi hittar ingen blog som är registrerat med detta användarnamn, prova igen! ";
      username.value = "";
      password.value = "";
    }
  }
}
