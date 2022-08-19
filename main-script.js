document.body.addEventListener("keydown", function (e) {
  document.querySelector(".name-text").innerHTML = `${e.key}`;
  document.querySelector(".below-key-name").innerHTML = `Key : ${e.key}`;
  document.querySelector(".code-text").innerHTML = `${e.keyCode}`;
  document.querySelector(".below-key-code").innerHTML = ` Code : ${e.keyCode}`;
});
