# TypeScript Notes

Type Definitions
```
let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
    name: string;
    age: number;
}

let person: Person = {
    name: "irşad",
    age: 27
};

let lotsOfPeople: Person[];
```
Checks for amount and types of properties in objects, properties can be defined as optional.<br>
Also multiple type can be assigned.
```
type Person = {
    name: string;
    age?: number;
}

let number: number | string;
```
Defining a function<br>
```
function getAJob(job: string) {
    console.log(job)
};

let printName: (name: string) => void;

let printAge: (age: number) => string;
```
any | unknown | void | never <br>
any and unknown works same but unknown is better choice.<br>
void returns undefined while never returns nothing. 
```
let name: any;

let printName: (name: string) => never;
```
Type and Interface
```
type X = {
    a: string;
    b: number;
}

type Y = X & {
    c: number;
    d: string;
}

interface Person = {
    name: string;
    age?: number;
}

interface Guy extends Person {
    profession: string;
}
```
React & TypeScript
```
const App: React.FC = () => {
  return (
    <div className="App"> Hey </div>);
}

```