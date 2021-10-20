# Argon Assistant

### Version 4 of a voice assistant created by STCollier.

##### (Scroll down to the notes for the important stuff)


This is _Argon Assistant_. Argon Assistant is version 4 of my previous voice assistants. Argon can tell you the weather, date, time, Google something for you, look up a word through Merrium Webster, do routines, and more!


A few notes:

* I didn't include web-scraping, so Argon unfortunately can't scrape results from web-pages and speak to your the results of your query. That's just too advanced for right now to include.

* For the weather data, the weather info is from the city "Detroit." To get the weather data of your location, go to line 12 of the javascript code, and replace "Detroit" with your city name. 
This is what it should look like: 

`https://api.openweathermap.org/data/2.5/weather?q=YOUR CITY NAME&units=imperial&appid=6a3b95f23e761e707120f86b0eed7d55`

* Lastly, Argon Assistant needs mic-access for your voice, so open Argon in new tab (see link below) and click 'allow' for mic access. Argon will listen for around 10 seconds before the mic swtiches off again. 

That's pretty much it! I know this is a pretty basic project to all of you advanced coders, and a lot could be improved, but nevertheless, I hope you enjoy this. It was a lot of fun for me to make :)


~STCollier
