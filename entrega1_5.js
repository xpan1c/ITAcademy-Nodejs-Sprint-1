// requires
const fs = require("fs");
const fsPromises = require("node:fs/promises");
const path = require("path");
const zlib = require("zlib");
const { promisify } = require("node:util");
const { pipeline } = require("node:stream");
const os = require("os");
const { spawn } = require("child_process");
// Nivel 1
// Ex 1

const frase = "Hola mundo";
const pt = "test.txt";
const writeFilePromise = (a, b) => fsPromises.writeFile(a, b);
//Ex 2
const encoding = "utf8";
const readFilePromise = (a, b) => fsPromises.readFile(a, b);
//Ex 3
const zipGen = (input) => {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(input);
  const destination = fs.createWriteStream(input + ".gz");
  const pipe = promisify(pipeline);
  return pipe(source, gzip, destination);
};
// Async -await

const start = async () => {
  try {
    await writeFilePromise(pt, frase);
    const first = await readFilePromise(pt, encoding);
    console.log(first);
    await zipGen(pt);
  } catch (error) {
    console.log(error);
  }
};
start();
// Nivel 2
// Ex 1
const recursive = (msj) => {
  setTimeout(() => {
    console.log(msj);
    return recursive(msj);
  }, 1000);
};
recursive("Hola");
// Ex 2
const username = os.userInfo().username;
const command =
  process.platform === "win32"
    ? `dir C:\\Users\\${username} /B`
    : `ls -1p /home/${username} | awk '!/\\/$/'`;
const child = spawn(command, { shell: true });
child.stdout.on("data", (data) => {
  console.log(`Directorio de inicio del usuario actual: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`child stderr:\n${data}`);
});
