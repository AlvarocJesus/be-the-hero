const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recursos
 
*/

/**
 * Metodos HTTP:
 * GET: Buscar informacao do back-end
 * POST: Criar uma informacao  no back-end
 * PUT: Alteral informacao no back-end
 * Delete: Deletar uma informacao no back-end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos o simbolo de "?" (filtros, paginacao)
 * Rout Params: Parametros para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/**
  * SQL: MySQL, SQLite, PortgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: Select*from users
 * query vuilder: table('users').select('*').where()
*/



