const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Fonction pour renvoyer le token
const creerToken = (mail, pseudo, mdp) => {
  const token = jwt.sign({ mail, pseudo, mdp }, 'shhhhh'); // Changer la clé de sécurité
  return token;
};

// Créer un utilisateur dans la base
const creerUtilisateur = async (req, res) => {
  const { email, pseudo, date_naissance, mdp } = req.body;
  const collection = req.db.collection('utilisateurs');

  try {
    // Vérification que l'email rentré n'est pas déjà attribué à un autre utilisateur
    const existingUser = await collection.findOne({ mail: email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Un utilisateur avec cette adresse e-mail existe déjà.',
      });
    }

    // Création de l'utilisateur dans la base
    const hash = await bcrypt.hash(mdp, 8);
    const insert = await collection.insertOne({
      mail: email,
      pseudo: pseudo,
      date_n: date_naissance,
      mdp: hash,
      date_creation_compte: new Date(),
    });
    const token = creerToken(email, pseudo, hash);
    res
      .status(200)
      .json({ success: true, message: 'Utilisateur créé avec succès.', token });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la création de l'utilisateur.",
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
    res.status(500).json({
      success: false,
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur.",
    });
  }
};

// Connexion à un compte utilisateur
const connexionUtilisateur = async (req, res) => {
  const { email, mdp } = req.body;
  const collection = req.db.collection('utilisateurs');

  try {
    const utilisateur = await collection.findOne({ mail: email });

    if (utilisateur) {
      bcrypt.compare(mdp, utilisateur.mdp, function (err, res1) {
        if (err) {
          console.error(
            'Erreur lors de la comparaison des mots de passe :',
            err,
          );
          res.status(500).json({
            success: false,
            message: 'Une erreur est survenue, veuillez réessayer plus tard',
          });
        } else if (res1) {
          const token = creerToken(
            utilisateur.mail,
            utilisateur.pseudo,
            utilisateur.mdp,
          );
          res.status(200).json({ success: true, message: 'OK', token });
        } else {
          res.status(401).json({
            success: false,
            message: 'Le mot de passe entré ne correspond pas',
          });
        }
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    res.status(500).json({
      success: false,
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur.",
    });
  }
};

module.exports = {
  creerUtilisateur,
  recupererUtilisateur,
  connexionUtilisateur,
};
