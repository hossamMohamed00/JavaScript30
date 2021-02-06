/* Elements */
const secondHand = document.querySelector('.second-hand');
const mindHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const setDate = () => {
   // Get current time
   const now = new Date();
   // Handle seconds hand
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360 ) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`

   // Handle minutes hand
   const minutes = now.getMinutes();
   console.log(minutes);
   const minutesDegrees = ((minutes / 60) * 360) + 90;
   mindHand.style.transform = `rotate(${minutesDegrees}deg)`

   // Handle hours hand
   const hours = now.getHours();
   console.log(hours);
   const hoursDegrees = ((hours / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)