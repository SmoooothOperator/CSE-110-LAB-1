window.onload = function () {
  document.getElementById("subscribe").addEventListener("submit", alertSubFunc);
};

function alertSubFunc() {
  const form = document.getElementById("input").value;
  let message = "Subscriber Added:" + form;
  alert(message);
}
