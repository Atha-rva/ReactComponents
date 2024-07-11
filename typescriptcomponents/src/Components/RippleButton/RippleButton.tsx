import React, { useState, MouseEvent } from 'react';
import './RippleButton.css';
import { Button } from '@fluentui/react-components';

const RippleButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; size: number }[]>([]);

    const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const { clientX, clientY } = e;
        const [x, y] = [clientX - rect.left - size / 2, clientY - rect.top - size / 2];

        setRipples(prev => [...prev, { x, y, size }]);
        setTimeout(() => setRipples(prev => prev.slice(1)), 500);
    };

    return (
        <Button className="ripple-button" onClick={createRipple} {...props}>
            {ripples.map(({ x, y, size }, i) => (
                <span key={i} className="ripple" style={{ width: size, height: size, top: y, left: x }} />
            ))}
            {children}
            Click Me 
        </Button>
    );
};

export default RippleButton;
