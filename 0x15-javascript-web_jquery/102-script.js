// 102-script.js
$(document).ready(function() {
    $('#btn_translate').click(function() {
        var lang = $('#language_code').val(); // Récupère la valeur du champ de saisie
        var url = "https://fourtonfish.com/hellosalut/?lang=" + lang; // Construit l'URL avec le code de langue

        $.get(url, function(response) {
            if (response && response.hello) {
                $('#hello').text(response.hello); // Affiche la traduction dans le div#hello
            } else {
                $('#hello').text('No translation found.'); // Gestion de réponse sans traduction
            }
        }).fail(function() {
            $('#hello').text('Error: Could not fetch data.'); // Gestion des erreurs de la requête
        });
    });
});
