const URL = url;

const nomdb = 'loupepastonquizz';

const { MongoClient } = require ('mongodb');
const client = new MongoClient(URL);

async function main(){
    await client.connect();
    const db = client.db(nomdb);
}

main().catch(console.error).finally(()=> client.close());


async function recup_questions(db, theme){
    const collection = db.collection('quizz_site');
    try{
        const questions = await collection.findMany({libelle: theme});
    } catch(e){ throw e; }

    return questions;
}

async function ajouter_question(libelle, enonce, reponse, m_reponses){
    const collection = db.collection('quizz_site');

    try{
        const insert = await collection.insertOne({
            libelle: libelle,
            enonce: enonce,
            reponse: reponse,
            mauvaise_reponse: m_reponses
        })
    } catch(e) { throw e }
}


