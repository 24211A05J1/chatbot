//routes  '/'
//model chatbot model
//controller send and recive messages

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import {exec} from "chile_process";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = express();
const PORT = 3000;


server.use(bodyParser.json());
server.use(cors());
server.use(routes);
//server.use(express.static(path.join(__dirname,)))


//routes
server.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"..","frontend","index.html"));//adds html file 
});

server.listen(PORT, ()=>{
    console.log("Server is running in port 3000");
})