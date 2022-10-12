import sharp from "sharp";
import { join } from "path";
import fs from "fs";

/*sources:
 https://sharp.pixelplumbing.com/
 https://www.youtube.com/watch?v=WtuJLcBvxI0&t=98s
 */
export const resize_function = async (
  file_name: string,
  width: number,
  height: number
) => {
  const file_path = `thumb/${file_name}_${width}_${height}.jpg`;
  try {
    await sharp(join(__dirname, `../../images/${file_name}.jpg`))
      .resize({
        width: width,
        height: height,
      })
      .toFile(file_path);
    return fs.existsSync(file_path);
  } catch (err) {
    console.log(err);
  }
};
