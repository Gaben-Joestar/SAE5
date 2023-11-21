const URL = url;

const nomdb = 'loupepastonquizz';

const { MongoClient } = require ('mongodb');
const client = new MongoClient(URL);

async function main(){
    await client.connect();
    const db = client.db(nomdb);
}

main()
    .catch(console.error)
    .finally(()=> client.close());


async function recup_questions(db, theme){
    const collection = db.collection(quizz_site);
    try{
        const questions = await collection.findOne({libelle: theme});
    } catch(e){ throw e; }

    return tojson(questions);
}

