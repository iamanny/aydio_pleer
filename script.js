backward_button = document.querySelector(".backward");
forward_button = document.querySelector(".forward");
pause_button = document.querySelector(".pause_button");
img_div = document.querySelector(".img-cont");
audio_div = document.querySelector(".audio_cont");
seekbar = document.querySelector(".seekbar");
background = document.querySelector(".bg");
text = document.querySelector(".name");
author = document.querySelector(".author");

img_cont = ["img/dontstartnow.png", "img/lemonade.png"]
audio_cont = ["audio/dontstartnow.mp3", "audio/beyonce.mp3"]

audio_div.addEventListener("loadedmetadata", () => {
    seekbar.max = audio_div.duration;
    console.log(seekbar.max);
    console.log(audio_div.duration);
    const x = (seekbar.value - seekbar.min) / (seekbar.max - seekbar.min) * 100;
    seekbar.style.background = `linear-gradient(to right, rgb(255, 255, 255) ${x}%, black ${x}%)`;
})

audio_div.addEventListener("ended", () => {
    img_copy = []
    audio_copy = []
    for (i = 1; i>=0; i--){
        img_copy[i] = img_cont[i];
        audio_copy[i] = audio_cont[i];
    }
    

    img_div_src = img_div.src.replace(/^.*\/(img\/.*)$/, '$1');
    audio_div_src = audio_div.src.replace(/^.*\/(audio\/.*)$/, '$1')
    console.log(audio_div_src)
    for (i = 1; i>=0; i--){
       if (img_div_src == img_copy[i]){
            img_copy.splice(i, 1);
       }
       if (audio_div_src == audio_copy[i]){
            audio_copy.splice(i, 1);
       }
    }
    img_div.src = img_copy; 
    audio_div.src = audio_copy; 
    audio_div.play();
    pause_button.src = "svg/pause.png";
    background.style.backgroundImage = `url(${img_div.src})`;
    if (text.textContent == "Don`t start now"){
        text.textContent = "Don`t Hurt Yourself";
        author.textContent = "Beyonce"
    }
    else{
        text.textContent = "Don`t start now"
        author.textContent = "Dua Lipa"
    }
})

audio_div.addEventListener('timeupdate', () => {
    seekbar.value = audio_div.currentTime;
    console.log(seekbar.value);
    console.log(audio_div.currentTime);
    const x = (seekbar.value - seekbar.min) / (seekbar.max - seekbar.min) * 100;
    seekbar.style.background = `linear-gradient(to right, rgb(255, 255, 255) ${x}%, black ${x}%)`;
})

seekbar.addEventListener("input", () => {
    audio_div.currentTime = seekbar.value;
    const x = (seekbar.value - seekbar.min) / (seekbar.max - seekbar.min) * 100;
    seekbar.style.background = `linear-gradient(to right, rgb(255, 255, 255) ${x}%, black ${x}%)`;
})

backward_button.addEventListener("click", () => {
    img_copy = []
    audio_copy = []
    for (i = 1; i>=0; i--){
        img_copy[i] = img_cont[i];
        audio_copy[i] = audio_cont[i];
    }
    

    img_div_src = img_div.src.replace(/^.*\/(img\/.*)$/, '$1');
    audio_div_src = audio_div.src.replace(/^.*\/(audio\/.*)$/, '$1')
    console.log(audio_div_src)
    for (i = 1; i>=0; i--){
       if (img_div_src == img_copy[i]){
            img_copy.splice(i, 1);
       }
       if (audio_div_src == audio_copy[i]){
            audio_copy.splice(i, 1);
       }
    }
    img_div.src = img_copy; 
    audio_div.src = audio_copy; 
    audio_div.play()
    console.log(img_div.src);
    img_div_src = img_div.src.replace(/^.*\/(img\/.*)$/, '$1');
    pause_button.src = "svg/pause.png";
    background.style.backgroundImage = `url(${img_div.src})`;
    if (text.textContent == "Don`t start now"){
        text.textContent = "Don`t Hurt Yourself";
        author.textContent = "Beyonce";
    }
    else{
        author.textContent = "Dua Lipa";
        text.textContent = "Don`t start now"
    }
})

forward_button.addEventListener("click", () => {
    img_copy = []
    audio_copy = []
    for (i = 1; i>=0; i--){
        img_copy[i] = img_cont[i];
        audio_copy[i] = audio_cont[i];
    }
    

    img_div_src = img_div.src.replace(/^.*\/(img\/.*)$/, '$1');
    audio_div_src = audio_div.src.replace(/^.*\/(audio\/.*)$/, '$1')
    console.log(audio_div_src)
    for (i = 1; i>=0; i--){
       if (img_div_src == img_copy[i]){
            img_copy.splice(i, 1);
       }
       if (audio_div_src == audio_copy[i]){
            audio_copy.splice(i, 1);
       }
    }
    img_div.src = img_copy; 
    audio_div.src = audio_copy; 
    audio_div.play();
    pause_button.src = "svg/pause.png";
    background.style.backgroundImage = `url(${img_div.src})`;
    if (text.textContent == "Don`t start now"){
        text.textContent = "Don`t Hurt Yourself";
        author.textContent = "Beyonce"
    }
    else{
        text.textContent = "Don`t start now"
        author.textContent = "Dua Lipa";
    }
})

pause_button.addEventListener("click", () => {
    if (pause_button.src.indexOf("svg/play.png") > 0){
        pause_button.src = "svg/pause.png";
        audio_div.play();
    }
    else{
        pause_button.src = "svg/play.png";
        audio_div.pause();
    }
})