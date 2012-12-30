
(function ($, window, undefinded) {

    $(function () {
        var
        $submit = $('.submit'),
        $reset = $('.reset');

        $submit.on('click', function (e) {
            e.preventDefault();

            var
            $form = $('.nodeForm'),
            serialisedForm = $form.serializeArray(),
            data = getFormData(serialisedForm);

            $.ajax({
              url: '/save',
              type: 'POST',
              dataType: 'json',
              data: data,
              success: function(data, textStatus, xhr) {
                console.log(data);
              },
              error: function(xhr, textStatus, errorThrown) {
                //called when there is an error
              }
            });

        });

        $reset.on('click', function (e) {
            e.preventDefault();
            $('input[type="text"], input[type="password"]').each(function () {
                $(this).val('');
            });
        });

    });

    function getFormData(formArray) {
        var
        data = {},
        len = formArray.length,
        item,
        i;

        for (i = 0; i < len; i += 1) {
            item = formArray[i];
            data[item.name] = item.value;
        }

        return data;
    }

}(jQuery, window));
