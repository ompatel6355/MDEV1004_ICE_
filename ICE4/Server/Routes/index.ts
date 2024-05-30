import express from 'express';
const router = express.Router();

import { DisplayMovieList, DisplayMovieById } from '../Controllers/movie';

/* List of Routes (endpoints) */

/* GET Movie List. */
router.get('/', function(req, res, next) {  DisplayMovieList(req, res, next); });

/* GET Movie by ID. */
router.get('/:id', function(req, res, next) {  DisplayMovieById(req, res, next); });

export default router;
