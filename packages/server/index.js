import NodeWebcam from 'node-webcam';
import express from 'express';
import cors from 'cors';

const app = express();

const options = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: 'jpeg',
    device: false,
    verbose: false,
    callbackReturn: 'base64',
};

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello /');
});

function captureImage(Webcam) {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line func-names
        Webcam.capture('test_picture', function (err, frames) {
            if (err) {
                // eslint-disable-next-line no-console
                console.error(err);
                reject(err);
            }
            resolve(frames);
        });
    });
}

async function takeVideo() {
    const Webcam = NodeWebcam.create(options);
    const arr = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 5; i++) {
        // eslint-disable-next-line no-await-in-loop
        const frame = await captureImage(Webcam);
        arr.push(frame);
    }
    return arr;
}

app.get('/record', async (req, res) => {
    try {
        const result = await takeVideo();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = process.env.port || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listeting on port ${port}`));
