// unsplash api
const clientId = "BwbPJ5iMWHjY-Ecu4BnizmQTIgybna3i6cHo1mgD41g";
const imgIds = {
  about: [
    "three-crumpled-yellow-papers-on-green-surface-surrounded-by-yellow-lined-papers-V5vqWC9gyEU",
  ],
  menu: {
    popularDishes: [
      "spaghetti-and-meatballs-with-basil-garnish-shot-close-up-HTpiHBRoBIc",
      "green-vegetable-on-white-ceramic-plate-PqsImnjuElM",
      "cooked-meat-on-tray-NYBnDWeOX2c",
      "round-cooked-pizza-x00CzBt4Dfk",
      "sushi-on-white-ceramic-plate--1GEAA8q3wk",
      "plated-burger-on-white-surface-Hf5N0v05ff0",
      "cooked-food-on-brown-wooden-round-plate-dfQyFICC7tM",
      "a-bowl-of-soup-and-a-spoon-on-a-towel-8kcoSj9ZkAw",
      "brown-bread-on-white-ceramic-plate--RF3H8HJe5I",
    ],
    breakfast: [
      "a-plate-of-scrambled-eggs-on-a-table-RDGOV0LGZdY",
      "assorted-fruits-in-bowls-7YLe87dcrm8",
      "clear-glass-bowl-with-cereal-iNWjJJXeym4",
      "toasted-bread-on-black-round-plate-5C2JmojQ6hQ",
    ],
    lunch: [
      "cooked-food-on-white-ceramic-plate-b94AylTxWqA",
      "spaghetti-on-white-ceramic-plate-sA3wymYqyaI",
      "a-bowl-of-hummus-and-pita-chips-on-a-wooden-table-8dBV2JVwmC0",
      "food-photography-of-spices-and-meat-IiZ2Gqxm5Pg",
    ],
    dinner: [
      "a-plate-of-food-DBVIb_rWUKw",
      "a-bowl-of-food-on-a-wooden-table-qrleIV6KkfI",
      "a-white-plate-topped-with-meat-and-veggies-wkms_RlOuDU",
      "grilled-fish-cooked-vegetables-and-fork-on-plate-bpPTlXWTOvg",
    ],
  },
  teamMembers: [
    "woman-in-white-chef-uniform-holding-green-plate-with-food-DdglEoIC2y4",
    "man-in-white-button-up-shirt-and-black-vest-FMh5o5m5N9E",
    "man-in-black-nike-jacket-wearing-white-cap-SiQgni-cqFg",
    "man-in-black-crew-neck-t-shirt-smiling-lRAWcT7uwhY",
  ],
  instaposts: [
    "strawberry-and-banana-on-white-ceramic-plate-vT5xrj3z1OE",
    "pastries-in-display-cabinet-o9kswzHrvMs",
    "baked-cupcakes-close-up-photography-j6DH45Bflho",
    "chocolate-cake-on-white-ceramic-plate-Bkm6wO6pHOY",
  ],
  blogs: [
    "a-white-plate-topped-with-pancakes-and-bacon-next-to-a-glass-of-orange-juice-HdSwvTP2QH0",
    "a-plate-of-ravioli-on-a-wooden-table-S4pC5pMddN0",
    "oyster-dish-_79ZJS8pV70",
    "person-holding-tong-HH8D03HHqDI",
    "a-table-topped-with-two-cups-filled-with-fruit-HYNER6ZqrCc",
    "cooked-dish-on-gray-bowl--YHSwy6uqvk",
  ],
};

const aboutImg = document.getElementById("aboutImg");
const popularDishImgs = document.querySelectorAll(".popular-dish-img");
const breakfastImgs = document.querySelectorAll(".breakfast-img");
const lunchImgs = document.querySelectorAll(".lunch-img");
const dinnerImgs = document.querySelectorAll(".dinner-img");
const teamImgs = document.querySelectorAll(".team-img");
const instaPostImgs = document.querySelectorAll(".insta-post-img");
const blogImgs = document.querySelectorAll(".blog-img");

function fetchAndSetImage(imgElement, imgId) {
  fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${clientId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      imgElement.src = data.urls.regular;
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchAndSetImage(aboutImg, imgIds.about[0]);

popularDishImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.menu.popularDishes[index]);
});

breakfastImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.menu.breakfast[index]);
});

lunchImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.menu.lunch[index]);
});

dinnerImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.menu.dinner[index]);
});

teamImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.teamMembers[index]);
});

instaPostImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.instaposts[index]);
});

blogImgs.forEach((imgElement, index) => {
  fetchAndSetImage(imgElement, imgIds.blogs[index]);
});
