$(function () {
    $('form input[type=submit]').click(sendForm);

})
function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/vmartynova99@gmail.com",
        method: "POST",
        data: {clientNname: $('#client-name').val()},
        dataType: "json"
    }).done (function () {
        $('form').html('<h1> Дякуємо! З Вами неодмінно зв*яжуться!</h1>');
    }).fail(function () {
        $('form').html('<h1> Виникла помилка! Спробуйте пізніше.</h1>');

    });
}
