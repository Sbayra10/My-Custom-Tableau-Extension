$(document).ready(function() {
    $('#initializeButton').click(function() {
        tableau.extensions.initializeAsync().then(function() {
            $('#app').append('<p>Extension initialized!</p>');
        }, function(err) {
            console.error('Error while Initializing: ' + err.toString());
        });
    });
});
