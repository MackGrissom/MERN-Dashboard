import  express  from "express";
import * as dotenv from 'dotenv'
import cors from 'cors';


dotenv.confit();

const app = express();
app.use(cors());
app.use(expresss.json({limit:'50mb'}));

app.get('/', (req, res) => {
    res.send({message:'Hello world!'});
})

const startServer = async () = { 
    try {

    }, catch (error) {
console.log(error);
    }
}
