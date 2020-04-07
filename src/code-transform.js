const fs = require('fs');
const path = require('path');
const { default: traverse } = require('@babel/traverse');
const { parse } = require('@babel/parser');
const { default: generate } = require('@babel/generator');
const git = require('simple-git/promise')(path.resolve(__dirname, '../'));




async function getStatus() {
    let status = null;
    try {
        status = await git.status();
    } catch (error) {
        console.error(error);
    }

    return status;
}



async function transform() {
    const status = await getStatus();
    console.log(status);
}


transform();


