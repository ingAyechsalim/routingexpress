const express=require('express')
const app = express()
const timestamp = require('time-stamp'); 
const current_hour =timestamp('HH');

if (current_hour<17&&current_hour>8) {
console.log("serveur in time zone")
console.log(current_hour)

app.use(express.static('./public'));
}
else
	{
		app.get('',(req,res)=>{
			
		res.sendFile(__dirname+'/public2/404.html');

		});
		console.log("Timeout serveur")
	}
//connexio serveur 3000
app.listen(3000,err=>{
    if(err) console.log("server erreur")
    else console.log("server connected in port 3000")
})
//
