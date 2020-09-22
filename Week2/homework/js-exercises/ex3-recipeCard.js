"use strict";

let threeBeansSalad = {};

threeBeansSalad["title"] = "3 Beans Salad";
threeBeansSalad["servings"] = 2;
threeBeansSalad["ingredients"] = ["cannellini beans", " kidney beans", " garbanzo beans", " red onion", " parsley"];

for (const key in threeBeansSalad) {
    console.log(`${key} : ${threeBeansSalad[key]}`);
  }
