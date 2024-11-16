$(document).ready(function() {

    $('#btnGetData').click(function(){
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){

                let message = String(data.userId) + '\n';
                message += String(data.id) +'\n';
                message += String(data.title) +'\n';
                message += String(data.body) +'\n';

                if ($('.display').length === 0){
                    const displayDiv = $('<div class="display"></div>');
                    $('#btnGetData').after(displayDiv);
                }       

                $('.display').text(message);

            });
    });

});