// 9-script.js
$(function() {  // This shorthand for $(document).ready ensures the DOM is fully loaded
    $.getJSON("https://hellosalut.stefanbohacek.dev/?lang=fr", function(data) {
        $('#hello').text(data.hello);
    }).fail(function() {
        console.log("An error occurred.");
    });
});
