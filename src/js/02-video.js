import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveCurrentTime({seconds}) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

try {
    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
} catch (error) {
    console.error("Video playback error: ", error.message);
};

player.on('timeupdate', Throttle(saveCurrentTime, 1000));