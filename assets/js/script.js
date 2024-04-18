var getdate = document.getElementById("getdate");
const dat = getdate.onchange = () => {
    var date = getdate.value;
    var date1 = date.split("T")
    document.querySelector("#date").innerHTML = date1[0] + " " + date1[1];
    var now = new Date();
    const end = new Date(date);
    if (now - end < 0) {
       var se =  setInterval(() => {
            dat();
        }, 1000);
        // converting ms to s
        var a = (end - now) / 1000;
        var days = Math.floor(a / 3600 / 24);
        var hours = Math.floor((a / 3600) % 24);
        var minutes = Math.floor((a / 60) % 60);
        var seconds = Math.floor(a % 60);
        document.querySelector("#days span").innerHTML = days;
        document.querySelector("#hours span").innerHTML = hours;
        document.querySelector("#minutes span").innerHTML = minutes;
        document.querySelector("#seconds span").innerHTML = seconds;
        if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            Swal.fire({
                title: "Good job!",
                text: "Your submitted time is successfully over!",
                icon: "success"
              });
            clearInterval(se);
        }
    }
}

