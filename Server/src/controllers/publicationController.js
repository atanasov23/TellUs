const router = require('express').Router();
const publicationsServices = require('../services/publicationServices');
const PublicationsModel = require('../models/publications');
const fs = require('fs');
const { log } = require('console');


router.post('/adding', async (req, res) => {

    const file = req.files.file;

  const username = req.query.username;

    const inputData = req.query.inputData;

    const fileName = file.name;

    const fileType = file.mimetype;

    console.log(fileName);

try {
        await publicationsServices.publication(username, inputData, fileName, fileType);

        console.log(req.files.file.name);
        console.log(fileName);

        file.mv(`./src/public/userPublications/${fileName}`);

        res.status(200).send({
            message: "Публикуването е успешно.",
        });

    } catch (err) {

        res.status(200).send({
            message: "Нещо се обърка! Моля опитайте отново.",
        });
    }

});



module.exports = router;