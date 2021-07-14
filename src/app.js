import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser'
import express from 'express';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true } ));

app.listen(process.env.PORT, () => 
  console.log(`Bienvenidos a mi Assessment ejecutado en el puerto: ${process.env.PORT}`)
);

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});