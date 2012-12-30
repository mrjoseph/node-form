
(function ($, window, undefined) {

    $(function () {
        var
        $submit = $('.submit'),
        $reset  = $('.reset');

        $submit.on('click', function (e) {
            e.preventDefault();

            var
            $form          = $('.nodeForm'),
            serialisedForm = $form.serializeArray(),
            data           = getFormData(serialisedForm);

            //console.log(emailIsValid(data.email));

            $.ajax({
              url      : '/save',
              type     : 'POST',
              dataType : 'json',
              data     : data,
              success  : function(data, textStatus, xhr) {
                console.log(data.firstname);
                console.log(data.lastname);
                console.log(data.email);
                console.log(data.password);
              },
              error    : function(xhr, textStatus, errorThrown) {
                console.log(errorThrown);
                console.log(textStatus);
              }
            });
        });

        $reset.on('click', function (e) {
            e.preventDefault();
            $('input[type="text"], input[type="password"]').val('');
        });

    });

    function getFormData (formArray) {
        var data = {};

        $.map(formArray, function(item, i){
            data[item['name']] = item['value'];
        });

        return data;
    }

    // function emailIsValid (email){
    //     return /^([a-zA-Z0-9_.-+])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    // }

}(jQuery, window));
