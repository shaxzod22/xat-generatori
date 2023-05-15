let select = document.querySelector(".selection")
let rasmiy = document.querySelector('.rasmiy')
let onamga = document.querySelector('.onamga')
let dustimga = document.querySelector('.dustimga')
let sevgi = document.querySelector('.sevgi')

select.addEventListener('click' , function(event) {
    let elValue = select.value
    
    if(elValue === 'rasmiy'){
        rasmiy.classList.remove('hidden')
        dustimga.classList.add('hidden')
        sevgi.classList.add('hidden')
        onamga.classList.add('hidden')
    }else if(elValue === 'onamga'){
        rasmiy.classList.add('hidden')
        dustimga.classList.add('hidden')
        sevgi.classList.add('hidden')
        onamga.classList.remove('hidden')
    }else if(elValue === 'dustimga'){
        rasmiy.classList.add('hidden')
        dustimga.classList.remove('hidden')
        sevgi.classList.add('hidden')
        onamga.classList.add('hidden')
    }else if(elValue === 'sevgi'){
        rasmiy.classList.add('hidden')
        dustimga.classList.add('hidden')
        sevgi.classList.remove('hidden')
        onamga.classList.add('hidden')
    }else{
        rasmiy.classList.add('hidden')
        dustimga.classList.add('hidden')
        sevgi.classList.add('hidden')
        onamga.classList.add('hidden')
    }
})