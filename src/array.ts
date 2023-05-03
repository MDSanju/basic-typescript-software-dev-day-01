const names : string[] = ['John', 'Bob', 'Kayel', 'Joel'];
const rolls : number[] = [32, 46, 48, 89];

rolls[5] = 49;

const elems : [string, string, number, boolean] = ['Bob', 'Kayel', 10, false];

elems.push(74);
elems.push('Rayen');

/* Cannot do these for using TypeScript Tuple.
 elems[0] = 63;
 elems.push(null);
 elems.push(undefined);
*/