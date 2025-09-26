const file = require('fs');

/* Task is to create info.txt in a folder called Task which will contain 
Name:..............
Carrier:.............
Country:..............
Institute:............. */



    if(file.existsSync('Tasks')){
        file.writeFileSync('./Tasks/info.txt','Name:Gwamaka A Mwakabuta\n');
    file.appendFileSync('./Tasks/info.txt','Carrier:Computer Engineer\n');
    file.appendFileSync('./Tasks/info.txt','Country:Tanzania\n');
    file.appendFileSync('./Tasks/info.txt','Institute:DIT');

    const data = file.readFileSync('./Tasks/info.txt','utf8');
    console.log(data);
    console.log('\nDAY 1 IS OVER CAMPEON');


    }
    else{
        file.mkdirSync('Tasks');
    }