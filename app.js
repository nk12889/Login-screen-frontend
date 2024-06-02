const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const mongoose = require("mongoose");

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(compression());
app.use(morgan("combined", { stream: accessLogStream }));

const expenseRoute = require("./routes/expense");
const userRoute = require("./routes/user");
const passwordRoute = require("./routes/password");

app.use('/expense', expenseRoute);
app.use('/user', userRoute);
app.use('/password', passwordRoute);

app.use((req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, `public/${req.url}`));
});


database
    .sync({ force: true })
    .then(result => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(err => console.log(err));





// mongoose.connect(process.env.MONGO_URL)
//     .then(() => {
//         app.listen(process.env.PORT || 3000, () => {
//             console.log("Server running on port 3000");
//         })
//     })
//     .catch(err => console.error(err))
