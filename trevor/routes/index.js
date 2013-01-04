exports.index = function (req, res) {

	
	var formData = {
		firstname	: req.param('firstname'),
		lastname	: req.param('lastname'),
		email		: req.param('email'),
		username	: req.param('username'),
		password	: req.param('password')
	};
	var saveJSON = formData;
	var saveData = function(dataToSave){
		var
		fs		= require('fs'),
		file	= 'user.json',
		path	= 'data/';

		fs.readFile('data/user.json','utf8', function(err,data){
		if (err){
			console.log(err);
		}
		console.log(data);
	});

		//Delete the exisiting contence of the file
		var addJSON = {
			"users": [
				{
					"user_01": [
						dataToSave
					]
				}
			]
		};
		//adds new JSON to file
		fs.writeFile(path + file,JSON.stringify(addJSON, null, 4),function(err){
			if(err){
				console.log('file did not write');
			} else {
				console.log('success');
			}
		});
	};
	saveData(saveJSON);
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