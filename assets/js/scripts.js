let cardMostrar = document.querySelectorAll('p.cardContent')

cardMostrar.forEach((item, index) =>{
    document.querySelectorAll('.card .cardTitle')[index]
        .addEventListener('click', function(){

            let content = document.querySelectorAll('p.cardContent')[index]

            if(content.classList.contains('mostrar')){
                
                content.classList.remove('mostrar')
                document.querySelectorAll('.cardMost')[index].innerHTML = '+'

            }else{
                content.classList.add('mostrar')
                document.querySelectorAll('.cardMost')[index].innerHTML = '-'
            }
        })
})

const modalOverlay = document.querySelector('.modal-overlay')
const btRegister = document.querySelector('.bt-Register')

    btRegister.addEventListener('click', function(){
        modalOverlay.classList.add('active')
    })

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

