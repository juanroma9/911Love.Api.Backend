import {config}         from 'dotenv';
import express          from 'express';
import {ApolloServer}   from 'apollo-server-express';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import connectMongoDb       from './models/ConnectMongoDb.js';
import HeroSliderResolver   from './resolvers/hero_slider_resolver.js'
import HeroSliderTypeDefs   from './typeDefs/hero_slider_typeDefs.js'
import AssetsInfoResolver   from './resolvers/AssetsInfoResolver.js';
import AssetsInfoTypeDefs   from './typeDefs/AssetsInfoTypeDefs.js';
import ProductTypeDefs      from './typeDefs/ProductTypeDefs.js';
import ProductResolver      from './resolvers/ProductResolver.js';

//Configuramos la lectura de las variables de entorno
const enviroments_vars = config();

//Creamos el servidor web
const express_server = express();

connectMongoDb()

// Metodos de la Rest Api
express_server.get('/', (req, res) => res.send('Welcome to 911 Love Api'));


//Se encarga de inizializar el servidor de apollo
async function start() {

    const typeDefs  = mergeTypeDefs([HeroSliderTypeDefs, AssetsInfoTypeDefs, ProductTypeDefs ]);
    const resolvers = mergeResolvers([HeroSliderResolver,AssetsInfoResolver, ProductResolver]);

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