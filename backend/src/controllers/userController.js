const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Créer un utilisateur dans la base

const creerUtilisateur = async (req, res) => {
  const { email, pseudo, date_naissance, mdp } = req.body;
  const collection = req.db.collection('utilisateurs');

  // Vérification que l'email rentré n'est pas déjà attribué à un autre utilisateur
  try {
    const existingUser = await collection.findOne({ mail: email });

    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'Un utilisateur avec cette adresse e-mail existe déjà.',
        });
    }

    // Création de l'utilisateur
    const insert = await collection.insertOne({
      mail: email,
      pseudo: pseudo,
      date_n: date_naissance,
      mdp: bcrypt.hash(mdp, 8),
    });

    res
      .status(200)
      .json({ success: true, message: 'Utilisateur créé avec succès.' });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    res
      .status(500)
      .json({
        success: false,
        message:
          "Une erreur est survenue lors de la création de l'utilisateur.",
      });
  }
};

// Récupérer un utilisateur dans la base grâce à son adresse mail

const recupererUtilisateur = async (req, res) => {
  const userEmail = req.params.email;
  const collection = req.db.collection('utilisateurs');

  try {
    const utilisateur = await collection.findOne({ mail: userEmail });

    if (utilisateur) {
      res.status(200).json({ success: true, utilisateur });
    } else {
      res
        .status(404)
        .json({ success: false, message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    res
      .status(500)
      .json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de l'utilisateur.",
      });
  }
};

const connexionUtilisateur = async (req, res) => {};

module.exports = {
  creerUtilisateur,
  recupererUtilisateur,
  connexionUtilisateur,
};
