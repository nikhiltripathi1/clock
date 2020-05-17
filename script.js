setInterval(setClock,1000);

const secHand = document.getElementById("sec-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function setClock(){
    const currentDate = new Date();

    const secRatio = currentDate.getSeconds()/60;
    const minRatio = (secRatio + currentDate.getMinutes())/60;
    const hourRatio = ( minRatio + currentDate.getHours())/12;
    
    setRotation(secHand,secRatio);
    setRotation(minHand,minRatio);
    setRotation(hourHand,hourRatio);
}

function setRotation(ele, rotationRatio){
    ele.style.setProperty("--rotate",rotationRatio * 360);
    }
setClock();