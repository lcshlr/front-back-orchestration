'use strict';
const express = require('express');
const PORT = 3000;
const app = express();
app.listen(PORT);
console.log(`Running on port ${PORT}`);

const session = require('express-session');
        const MongoDBStore = require('connect-mongodb-session')(session);
        const MONGO_URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;
        console.log(MONGO_URI);
        const store = new MongoDBStore({
            uri: MONGO_URI,
            collection: 'sessions'
        });
        app.use(
            session({
                secret: 'secret string',
                resave: false,
                saveUninitialized: false,
                store: store, /* store session data in mongodb */ 
                cookie: { /* can add cookie related info here */ }
            })
        );

        app.get('/', function(req, res){
            if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
                req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
            req.session.pageCountByCurrentUserOrAnyNameYouWant++;
            res.send({
                pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
            });
        });
        