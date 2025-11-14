import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const client=new OpenAI({apiKey:process.env.OPEN_AI_KEY});
async function aiAnswer(question){
    const response=await client.responses.create({
        model:"gpt-4o-mini",
        input:question
    })
    console.group(response.output_text)
}
process.stdout.write("Ask your question:-");
process.stdin.on("data",(data)=>{
    const question=data.toString().trim();
    if(question="exit"){
        process.exit();
    }else{
        aiAnswer(question);
    }
})
