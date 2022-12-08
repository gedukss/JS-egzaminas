/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickMeButton = document.getElementById("btn__element");
const count = document.getElementById("btn__state");
let totalClicks = 0;


clickMeButton.onclick = function () {
    totalClicks++;
    count.innerText = totalClicks;
   

};

