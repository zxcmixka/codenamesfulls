import express from 'express'
import { configDotenv } from 'dotenv';

const app = express()
const port = process.env.PORT || 5000;

async function main() {
    app.use(express.json())


    app.get('/', (req, res) => {
        res.send('Сервер работает!');
      });
      
    app.listen(5000, () => {
        console.log(`Server is running on port ${port}`)
    })

}

main()