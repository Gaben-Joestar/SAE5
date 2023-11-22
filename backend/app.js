const URL = url;

const nomdb = 'loupepastonquizz';

const { MongoClient } = require ('mongodb');
const client = new MongoClient(URL);

const bcrypt = require('bcryptjs');

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

async function creer_compte(email, pseudo, date_naissance, mdp){
    const collection = db.collection('utilisateurs');

    try{
        const insert = await collection.insertOne({
            mail: email,
            pseudo: pseudo,
            date_n: date_naissance,
            mdp: bcrypt.hash(mdp, 8)
        })
    } catch (e) { throw e }
}


// Utiliser sous condition que code bon
async function reset_mdp(email, mdp){
    const collection = db.collection('utilisateurs');

    try{
        const update = await collection.updateOne({mail: email}, {
            $set: {mdp: bcrypt.hash(mdp, 8)}
        });
    } catch (e) { throw e }
}