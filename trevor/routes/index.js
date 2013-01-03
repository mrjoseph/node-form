exports.index = function (req, res) {
	
	var formData = {
		firstname : req.param('firstname'),
		lastname  : req.param('lastname'),
		email     : req.param('email'),
		username  : req.param('username'),
		password  : req.param('password')
	};
	var saveJSON = JSON.stringify(formData);
	var saveData = function(dataToSave){
		var
		fs		= require('fs'),
		file	= 'user.json',
		path	= 'data/';

		//Delete the exisiting contence of the file

		fs.writeFile(path + file,'{"users":[' + dataToSave + ']}',function(err){
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
		console.log(data);
	});
};