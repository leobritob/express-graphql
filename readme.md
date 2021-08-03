# GraphQL App
This is a simple app made with Docker, Node.js, Knex, GraphQL, and Apollo Server.

## Requirements
1. Docker

## Configuration
1. Copy the `.env.example` and create a new file named as `.env`, and fill variable values.

## Running
1. First, you should run the database first.
```bash
docker-compose up -d graphql_app_mariadb
```
2. After that, you should run the node.js app.
```bash
docker-compose up -d
```
3. Now, you should access the node.js app Docker container.
```bash
docker exec -it graphql_app_nodejs bash
```
4. After that, you should run the migration script file
```bash
npx knex migration:latest
```
5. Congrats! Your app will be running on http://localhost:4000 🚀

