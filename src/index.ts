import { readFile, writeFile } from "fs/promises";
import { FFmpeg } from "@ffmpeg.wasm/main";

const ffmpeg = await FFmpeg.create({ core: "@ffmpeg.wasm/core-mt" });

