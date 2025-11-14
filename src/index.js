import OpenAI from "openai";
import dotenv from "dotenv";
import { encoding_for_model } from "tiktoken";
dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

// const response=await client.responses.create({
//     input:"apple color is",
//     model:"gpt-4o-mini"
// })
const prompt="How Are you?";
const model="gpt-4o-mini"
const response=await client.responses.create({
    input:[
        {role:'user', content:prompt},
    ],
    model:model,
    temperature:1,
    max_output_tokens:16,
    store:true
})
//console.log(JSON.stringify(response, null, 2));

const getResponse=await client.responses.retrieve("resp_034dfedb9f59d06100691768617c30819799070f77573768af");
console.log(getResponse)
// function calculateToken(){
//     const encoder=encoding_for_model(model);
//     const tokenData=encoder.encode(prompt);
//     console.log(tokenData);
// }

// calculateToken()