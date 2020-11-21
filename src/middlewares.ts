import { Request, Response, NextFunction } from 'express';
import HttpException from './exceptions/HttpException';


function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
}
  
function errorHandler (err: HttpException, req: Request, res: Response, next: NextFunction) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV !== 'development' ? `Error: ${err.message}` : err.stack
    });
}
  
export default {
    notFound,
    errorHandler
};