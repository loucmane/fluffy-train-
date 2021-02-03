
const openNewTab = () => {
    window.open('html/about.html');
}

const closeTab = () => {
    window.close();
}

const previousPage = () => {
    history.back();
}

const nextPage = () => {
    history.forward();
}

document.getElementById("newTabButton").addEventListener('click', openNewTab);

document.getElementById("closeTabButton").addEventListener('click', closeTab);

document.getElementById("historyBackButton").addEventListener('click', previousPage);

document.getElementById("historyForwardButton").addEventListener('click', nextPage);







