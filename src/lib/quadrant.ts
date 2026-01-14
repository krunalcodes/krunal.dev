import { QdrantVectorStore } from "@langchain/qdrant";
import { QdrantClient } from "@qdrant/js-client-rest";
import { getOpenAIEmbeddings } from "./ai/openai";

function getQdrantConfig() {
  const apiKey = process.env.QDRANT_API_KEY;
  const url = process.env.QDRANT_URL;
  const collectionName = process.env.QDRANT_DB_COLLECTION_NAME;

  if (!url || !apiKey || !collectionName) {
    throw new Error(
      "Qdrant URL, API key, and collection name must be set in environment variables",
    );
  }

  return { apiKey, url, collectionName };
}

function getQdrantClient() {
  const { apiKey, url } = getQdrantConfig();
  return new QdrantClient({ url, apiKey });
}

export async function getVectorStore() {
  const { apiKey, url, collectionName } = getQdrantConfig();
  const openaiEmbeddings = getOpenAIEmbeddings();

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    openaiEmbeddings,
    {
      apiKey,
      url,
      collectionName,
      collectionConfig: {
        vectors: {
          distance: "Cosine",
          size: 100,
        },
      },
    },
  );

  return vectorStore;
}

export const getEmbeddingCollections = async () => {
  const { collectionName } = getQdrantConfig();
  const qadrantClient = getQdrantClient();

  const collectionExists = await qadrantClient.collectionExists(collectionName);

  if (!collectionExists) {
    return qadrantClient.createCollection(collectionName, {
      vectors: {
        distance: "Cosine",
        size: 1536, // https://js.langchain.com/docs/integrations/vectorstores/upstash/#instantiation
      },
    });
  }

  await qadrantClient.deleteCollection(collectionName);

  return qadrantClient.createCollection(collectionName, {
    vectors: {
      distance: "Cosine",
      size: 1536,
    },
  });
};
