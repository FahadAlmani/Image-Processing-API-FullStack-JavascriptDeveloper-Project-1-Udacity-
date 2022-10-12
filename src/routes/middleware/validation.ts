import { Response, Request, NextFunction } from "express";
import { join } from "path";
import { existsSync } from "fs";
/*
source:
https://stackoverflow.com/questions/42654595/how-to-check-if-value-is-nan-in-typescript
*/
export const parameter_validation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const file_path = join(
    __dirname,
    `../../../images/${req.query.file_name}.jpg`
  );
  if (!req.query.file_name) {
    res.status(404).send("you have to check you write 'file_name' correct.");
  } else if (!existsSync(file_path)) {
    res.status(404).send("you have to check file_name is written correct.");
  } else if (!req.query.width) {
    res.status(404).send("you have to check you write 'width' correct.");
  } else if (Number.isNaN(parseInt(req.query.width as string))) {
    res.status(404).send("you have to check width not a number.");
  } else if (!req.query.height) {
    res.status(404).send("you have to check you write 'height' correct.");
  } else if (Number.isNaN(parseInt(req.query.height as string))) {
    res.status(404).send("you have to check height not a number.");
  } else {
    next();
  }
};
