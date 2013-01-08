(function($, window, undefined){
    $(function(){
        var
        myForm      = $('#myform'),
        submitBtn   = $('#submit'),
        resetBtn    = $('#reset');

        //load user data
        getUserData();

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
            getUserData();
        });

        //reset form button
        resetBtn.on('click' ,function(e){
            e.preventDefault();
            myForm.find('input[type="text"],input[type="password"]').val('');
        });
        $('#load-users').on('click',function(e){
            e.preventDefault();
            getUserData();
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

    var getUserData = function(){
        $.ajax({
            url     : '/display',
            type    : 'get',
            dataType: 'json',
            cache: false,
            success : function(response){
                for (var key in response.users){
                     var obj = response.users[key], i, result = '';
                     console.log(obj);
                     result += '<div>' + obj.firstname + '</div>';
                     result += '<div>' + obj.lastname + '</div>';
                     result += '<div>' + obj.email + '</div>';
                     result += '<div>' + obj.username + '</div>';
                     result += '<div>' + obj.password + '</div>';
                     $('#users').html(result);
                }
            }
        });
    };

}(jQuery,window));
