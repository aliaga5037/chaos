var anchors = [{ x: 350, y: 5 },{ x: 650, y: 5 },{ x: 500, y: 300 }]

function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = "#F00";

        anchors.map(anchor => circle(anchor.x, anchor.y))

        ctx.fillStyle = "#000";
    }
}


function getRandomInt() {
    min = 0
    max = anchors.length;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function circle(x, y) {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI);
        ctx.fill();
    }
}


draw();


function start() {
    var i = 0;
    var rand;
    var last = { x: 550, y: 225 }
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }
    circle(last.x, last.y);
    var i = 0;
    var interval = setInterval(() => {
        i++
        rand = getRandomInt();

        last.x = Math.abs(last.x + anchors[rand].x) / 2
        last.y = Math.abs(last.y + anchors[rand].y) / 2
        ctx.fillStyle = "red";
        circle(last.x, last.y);
        if (i == 10000000) clearInterval(interval);
    }, 100)
}



start()
