// import generate from '@babel/generator';
// import traverse from "@babel/traverse";
// import * as a from '@babel/parser';
// import fs from 'fs';
// import path from 'path';

const traverse = require('@babel/traverse').default;
const { parse } = require('@babel/parser');
const fs = require('fs');
const path = require('path');

const generate = require('@babel/generator').default;


const a = 'var a = 1;';
const b = 'var b = 2;';
const c = fs.readFileSync(path.join(__dirname, 'babylon.js'), 'utf-8');

console.log(c);

const astA = parse(a, { sourceFilename: 'a.js' });
const astB = parse(b, { sourceFilename: 'b.js' });
const astC = parse(c, { sourceFilename: 'c.js' });
const ast = {
    type: 'Program',
    body: [].concat(astA.program.body, astB.program.body, astC.program.body)
};

const { code, map } = generate(ast, { sourceMaps: true }, {
    'a.js': a,
    'b.js': b,
    'c.js': c,
});






const { sources, sourcesContent } = map;


for (let i = 0; i < sources.length; i++) {
    const element = sources[i];
    if (element === 'c.js') {
        const sourceCode = sourcesContent[i];
        fs.writeFile(path.join(__dirname, element), sourceCode, () => {
            console.log('write success')
        });
    }


}

const code2 = `function square(n) {
    return n * n;
  }`;

const ast2 = parse(code2);

traverse(ast2, {
    enter(path2) {
        console.log(path2);
        fs.readFileSync(path.join(__dirname, 'path.js'), JSON.stringify(path2));
        //   if (path.isIdentifier({ name: "n" })) {
        //     path.node.name = "x";
        //   }
    }
});


console.log(map)

console.log(c)

console.log(__dirname);