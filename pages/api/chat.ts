import { type NextRequest, NextResponse } from "next/server";
import { initialMessages } from "../../components/Chat/Chat";
import { type Message } from "../../components/Chat/ChatLine";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

const botName = "AI";
const userName = "User"; // TODO: move to ENV var
const firstMessge = initialMessages[0].message;

// @TODO: unit test this. good case for unit testing
const generatePromptFromMessages = (messages: Message[]) => {
  console.log("== INITIAL messages ==", messages);

  let prompt = "";

  // add first user message to prompt
  prompt += messages[1].message;

  // remove first conversaiton (first 2 messages)
  const messagesWithoutFirstConvo = messages.slice(2);
  console.log(" == messagesWithoutFirstConvo", messagesWithoutFirstConvo);

  // early return if no messages
  if (messagesWithoutFirstConvo.length == 0) {
    return prompt;
  }

  messagesWithoutFirstConvo.forEach((message: Message) => {
    const name = message.who === "user" ? userName : botName;
    prompt += `\n${name}: ${message.message}`;
  });
  return prompt;
};

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  // read body from request
  const body = await req.json();

  // const messages = req.body.messages
  const messagesPrompt = generatePromptFromMessages(body.messages);
  const defaultPrompt = `I am Friendly AI Assistant. \n\nThis is the conversation between AI Therapist and an user.\n\n${botName}: ${firstMessge}\n${userName}: ${messagesPrompt}\n${botName}: `;
  const finalPrompt = process.env.AI_PROMPT
    ? `${process.env.AI_PROMPT}${messagesPrompt}\n${botName}: `
    : defaultPrompt;

  const payload = {
    model: "text-davinci-003",
    prompt: finalPrompt,
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [`${botName}:`, `${userName}:`],
    user: body?.user,
  };

  const response = await fetch("https://api.openai.com/v1/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  // return response with 200 and stringify json text
  return NextResponse.json({ text: data.choices[0].text });
}
