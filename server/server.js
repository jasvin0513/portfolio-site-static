require("dotenv").config();
const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db");

//Middleware
app.use(cors());
app.use(express.json());

//Routes
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
})

//Get all projects

app.get("/projects", async(req, res) => {
    try {
        const projects = await pool.query("SELECT * FROM projects ORDER BY project_id;");
        return res.json(projects.rows);
    }
    catch (err) {
        console.log(err.message);
    }
})

//Get a project

app.get("/projects/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const project = await pool.query("SELECT * FROM projects WHERE project_id = $1", [id]);
        return res.json(project.rows[0]);
    }
    catch (err) {
        console.log(err.message);
    }
})