(function($, window, undefined){
    $(function(){
        var
        myForm = $('#myform'),
        submitBtn = $('#submit'),
        resetBtn = $('#reset');

        submitBtn.on('click' ,function(e){
            e.preventDefault();
            var data = myForm.serializeArray();
            console.log(data);
            var myNewObject = getData(data);
            var result = IsEmail('mr.trevorjoseph@gmail.com');
            console.log(result);
        });
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
