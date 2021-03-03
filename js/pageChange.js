let index = document.querySelector('.index');
let login = document.querySelector('.login');
let register = document.querySelector('.register');
let arr = [index,login,register];
for(let i = 0 ;i<arr.length;i++){
    arr[i].onclick = function () {
        location.href=`./${arr[i].className}.html`;
    }
}