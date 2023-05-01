import { checkEmail } from "./check";

type Address = {
  street: string;
}

function main() {
  console.log('Hello, world!');

  console.log("Is the email good?");
  
  console.log("Maybe: ", checkEmail('anish.geo@gmail.com'));

  const d: Address = { street: '123 Main St' };
  console.log(d);
}

main();