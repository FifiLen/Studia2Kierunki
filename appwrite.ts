// appwrite.ts
import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string) // Appwrite endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string); // Appwrite project ID

// Initialize other services
const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };
