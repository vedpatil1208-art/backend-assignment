# Node.js HTTP Server Assignments

A set of five assignments built using only the built-in Node.js `http` module. Each server runs on port 3000.

## Files

| File | Assignment |
| --- | --- |
| `assignment1.js` | Basic HTTP Server |
| `assignment2.js` | HTML Response Server |
| `assignment3.js` | Student JSON API |
| `assignment4.js` | Route Handling Server |
| `assignment5.js` | Personal Portfolio Server |

## Assignment 1: Basic HTTP Server

Creates an HTTP server using `http.createServer()` that runs on port 3000 and displays a welcome message in the browser.

Browser output:

```
Welcome to Node.js Server
```

Terminal output:

```
Server is running on http://localhost:3000
```

## Assignment 2: HTML Response Server

Serves an HTML page with the `Content-Type` header set to `text/html`. The page shows a Student Portal heading along with the student name, course name, college name, and a welcome paragraph.

Browser output:

```
Student Portal

Name: John Doe
Course: Full Stack Development
College: XYZ College

Welcome to our Node.js application.
```

## Assignment 3: Student JSON API

Returns JSON data from the `/student` route with the `Content-Type` header set to `application/json`. Any other route returns a 404 status with `404 - Page Not Found`.

Visiting `http://localhost:3000/student`:

```json
{
  "id": 101,
  "name": "John",
  "course": "BCA",
  "semester": 4,
  "city": "Mumbai"
}
```

## Assignment 4: Route Handling Server

Handles multiple routes by checking `req.url`.

| Route | Response |
| --- | --- |
| `/` | Welcome to Home Page |
| `/about` | About Us |
| `/contact` | Contact Information |
| `/services` | Our Services |
| Any other route | 404 - Page Not Found |

## Assignment 5: Personal Portfolio Server

A small portfolio website where each route returns a full HTML page with a heading, relevant content, and navigation links to move between pages.

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Me |
| `/skills` | Skills |
| `/projects` | Projects |
| `/contact` | Contact Details |

Invalid routes return `404 - Page Not Found`.

## Running

```bash
node assignment1.js
```

Then open `http://localhost:3000` in the browser. Stop the server with `Ctrl + C` before running the next file, since all five use port 3000.

## Concepts Covered

- `http.createServer()` and server listening
- Request and response objects
- Response headers and `Content-Type`
- HTML and JSON responses
- Routing using `req.url`
- HTTP status codes
