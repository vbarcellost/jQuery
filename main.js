$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
})

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefaNova = $('#nome-tarefa-nova').val();
        const novoItem = $('tbody').append(`<tr><td>${nomeDaTarefaNova}</td></tr>`);
    $('#nome-tarefa-nova').val('');

    })

    $('tbody').on('click', 'tr', function() {
    $(this).toggleClass('tarefa-concluida');
    })
})