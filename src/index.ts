const fn = (a, b) => a + b;
const str = 'str';
const str2 = `${str}’aaa`;

const p:Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 200)
});

const set = new Set([1, 2, 3]);

const bool:boolean = str2.includes('str');

const array = [1, 2, 4];

const item = array.find(item => item === 1);

// str2.padStart(2);

console.log(item);
console.log(bool);