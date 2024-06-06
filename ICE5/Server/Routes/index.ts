import express from 'express';
const router = express.Router();

import { DisplayMovieList, DisplayMovieById, AddMovie, UpdateMovie, DeleteMovie } from '../Controllers/movie';
import { ProcessRegistration } from '../Controllers/auth';

/* List of Movie Routes (endpoints) */

/* GET Movie List. */
router.get('/', (req, res, next) => {  DisplayMovieList(req, res, next); });

/* GET Movie by ID. */
router.get('/:id', (req, res, next) => {  DisplayMovieById(req, res, next); });

/* Add Movie */
router.post('/add', (req, res, next) => {  AddMovie(req, res, next); });

/* Update Movie */
router.put('/update/:id', (req, res, next) => {  UpdateMovie(req, res, next); });

/* Delete Movie */
router.delete('/delete/:id', (req, res, next) => {  DeleteMovie(req, res, next); });

/* List of Authentication Routes (endpoints) */
router.post('/register', (req, res, next) => {  ProcessRegistration(req, res, next); });

export default router;
