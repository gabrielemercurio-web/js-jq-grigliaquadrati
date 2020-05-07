// Scrivere un numero random tra 0 e 10 dentro ognuno dei quadrati

// genero 10 numeri random
$('.quadrato').each(function() {

    var random = Math.floor(Math.random() * 10) + 1;
    $('.quadrato').text(random);

    if (random) {

    } else {

    }

});
