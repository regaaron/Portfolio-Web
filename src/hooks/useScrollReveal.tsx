import { useRef, useState, useEffect } from "react";

export const useScrollReveal = (): [React.RefObject<HTMLElement>, boolean] => {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref as React.RefObject<HTMLElement>, visible];
}
