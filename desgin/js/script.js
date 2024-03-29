let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
document.addEventListener("DOMContentLoaded", function() {
   const timerElement = document.querySelector(".timer");
   const hoursElement = document.getElementById("hours");
   const minutesElement = document.getElementById("minutes");
   const secondsElement = document.getElementById("seconds");
 
   let hours = 2;
   let minutes = 0;
   let seconds = 0;
 
   function updateTimer() {
     seconds--;
     if (seconds < 0) {
       seconds = 59;
       minutes--;
       if (minutes < 0) {
         minutes = 59;
         hours--;
         if (hours < 0) {
           // Timer ended
           clearInterval(timerInterval);
           timerElement.textContent = "Time's up!";
           return;
         }
       }
     }
     hoursElement.textContent = formatTime(hours);
     minutesElement.textContent = formatTime(minutes);
     secondsElement.textContent = formatTime(seconds);
   }
 
   function formatTime(time) {
     return time < 10 ? `0${time}` : time;
   }
 
   // Initial display
   hoursElement.textContent = formatTime(hours);
   minutesElement.textContent = formatTime(minutes);
   secondsElement.textContent = formatTime(seconds);
 
   // Update timer every second
   const timerInterval = setInterval(updateTimer, 1000);
 });
 