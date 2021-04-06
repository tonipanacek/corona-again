import Player from '@vimeo/player';

const handleVimeo = () => {
  const videoDiv = document.querySelector('.video-experience');
  const goBtn = document.querySelector('.more');
  const videoHeader = document.querySelector('.experience-header');
  if (videoDiv) {
    setTimeout(() => videoHeader.classList.add('fade-out'), 2000);
    const videoName = videoDiv.id;
    const endTime = videoDiv.dataset.endTime;
    console.log(endTime);
    const player = new Player(videoName, {
        id: videoDiv.dataset.videoId,
        autoplay: true
    });
    player.on('timeupdate', function(data) {
      if (videoName === 'chapter-5') {
        if (data.seconds >= endTime) {
          player.pause()
        } else if (data.seconds >= 128) {
          goBtn.classList.remove('hidden');
          setTimeout(() => {
            goBtn.classList.remove('transparent');
          }, 1000);
          // goBtn.querySelector('.form-feedback').classList.remove('transparent');
        } else {
          goBtn.classList.add('hidden');
          goBtn.classList.add('transparent');
        }
      } else {
        if (data.seconds >= endTime) {
          player.pause();
          goBtn.classList.remove('hidden');
        } else {
          goBtn.classList.add('hidden');
        }
      }
    })
  }

}

export { handleVimeo }
