const menu = document.querySelector('.show-all')
const mapbotao = document.querySelector('.map-all')
const soma = document.querySelector('.sum-all')
const veg = document.querySelector('.filter-vegan')
const list = document.querySelector('.list')

function format(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function mostrar(itens) {

    let novlist = '';

    itens.forEach(item => {
        novlist = novlist + `
            <li>
                <img src="${item.src}">
                <p>${item.name}</p>
                <p class='price'>${format(item.price)}</p>
            </li>
        `;
    });

    list.innerHTML = novlist
}
    
    function map() {
        let novpreco = menuOptions.map( item => ({
           ...item,
           price: item.price * 0.9,
        }))

        mostrar(novpreco)
    }

    function somaitens() {
        let totalvalor = menuOptions.reduce((acc,cur) => {
            return acc + cur.price
        }, 0)

        list.innerHTML = `
            <h2>A soma de todos os valores </h2><br><p class='price'>R$ ${totalvalor}</p>    
        
        `
    }

    function nat() {
        const filt = menuOptions.filter(item => item.vegan)

        mostrar(filt)
    }

    function clickmenu() {
        var menu = document.getElementById("menu");
        if (menu.classList.contains("container-buttons")) {
          menu.classList.remove("container-buttons");
          menu.classList.add("menu-visivel");
        } else {
          menu.classList.remove("menu-visivel");
          menu.classList.add("container-buttons");
        }
    }

    function clickdesa() {
        var menu = document.getElementById("menu");
        if (menu.classList.contains("container-buttons")) {
          menu.classList.remove("container-buttons");
          menu.classList.add("menu-visivel");
        } else {
          menu.classList.remove("menu-visivel");
          menu.classList.add("container-buttons");
        }
    }

    menu.addEventListener('click' , () => mostrar(menuOptions))
    mapbotao.addEventListener('click', map)
    soma.addEventListener('click', somaitens)
    veg.addEventListener('click', nat)

