const router = require('express').Router();
const publicationsServices = require('../services/publicationServices');
const fs = require('fs');


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

router.delete('/deletePost/:postId/:userId', async (req, res) => {

    try {
        const fileName = await publicationsServices.deletePost(req.params.postId, req.params.userId);

        fs.unlink(`./src/public/userPublications/${fileName}`, (err) => { });

        res.status(200).send({
            message: "Изтриването е успешно.",
        });

    } catch (err) {

        res.status(200).send({
            message: "Нещо се обърка! Моля опитайте отново.",
        });
    }

});

router.post('/editPost/:postId', async (req, res) => {


  try {

        await publicationsServices.editPost(req.params.postId, req.body.data.editText);
        
        res.status(200).send({
            message: "Редактирането е успешно.",
        });

    } catch (err) {

        res.status(200).send({
            message: "Нещо се обърка! Моля опитайте отново.",
        });
    }
})

module.exports = router;