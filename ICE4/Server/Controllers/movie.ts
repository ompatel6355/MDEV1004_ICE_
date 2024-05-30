import { Request, Response, NextFunction } from 'express';

import Movie from '../Models/movie';

/**
 * This function displays the movie list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMovieList(req: Request, res: Response, next: NextFunction): void
{
    Movie.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Movie List Retrieved and Displayed", data: data})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}

export function DisplayMovieById(req: Request, res: Response, next: NextFunction): void
{
    // endpoint should be /api/:id
    let id = req.params.id;

    Movie.findById({_id: id})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "One Movie Retrived and Displayed", data: data})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}