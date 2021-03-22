import Player from '@vimeo/player';

const handleVimeo = () => {
  const videoDiv = document.querySelector('.video-experience');
  const goBtn = document.querySelector('.more');
  const videoHeader = document.querySelector('.experience-header');
  if (videoDiv) {
    setTimeout(() => videoHeader.classList.add('fade-out'), 2000);
    const videoName = videoDiv.id;
    const player = new Player(videoName, {
        id: videoDiv.dataset.videoId,
        autoplay: true
    });
    player.on('ended', function(data) {
      if (videoName !== 'chapter-5') {
        goBtn.classList.remove('hidden');
      }
    })
    player.on('timeupdate', function(data) {
      if (videoName === 'chapter-5') {
        if (data.seconds >= 128) {
          goBtn.classList.remove('hidden');
        }
      } else {
        goBtn.classList.add('hidden');
      }
    })
  }

}

export { handleVimeo }
