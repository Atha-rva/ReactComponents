import * as React from "react";
import { Avatar, PresenceBadgeProps } from "@fluentui/react-components";

interface AvatarProps {
  name?: string;
  className?: string;
  status?: PresenceBadgeProps["status"];
    style?: React.CSSProperties;
    
}

export const AvatarBadge: React.FC<Partial<AvatarProps>> = ({
  name,
  className,
  status,
  style,
  
}) => (
    <Avatar className={className} name={name} badge={{ status }} style={style} >{name}</Avatar>
);
 