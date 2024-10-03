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
    const result = chatCompletion.choices[0].message.content 
    if (!result) {
      console.log('sorry, we currently unable to proceed your request 😔')
    }

    console.log(result)
  } catch (err) {
    throw err
  }
}

main().catch((err) => {
  console.log(err)
}).finally(() => {
  console.log('finished!')
})
