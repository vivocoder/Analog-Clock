const body = document.querySelector("body"),

    hourHand = document.querySelector(".hour"),

    minuteHand = document.querySelector(".minute"),

    secondHand = document.querySelector(".sec"),

    modeSwitch = document.querySelector(".mode-s");


if(localStorage.getItem('mode') === "Dark Mode"){
    body.classList.add('dark');

    modeSwitch.textContent = "Light Mode";
}
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");


    const isdark = body.classList.contains('dark');

    modeSwitch.textContent = isdark ? "Light Mode" : "Dark Mode";


    localStorage.setItem("mode", isdark ? "Dark Mode" : "Light Mode")
});

const updateTime = () => {
    let date = new Date(),
        seToDeg = (date.getSeconds() / 60) * 360,
        minTodeg = (date.getMinutes() / 60) * 360,
        hourTodeg = (date.getHours() / 12) * 360;

    secondHand.style.transform = `rotate(${seToDeg}deg)`;

    minuteHand.style.transform = `rotate(${minTodeg}deg)`;
    hourHand.style.transform = `rotate(${hourTodeg}deg)`;
}



setInterval(updateTime, 1000)
updateTime();