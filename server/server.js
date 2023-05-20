require('dotenv').config();
const express = require('express');
const db = require('./config/connection');
const { verify } = require('jsonwebtoken');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const http = require('http');
const cors = require('cors');
const { readFileSync } = require('fs');
const resolvers = require('./schema/resolvers');
const cookieParser = require('cookie-parser');
const typeDefs = readFileSync('./schema/typeDefs.graphql', 'utf8');
const path = require('path');

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cookieParser())
// const api_routes = require('./routes/api_routes');

function decodeToken(token) {
  return verify(token, process.env.JWT_SECRET)
}

function authenticate({ req, res }) {
  const token = req.cookies.token;
  if (!token)
    return { req, res }

  console.log(token)

  const decoded = decodeToken(token)
  if (!decoded)
    return { req, res }
  return { req, res, user_id: decoded.user_id }
}

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  const whitelist = ['http://localhost:3333', 'https://limitless-inlet-40294.herokuapp.com', 'http://localhost:3000'];
  app.use(
    '/',
    cors({
      credentials: true,
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
    }),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: authenticate
    }),
  );

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
}

db.once('open', async () => {
  await startServer();

  console.log('Express server running on port %s', PORT);
  console.log('GraphQL server waiting at /graphql');
});