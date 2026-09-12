# File Handling Assignment — Node.js

## Objective
Perform file operations using Node's built-in `fs` module.

## Operations
1. `fs.writeFile()` — creates student.txt with student information
2. `fs.readFile()` — reads and displays content with error handling
3. `fs.appendFile()` — adds Experience and City without deleting old data
4. `fs.rename()` — renames student.txt to studentDetails.txt
5. `fs.unlink()` — deletes the file

Each operation runs inside the previous one's callback so they execute in order.

## How to Run
1. Check Node is installed: `node -v`
2. Open the project folder
3. Run: `node index.js`

