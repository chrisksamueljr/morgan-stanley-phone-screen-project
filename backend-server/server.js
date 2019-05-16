"use strict";
exports.__esModule = true;
var express = require("express");
var get_courses_route_1 = require("./get-courses.route");
var search_lessons_route_1 = require("./search-lessons.route");
var app = express();
app.route('/api/courses').get(get_courses_route_1.getAllCourses);
app.route('/api/courses/:id').get(get_courses_route_1.getCourseById);
app.route('/api/lessons').get(search_lessons_route_1.searchLessons);
var httpServer = app.listen(9000, function () {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
