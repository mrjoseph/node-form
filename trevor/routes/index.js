exports.index = function (req, res) {


	var formData = {
		firstname	: req.param('firstname'),
		lastname	: req.param('lastname'),
		email		: req.param('email'),
		username	: req.param('username'),
		password	: req.param('password')
	};

	var
	fs		= require('fs'),
	file	= 'user.json',
	path	= 'data/';
	var existingData = {};
	fs.readFile(path + file,'utf8', function(err,data){
		if (err){
			return console.log(err);
		}
		var newData = JSON.parse(data);
		var users = users || {};

		var i = 0, item;
		for (item in newData["users"]){
			i = i + 1;
		}
		var id = i +1;
		var x = newData["users"];

		x[id] = formData;
		var addJSON = addJSON || {};
		addJSON["users"] = x;
		fs.writeFile(path + file,JSON.stringify(addJSON,null,4),function(err){
			if(err){
				console.log('file did not write');
			} else {
				console.log('success');
			}
		});

	});
};

exports.send =  function(req,res){
	var
	fs		= require('fs'),
	file	= 'user.json',
	path	= 'data/';

	fs.readFile(path + file,'utf8', function(err,data){
		if (err){
			return console.log(err);
		}
		res.send(data);
	});
};
