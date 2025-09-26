console.log("\nHello , We are MLUE's");
console.log("This is my First Node Program, Ready to go");
const file = require('fs');

/*In order to collect the user inputs in the console terminal the readline module is needed
with the following criterias below*/

const input = require('readline');
    const In = input.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    In.question("Unaitwa nani Boss",(jina)=>{
        file.appendFileSync('daudi.txt',"\n" +jina);
        console.log("Jina lako "+jina +" Limewekwa kwenye file kwa ajili ya kumbukumbu");
        In.close();
    });