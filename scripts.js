// const now = new Date("Aug 11, 2022 23:59:40"); // POUR TESTS
const now = new Date();

if (now.getDay() < 4 && now.getDay() !== 0) {
  setExpired(true);
} else {
  setExpired(false);

  let nextSunday = new Date(
    now.getTime() +
      (now.getDay() !== 0 ? (7 - now.getDay()) * 24 * 3600 * 1000 : 0)
  );
  nextSunday.setHours(23, 59, 59, 99);

  // then call the coundown
  countDown(nextSunday);
}

function setExpired(expired) {
  document.getElementById("demo").style.display = expired ? "none" : "block";
  document.getElementById("expired").style.display = expired ? "block" : "none";
}

function countDown(countDownDate) {
  // let addedTo = 0; // POUR TEST
  // const start = new Date("Aug 11, 2022 23:59:40"); // POUR TEST

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime(); // COMMENTER POUR TEST
    // const now = start.getTime() + addedTo * 1000; // POUR TEST
    // addedTo++; // POUR TEST

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
      setExpired(true);
    }
  }, 1000);
}
