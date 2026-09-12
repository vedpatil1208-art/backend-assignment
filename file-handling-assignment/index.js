const fs = require("fs");

const studentData = `Name: Ved
Course: Full Stack Development
Technology: Node.js
`;

const extraData = `Experience: 1 Year
City: Mumbai
`;

// Task 1 - create the file and write student information
fs.writeFile("student.txt", studentData, (err) => {
  if (err) return console.error("Error creating file:", err.message);
  console.log("File created successfully");

  // Task 2 - read the file and display its content
  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) return console.error("Error reading file:", err.message);
    console.log("\n--- File Content ---");
    console.log(data);

    // Task 3 - append extra information without removing existing data
    fs.appendFile("student.txt", extraData, (err) => {
      if (err) return console.error("Error updating file:", err.message);
      console.log("Data updated successfully");

      fs.readFile("student.txt", "utf8", (err, updatedData) => {
        if (err) return console.error("Error reading file:", err.message);
        console.log("\n--- Updated Content ---");
        console.log(updatedData);

        // Task 4 - rename the file
        fs.rename("student.txt", "studentDetails.txt", (err) => {
          if (err) return console.error("Error renaming file:", err.message);
          console.log("File renamed to studentDetails.txt");

          // Task 5 - delete the file
          fs.unlink("studentDetails.txt", (err) => {
            if (err) return console.error("Error deleting file:", err.message);
            console.log("File deleted successfully");
          });
        });
      });
    });
  });
});