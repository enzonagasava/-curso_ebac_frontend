document.addEventListener('DOMContentLoaded', function(){
        const repositorios = document.getElementById('repositorios');
        const seguidores = document.getElementById('seguidores');
        const seguindo = document.getElementById('seguindo');
        const login = document.getElementById('login');
        const username = document.getElementById('username');
        const avatar = document.getElementById('avatar');
        const linkProfile = document.getElementById('linkProfile')

    fetch('https://api.github.com/users/enzonagasava')
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        login.innerText = json.login;
        username.innerText = json.name;
        avatar.src = json.avatar_url;
        linkProfile.href = json.html_url;
    })
    .catch(function(error){
        console.log('ocorreu um erro')
    })
})