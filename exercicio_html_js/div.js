const form = document.getElementById('formulario');

function compare(numB, numA) {
    let result = numB > numA;
    return result;
    }

form.addEventListener("submit", function(e){
    e.preventDefault();

    const numB = document.getElementById('numero-B')
    const numA = document.getElementById('numero-A')
    const mensagemSucesso = `Parabéns! Você preencheu o formulário corretamente.`

    formValido = (compare(numB.value, numA.value))
    if (formValido){
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        numB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

document.getElementById('numero-A').addEventListener('keyup', function(m) {

    console.log(document.getElementById('numero-A').value)
    formValido = (compare(m.target.value))

    if (formValido){
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        document.querySelector('.error-message').style.display = 'none';
    }
    })

document.getElementById('numero-B').addEventListener('keyup', (m) => {
        console.log(document.getElementById('numero-B').value)
        formValido = (compare(m.target.value))

        if (formValido){
            const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';
        } else {
            document.querySelector('.error-message').style.display = 'none';
        }
    
        })
