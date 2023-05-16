const markAll = document.getElementById("markAll");

const notification = document.getElementById("notification");

const cardNeutralize = document.querySelectorAll(".not-Container");

console.log(cardNeutralize);
function removeNot() {
  notification.innerHTML = "0";
  cardNeutralize.forEach(function (card) {
    card.classList.remove("gray-background");
  });
}
