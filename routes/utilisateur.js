var express = require('express');
var router = express.Router();
const db = require('../models');
const { Op } = require("sequelize");

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.utilisateur.findAll().then(function(rows) {
      res.json(rows);
  });
  });
  router.get('/reponse', function(req, res, next) {
    db.utilisateur_reponse.findAll().then(function(rows) {
      res.json(rows);
  });
  });

  router.post('/login', function(req, res, next) {

    // db.utilisateur //select
  })
  
  router.post('/register', function(req, res, next) {
    //res.send("ok"); return;
    const data =  req.body;
    let whereClause = {};
    if(!data.mail){
      whereClause.where = { pseudo : data.pseudo};
    }
    if(!data.pseudo){
      whereClause.where = { mail : data.email};
    }
    // db.annee .findOne({where :{annee : data.annee}});
    db.utilisateur.findAll(whereClause)
                              .then(function(rows) {
      const accountExist = rows.length !== 0;
      if (accountExist){
        const result = {
          message: "Account already exist",
          status: false
        }
        res.json(result);  
      }
      else{
        db.annee.findOne({where :{annee : data.annee}}).then(function(row){
          const id = row.id;
          db.utilisateur.create({
            mail : data.email ?? null ,
            // mailOrPseudo,
            mdp : data.password,
            id_annee: id,
            id_langue: data.langId,
            deleted: "0",
            pseudo: data.pseudo ?? null
          })
        })
      }
  }); 
  })
  module.exports = router;