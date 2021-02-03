//how you import modules, im thinking they work like sass partials?
import getFruits from './getFruits'

console.log('these are some fruit modules im accessing through index.js while learning webpack');
//getFruits is a function created in getFruits, go there.
getFruits()

const obj = {a: 'alpha', b: 'bravo'};
const newObj = {...obj, c: 'charlie'};
console.log(newObj);