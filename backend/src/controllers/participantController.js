const { BSON } = require('bson');

const creerParticipants = async (req, participant1, idPartie) => {
  const collection = req.db.collection('participants');

  // Vérification que l'email rentré n'est pas déjà attribué à un autre utilisateur
  try {
    // Création de l'utilisateur
    const insert = await collection.insertOne({
      id_partie: idPartie,
      participant1: participant1,
      participant2: null,
      participant3: null,
      participant4: null,
    });

    return true;
  } catch (error) {
    console.error('Erreur lors de la création des participants :', error);
    return false;
  }
};

const ajouterParticipant = async (req, id_partie, participant) => {
  const collection = req.db.collection('participants');
  //let pid = new BSON.ObjectId(participant);
  try {
    const filter = { id_partie: id_partie };
    let update;

    const existingParticipants = await collection.findOne(filter);
    if (existingParticipants !== null) {
      if (!(await participantConnecter(existingParticipants, participant))) {
        if (existingParticipants.participant1 === null) {
          update = {
            $set: {
              participant1: participant,
            },
          };
        } else if (existingParticipants.participant2 === null) {
          update = {
            $set: {
              participant2: participant,
            },
          };
        } else if (existingParticipants.participant3 === null) {
          update = {
            $set: {
              participant3: participant,
            },
          };
        } else if (existingParticipants.participant4 === null) {
          update = {
            $set: {
              participant4: participant,
            },
          };
        } else {
          return false;
        }

        const updated = await collection.updateOne(filter, update);
        if (updated.modifiedCount === 1) {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un participant", error);
    return false;
  }
};

const retirerParticipant = async (req, res) => {
  const collection = req.db.collection('participants');
  const { id_partie, participant } = req.body;
  let nid = new BSON.ObjectId(id_partie);
  try {
    const filter = { id_partie: nid };
    let update;

    const existingParticipants = await collection.findOne(filter);

    if (existingParticipants !== null) {
      if (await participantConnecter(existingParticipants, participant)) {
        if (existingParticipants.participant1 === participant) {
          update = {
            $set: {
              participant1: null,
            },
          };
        } else if (existingParticipants.participant2 === participant) {
          update = {
            $set: {
              participant2: null,
            },
          };
        } else if (existingParticipants.participant3 === participant) {
          update = {
            $set: {
              participant3: null,
            },
          };
        } else {
          update = {
            $set: {
              participant4: null,
            },
          };
        }

        const updated = await collection.updateOne(filter, update);
        if (updated.modifiedCount === 1) {
          res.status(200).json({
            success: true,
            message: 'Participant retiré avec succès.',
          });
        }
      } else {
        res.status(500).json({
          success: false,
          message: "Ce participant n'est pas présent",
        });
        return false;
      }
    } else {
      res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors du retrait d'un participant.",
      });
    }
  } catch (error) {
    console.error("Erreur lors du retrait d'un participant", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors du retrait d'un participant.",
    });
  }
};

const participantConnecter = async (infoPartie, participant) => {
  return (
    participant === infoPartie.participant1 ||
    participant === infoPartie.participant2 ||
    participant === infoPartie.participant3 ||
    participant === infoPartie.participant4
  );
};

module.exports = {
  ajouterParticipant,
  retirerParticipant,
  participantConnecter,
  creerParticipants,
};
