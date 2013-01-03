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
        console.log(obj);
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
                console.log(response);
                var i, html = '';
                for (i = 0; i < response.users.length; i++){
                    html += '<div><strong>Firstname:</strong> ' + response.users[i].firstname + '</div>';
                    html += '<div><strong>Lastname:</strong> ' + response.users[i].lastname + '</div>';
                    html += '<div><strong>Email Address:</strong> ' + response.users[i].email + '</div>';
                    html += '<div><strong>Username:</strong> ' + response.users[i].username + '</div>';
                    html += '<div><strong>PAssword:</strong> ' + response.users[i].password + '</div>';
                }
                $('#users').html(html);
            }
        });
    };

}(jQuery,window));
