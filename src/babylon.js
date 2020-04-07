const babylon = require('babylon');
const babel = require('@babel/core');
const fs = require('fs');
const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse('let a = 1 * 2 + 3');
// const ast = babel.parse('let a = 1')
// console.log(ast);

// fs.writeFile('./ast.json', JSON.stringify(ast), () => {
//     console.log('success')
// })

