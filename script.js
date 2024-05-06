const output = document.querySelector("#output");
const input = document.querySelector("#input");
let search_btn = document.querySelector("#search-btn");
const show_more = document.querySelector("#show-more");

window.addEventListener("load", async () => {
  output.innerHTML = "";
  let ld = await fetchData();
  let five = ld.splice(0, 5);

  show(five);
});

async function fetchData(query = "apple") {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${query}`
  );
  const result = await response.json();
  const data = await result.data;
  console.log(data);
  // show(data);
  return data;
}

// fetchData();

//  function to take search query and give that to fetchdata

search_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let input = document.querySelector("#input");
  let data = await fetchData(`${input.value}`);
  // input.value = "";
  // console.log(data);
  let slicedData = data.slice(0, 6);
  console.log(slicedData);
  show(slicedData);

  const loadMore = document.createElement("button");
  loadMore.innerText = "Load More";
  loadMore.classList.add("load-more");
  output.append(loadMore);

  // event on loadMore button

  loadMore.addEventListener("click", async (e) => {
    let input = document.querySelector("#input");

    let data = await fetchData(`${input.value}`);
    show(data);

    input.value = "";
  });
});

// function to show data,

function show(data) {
  output.innerText = "";
  data.forEach((element, index) => {
    // console.log(data);

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

    button.addEventListener("click", () => {
      console.log(index);
    });

    parent.append(image, title, description, button);
    output.append(parent);
  });
}
