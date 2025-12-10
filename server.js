const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Demo test handler: responds with "hello server"
function demoTestHandler(req, res) {
    res.send('hello server');
}

// Route using the handler
app.get('/demo', demoTestHandler);

app.get('/login', (req,res)=>{res.send('lOGIN PAGE')});

app.get('/signup', (req,res)=>{res.send({
'code':'204',
'message':'signup successful'
})} );



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});