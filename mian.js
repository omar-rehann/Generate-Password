let inputel = document.querySelector(".input-container input");
let btn_click = document.querySelector(".btn");

btn_click.addEventListener("click", () => {
    generatenumber();
});

function generatenumber() {
    let char = "0123456789abcdefghjklmnopqrstuvwxABCDEFGHJQLMNOPQRSZCX&*()_+^%$#@!?><";
    let passlength = 14;
    let password = "";
    for (let i = 0; i < passlength; i++) {
        const reuslt = Math.floor(Math.random() * char.length);
        password += char.substring(reuslt, reuslt + 1);
    }
    inputel.value = password;
}

function copyPassword() {
    inputel.select();
    inputel.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputel.value);
}