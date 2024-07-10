import React, { useState, useEffect, ReactNode } from "react";
import { Image, mergeClasses } from "@fluentui/react-components";
import { useStyles } from "./Videocss";
import { FullScreenMaximizeFilled } from "@fluentui/react-icons";

interface ZVideoProps {
  videourl: string;
  className: string;
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  children?: ReactNode;
}

const ZVideo: React.FC<Partial<ZVideoProps>> = ({
  videourl,
  className,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  children,
  ...props
}) => {
  const classes = useStyles();
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        toggleVideo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePlay = () => {
    setVideoPlaying(true);
  };

  const toggleFullScreen = () => {
    const videoElement = document.querySelector(
      ".video-container video"
    ) as HTMLVideoElement;
    if (videoElement) {
      if (!document.fullscreenElement) {
        videoElement.requestFullscreen().then(() => {
          setVideoPlaying(true);
        });
      } else {
        document.exitFullscreen().then(() => {
          setVideoPlaying(false);
        });
      }
    }
  };

  const toggleVideo = () => {
    setVideoPlaying((prevState) => !prevState);
  };

  return (
    <div
      className={mergeClasses(classes.ZVideoContainer, className)}
      {...props}
    >
      {!videoPlaying && (
        <div className={classes.ZVideoContainer_wrapper} onClick={handlePlay}>
          <Image src="https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/zvideoplaylogo.svg" />
          <div
            className={classes.ZVideoFullScreenButton}
            onClick={toggleFullScreen}
          ></div>
        </div>
      )}
      {videoPlaying && (
        <div
          className={`${classes.ZVideoContainer_video} video-container`}
          style={{ height, width, minHeight, minWidth, maxHeight, maxWidth }}
        >
          <video
            className={classes.ZVideoContainer_videocontainer}
            autoPlay
            onClick={() => setVideoPlaying(false)}
            controlsList="nodownload"
          >
            <source src={videourl} />
          </video>
          <div></div>
          <div
            className={classes.ZVideoFullScreenButton}
            onClick={toggleFullScreen}
          >
            <div className={classes.ZBottomRightContainer}>
              <FullScreenMaximizeFilled
                primaryFill="white"
                className={classes.fullscreenbtn}
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default ZVideo;
