const $input1 = document.querySelector("#input1");
const $input2 = document.querySelector("#input2");
const $btn1 = document.querySelector(".btn1");
const $btn2 = document.querySelector(".btn2");
const $btn3 = document.querySelector(".btn3");
const $result = document.querySelector(".result");
$btn1.addEventListener("click", () => {
    const $li = document.createElement("li");
    const text = document.createTextNode(`${$input1.value}, ${$input2.value}`);
    $li.appendChild(text);
    $result.appendChild($li);
});
$btn2.addEventListener("click", () => {
    $input1.value = "";
    $input2.value = "";
});
$btn3.addEventListener("click", () => {
    document.body.classList.add("bodyColor");
});