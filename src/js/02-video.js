import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data);
}
const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime || 0);
player.on('timeupdate', throttle(onPlay, 1000));
