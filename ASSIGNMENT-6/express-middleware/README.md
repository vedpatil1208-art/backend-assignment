# Assignment 6: Express.js Middleware

Three Express.js applications demonstrating router-level middleware, global request logging, and response time measurement.

## Project Structure

express-middleware/
├── routerMiddleware.js
├── requestLogger.js
├── responseTime.js
├── package.json
└── package-lock.json

## Setup

npm install

## Assignment 1: Router-Level Middleware

File: routerMiddleware.js

A separate router is created with Express Router and mounted at /api. The custom middleware routerLogger is attached with router.use(), so it runs only for routes inside the router. It logs the HTTP method, request URL, and current date and time.

Run:

node routerMiddleware.js

| Route | Response |
|---|---|
| http://localhost:3000/api/students | Students List |
| http://localhost:3000/api/courses | Courses List |
| http://localhost:3000/api/faculty | Faculty List |

Terminal output:

GET /api/students 2026-09-17 16:51:07
GET /api/courses 2026-09-17 16:52:28
GET /api/faculty 2026-09-17 16:52:36

req.originalUrl is used instead of req.url because req.url inside a router is relative to the mount path and would omit /api.

## Assignment 2: Request Logger Middleware

File: requestLogger.js

The custom middleware logger is registered globally with app.use() before all routes, so it runs for every incoming request. It logs the HTTP method, request URL, and current date and time.

Run:

node requestLogger.js

| Route | Response |
|---|---|
| http://localhost:3000/ | Welcome to Home Page |
| http://localhost:3000/about | About Us |
| http://localhost:3000/contact | Contact Information |

Terminal output:

GET / 2026-09-17 10:30:45
GET /about 2026-09-17 10:31:20
GET /contact 2026-09-17 10:32:10

## Assignment 3: Response Time Middleware

File: responseTime.js

The middleware responseTimeLogger records the start time with Date.now() when a request arrives. It listens for the response's finish event, calculates the elapsed time, and logs the HTTP method, request URL, and response time in milliseconds.

Run:

node responseTime.js

| Route | Response |
|---|---|
| http://localhost:3000/ | Home Page |
| http://localhost:3000/products | Product List |
| http://localhost:3000/users | User List |

Terminal output:

GET / - 4 ms
GET /products - 6 ms
GET /users - 3 ms

## Concepts Covered

- Express Router
- Router-level middleware with router.use()
- Global middleware with app.use()
- req.method, req.url, req.originalUrl
- next()
- Request lifecycle and response time measurement with Date.now()

## Notes

- All three apps use port 3000. Run one at a time and stop the server with Ctrl + C before starting the next.
- node_modules is excluded through .gitignore. Run npm install after cloning.

## Tech Stack

- Node.js
- Express.js
