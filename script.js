let y=2;
let x=1;
if(x>y){
    console.log("test")
}else{
    console.log("More test")
}

let first;
let second;

first=`let y=2;
let x=1;
if(x>y){
    console.log("test")
}else{
    console.log("More test")
}

let first;
let second;`

second="document.getElementById('mydiv').innerHTML=`${first} first=${first} second=${second} ${second}`"

//To include `` inside the template strings we have to escpe using \

document.getElementById('mydiv').innerHTML=`${first} first=\`${first}\` second="${second}" ${second}`