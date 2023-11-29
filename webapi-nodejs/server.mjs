import express from "express";
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send(JSON.stringify({status: "Ok"})));
app.get('/api', (req, res) => {
    res.status(200).send("Hello world"); 
});

app.post('/api', (req, res) => {
    res.status(200).send(JSON.stringify(req.body)); 
});

app.listen(8000, () => console.log("Node js web api server running on port 8000"));