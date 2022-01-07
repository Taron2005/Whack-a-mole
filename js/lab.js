let board = document.querySelector(".board");
let rows = document.querySelectorAll(".row");
let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("button");
let points = document.querySelector("p.point");
let miss = document.querySelector("p.miss span");
let playing = false;
let previousPoint = points.textContent
function pointPlus() {
    points.textContent = Number(points.textContent) + 1;
}

function startGame() {
    playing = !playing;
    miss.textContent = "0"
    if (playing) {
        btn.style.display = "flex"
        btn.textContent = "StopGame"
        points.textContent = "0"
        for (let row of rows) {
            row.style.display = "flex"
        }
        gaming()
    } else {
        btn.style.display = "none"
        setTimeout(() => {
            btn.style.display = "flex"
        }, 1100)
        btn.textContent = "Play"
        for (let row of rows) {
            row.style.display = "none"
        }
    }
}
function gaming() {
    if (!playing) {
        return
    }
    setTimeout(() => {
        previousPoint = points.textContent
        let min = 0;
        let max = boxes.length - 1;
        let boxIndex = Math.floor(Math.random() * (max - min)) + min;
        boxes[boxIndex].style.backgroundColor = "red";
        boxes[boxIndex].addEventListener("click", pointPlus);
        setTimeout(() => {
            boxes[boxIndex].style.backgroundColor = "rgba(0, 0, 0, 0.274)";
            boxes[boxIndex].removeEventListener("click", pointPlus);
            if (previousPoint == points.textContent) {
                miss.textContent = Number(miss.textContent) + 1
            }
        }, 800)
        if (miss.textContent == "3") {
            startGame()
        }
        gaming()
    }, 1500)
}


btn.addEventListener("click", startGame)