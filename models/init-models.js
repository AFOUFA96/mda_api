var DataTypes = require("sequelize").DataTypes;
var _annee = require("./annee");
var _langue = require("./langue");
var _question = require("./question");
var _reponse = require("./reponse");
var _utilisateur = require("./utilisateur");
var _utilisateur_reponse = require("./utilisateur_reponse");

function initModels(sequelize) {
  var annee = _annee(sequelize, DataTypes);
  var langue = _langue(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var reponse = _reponse(sequelize, DataTypes);
  var utilisateur = _utilisateur(sequelize, DataTypes);
  var utilisateur_reponse = _utilisateur_reponse(sequelize, DataTypes);

  utilisateur.belongsTo(annee, { as: "id_annee_annee", foreignKey: "id_annee"});
  annee.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "id_annee"});
  utilisateur.belongsTo(langue, { as: "id_langue_langue", foreignKey: "id_langue"});
  langue.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "id_langue"});
  reponse.belongsTo(question, { as: "id_question_question", foreignKey: "id_question"});
  question.hasMany(reponse, { as: "reponses", foreignKey: "id_question"});
  utilisateur_reponse.belongsTo(reponse, { as: "id_reponse_reponse", foreignKey: "id_reponse"});
  reponse.hasMany(utilisateur_reponse, { as: "utilisateur_reponses", foreignKey: "id_reponse"});
  utilisateur_reponse.belongsTo(utilisateur, { as: "id_utilisateur_utilisateur", foreignKey: "id_utilisateur"});
  utilisateur.hasMany(utilisateur_reponse, { as: "utilisateur_reponses", foreignKey: "id_utilisateur"});

  return {
    annee,
    langue,
    question,
    reponse,
    utilisateur,
    utilisateur_reponse,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
