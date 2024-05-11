import { config } from 'dotenv-safe';
import add from 'math/add';

config();

console.log('Hello');
console.log(add(3, 5));

console.log(process.env.MY_NAME);
