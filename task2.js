const file = require('fs');
const path = require('path');
const readline = require('readline');

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    const folder = path.join(__dirname,'users');
    if(!file.existsSync(folder)){
        file.mkdirSync(folder);
        console.log("Your folder is created successfully");
    }
    else{
        console.log("The folder already exists");
    }

    const content = path.join(folder,'users.txt');
    if(!file.existsSync(content)){
        console.log("File does not exist");
        file.writeFileSync(content,'');
    }
    else{
        //Remember kwamba rl.question is a non brocking code meaning that the code below it will run before it completes
        rl.question("What is your name ",(name)=>{
        file.appendFileSync(content,'\nName:'+ name);

        const data = file.readFileSync(content,'utf8');
        console.log(data);
       console.log(path.basename(content));
       console.log( path.extname(content));
        console.log(path.dirname(content));
        rl.close();
    });
    }

    
    