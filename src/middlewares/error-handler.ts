import { Request, Response, NextFunction } from 'express';

//para errors
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};
