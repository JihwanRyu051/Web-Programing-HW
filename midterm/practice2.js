var seconds = 0;
var imgArr = new Array(7);
for(var i=0; i<7; i++){
    switch(i){
    case 0:
        imgArr[i] = "1.png";
        break;
    case 1:
        imgArr[i] = "그림2-1.png";
        break;
    case 2:
        imgArr[i] = "그림2-2.png";
        break;
    case 3:
        imgArr[i] = "그림3-1.png";
        break;
    case 4:
        imgArr[i] = "그림3-2.png";
        break;
    case 5:
        imgArr[i] = "그림4-1.png";
        break;
    default:
        imgArr[i] = "그림4-2.png";
        break;
    }
}

function startTimer()
{
    window.setInterval("updateTime()",1000);
}

function updateTime()
{
    outputSignal(seconds%40);
    ++seconds;
}

function outputSignal(time)
{
    document.getElementById("soFar").innerHTML = time;
    var sig = document.getElementById("signal");
    if(time<20){
        sig.src =imgArr[0];
    }
    else if(time<25){
        if(time%2)
            sig.src =imgArr[2];
        else
            sig.src =imgArr[1];
    }
    else{
        if(time<35){
            if(time%2)
                sig.src =imgArr[3];
            else
                sig.src =imgArr[4];
        }
        else{
            if(time%2)
                sig.src =imgArr[5];
            else
                sig.src =imgArr[6];
            }
    }
}

window.addEventListener("load", startTimer, false);