"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  AlertCircle,
} from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Get the audio element reference
    const audio = audioRef.current;
    if (!audio) return;

    // Set up audio event listeners
    const setAudioData = () => {
      setDuration(audio.duration);
      setAudioError(null);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleError = () => {
      console.error("Audio error occurred");
      setAudioError("Could not load audio file");
      setIsPlaying(false);
    };

    // Events
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("error", handleError);

    // Preload the audio
    audio.load();

    return () => {
      audio.pause();
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // Play/Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Reset error state when trying to play
      setAudioError(null);

      // Use play() promise to catch any autoplay or other issues
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Play error:", error);
            setAudioError("Couldn't play audio. Try clicking again.");
            setIsPlaying(false);
          });
      }
    }
  };

  // Mute toggle
  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Restart track
  const restartTrack = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    if (!isPlaying) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Play error:", error);
            setAudioError("Couldn't play audio. Try clicking again.");
          });
      }
    }
  };

  // Format time in MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;

    const progressRect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - progressRect.left) / progressRect.width;
    audioRef.current.currentTime = percent * duration;
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-12 h-12"
      }`}
    >
      {/* Audio element - visible in the DOM for better browser compatibility */}
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        preload="metadata"
        className="hidden"
      />

      {/* Minimized player (icon only) */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-12 h-12 bg-black/70 border border-cyan-500/50 rounded-md flex items-center justify-center hover:bg-cyan-900/30 transition-all group"
          aria-label="Expand music player"
        >
          <Volume2 className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Expanded player */}
      {isExpanded && (
        <div className="bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-md p-3 shadow-[0_0_15px_rgba(0,255,255,0.2)] relative overflow-hidden">
          {/* Cyberpunk decorative elements */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-500/70"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-500/70"></div>

          {/* Glitch scan line effect */}
          <div className="absolute inset-0 glitch-lines opacity-10 pointer-events-none"></div>

          {/* Track info */}
          <div className="mb-3 pr-6">
            <h4 className="text-cyan-400 text-sm font-medium truncate">
              LiSA - ReawakeR feat. Felix
            </h4>
            <p className="text-gray-400 text-xs truncate">Background Music</p>
          </div>

          {/* Error message */}
          {audioError && (
            <div className="mb-3 text-xs text-red-400 flex items-center">
              <AlertCircle size={12} className="mr-1" />
              {audioError}
            </div>
          )}

          {/* Progress bar */}
          <div
            ref={progressRef}
            className="h-1.5 bg-gray-700 rounded-full mb-3 cursor-pointer relative overflow-hidden"
            onClick={handleProgressClick}
          >
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>

          {/* Time display */}
          <div className="flex justify-between text-xs text-gray-400 mb-3">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={restartTrack}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Restart track"
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-cyan-900/50 rounded-full flex items-center justify-center border border-cyan-500/50 hover:bg-cyan-900/70 transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={18} className="text-cyan-400" />
              ) : (
                <Play size={18} className="text-cyan-400 ml-0.5" />
              )}
            </button>

            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.min(
                    audioRef.current.duration,
                    audioRef.current.currentTime + 10
                  );
                }
              }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Skip forward"
            >
              <SkipForward size={18} />
            </button>

            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-xs"
              aria-label="Minimize player"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
