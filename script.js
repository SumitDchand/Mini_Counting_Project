const countValue= document.querySelector('#counter');
//#counter wals id se jo bhi value hoga wo countValue ke 
//sath equal ho jayega in the form of string
//then we have to convert it into int by using parseInt

const increment=() => {
    // get the value
    let value= parseInt(countValue.innerText);
    //update the vlaue
    value=value+1;
    //set the value onto UI
    countValue.innerText= value;
};

const decrement=() => {
    // get the value from UI
    let value= parseInt(countValue.innerText);
    //update the vlaue
    value=value-1;
    //set the value onto UI
    countValue.innerText= value;
};

