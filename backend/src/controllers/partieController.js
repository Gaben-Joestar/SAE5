const {
  creerParticipants,
  ajouterParticipant,
} = require('./participantController');
const { BSON } = require('bson');

const creerPartie = async (req, res) => {
  const {
    code_partie,
    nb_question,
    //date_fin,
    hote,
  } = req.body;
  const collection = req.db.collection('session');
  try {
    const insert = await collection.insertOne({
      code_partie: code_partie,
      nb_question: nb_question,
      date_debut: 1,
      hote: hote,
      statut: 1,
    });
    const insertedId = insert.insertedId;
    const participantCreer = creerParticipants(req, hote, insertedId);
    if (participantCreer) {
      res
        .status(200)
        .json({ success: true, message: 'Partie créée avec succès.' });
    } else {
      console.error('Erreur lors de la création de la partie :', error);
      res.status(500).json({
        success: false,
        message: 'Une erreur est survenue lors de la création de la partie.',
      });
    }
  } catch (error) {
    console.error('Erreur lors de la création de la partie :', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de la création de la partie.',
    });
  }
};

const rejoindrePartie = async (req, res) => {
  const { code, token } = req.body;
  const collection = req.db.collection('session');
  const partie = await chercherPartie(collection, code);
  try {
    if (partie === null) {
      res.status(404).json({
        success: false,
        message: "La partie n'existe pas",
      });
      return false;
    }
    //Chercher utilisateur avec token
    const user = token;
    participantAjouter = await ajouterParticipant(req, partie._id, user);
    if (participantAjouter) {
      res.status(200).json({
        success: true,
        message: "L'utilisateur a rejoint la partiee",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "L'utilisateur n'a pas rejoint la partie",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "L'utilisateur n'a pas rejoint la partie",
    });
  }
};

const chercherPartie = async (collection, code) => {
  const filter = { code_partie: code, statut: 1 };
  try {
    const partie = collection.findOne(filter);
    return partie;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la verification de l'existence de la partie",
      error,
    );
    return null;
  }
};

const infoParticipants = async (req, res) => {
  const collection_participant = req.db.collection('participants');
  const collection_partie = req.db.collection('session');

  const code_partie = req.params.code_partie;

  const partie = await chercherPartie(collection_partie, code_partie);
  try {
    if (partie === null) {
      console.error("Aucune partie n'existe");
      res.status(500).json({
        success: false,
        message: "Aucune partie n'a été trouvée",
      });
      return;
    }

    const pid = new BSON.ObjectId(partie._id);
    const host = partie.hote;
    const filter = { id_partie: pid };
    const infoPartie = await collection_participant.findOne(filter);

    if (!(infoPartie === null)) {
      res.status(200).json({
        success: true,
        infoPartie,
        host,
      });
      return;
    }

    console.error("Aucun participant n'a été trouvé");
    res.status(500).json({
      success: false,
      message: "Aucun participant n'a été trouvé",
    });
  } catch (error) {
    console.error('Une erreur a eu lieu', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur a eu lieu',
    });
  }
};

module.exports = {
  creerPartie,
  rejoindrePartie,
  chercherPartie,
  infoParticipants,
};
