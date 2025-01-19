import { CosmosClient } from '@azure/cosmos';
import { NextResponse } from 'next/server';

const client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT || '',
    key: process.env.COSMOS_KEY || ''
});

const database = client.database('visitorDB');
const container = database.container('counter');

export async function GET() {
    try {
        const { resources } = await container.items.readAll().fetchAll();
        return NextResponse.json({ data: resources });
    } catch (error) {
        console.error('fetching error:', error);
    }
}

export async function POST() {
    try {
        const item = {
            id: new Date().toISOString(),
            message: 'test'
        };
        await container.items.create(item);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('fetching data:', error);
    }
}