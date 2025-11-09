const argu = process.argv.slice(2);
const argument = argu[0];
const write = 'X';
if (isNaN(argument)){
    console.log("Missing size");
}
else{
    for (let i = 0; i < argument; i++){
        console.log(write.repeat(argument));
    }
}
