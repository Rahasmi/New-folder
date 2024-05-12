const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employees');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employees");

// Define the EmployeeModel schema and other routes here...

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.status(200).json({ message: "Success", user: user }); // Sending user data along with the success message
            } else {
                res.status(401).json({ message: "The password is incorrect" }); // Sending 401 Unauthorized status for incorrect password
            }
        } else {
            res.status(404).json({ message: "No record found" }); // Sending 404 Not Found status for user not found
        }
    })
    .catch(err => {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Internal server error" }); // Sending 500 Internal Server Error status for server-side errors
    });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
