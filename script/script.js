
// ini kita pakai library simplyCountDown
simplyCountdown('.simply-countdown',{
    year: 2030, // required
    month:2, // required
    day: 14, // required
    hours: 12, // Default is 0 [0-23] integer
    // minutes: 0, // Default is 0 [0-59] integer
    // seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'days' },
        hours: { singular: 'jam', plural: 'hours' },
        minutes: { singular: 'menit', plural: 'minutes' },
        seconds: { singular: 'detik', plural: 'seconds' }
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false,
    onEnd: function () {
        // your code
        return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
});

// problem navbars karena sticky dan blur
const stickyTop = document.querySelector(".sticky-top")
const edit_nav = document.querySelector(".edit-nav")
const Offcanvas = document.querySelector('.offcanvas')

// musik
const audioIcon = document.getElementById("audio");
let jedaDanPlay = false;
const audio = document.querySelector("#audio audio");
const iconAud = document.querySelector(".icon i");


Offcanvas.addEventListener('show.bs.offcanvas', function(){
  stickyTop.style.overflow = "visible";
    edit_nav.classList.remove("blur")
});
Offcanvas.addEventListener('hidden.bs.offcanvas', function(){
    stickyTop.style.overflow = "hidden";
    edit_nav.classList.add("blur")
  });

  //   kunci scroll  
const rootElement = document.querySelector(":root");
function disableScroll(){
    scrollTop = window.pageXOffset || document.documentElement.scrollTop; //palingatas
    scrollLeft = window.pageYOffset || document.documentElement.scrollLeft; //palingbawah

    // ketika layar scrol maka jalankan function berikut
    window.onscroll = function(){
        // ketika layar discroll maka scroll akan kembali ke paling atas dan ke paling kiri
        window.scrollTo(scrollTop,scrollLeft)
    } 

    // kita perlu untuk mengubah scroll smothnya karena dibootstrap udah otomatis dibuat scroll smooth
    // letak bootstrap menyimpan scroll smoth ada di :root
    rootElement.style.scrollBehavior = "auto";
}

// mengembalikan fungsi scroll
function enableScroll(){
    
    window.onscroll = function(){};
    rootElement.style.scrollBehavior = "smooth";
    localStorage.setItem("bukaKunci","true");

    // function buat play yg dibuat manual
    playAudio();
  }
  if(!localStorage.getItem("bukaKunci")){

    audioIcon.classList.add("d-none");
    disableScroll();
}

function playAudio(){

  audioIcon.classList.remove("d-none");
  // audio.Volume() = 0.2;
  audio.play(); // membuat musicnya nyala
  jedaDanPlay = true;
}

// jeda dan mainkan
audioIcon.onclick = function(){
  if(jedaDanPlay){
    iconAud.classList.replace("bi-pause-circle","bi-play-circle")
    audio.pause();
    // jedaDanPlay = false; ini pakai cara sendiri
  }else{
    iconAud.classList.replace("bi-play-circle","bi-pause-circle")
    audio.play();
    // jedaDanPlay = true; untk jeada
  }

  jedaDanPlay = !jedaDanPlay; // pakai tutorial wpu
}




// ini function agar tidak redirect ke app ksoong
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi kehadiran sudah terkirim");
      })
    });
  });