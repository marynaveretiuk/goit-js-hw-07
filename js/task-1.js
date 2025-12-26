const items = document.querySelectorAll("#categories li.item");
console.log("Numbers of categories", items.length);
// через forEach
items.forEach(item => {
  const title = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("ul li").length;
  console.log(`Categories: ${title}`);
  console.log(`Elements: ${numberOfElements}`)
});