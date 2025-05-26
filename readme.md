# 🛒 REST API Node + Express + TypeScript

A RESTful API for product management built with **Node.js**, **Express**, and **TypeScript**. It uses **Sequelize** as the ORM for a PostgreSQL database and is documented with **Swagger**. Testing is implemented using **Jest** and **Supertest**.

---

## 📦 Features

- Full CRUD for products (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
- Validation with `express-validator`
- Interactive API documentation with Swagger
- PostgreSQL connection using Sequelize and Sequelize-Typescript
- Automated testing with Jest + Supertest (with coverage)
- Strong typing with TypeScript
- Environment variable handling with `dotenv`

---

## 📁 Project Structure

src/
├── config/ # Database configuration

├── handlers/ # Route controllers

├── middleware/ # Custom middlewares

├── models/ # Sequelize model definitions

├── routes/ # Endpoints and Swagger documentation

├── index.ts # Main entry point

├── server.ts # Express server configuration

├── swagger.ts # Swagger JSDoc configuration

tests/ # Automated tests

---


## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rest_api_node_ts_server.git
cd rest_api_node_ts_server

# Install dependencies
npm install
```

## 🧪 Available Scripts
### Start in development mode using nodemon and ts-node
npm run dev

### Run tests with Jest
npm test

### Run tests with coverage report
npm run test:coverage

## 📘 Swagger Documentation
GET http://localhost:3000/docs
![Swagger UI Preview](./docs/swagger-preview.png)

## Luciano Germani