// let y=2;
// let x=1;
// if(x>y){
//     console.log("test")
// }else{
//     console.log("More test")
// }

// let first;
// let second;

// first=`let y=2;
// let x=1;
// if(x>y){
//     console.log("test")
// }else{
//     console.log("More test")
// }

// let first;
// let second;`

// second="document.getElementById('mydiv').innerHTML=`${first} first=\`${first}\` second=\"${second}\" ${second}`"

// //To include `` inside the template strings we have to escape using \

// document.getElementById('mycontent').innerHTML=`${first}\n\nfirst=\`${first}\`\n\nsecond=\"${second}\"\n\n\n${second}`

(function quine(){
    let src=`(${quine})()`

    let hello=1092;
    
    document.getElementById('mydiv').innerHTML=src;
    
})()