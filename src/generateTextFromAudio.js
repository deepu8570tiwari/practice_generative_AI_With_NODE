import OpenAI from "openai";
import dotenv from "dotenv";
import {createReadStream, writeFileSync} from "fs";
dotenv.config();
const client=new OpenAI({apiKey:process.env.OPEN_AI_KEY});

async function audioToText(){
    const response=await client.audio.transcriptions.create({
        model:"gpt-4o-mini-transcribe",
        file:createReadStream('src/harvard.wav'),
        language:'en'
    })
    const rawText=response.text;
    writeFileSync("audioText.text",rawText,'utf-8');
}
audioToText();