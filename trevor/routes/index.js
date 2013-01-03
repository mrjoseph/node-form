exports.index = function (req, res) {
	
	var formData = {
		firstname : req.param('firstname'),
		lastname  : req.param('lastname'),
		email     : req.param('email'),
		password  : req.param('password')
	};
	var saveJSON = JSON.stringify(formData);
	//console.log(saveJSON);
	

	var saveData = function(dataToSave){
		var
		fs		= require('fs'),
		file	= 'user.json',
		path	= 'data/';

		fs.writeFile('data/user.json','{"users":[' + dataToSave + ']}',function(err){
			if(err){
				console.log('file did not write');
			} else {
				console.log('success saving', dataToSave);
			}
		});
	};
	saveData(saveJSON);
		var sendData = function (){
		var fs = require('fs');
		fs.readFile('../data/user.json','utf8', function(err,data){
			if (err){
				return console.log(err);
			}
		});
	var user = JSON.stringify(data);
	res.send(user);
	console.log(data);	
	};
	sendData();
};

