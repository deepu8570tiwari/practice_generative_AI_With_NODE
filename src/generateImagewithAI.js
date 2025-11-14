import OpenAI from "openai";
import dotenv from "dotenv";
import {writeFileSync} from "fs";
dotenv.config();
const client=new OpenAI({apiKey:process.env.OPEN_AI_KEY});

async function generateImage(){
    const response=await client.images.generate({
        model:"dall-e-2",
        prompt:"generate image for a cat in fire bus",
        size:"512x512",
        n:1,
        response_format:"b64_json"
    })
    console.log(response);
    const rawimages=response.data[0].b64_json;
    const path="./generatedImage.png";
    const buffer=Buffer.from(rawimages,'base64')
    writeFileSync(path,buffer);
    console.log("Image is saved and path is "+ path)
}
generateImage();