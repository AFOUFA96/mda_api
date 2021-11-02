var DataTypes = require("sequelize").DataTypes;
var _langue = require("./langue");
var _question = require("./question");
var _reponse = require("./reponse");

function initModels(sequelize) {
  var langue = _langue(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var reponse = _reponse(sequelize, DataTypes);

  reponse.belongsTo(question, { as: "id_question_question", foreignKey: "id_question"});
  question.hasMany(reponse, { as: "reponses", foreignKey: "id_question"});

  return {
    langue,
    question,
    reponse,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
