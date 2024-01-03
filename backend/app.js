// Définition des constantes
const URL = 'mongodb://bdd_user:Pm75319aW99%26*@10.1.138.47:27017/?authMechanism=DEFAULT';
const nomdb = 'quizz';

// Mise en place du lien avec la BDD
const { MongoClient } = require ('mongodb');
const client = new MongoClient(URL);

// Mise en place du hash pour le stockage des mdp
// const bcrypt = require('bcryptjs');


async function main(){
    await client.connect();
    const db = client.db('quizz');
    /*
    const collection = db.collection('Messagerie');
    const inserts = await collection.insertOne({message : 'miaou'});
    console.log(`Document inséré => ${inserts}`);
    */
   console.log(`Nouvel avis => ${nouvel_avis(db, 1, 'pas mal, j\'ai bien aimé', 8, 'bob' )}`);
    return 'done';
}


main().then(console.log).catch(console.error).finally(()=> client.close());


// FONCTIONS EN LIENS AVEC LA BDD


// Fonction de collecte des questions d'un theme

async function recup_questions(db, theme){
    const collection = db.collection('Quizz');
    try{
        const questions = await collection.findMany({titre_quizz: theme});
    } catch(e){ throw e; }

    return questions;
}


// Fonction d'ajout d'avis

async function nouvel_avis(db, idquizz, commentaire, noteattribuée, idauteur){
    const collection = db.collection('Avis');

    try{
        const insertavis = await collection.insertOne({
            id_quizz: idquizz,
            id_auteur: idauteur,
            texte: commentaire,
            note: noteattribuée
        })
    } catch(e) { throw e }
}


// Fonctions d'ajout de questions

async function ajouter_question_standard(db, theme, enonce, breponse, m_reponses){
    const collection = db.collection('Quizz');

    try{
        questions = await collection.findMany({titre_quizz: theme});
    } catch(e) { throw e }

    if (theme in questions){
        try{
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].standard":{
                    "enonce": enonce,
                    "reponse": breponse,
                    "mauvaises_rep": m_reponses
                }
            }
            })
        } catch(e) { throw e }
    }else{
        try{
            const insert = await collection.insertOne({
                titre_quizz: theme
            })
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].standard":{
                    "enonce": enonce,
                    "reponse": breponse,
                    "mauvaises_rep": m_reponses
                }}
            })
        } catch(e) { throw e }
    }
}

async function ajouter_question_carte(db, theme, enonce, coordonnees){
    const collection = db.collection('quizz_site');

    try{
        questions = await collection.findMany({titre_quizz: theme});
    } catch(e) { throw e }

    if (theme in questions){
        try{
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].carte":{
                    "enonce": enonce,
                    "coordonnees": coordonnees
                }
            }
            })
        } catch(e) { throw e }
    }else{
        try{
            const insert = await collection.insertOne({
                titre_quizz: theme
            })
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].carte":{
                    "enonce": enonce,
                    "coordonnees": coordonnees
                }}
            })
        } catch(e) { throw e }
    }
}

async function ajouter_question_intru(db, theme, breponse, m_reponses, indice){
    const collection = db.collection('quizz_site');

    try{
        questions = await collection.findMany({titre_quizz: theme});
    } catch(e) { throw e }

    if (theme in questions){
        try{
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].intru":{
                    "reponse": breponse,
                    "mauvaises_rep": m_reponses,
                    "indice": indice
                }
            }
            })
        } catch(e) { throw e }
    }else{
        try{
            const insert = await collection.insertOne({
                titre_quizz: theme
            })
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].intru":{
                    "reponse": breponse,
                    "mauvaises_rep": m_reponses,
                    "indice": indice
                }}
            })
        } catch(e) { throw e }
    }
}

async function ajouter_question_pendu(db, theme, enonce, reponse){
    const collection = db.collection('quizz_site');

    const question = [enonce, reponse]
    
    try{
        questions = await collection.findMany({titre_quizz: theme});
    } catch(e) { throw e }

    if (theme in questions){
        try{
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].pendu":{
                    "enonce": enonce,
                    "reponse": reponse
                }
            }
            })
        } catch(e) { throw e }
    }else{
        try{
            const insert = await collection.insertOne({
                titre_quizz: theme
            })
            const update = await collection.updateOne({titre_quizz: theme},{
                "$push":
                {"questions.$[].pendu":{
                    "enonce": enonce,
                    "reponse": reponse
                }}
            })
        } catch(e) { throw e }
    }
}


async function creer_compte(db, email, pseudo, date_naissance, mdp){
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

/*
async function reset_mdp(db, email, mdp){
    const collection = db.collection('utilisateurs');

    try{
        const update = await collection.updateOne({mail: email}, {
            $set: {mdp: bcrypt.hash(mdp, 8)}
        });
    } catch (e) { throw e }
}
*/