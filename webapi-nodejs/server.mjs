import express from "express";

const message = "Node js web api server running!!";
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send(JSON.stringify({status: "Ok", message})));

app.get('/api', (req, res) => {
    res.status(200).send("Hello world"); 
});

app.post('/api', (req, res) => {
    res.status(200).send(JSON.stringify(req.body)); 
});

app.listen(8000, () => console.log(`${message}:  http://localhost:8000`));
