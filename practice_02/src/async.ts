var x = 0;
var progress = ">>";

const counter = () => {
    setInterval(() => {
        x++
        document.getElementById("counter").innerHTML = x.toString();
    }, 2500);
}

const progressIndicator = () => {
    setInterval(() => {
        progress = "=" + progress;
        if(progress.length > 100) {
            progress = ">>";
        }
        document.getElementById("progress").innerHTML = progress;
    }, 250);
}

counter();
progressIndicator();