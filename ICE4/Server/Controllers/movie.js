"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieById = exports.DisplayMovieList = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
function DisplayMovieList(req, res, next) {
    movie_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Movie List Retrieved and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayMovieList = DisplayMovieList;
function DisplayMovieById(req, res, next) {
    let id = req.params.id;
    movie_1.default.findById({ _id: id })
        .then((data) => {
        res.status(200).json({ success: true, msg: "One Movie Retrived and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayMovieById = DisplayMovieById;
//# sourceMappingURL=movie.js.map