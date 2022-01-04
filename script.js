let weather_now

window.onload = function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Detroit&units=imperial&appid=6a3b95f23e761e707120f86b0eed7d55')
    .then(response => response.json())
    .then(data => {
      let tempValue = data['main']['temp'];
      let nameValue = data['name'];
      let descValue = data['weather'][0]['description'];
      let humidvalue = data['main']['humidity'];
      let mintemp = data['main']['temp_min'];
      let maxtemp = data['main']['temp_max'];
      weather_now = "It's " + tempValue + " degrees Farenheight outsite currently, with a low of " + mintemp + " degrees Farenheight and a high of " + maxtemp + " degrees Farenheight. The humidity percentage for today is " + humidvalue + "%. The current weather is " + descValue + ".";
      humdity_now = "Currently the air is at " + humidvalue + "% humidity."
      temp_now = "It's currently " + tempValue + " degrees outside."
    })
}

function record() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  recognition.start();
  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    var str = transcript;
    let desc = document.querySelector('#output');
    responsiveVoice.setDefaultVoice("UK English Female");
    responsiveVoice.setDefaultRate(1);
    //Date Code
    const d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let wkday = weekday[d.getDay()];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var msg_date = "It's " + wkday + ", " + months[d.getMonth()] + " " + d.getDate() + "th " + d.getFullYear() + "."  
    let msg_time = formatAMPM(new Date);
    let speak_msg_time = formatAMPMspeak(new Date)
    let msg_hello = ['Hello!', 'Hello, User!', 'Hello, nice to meet you!'];
    let msg_bibleverses = ['Cast all your anxiety on him because he cares for you. 1st Peter 5:7.', 'Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation. Isaiah 12:2', 'You will keep in perfect peace those whose minds are steadfast, because they trust in you. Isaiah 26:3', 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. Isaiah 40:31', 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. Isaiah 41:10', 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze. Isaiah 43:2', 'For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. Jeremiah 29:11']
    let msg_granted_task = ['Here you go!', 'Sure thing!']
    let msg_morningptcl = "Good morning, User. " +  msg_time + " and the date is " + wkday + ", " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + ". Here's a bible verse for you. " + (msg_bibleverses[Math.floor(Math.random() * msg_bibleverses.length)]) + ". " + weather_now + " Have a nice day!"
    let msg_affirmative = ['Here you go!', 'This is what I found']
    let speak_msg_morningptcl = "Good morning, User. " +  speak_msg_time + " and the date is " + wkday + ", " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + ". Here's a bible verse for you. " + (msg_bibleverses[Math.floor(Math.random() * msg_bibleverses.length)]) + ". " + weather_now + " Have a nice day!"
    let msg_notunderstood = ["I'm not sure what you mean.", "I don't understand. Maybe try rephrasing?", "I'm sorry, I don't understand. Please try again."]
    if (str.includes('hello')) {
      document.getElementById('output').innerHTML = (msg_hello[Math.floor(Math.random() * msg_hello.length)])
      responsiveVoice.speak(msg_hello[Math.floor(Math.random() * msg_hello.length)]);
    } else if (str.includes('date')) {
      document.getElementById('output').innerHTML = msg_date
      responsiveVoice.speak(msg_date)
    } else if (str.includes('time')) {
      document.getElementById('output').innerHTML = msg_time
      responsiveVoice.speak(msg_time)
    } else if (str.includes('email')) {
      document.getElementById('output').innerHTML = (msg_granted_task[Math.floor(Math.random() * msg_granted_task.length)]);
      window.open("mailto:")
    } else if (str.includes('weather')) {
      document.getElementById('output').innerHTML = weather_now
      responsiveVoice.speak(weather_now)
    } else if (str.includes('temperature')) {
      document.getElementById('output').innerHTML = temp_now
      responsiveVoice.speak(temp_now)
    } else if (str.includes('humidity')) {
      document.getElementById('output').innerHTML = humdity_now
      responsiveVoice.speak(humdity_now)
    } else if (str.includes('morning')) {
      document.getElementById('output').innerHTML = msg_morningptcl
      responsiveVoice.speak(speak_msg_morningptcl)
    } else if (str.includes('Define')) {
      document.getElementById('output').innerHTML = (msg_affirmative[Math.floor(Math.random() * msg_affirmative.length)]);
      res = str.replace('Define', '')
      window.open('https://www.merriam-webster.com/dictionary/' + res)
    } else if (str.includes('Google search')) {
      document.getElementById('output').innerHTML = (msg_affirmative[Math.floor(Math.random() * msg_affirmative.length)]);
      res = str.replace('Google search', '')
      window.open('https://www.google.com/search?q=' + res)
    } else if (str.includes('search')) {
      document.getElementById('output').innerHTML = (msg_affirmative[Math.floor(Math.random() * msg_affirmative.length)]);
      res = str.replace('search', '')
      window.open('https://www.google.com/search?q=' + res)
    } else if (str.includes('who is')) {
      document.getElementById('output').innerHTML = (msg_affirmative[Math.floor(Math.random() * msg_affirmative.length)]);
      res = str.replace('who is', '')
      window.open('https://www.google.com/search?q=' + res)
    } else if (str.includes('what is the')) {
      document.getElementById('output').innerHTML = (msg_affirmative[Math.floor(Math.random() * msg_affirmative.length)]);
      res = str.replace('what is the', '')
      window.open('https://www.google.com/search?q=' + res)
    } else if (transcript === "that's enough") {
      document.getElementById("output").innerHTML = "Okay."
      responsiveVoice.cancel();
    } else {
      document.getElementById('output').innerHTML = "I don't know what you mean."
      responsiveVoice.speak(msg_notunderstood[Math.floor(Math.random() * msg_notunderstood.length)]);
    }
    document.getElementById('speechToText').value = event.results[0][0].transcript;
  }
}

// Time 
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = "It's " + hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function formatAMPMspeak(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = "It's " + hours + ' ' + minutes + ' ' + ampm;
  return strTime;
}

//Mic Trigger Key
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    record()
  }
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Show More 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
