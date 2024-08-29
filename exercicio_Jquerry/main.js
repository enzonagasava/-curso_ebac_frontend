$(document).ready(function(){
    var listas = $('#listas')

    $('form').on('submit', function(e){
        e.preventDefault();

        const mensagem = $('#mensagem').val();
        const novaTarefa = $(`<li style="display:none" = none></li>`);
        $(`<label id="nova-mensagem">${mensagem}</label></li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo("ul");
        $(novaTarefa).fadeIn(1000);

        $(novaTarefa).click(function(){           
            $(novaTarefa).css("text-decoration", "line-through");
        $(novaTarefa).click(function(){
            $(novaTarefa).css("text-decoration", "none");
        })
        })
        
        $('#mensagem').val('');

    })

})
