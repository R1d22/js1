let show = document.querySelector('.show');
let hide = document.querySelector('.hide');
let add = document.querySelector('.upper');
let mix = document.querySelector('.switch');

show.addEventListener('click', (ev) => {
    add.classList.remove('clear');
    add.classList.add('upper');
});

hide.addEventListener('click', (ev) => {
    add.classList.add('clear');
    add.classList.remove('upper');
});

/*mix.addEventListener('click', () => {
    add.classList.remove('clear');
    add.classList.add('upper');
})

mix.addEventListener('click', () =>  {
    if(add.('upper')) {
        add.classList.remove('upper');
        add.classList.add('none');
    } else if (add.('none')) {
        add.classList.remove('none');
        add.classList.add('upper');
    }
})*/