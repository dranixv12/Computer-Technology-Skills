/*function highLight(){
    const items = document.querySelectorAll("#rows .content div");

items.forEach(item => {
  item.addEventListener("mouseover", (event) => {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    } else {
      items.forEach(otherItem => {
        otherItem.classList.remove("selected");
      });
      item.classList.add("selected");
    }
  });
}); }
console.log('hello');
console.log(highLight); */

/*This code selects all the div elements within a parent element with an id of "rows". It then adds an event listener to each div element that triggers when the element is clicked. When an element is clicked, 
the code checks if the element already has a class called "selected". If it does, the class is removed from the element to toggle off the selection. If it doesn't, the code removes the "selected" class from all other div elements, 
and adds the "selected" class to the clicked element to toggle on the selection. This allows the user to toggle the selection on and off by clicking on the div element repeatedly. */

const items = document.querySelectorAll("#rows .content div");

items.forEach(item => {
  item.addEventListener("click", (event) => {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    } else {
      items.forEach(otherItem => {
        otherItem.classList.remove("selected");
      });
      item.classList.add("selected");
    }
  });
});

