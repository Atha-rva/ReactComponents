import * as React from "react";
import { Image } from "@fluentui/react-components";

interface LogoProps {
  alt?: string;
  src: string;
  className?: string;
  shape?: string;
  style?: React.CSSProperties;
}
export const Logo: React.FC<Partial<LogoProps>> = ({
  alt,
  src,
  className,
  style,
}) => {
  return (
    <div>
      <Image alt={alt} src={src} className={className} style={style} />
    </div>
  );
};
