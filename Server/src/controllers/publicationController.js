const router = require('express').Router();
const publicationsServices = require('../services/publicationServices');
const fs = require('fs');

router.post('/addingNotification', async (req, res) => {

    const result = await publicationsServices.addNotification(req.body);

    res.send(result);
})

router.get('/getNotification', async (req, res) => {

    const result = await publicationsServices.getNotification();

    res.send(result);

})

router.post('/adding', async (req, res) => {

    const file = req.files.file;

    const username = req.query.username;

    const followers = req.followers

    const userProfileImage = req.query.profileImage;

    const inputData = req.query.inputData;

    const fileName = file.name;

    const fileType = file.mimetype;

    try {
        const result = await publicationsServices.publication(username, inputData, fileName, fileType, userProfileImage, followers);

        file.mv(`./src/public/userPublications/${fileName}`);

        res.status(200).send({
            data: result,
            message: "Публикуването е успешно.",
        });

    } catch (err) {

        console.log(err);

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
});

router.get('/allPosts', async (req, res) => {

    const allPost = await publicationsServices.getAllPosts();

    res.send(allPost);

});

router.get('/getPostById/:postId', async (req, res) => {

    const post = await publicationsServices.getPostById(req.params.postId);

    res.send(post);
});

router.post('/like/:postId', async (req, res) => {

    await publicationsServices.like(req.params.postId);

    res.send()
});

router.post('/disLike/:postId', async (req, res) => {

    await publicationsServices.disLike(req.params.postId);

    res.send();
});

router.post('/coment', async (req, res) => {

    const post = await publicationsServices.coment(req.body);

    res.send(post.comments);
});

router.get('/getImage', async (req, res) => {

    const allImage = await publicationsServices.getImage();

    res.send(allImage);
});

router.get('/getVideo', async (req, res) => {

    const allVideo = await publicationsServices.getVideo();

    res.send(allVideo);
});

router.get('/search/:text', async (req, res) => {

    const result = await publicationsServices.search(req.params.text);

    res.send(result);
})

module.exports = router;