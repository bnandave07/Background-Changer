function randomColor(){
    // Defining Hex Values
    
    let hexValues = '0123456789ABCDEF';
    
    let color = "#"
    //Looping on hexValues to get 6 digit hex value
    for(let i = 0; i<6; i++){
        color += hexValues[Math.floor(Math.random()*16)]
        
    }
    return color
    }
    
    
    
    // selecting Buttons
    let start = document.querySelector('#start')
    let stop = document.querySelector('#stop')
    let interval;
    // Start Button Operation
    
    start.addEventListener('click',function(){
    
        if(!interval){
            interval = setInterval(function(){
    document.body.style.backgroundColor = randomColor()
    },1000)
        }
    
    })
    
    // Stop Button Operation
    
    stop.addEventListener('click',function(){
        clearInterval(interval)
        interval = null; 
    })
    
    
    