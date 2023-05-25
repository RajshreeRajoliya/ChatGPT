const PORT = 8000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions' , (req , res) =>{
    const options={
        method : 'POST',
        headers : {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model : "gpt-3.5-turbo",
            messages : [{role : "user" , content : "how are you?"}],
            max_tokens : 100,
            
        })
    }
try{
fetch('https://api.openai.com/v1/chat/completions' , options)
} catch(err) {
console.log(err)
}
})

app.listen(PORT,() =>
console.log('Server listening on port' + PORT))