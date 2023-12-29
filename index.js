// await = makes an async function wait for a Promise
async function loadFile(){

    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
}
async function startProcess(){
    try{
        let message = await localFile();
        console.log(message);
        message = await loadFile();
        console.log(message);
        message = await closeFile();
        console.log(error);
    }
    catch(error){
        console.log(error);
    }
}
startProcess();

