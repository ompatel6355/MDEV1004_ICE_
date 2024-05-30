import express from 'express';
const router = express.Router();

import { DisplayMovieList, DisplayMovieById, AddMovie } from '../Controllers/movie';

/* List of Routes (endpoints) */

/* GET Movie List. */
router.get('/', (req, res, next) => {  DisplayMovieList(req, res, next); });

/* GET Movie by ID. */
router.get('/:id', (req, res, next) => {  DisplayMovieById(req, res, next); });

/* Add Movie */
router.post('/add', (req, res, next) => {  AddMovie(req, res, next); });

export default router;
