async function loadFile() {
    let fileLoaded = true;

    if(fileLoaded){
        return "file loaded"
    }else{
        throw "file not loaded"
    }
}

async function display() {
    try {
        document.getElementById("myH1").innerHTML = await loadFile();
    } catch (error) {
        document.getElementById("myH1").innerHTML = error
    }
}
display()

