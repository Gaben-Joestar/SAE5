const URL = url;

const { MongoClient } = require ('mongodb');
const client = new MongoClient(URL);

async function recup_questions(db, theme){
    const collection = db.collection(theme);
    try{
        const questions = await collection.findOne({libelle: theme});
    } catch(e){ throw e; }
    
    return questions;
}

async function main(){
    await client.connect();
    const db = client.db('nomdb');
}

main()
    .catch(console.error)
    .finally(()=> client.close());