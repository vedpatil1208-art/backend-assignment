# Assignment 5: Express.js Basics

A simple Express.js server demonstrating basic routes, route parameters, multiple route parameters, query parameters, and request logging.

## Project Structure

```
express-basics-assignment/
├── server.js
├── package.json
└── README.md
```

## Steps to Run

1. Clone the repository and open the `express-basics-assignment` folder.
2. Install dependencies:
```bash
   npm install
```
3. Start the server:
```bash
   node server.js
```
4. Open `http://localhost:3000` in a browser or an API client such as Thunder Client or Postman.

## Routes

### Task 1: Basic Routes

| Method | Route | Response |
|---|---|---|
| GET | `/` | Welcome to Home Page |
| GET | `/about` | This is About Page |
| GET | `/contact` | This is Contact Page |

These are static routes defined with `app.get()`. Each returns a fixed text response using `res.send()`.

### Task 2: Route Parameter

| Method | Route | Example | Response |
|---|---|---|---|
| GET | `/user/:name` | `/user/john` | Hello john |

`:name` is a dynamic segment. Express captures its value from the URL and makes it available as `req.params.name`.

### Task 3: Multiple Route Parameters

| Method | Route | Example | Response |
|---|---|---|---|
| GET | `/product/:id/:category` | `/product/101/electronics` | Product ID: 101, Category: electronics |

The route has two dynamic segments, read as `req.params.id` and `req.params.category`.

### Task 4: Query Parameters

| Method | Route | Example | Response |
|---|---|---|---|
| GET | `/search` | `/search?name=john&role=developer` | Name: john, Role: developer |

Query parameters come after `?` in the URL as key-value pairs separated by `&`. They are read with `req.query.name` and `req.query.role`. The route path itself stays `/search`.

### Task 5: Request–Response Logging

A global middleware registered with `app.use()` runs before every route. It prints the request method (`req.method`) and URL (`req.url`) to the terminal, then calls `next()` to pass control to the matching route.

## Sample Outputs

### Browser / API Client

```
GET http://localhost:3000/
Welcome to Home Page

GET http://localhost:3000/about
This is About Page

GET http://localhost:3000/contact
This is Contact Page

GET http://localhost:3000/user/john
Hello john

GET http://localhost:3000/product/101/electronics
Product ID: 101, Category: electronics

GET http://localhost:3000/search?name=john&role=developer
Name: john, Role: developer
```

### Terminal

```
Server running on http://localhost:3000
GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```

## Concepts Covered

- Express server setup
- Basic routing with `app.get()`
- Route parameters with `req.params`
- Query parameters with `req.query`
- Global middleware with `app.use()` and `next()`
- Request logging with `req.method` and `req.url`

## Tech Stack

- Node.js
- Express.js
