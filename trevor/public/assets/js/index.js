(function($, window, undefined){
    $(function(){
        var
        myForm      = $('#myform'),
        submitBtn   = $('#submit'),
        resetBtn    = $('#reset');

        submitBtn.on('click' ,function(e){
            e.preventDefault();
            var
            data        = myForm.serializeArray(),
            myNewObject = getData(data),
            result      = IsEmail('mr.trevorjoseph@gmail.com');
     
            $.ajax({
                url     : '/save',
                type    : 'post',
                dataType: 'json',
                data    : myNewObject,
                success : function(myNewObject){
                    console.log(myNewObject.firstname);
                    console.log(myNewObject.lastname);
                    console.log(myNewObject.email);
                    console.log(myNewObject.password);
                },
                error   : function(xhr, textStatus, errorThrown){

                }
            });

            setTimeout(function(){
                $.ajax({
                    url     : '/display',
                    type    : 'post',
                    dataType: 'json',
                    success : function(html){
                        console.log(html);
                    }
                });
            },1000);
        });

        //reset form button
        resetBtn.on('click' ,function(e){
            e.preventDefault();
            myForm.find('input[type="text"],input[type="password"]').val('');
        });
    });
    var getData = function(formArray){
        var i,
        obj = {},
        len = formArray.length,
        item;

        for(i=0; i<len; i++){
            item = formArray[i];
            obj[item.name] = item.value;
        }
        return obj;
    };
    var IsEmail = function(email){
    //RegEx checks the input value
            var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
            return regex.test(email);
    };

}(jQuery,window));
