const express = require('express');
const app = express();
const port = 3000;

// https://www.npmjs.com/package/multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname);
    }
});
// const upload = multer({ dest: 'uploads/' })
const upload = multer({ storage: storage });

app.use(express.json());

// Firebase server
const db = require('./firebase');
const functions = require('firebase-functions');

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

// Test server endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/hello', (req, res)=>{ 
    const {name} = req.body;
    res.send(`Welcome ${name}`); 
});

// Adding a user
app.post('/addUser', async (req, res) => {
    try {
        const {username} = req.body;
        if (!username) {
            return res.status(400).json({ error: "username is required" });
        }
        const userRef = await db.collection('users').add({ username });
        res.status(201).json({ message: "user added successfully", userId: userRef.id });

    } catch (error) {
        console.error("Error adding user: ", error)
        res.status(500).json({ error: 'internal server error '})
    }
});

// Upload video
// Accept video file from user and store on Firebase server
app.post('/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No video file uploaded' });
    }
    return res.status(200).json(req.file);
    // res.send("Uploaded successfully");
})

// Export Express app as Firebase Cloud func
exports.api = functions.https.onRequest(app);
