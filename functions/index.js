const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});
app.get('/Gallery', (req, res) => {
	res.render('gallery');
});
app.get('/About', (req, res) => {
	res.render('about');
});
app.get('/Contact', (req, res) => {
	res.render('contact');
});
app.get('/StoryBehindPicture', (req, res) => {
	res.render('StoryBehindPicture');
});
app.get('/ShinkeiSuijaku', (req, res) => {
	res.render('ShinkeiSuijaku');
});
app.get('/PotBreaking', (req, res) => {
	res.render('PotBreaking');
});
app.get('/TerraCotta', (req, res) => {
	res.render('TerraCotta');
});
app.get('/MixMatch', (req, res) => {
	res.render('MixMatch');
});
app.get('/FreebieShark', (req, res) => {
	res.render('FreebieShark');
});
app.get('/Main', (req, res) => {
	res.redirect('https://spicmacay.com/');
});
app.use((req, res, next) => {
	res.status(404).render('404');
});

exports.app = functions.https.onRequest(app);
