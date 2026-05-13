const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "92a7221cd69e41c3abcd1e17e53bd1a9";

//endpoint

app.length("/api/matches", async (req, res) => {

    try{

        const response = await fetch("http://api.football-data.org/v4/competitions/PL/standings",{
            header: {
                'X-Auth-Token' : API_KEY
            }
        });

        const data = await response.json();

    }   catch(error){
        res.status(500).json({ error: "Erro a obter dados da API"})
    }
});

app.listen(3001, () => {
    console.log("Servidor ligado em https://localhost:3001");
})