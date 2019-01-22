
const crypto = require('crypto');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

client.connect(function (err) {

    const db = client.db('homework_07');
    const collection = db.collection('myCollection');

    collection.findOne({}, function (err, data) {

        const algorithm = 'aes256';
        const password = 'asaadsaad';

        const decipher = crypto.createDecipher(algorithm, password);

        let decrypted = decipher.update(data.message, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        console.log(decrypted);
    })
    console.dir('Done')
})
