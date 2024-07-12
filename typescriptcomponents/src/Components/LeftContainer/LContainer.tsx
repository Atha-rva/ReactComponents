import {
    Card,
    CardPreview,
    Image,
    mergeClasses,
  } from "@fluentui/react-components";
  import React, { ReactNode } from "react";
import { useEffect, useRef } from "react";
// import './ZlContainer.css';
// import { trasparantLogo } from "./assets/Images/Images";

import './Lato.css';
import useStyles from "./LContainercss";
  
  interface ZContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    contentType: "backgroundLogo" | "Video" | "giff" | "image" | "mixedContent";
    text?: ReactNode;
    text1?: string;
    ImageSrc?: string;
    imageSrc1?: string;
    videoSrc?: string;
    gifSrc?: string;
    titleClassName?: string;
    author?: string;
  }
  export const ZLeftContainer = ({
    contentType,
    text,
    text1,
    ImageSrc,
    imageSrc1,
    videoSrc,
    gifSrc,
    className,
    titleClassName,
    author,
    ...props
  }: ZContainerProps) => {
    const classes = useStyles();
    const renderContent = () => {
      switch (contentType) {
        case "backgroundLogo":
          // return <Image className="transparantImage" src={trasparantLogo} />;
          return (
            <Image
              className={mergeClasses(classes.transparantImage, className)}
              // src={trasparantLogo}
              alt="trasparantLogo"
            />
          );
          case "image":
            return <Image className={mergeClasses(className)} src={ImageSrc} />;

            case "Video":
              return (
                <video
                  controls={false}
                  preload="auto"
                  className={mergeClasses(className)}
                  // className="video-container"
                  autoPlay={true}
                  muted={false}
                  src={videoSrc}
                ></video>
              );
              case "giff":
                // return <Image src={gifSrc} alt="GIF" />;
                return (
                  <Image src={gifSrc} className={mergeClasses(className)} alt="GIF" />
                );
        case "mixedContent":
        default:
          return (
            <>
                <div>
              {/* <Image className="Image0" src={ImageSrc} /> */}
              <Image className={mergeClasses(className)} src={ImageSrc} />
            </div>
            <div>
              {/* <Image id="GIFContainer" src={gifSrc} alt="GIF" /> */}
              <Image
                id="GIFContainer"
                className={mergeClasses(className)}
                src={gifSrc}
                alt="GIF"
              />
            </div>
            <div className="video-container">
              <video
                controls={false}
                preload="auto"
                className={mergeClasses(className)}
                // className="embedded-video-16-9"
                autoPlay={true}
                ref={videoRef}
                muted={false}
                src={videoSrc}
              ></video>
            </div>
            <div>
              <Image className={mergeClasses(className)} src={ImageSrc} />
              {/* <Image src={imageSrc} /> */}
            </div>
            </>
          );
      }
    };
  
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => { 
      const videoElement = videoRef.current;
      if (videoElement) {
        // Play the video when component mounts
        videoElement.play().catch((error) => {
          // Handle potential errors (e.g., autoplay is disabled)
          console.error("Failed to play video:", error);
        });
      }
    }, []);
    
      return (
        <Card className={mergeClasses(classes.cardContainer, className)} {...props}>
        {/*  <Card className={mergeClasses("CardContainer", className)} {...props}> */}
          <CardPreview>
            {renderContent()}
            <div className={classes.Textoutercontainer}>
            <div className={mergeClasses(classes.textContainer, titleClassName)}>
              {/* <div className={mergeClasses("TextContainer", titleClassName)}> */}
              {props.children}
    
                {/* <div className="TextContainer1">{author}</div> */}
                <div className={ classes.Textsmallcontainer}>
                  <div className={mergeClasses(classes.textContainer1)}>{author}</div>
                </div>
            </div>
              </div>
          </CardPreview>
        </Card>
    );
  };
  