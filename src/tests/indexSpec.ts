import supertest from "supertest";
import app from "../index";
import { resize_function } from "../utilities/reshape_image";

const test = supertest(app);

describe("Test images endpoint", () => {
  it("Test if image 'fjord.jpg' exist", async () => {
    await test.get("/images?file_name=fjord&width=220&height=200").expect(200);
  });
  it("Test if write 'filename' rather tan 'file_name'", async () => {
    await test.get("/images?filename=fjord&width=200&height=200").expect(404);
  });
});

describe("Test resize function", () => {
  it("Test image santamonica is exist", async () => {
    const data = await resize_function("santamonica", 200, 200);
    expect(data).toEqual(true);
  });
});
