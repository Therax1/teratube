import React from 'react';
import { useState, useRef, useEffect } from 'react';

function VideoPlayer(){
    const [currentTime, setCurrentTime] = useState(0); // Temps écoulé
    const [duration, setDuration] = useState(0); // Durée totale de la vidéo
    const [isPlaying, setIsPlaying] = useState(false); // Pour savoir si la vidéo est en cours de lecture
    
    const videoRef = useRef(null); // Référence pour la vidéo
    
  // Met à jour le temps écoulé de la vidéo
  const updateTime = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Quand la vidéo est prête, on récupère la durée
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Lorsque l'utilisateur interagit avec la barre de progression
  const handleSeek = (event) => {
    const newTime = (event.target.value / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  // Synchronisation du temps de la vidéo
  useEffect(() => {
    const interval = setInterval(updateTime, 1000); // Met à jour chaque seconde
    return () => clearInterval(interval); // Nettoyage quand le composant est démonté
  }, []);


    return (
        <div className='video-player flex flex-col items-center relative
        '>
            <video 
                autoPlay
                
                ref={videoRef}
                loop
                className='w-11/12 rounded'
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}

                >
                <source src="/assets/video/video.mp4" type="video/mp4" />
            </video>
            <div className="pause absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img src="/assets/play_circle.svg" alt="" className='w-12 h-12'
                />
            </div>
            <nav className="navigation absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 w-[86%]">
                <div className="flex justify-between items-center w-full px-4">
                    <p className='font-semibold text-sm text-white'>
                        <span className=''>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}</span>
                        <span className=''> /</span>
                        <span className=''> {Math.floor(duration / 60)}:{Math.floor(duration % 60)}</span>
                    </p>
                    <div className="">
                        <img src="/assets/fullscreen.svg" alt="" />
                    </div>
                </div>
                <input 
                    type="range" 
                    className="w-full accent-range rounded-none"
                    min="0"
                    max="100"
                    value={(currentTime / duration) * 100}
                    onChange={handleSeek}
                />
            </nav>
        </div>
    );
}

export default VideoPlayer;