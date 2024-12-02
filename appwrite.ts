'use client'

import { Client, Storage, Databases } from 'appwrite';

let client: Client;
let storage: Storage;
let databases: Databases;

try {
    if (typeof window !== 'undefined') { // Check if we're on the client side
        if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
            throw new Error('Missing NEXT_PUBLIC_APPWRITE_ENDPOINT');
        }
        if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
            throw new Error('Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID');
        }

        client = new Client();
        client
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

        storage = new Storage(client);
        databases = new Databases(client);

        console.log('Appwrite client initialized successfully');
    }
} catch (error) {
    console.error('Error initializing Appwrite client:', error);
}

export { client, storage, databases };