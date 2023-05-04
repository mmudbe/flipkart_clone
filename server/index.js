import express from 'express';
import dotenv from 'dotenv';
// it is use for working with multiple localhost
import cors from 'cors';
import bodyParser from 'body-parser';

// extension is compulsory db = db.js
import connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import {v4 as uuid} from 'uuid';

const app=express();
// using config we can intialize it
dotenv.config();
app.use(cors());
// request,post api body  comes in json format 
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

const USERNAME = process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;


const PORT = process.env.PORT || 8000;

const URL =process.env.MONGODB_URI|| `mongodb://${USERNAME}:${PASSWORD}@ac-glg1yq0-shard-00-00.foqvudz.mongodb.net:27017,ac-glg1yq0-shard-00-01.foqvudz.mongodb.net:27017,ac-glg1yq0-shard-00-02.foqvudz.mongodb.net:27017/?ssl=true&replicaSet=atlas-gry79t-shard-0&authSource=admin&retryWrites=true&w=majority`;
connection(URL);


// if(process.env.NODE_ENV==="production"){
//     app.use(express.static('client/build'))
// }

app.listen(PORT , () =>
 console.log(`server is running on PORT ${PORT}`)
);

DefaultData();

// export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTM_MID;
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
// paytmParams['CHANNEL_ID'] = process.env.CHANNEL_ID;
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
// paytmParams['ORDER_ID'] = uuid();
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
// paytmParams['TXN_AMOUNT'] = '100';
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
// paytmParams['EMAIL'] = 'mudbemahadev0@gmail.com';
// paytmParams['MOBILE_NO'] = '1234567890';

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = '/callback'
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'