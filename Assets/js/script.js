const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let db;
const getDb = async () => {
  db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
  });
  console.log(`Connected to the employee_db database.`);
}

const trackerQuestions = async function () {
  return await inquirer.prompt({
    type: "list",
    name: "employeeTracker",
    message: "What would you like to view today?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  });
};