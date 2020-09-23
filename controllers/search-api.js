const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

const data = [{
    title: 'Machine Learning',
    time: 'Tue, Aug 4, 2020 11:00 PM IST',
    image: 'ML.png'
}, {
    title: 'Regression Analysis',
    time: 'Tue, Aug 4, 2020 11:00 PM IST',
    image: 'regression.png'
}, {
    title: 'Time Series Forecasting',
    time: 'Tue, Aug 4, 2020 11:00 PM IST',
    image: 'tsanalysis.jpg'
}, {
    title: 'MEAN/MERN Stack',
    time: 'Tue, Aug 4, 2020 11:00 PM IST',
    image: 'mearn.png'
}, {
    title: 'Azure Basics',
    time: 'Tue, Aug 4, 2020 11:00 PM IST',
    image: 'Azure.jpg'
},
];

app.get('/search', (req,res)=>{
    res.send(data);
});


app.listen(port,()=>console.log('API listening on port:',port))





