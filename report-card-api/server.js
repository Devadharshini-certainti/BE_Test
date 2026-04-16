const express = require('express');

const app = express();
app.use(express.json());
const controller = require('./controllers/reportCardController');
app.post('/reportcard', controllers.createReportCard);
app.get('/reportcards', controllers.getReportCards);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});