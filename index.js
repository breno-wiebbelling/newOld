function mouseEnter(){
    document.getElementById('lupa').src = "./logos/lupa2.png";
}

function mouseLeave(){
    
    document.getElementById('lupa').src = './logos/lupa.png';
} 

function pesquisa(){
    //window.alert('');
    document.getElementById("navBar").innerHTML = ("<div onmouseleave='sairPesquisa()'style='background-color: #c7baac80; height: 110px; width: 80%; display: flex; justify-content='center' display: flex; flex-direction: row;justify-content:center; ;align-items: center;><input type='text' placeholder='    Escreva e nós encontramos pra você!' class='searchBar' style='border:none; margin-top:30px; margin-left:60px;width:500px; height:50px; background-color: rgb(236, 233, 227); border-radius:5px ;'></div>");

    
}

function sairPesquisa(){
    document.getElementById('navBar').innerHTML = ('<div class="links"><a href="./pags/catálogo.html">Catálogo</a><a href="./pags/notícias.html">Notícias</a><a href="./pags/sobre.html">Sobre Nós</a><a href="./pags/projeto.html">Publique seu Projeto</a><a href="#contatos">Contato</a></div>')
}

/*
Não será mais usado
function enterMain(){
    document.getElementById('main').style.backgroundImage= ("url('./imagens/mainMouseUp.jpg')");
    
}

function leaveMain(){
    document.getElementById('main').style.backgroundImage= ("url('./imagens/main.jpg')");

}
*/