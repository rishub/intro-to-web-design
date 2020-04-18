const express = require("express");
const path = require("path");
const _ = require("lodash");

const store = require('data-store')('todos');

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.use(function (req, res, next) {
	const allowedOrigins = [
		// domain goes here
		"http://localhost:3000",
	];
	const origin = req.headers.origin;
	if (allowedOrigins.indexOf(origin) > -1) {
		res.header("Access-Control-Allow-Origin", origin);
	}
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get("/todos", function (req, res) {
	res.json(store.get("todos", []));
});

app.post("/addTodo", function (req, res) {
	const newTodo = req.body["todo"];
	if (!newTodo) {
		res.send({"error": true, "message": "no todo in body"});
	}
	const currentTodos = store.get("todos", []);
	store.set("todos", [...(newTodo ? [newTodo] : []), ...currentTodos]);
	res.send({"success": true});
});

app.post("/deleteTodo", function (req, res) {
	const index = req.body.index;
	const currentTodos = store.get("todos", []);
	const newTodos = currentTodos.filter((_, i) => i !== index);
	store.set("todos", newTodos);
	res.send({"success": true});
});

app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;
console.log("listening", port);
app.listen(port);
