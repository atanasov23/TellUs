const router = require('express').Router();
const publicationsServices = require('../services/publicationServices');


router.post('/adding', async (req, res) => {

    const file = req.files.file;

    const username = req.query.username;

    const inputData = req.query.inputData;

    const fileName = file.name;

    const fileType = file.mimetype;

    try {
        await publicationsServices.publication(username, inputData, fileName, fileType);

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

router.get('/myPublications/:username', async (req, res) => {

    const data = await publicationsServices.getMyPublications(req.params.username);

    res.send(data.myPublications);
});





module.exports = router;