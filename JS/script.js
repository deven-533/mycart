
let all = document.getElementById('all');
let product = document.getElementById('s1');
let btn = document.getElementById('sbtn');
btn.addEventListener('click', function () {
    all.innerHTML = ` <div class="simg"><img src="https://source.unsplash.com/400x400/?${product.value}" alt="Not Found"></div>`
});



