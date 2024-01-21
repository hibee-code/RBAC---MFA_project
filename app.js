import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();




// app.use(express.urlencoded({ extended: true }));
// app.use(express.json({ extended: true }));


const port = 5000;
async function initialize() {
  try {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log(`server running on ${port}`)
    })
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

initialize();





