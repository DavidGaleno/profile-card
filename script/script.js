const thirdBar = document.getElementById('half-full')
const fourthBar = document.getElementById('empty')
  
function fill(){
    thirdBar.style.width = '100%'
    setTimeout(() => {
        if(thirdBar.style.width=='100%'){
        fourthBar.style.width = '100%'
        }
    }, 600);
}

function unfill(){
    fourthBar.style.width = '0%'
    setTimeout(() => {
        if(fourthBar.style.width=='0%'){
            thirdBar.style.width = '60%'
            }

        setTimeout(() => {
            if(fourthBar.style.width=='100%'){
                fourthBar.style.width = '0%'
                unfill()
                }
                
            }, 600);
        
    }, 600);
}

