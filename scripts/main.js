function playAudio(url) {
    new Audio(url).play();
}

function linkgeneration(which_cd, item_num) {
    item = `<audio controls>`;
    item = item + `<source src=`;
    if (item_num<10)
        item = item + `https://github.com/suyongeum/LTEST/blob/master/data/${which_cd}/0${item_num}_Track.mp3?raw=true`;
    else
        item = item + `https://github.com/suyongeum/LTEST/blob/master/data/${which_cd}/${item_num}_Track.mp3?raw=true`;
    item = item + `type="audio/mpeg">`;
    item = item + `Your browser does not support the audio element.`;
    item = item + `</audio>`;
    return item;
}

document.addEventListener('DOMContentLoaded', function(){
    const ul1 = document.querySelector('.cd1');
    for (i=1; i<=9; i++) {
        let node = document.createElement("li");
        node.className = 'features';
        node.innerHTML = linkgeneration('FirstCD', i);
        ul1.appendChild(node);
    }

    const ul2 = document.querySelector('.cd2');
    for (i=1; i<=20; i++) {
        let node = document.createElement("li");
        node.className = 'features';
        node.innerHTML = linkgeneration('SecondCD', i);
        ul2.appendChild(node);
    }
});

