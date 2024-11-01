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

    const myDiv = document.getElementById('mydiv');

    let hello=1092;
    myDiv.innerHTML=src;
    
    let font=new FontFace('pixelemulator','url(fonts/VT323-Regular.ttf)')
    font.load().then((loadedFont)=>{
        document.fonts.add(loadedFont)
        document.querySelector('body').style.backgroundColor='black'

        myDiv.style.fontFamily='pixelemulator'
        myDiv.style.fontSize = '20px';
        myDiv.style.color='yellow'
        myDiv.style.width = '80%'; 
        myDiv.style.overflow='visible'
        myDiv.style.padding = '20px';
        myDiv.style.textAlign = 'center'; 
        myDiv.style.padding = '20px';

        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column'; 
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.height = '100vh'; 
    })
})()