import {config}         from 'dotenv';
import express          from 'express';
import {ApolloServer}   from 'apollo-server-express';
import typeDefs         from './typeDefs.js';
import resolvers        from './resolvers.js';
import connect_db       from './database.js';

//Configuramos la lectura de las variables de entorno
const enviroments_vars = config()

//Creamos el servidor web
const express_server = express();

connect_db()

// Metodos de la Rest Api
express_server.get('/', (req, res) => res.send('Welcome to 911 Love Api'));


//Se encarga de inizializar el servidor
async function start() {

    // Same ApolloServer initialization as before, plus the drain plugin
    // for our httpServer.
    const apollo_sever = new ApolloServer ({
        typeDefs : typeDefs,
        resolvers : resolvers
    })
    
    // Ensure we wait for our server to start
    await apollo_sever.start();    

    apollo_sever.applyMiddleware({app: express_server})

    express_server.use('*', (req, res) => res.status(404).send('Not Found') );

    express_server.listen(process.env.PORT, () => {
        console.log('Server on port ', process.env.PORT)
    })
}

start();

export default express_server;