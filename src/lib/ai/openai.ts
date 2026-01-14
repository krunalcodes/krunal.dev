import { OpenAIEmbeddings } from "@langchain/openai";

export function getOpenAIEmbeddings() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not defined");
  }

  return new OpenAIEmbeddings({
    model: "text-embedding-3-small",
    apiKey,
  });
}
