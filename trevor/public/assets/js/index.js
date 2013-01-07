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
                console.log(response.users);
                for (var key in response.users){
                    var obj = response.users[key];
                    for(var prop in obj){
                        var users = obj[prop], i, result = '';
                        for(i=0;i<users.length;i++){
                            result += '<div><strong>Firstname:</strong> ' + users[i].firstname + '</div>';
                            result += '<div><strong>Lastname:</strong> ' + users[i].lastname + '</div>';
                            result += '<div><strong>Email Address:</strong> ' + users[i].email + '</div>';
                            result += '<div><strong>Username:</strong> ' + users[i].username + '</div>';
                            result += '<div><strong>PAssword:</strong> ' + users[i].password + '</div>';
                            $('#users').html(result);
                        }
                    }
                }
            }
        });
    };

}(jQuery,window));
