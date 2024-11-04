(function quine(){
    let src=`(${quine})()`.replace(/\r+/g,"")
    

    let lines=src.split("\n").filter(line=>line.trim()!=="")
    lines=lines.map(line=>line.trim())

    const container=document.getElementById("container")

    let new_src=""

    new_src=lines.join("")  

    new_src=new_src.replace(/\s/g,"")

    let font=new FontFace('pixelemulator','url(fonts/VT323-Regular.ttf)')
    font.load().then((loadedFont)=>{
        document.fonts.add(loadedFont)
        document.querySelector('body').style.backgroundColor='black'
        container.style.display="flex"
        container.style.flexWrap="wrap"
        container.style.width="100vw"
        container.style.height="100vh"
        container.style.overflow="hidden"
        container.style.fontFamily="pixelemulator"
        container.style.color="yellow"
        container.style.lineHeight = "1";
        container.style.fontSize = "20px"; 
        container.style.alignContent="start"

        document.body.style.height = '100vh'; 
    })

    let new_content=""

    new_src.split("").filter(char=>char!==" ").forEach((char)=>{
        new_content+= `<div style='padding:0px;margin:0px;min-height:2px'>${char}</div>`
    })
    


    container.innerHTML=new_content

    timepass='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
    
    


})()