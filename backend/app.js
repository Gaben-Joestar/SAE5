const URL = url;

const { MongoClient } = require ('mongodb');
const client = new MongoClient(URL);

function recup_questions(){

}

async function main(){
    await client.connect();
    const db = client.db('nomdb');
}

main()
    .catch(console.error)
    .finally(()=> client.close());