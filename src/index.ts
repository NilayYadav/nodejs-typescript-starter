import { readFile, writeFile } from "fs/promises";
import { FFmpeg } from "@ffmpeg.wasm/main";
import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000


const ffmpeg = await FFmpeg.create({ core: "@ffmpeg.wasm/core-mt" });

app.get('/', (_req: Request, res: Response) => {
    const v = ffmpeg.version.core.version
    return res.send({ message: 'Express Typescript on Vercel', v })
})

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
})

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})