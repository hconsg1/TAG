var express = require("express"),
    multer = require("multer"),
    ejs = require("ejs"),
    path = require("path"),
    app = express();
    fs = require("fs");



var num_pics = 0;
var count = 0;


fs.readFile("count.txt","utf8",function(err, data){
	if (err) throw err;
	count = parseInt(data);

});	

app.set("view engine", "ejs");

app.set("views",path.join(__dirname, '/views'));

app.get("/", function(req,res){
    res.render('index',{
    	title: "You have "+count.toString()+" Photos!!!"
    });

});

app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/images'));


app.use('/uploads', express.static(__dirname+ "/uploads"));
app.use('/public/images', express.static(__dirname+ "/public/images"));

app.use(multer({dest: './uploads/',
				rename: function(fieldname, filename){
						count++;
						fs.writeFile('count.txt',count,function(err){
							if (err) throw err;
							});
						return count.toString();
				}
				}))

app.post("/display", function(req,res){
	res.render('display',{
		count: count
	});
})

app.post("/uploaded", function(req,res){
    res.render('index',{
    	title: "You now have "+count.toString()+" Photos!!!"
    });

});
app.get("/display", function(req,res){
	res.render('display',{
		count: count
	});
})

app.get("/reset", function(req,res){
	for (var i=1;i<=count;i++){
		fs.unlink("uploads/"+i.toString()+".jpg");
	}
	count=0
    res.render('index',{
    	title: "You now have "+count.toString()+" Photos!!!"
    });
})


//mongoose.model('users',{name: String});

app.listen(8080);
console.log("server listening at 8080")
