(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  const body = document
    .querySelector("body")
    .addEventListener("click", function () {
      header.style.color = "blue";
    });
})();
