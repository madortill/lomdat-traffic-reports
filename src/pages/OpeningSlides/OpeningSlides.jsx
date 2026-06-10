import React, { useState, useEffect, useRef } from "react";
import "./OpeningSlides.css";

function OpeningSlides({ data, isCompleted, onUnlock }) {
  const [typedText, setTypedText] = useState("");

  const [showTitle, setShowTitle] = useState(false);
  const [showTitleLine, setShowTitleLine] = useState(false);
  const [showBottomLine, setShowBottomLine] = useState(false);

  const videoRef = useRef(null);
  const animationRef = useRef(null);

  const textAnimationStartedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (data?.type !== "billboardText") return;

    if (isCompleted) {
      setShowTitle(true);
      setShowTitleLine(true);
      setTypedText(data?.text || "");
      setShowBottomLine(true);
      textAnimationStartedRef.current = false;
      return;
    }

    if (textAnimationStartedRef.current) return;
    textAnimationStartedRef.current = true;

    setTypedText("");
    setShowTitle(false);
    setShowTitleLine(false);
    setShowBottomLine(false);

    const timeouts = [];
    let interval;

    const typewriterSpeed = data?.typewriterSpeed || 38;

    timeouts.push(
      setTimeout(() => {
        setShowTitle(true);
      }, 250)
    );

    timeouts.push(
      setTimeout(() => {
        setShowTitleLine(true);
      }, 850)
    );

    timeouts.push(
      setTimeout(() => {
        if (!data?.typewriterEffect || !data?.text) {
          setTypedText(data?.text || "");

          timeouts.push(
            setTimeout(() => {
              setShowBottomLine(true);

              timeouts.push(
                setTimeout(() => {
                  onUnlock?.(data.id);
                }, 450)
              );
            }, 350)
          );

          return;
        }

        let index = 0;
        const text = data.text;

        interval = setInterval(() => {
          index += 1;
          setTypedText(text.slice(0, index));

          if (index >= text.length) {
            clearInterval(interval);

            timeouts.push(
              setTimeout(() => {
                setShowBottomLine(true);

                timeouts.push(
                  setTimeout(() => {
                    onUnlock?.(data.id);
                  }, 450)
                );
              }, 350)
            );
          }
        }, typewriterSpeed);
      }, 1250)
    );

    return () => {
      timeouts.forEach(clearTimeout);
      if (interval) clearInterval(interval);
      textAnimationStartedRef.current = false;
    };
  }, [
    data?.id,
    data?.type,
    data?.text,
    data?.typewriterEffect,
    data?.typewriterSpeed,
    isCompleted,
    onUnlock,
  ]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const updateProgressSmoothly = () => {
    if (!videoRef.current) return;

    setCurrentTime(videoRef.current.currentTime);

    if (!videoRef.current.paused && !videoRef.current.ended) {
      animationRef.current = requestAnimationFrame(updateProgressSmoothly);
    }
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Video play failed:", error);
      }
    } else {
      videoRef.current.pause();
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;

    setDuration(videoRef.current.duration);

    if (isCompleted && data?.type === "billboardVideo") {
      setCurrentTime(videoRef.current.duration);
    }
  };

  const handleTimelineChange = (e) => {
    if (!videoRef.current) return;

    const newTime = parseFloat(e.target.value);

    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "00:00";

    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="opening-slide-container">
      {/* {data?.type === "openingDrop" && (
        <div className="drop-animation-wrapper">
          <img src={data.image} alt="פתיחה" className="dropping-image" />
        </div>
      )} */}
      {data?.type === "openingDrop" && (
        <div
          className={`drop-animation-wrapper ${
            isCompleted ? "drop-animation-done" : ""
          }`}
          onAnimationEnd={() => {
            if (!isCompleted) {
              onUnlock?.(data.id);
            }
          }}
        >
          <img src={data.image} alt="פתיחה" className="dropping-image" />
        </div>
      )}

      {data?.type === "billboardText" && (
        <div className="billboard-wrapper">
          <img src={data.image} alt="שלט חוצות" className="billboard-bg" />

          <div className="billboard-content billboard-text-layout">
            <h1 className={`billboard-title ${showTitle ? "show" : ""}`}>
              {data.title}
            </h1>

            <div
              className={`billboard-title-line ${showTitleLine ? "show" : ""}`}
            ></div>

            <p className="billboard-body-text">
              <span>{typedText}</span>

              {data.typewriterEffect &&
                !isCompleted &&
                typedText.length < (data.text?.length || 0) && (
                  <span className="typing-cursor" aria-hidden="true"></span>
                )}
            </p>

            <div
              className={`billboard-bottom-line ${
                showBottomLine ? "show" : ""
              }`}
            ></div>
          </div>
        </div>
      )}

      {data?.type === "billboardVideo" && (
        <div className="billboard-wrapper">
          <img src={data.image} alt="שלט חוצות" className="billboard-bg" />

          <div className="billboard-content video-inside">
            <div className="custom-video-container">
              <video
                ref={videoRef}
                src={data.videoUrl}
                className="learning-video"
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => {
                  setIsPlaying(true);
                  animationRef.current = requestAnimationFrame(
                    updateProgressSmoothly
                  );
                }}
                onPause={() => {
                  setIsPlaying(false);

                  if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                  }
                }}
                onEnded={() => {
                  setIsPlaying(false);

                  if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                  }

                  setCurrentTime(videoRef.current?.duration || 0);

                  onUnlock?.(data.id);
                }}
                onClick={togglePlay}
              />

              {!isPlaying && (
                <button
                  className="centerPlayButton"
                  onClick={togglePlay}
                  aria-label="נגן"
                  type="button"
                >
                  <div className="playIcon"></div>
                </button>
              )}

              <div className="controlsBar">
                <button
                  className="playPauseBtn"
                  onClick={togglePlay}
                  type="button"
                  aria-label={isPlaying ? "עצור" : "נגן"}
                >
                  {isPlaying ? (
                    <div className="pauseIcon"></div>
                  ) : (
                    <div className="playIconSmall"></div>
                  )}
                </button>

                <div className="timelineContainer">
                  <span className="timeLabel">{formatTime(currentTime)}</span>

                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.01"
                    value={currentTime}
                    onChange={handleTimelineChange}
                    className="timelineSlider"
                    style={{
                      background: `linear-gradient(to right, #6283EE 0%, #6283EE ${progressPercent}%, #cccccc ${progressPercent}%, #cccccc 100%)`,
                    }}
                  />

                  <span className="timeLabel">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpeningSlides;
