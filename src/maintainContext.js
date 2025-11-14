import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const client=new OpenAI({apiKey:process.env.OPEN_AI_KEY});
const context=[
    {
        role:'system',
        content:'keep answer short and simple'
    }
]
async function aiAnswer(question){
    context.push({role:"user", content:question})
    const response=await client.responses.create({
        model:"gpt-4o-mini",
        input:context
    })
    context.push({role:"assistant", content:response.output_text})
    console.log(response.output_text)
}
process.stdout.write("Ask your question:-");
process.stdin.on("data",(data)=>{
    const question=data.toString().trim();
    if(question==="exit"){
        process.exit();
    }else{
        aiAnswer(question);
    }
})
