$(document).ready(function() {
    function fetchHello() {
        var lang = $('#language_code').val();  // Récupère le code de langue
        var url = "https://fourtonfish.com/hellosalut/?lang=" + lang;  // Construit l'URL

        $.get(url, function(response) {
            if (response && response.hello) {
                $('#hello').text(response.hello);  // Affiche la traduction dans le div#hello
            } else {
                $('#hello').text('No translation found.');  // Gestion de réponse sans traduction
            }
        }).fail(function() {
            $('#hello').text('Error: Could not fetch data.');  // Gestion des erreurs de la requête
        });
    }

    $('#btn_translate').click(fetchHello);  // Gestionnaire d'événements pour le clic

    $('#language_code').keypress(function(event) {
        if (event.which == 13) {  // Vérifie si la touche pressée est 'Enter'
            fetchHello();
        }
    });
});
