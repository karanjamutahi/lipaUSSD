let express = require('express');
let bodyparser = require('body-parser');
let app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.post('/visa-ussd', (req,res,next)=>{
console.log(req.body);
let text = req.body.text;
let sessionId = req.body.sessionId;
let user = req.body.phoneNumber;
let message = "";

res.set({
    'Content-Type': 'Text/plain'
});

if(text === ''){
    message = "CON First time user. DO KYC"; 
    res.send(message);
}
res.send("END Pleasure going upstream");
});

app.listen(3000, ()=>{
    console.log('listening');
});
