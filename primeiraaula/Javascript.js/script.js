let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '50%'
email.style.width = '50%'

function validaNome(){
let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
}   else {
    txtNome.innerHTML= 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1){
            
            txtEmail.innerHTML = 'E-mail invalido'
            txtEmail.style.color = 'red'
    }   else {
        txtEmail.innerHTML= 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length > 100){
        txtAssunto.innerHTML = 'Texto maior que o permitido máximo 100 caracteres'
        txtAssunto.style.color='red'
        
    } else {

        txtAssunto.style.display ='none'
        assuntoOk = true
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preenchar o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '550px'


function mapaNormal(){
        
    mapa.style.width = '200px'
    mapa.style.height = '150x'
    
    }
}

    

