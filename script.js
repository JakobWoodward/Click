let btn = document.getElementById("btn");

let body = document.getElementById("body");

let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

let H = document.getElementById("H");
let A = document.getElementById("A");
let T = document.getElementById("T");
let E = document.getElementById("E");

var heheheha = document.getElementById("heheheha");

btn.onclick = function(){
    btn.innerText = "click me again!";
    text1.style.display = "block";

    btn.onclick = function(){
        btn.innerText = "one more time!";
        text2.style.display = "block";

        btn.onclick = function(){
            btn.innerText = "Do Not Click This Button!";
            btn.style.fontSize = "17px"
            btn.style.border = "4px solid red";
            btn.style.borderRadius = "0px";
            btn.style.backgroundColor = "black";
            btn.style.color = "red";

            text3.style.display = "block";

            btn.onclick = function(){
                text2.style.display = "none";

                H.style.display = "inline-block";

                setTimeout(function(){
                    T.style.display = "inline-block"
                    btn.style.background = "none";
                }, 750);

                setTimeout(function(){
                    A.style.display = "inline-block"
                    btn.style.border = "none";
                }, 750 * 2);

                setTimeout(function(){
                    E.style.display = "inline-block"
                    btn.innerText = "FACTS";
                    btn.style.fontSize = "30px";
                }, 750 * 3);

                setTimeout(function(){
                    btn.style.fontFamily = "cursive"
                    H.style.fontFamily = "Cursive"
                    A.style.fontFamily = "Cursive"
                    T.style.fontFamily = "Cursive"
                    E.style.fontFamily = "Cursive"
                }, 750 * 4);

                setTimeout(function(){
                    btn.style.color = "purple"
                    H.style.color = "red"
                    A.style.color = "red"
                    T.style.color = "red"
                    E.style.color = "red"
                }, 750 * 5);

                setTimeout(function(){
                    heheheha.play();
                }, 750 * 5.3);
                

            }
        };
    };
};

