"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMovie = exports.DisplayMovieById = exports.DisplayMovieList = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
const Util_1 = require("../Util");
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
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrive a movie", data: "" });
    }
    else {
        movie_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Movie Retrived and Displayed", data: data });
            }
            else {
                res.status(404).json({ success: false, msg: "Movie not found", data: "" });
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DisplayMovieById = DisplayMovieById;
function AddMovie(req, res, next) {
    let genres = (0, Util_1.SanitizeArray)(req.body.genres);
    let directors = (0, Util_1.SanitizeArray)(req.body.directors);
    let actors = (0, Util_1.SanitizeArray)(req.body.actors);
    let writers = (0, Util_1.SanitizeArray)(req.body.writers);
    let movie = new movie_1.default({
        movieID: req.body.movieID,
        title: req.body.title,
        studio: req.body.studio,
        genres: genres,
        directors: directors,
        writers: writers,
        actors: actors,
        length: req.body.length,
        year: req.body.year,
        shortDescription: req.body.shortDescription,
        mpaRating: req.body.mpaRating,
        criticsRating: req.body.criticsRating
    });
    movie_1.default.create(movie)
        .then(() => {
        res.status(200).json({ success: true, msg: "Movie added", data: movie });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.AddMovie = AddMovie;
//# sourceMappingURL=movie.js.map