import React from 'react';

function VideoPlayer(){
    return (
        <div className='video-player flex flex-col items-center relative
        '>
            <video className='w-11/12 rounded'>
                <source src="/assets/video/video.mp4" type="video/mp4" />
            </video>
            <div className="pause absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img src="/assets/play_circle.svg" alt="" className='w-12 h-12'
                />
            </div>
            <nav className="navigation absolute bottom-0 left-1/2 transform -translate-x-1/2 flex-col w-[86%]">
                <div className="flex justify-between items-center w-full px-4">
                    <p className='font-semibold text-sm'>
                        <span className=''>1:30</span>
                        <span className=''> /</span>
                        <span className=''> 2:30</span>
                    </p>
                    <div className="">
                        <img src="/assets/fullscreen.svg" alt="" />
                    </div>
                </div>
                <input type="range" className="w-full" />
            </nav>
        </div>
    );
}

export default VideoPlayer;