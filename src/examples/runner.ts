import { checkEmail } from "./checkEmail";

type Address = {
  street: string;
}

function main() {
  console.log('Hello, world!');

  console.log("Is this email valid?: ", checkEmail('george@test.mail'));

  const d: Address = { street: '123 Main St' };
  console.log(d);
}

main();