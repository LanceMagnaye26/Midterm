var controlBox = document.getElementById("controls");
var display = document.getElementById("display");
var bgBut = document.getElementById("bgImage");
var backg = document.getElementById("background");
var tInput = document.getElementById("titleInput");
var dInput = document.getElementById("desInput");
var title = document.getElementById("title");
var description = document.getElementById("description");
var color = document.getElementById("color");
var append = document.getElementById("addNew");
var horizontal = 0;
var vertical = 0;
var backHeight = 300;

function changeBgImg(imageUrl){
    backg.style.backgroundImage = "url("+imageUrl+")";
}

function moveBg(position){
    
    if (position == 1){
        horizontal = horizontal - 10;  
        backg.style.backgroundPosition = horizontal + "px" + " " + vertical + "px";
    } else if (position == 2){
        vertical = vertical - 10;
        backg.style.backgroundPosition = horizontal + "px" + " " + vertical + "px";
    } else if (position == 3){
        horizontal = horizontal + 10;
        backg.style.backgroundPosition = horizontal + "px" + " " + vertical + "px";
    } else if (position == 4){
        vertical = vertical + 10;
        backg.style.backgroundPosition = horizontal + "px" + " " + vertical + "px";
    }

}

function increaseBgHeight(number){
    if (number == 2){
        backHeight = backHeight + 10;
    } else if (number == 1){
        backHeight = backHeight - 10;
    }
    backg.style.height = backHeight + "px";
    
}

function expandMenu(){
    controlBox.style.bottom = "0px";
}

function changeColor(){
    title.style.color = color.value;
    description.style.color = color.value;
}

function changeDescription(){
    description.innerHTML = dInput.value;
}

function changeTitle(){
    title.innerHTML = "<h5>"+tInput.value+"</h5>";
}

document.getElementById("menu").addEventListener("click", function(){
    expandMenu();
});

bgBut.addEventListener("keyup", function(ev){
    keyCode = ev.keyCode;
    userImage = bgBut.value;
    var ep = userImage.indexOf("epic");
    
    if (bgBut.value == "horse"){
        userImage = "img/bg1.jpg"
        if (keyCode == 13){
            changeBgImg(userImage);
        } 
    }else if (bgBut.value == "night"){
        userImage = "img/bg2.jpg"
        if (keyCode == 13){
            changeBgImg(userImage);
        } 
    }else if (bgBut.value == "mountain"){
        userImage = "img/bg3.jpg"
        if (keyCode == 13){
            changeBgImg(userImage);
        } 
    } else if (userImage.indexOf("epic") != -1){
        userImage = "img/bg4.jpg"
        if (keyCode == 13){
            changeBgImg(userImage);
        } 
    } else {
        if (keyCode == 13){
            changeBgImg(userImage);
    }
    }
});

tInput.addEventListener("keyup", function(ev){
    changeTitle();
});

dInput.addEventListener("keyup", function(ev){
    changeDescription();
});

color.addEventListener("change", function(){
    changeColor();
});

document.body.addEventListener('keydown', function (ev) {
    
    keyCode = ev.keyCode;
    console.log(keyCode);
    if (keyCode == 37){
        moveBg(1);
    } else if (keyCode == 38){
        moveBg(2);
    } else if (keyCode == 39){
        moveBg(3);
    } else if (keyCode == 40){
        moveBg(4);
    } else if (keyCode == 189){
        increaseBgHeight(1);
    } else if (keyCode == 187){
        increaseBgHeight(2);
    }
    
});

append.addEventListener("click", function(){
    var bg = document.createElement("div");
    var newDesc = document.createElement("div");
    var newTitle = document.createElement("div");

    bg.className="appendedBg";
    newDesc.className="newDesc";
    newTitle.className="newTitle";
    
    bg.className += ("col-xs-12 col-sm-6 col-md-4 col-lg-3"); 
    
    bg.style.backgroundImage = backg.style.backgroundImage;
    newTitle.innerHTML = title.innerHTML;
    newTitle.style.color = title.style.color; 
    newDesc.innerHTML = description.innerHTML;
    newDesc.style.color = description.style.color;

    bg.appendChild(newTitle);
    bg.appendChild(newDesc);
    display.appendChild(bg);
    
});



