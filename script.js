const output = document.querySelector("#output");

async function fetchData() {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?limit=5&search=apple"
  );
  // const response = await fetch(
  //   "https://openapi.programming-hero.com/api/phones?search=oppo"
  // );
  const result = await response.json();
  const data = await result.data;
  console.log(data);
  show(data);
}

fetchData();

function show(data) {
  output.innerText = "";
  data.forEach((element) => {
    console.log(data);

    const parent = document.createElement("div");
    parent.classList.add("parent");

    const image = document.createElement("img");
    image.classList.add("img");
    image.src = element.image;

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = element.phone_name;

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = element.phone_name;

    const button = document.createElement("button");
    button.classList.add("button-show");
    button.innerText = "Show Details";

    parent.append(image, title, description, button);
    output.append(parent);
  });
}
