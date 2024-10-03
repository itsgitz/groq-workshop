import "dotenv/config"
import Groq from "groq-sdk"

if (!process.env.GROQ_API_KEY) {
  throw Error('GROQ_API_KEY is required!')
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: 'What is Indonesia?'
      }
    ],
    model: 'llama3-8b-8192'
  })
}

async function main() {
  try {
    const chatCompletion = await getGroqChatCompletion()

    console.log(chatCompletion)
  } catch (err) {
    throw err
  }
}

main().catch((err) => {
  console.log(err)
}).finally(() => {
  console.log('finished!')
})
