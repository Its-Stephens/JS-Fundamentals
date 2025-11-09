const argu = process.argv.slice(2);
const argument = argu[0];
if (!argument){
    console.log("No argument");
}
else{
    console.log(`${argument}`);
}
