var dropDownContent = document.getElementById('dropDown-content')
var dateLi = document.getElementById('date')
var navSystem = document.getElementById('nav');
var body = document.getElementsByTagName('body')[0]
var ul = document.getElementsByTagName('ul')[0]


 
//navigation system

dateLi.addEventListener('mouseover', function(){

dropDownContent.style.display = 'block'
dropDownContent.style.transition = ' all 2s'

})



dateLi.addEventListener('mouseout', function(){

    dropDownContent.style.display = 'none'
})

dropDownContent.addEventListener('mouseover', function(){

    dropDownContent.style.display = 'block'
})

dropDownContent.addEventListener('mouseout', function(){

    dropDownContent.style.display = 'none'
})

//slideShow

var i = 0;
var time = 4000;
var images = [];

images[0] = 'details-slide-1.jpg'
images[1] = 'details-slide-2.jpg'
images[2] = 'details-slide-3.jpg'

function changeImg(){
document.slide.src = images[i]

if(i < images.length - 1){

    i++
}else{

    i = 0
}

setTimeout('changeImg()', time)

}

window.onload =  changeImg()




function changeBG(n){

    
    if(n < 1 ){

        navSystem.style.backgroundColor = 'transparent'
        ul.style.color = 'white'

    }else{
        navSystem.style.backgroundColor = 'white'
        ul.style.color = 'black'

    }
}
window.onload = changeBG(body.scrollTop)




function rightAngle(){


    document.slide.src = images[i]

    if(i < images.length - 1){
    
        i++
    }else{
    
        i = 0
    }

}

function leftAngle(){


    document.slide.src = images[i]

if(i < 1){

    i = 2
}else{

    i --
}
}










  
    















