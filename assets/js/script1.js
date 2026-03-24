const prnt = () =>{
    console.log("hello 1")
}

const text = (name ,callback) =>{
    console.log("hello 2 " + name);

    callback();
}

text("prnt", prnt);