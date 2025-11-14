import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

// const response=await client.responses.create({
//     input:"apple color is",
//     model:"gpt-4o-mini"
// })
const response=await client.responses.create({
    input:[
        {role:'system', content:"answe in hindi language"},
        {role:'user', content:"what is coding"},
    ],
    model:"gpt-4o-mini"
})
console.log(JSON.stringify(response, null, 2));
