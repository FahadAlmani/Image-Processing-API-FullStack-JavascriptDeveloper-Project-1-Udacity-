import { Router } from "express";
import images from "./api/images";

const router = Router();

router.use("/images", images);

export default router;
