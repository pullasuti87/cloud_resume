import { CosmosClient } from '@azure/cosmos';
import { NextResponse } from 'next/server';

const client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT || '',
    key: process.env.COSMOS_KEY || '',
});

const database = client.database('visitorDB');
const container = database.container('counter');

export async function GET() {
    try {
        const { resources } = await container.items.readAll().fetchAll();

        return NextResponse.json({ data: resources });

    } catch (e) {
        console.error('get error:', e);
    }
}

export async function POST() {
    try {
        const { resources } = await container.items.query("SELECT * FROM c WHERE c.id = 'visitor-count'").fetchAll();
        const item = resources[0];

        item.count += 1;

        const updated = await container.items.upsert(item);

        return NextResponse.json({ data: updated.resource });

    } catch (e) {
        console.error('post error:', e);
    }
}
