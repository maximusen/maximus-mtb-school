$('#submit-contact-form').click(function(ev){
    if ($('form')[0].checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/simon.ms777@gmail.com", 
            method: "POST",
            data: {
                visitorName: $('#name').val(),
                visitorTel: $('#tel').val()
            },
            dataType: "json"
        }).done(function() {
            $('form')[0].reset();
            $('#form-msg').html('<p>Дякуємо, очікуйте дзвінка від нас та готуйтесь відправитись в надзвичайну подорож в горах! </p>')
        }).fail(function(){
            $('#form-msg').html('<p>Вибачте, але допущено помилку. Перевірте ще раз</p>')
        });
    }
});