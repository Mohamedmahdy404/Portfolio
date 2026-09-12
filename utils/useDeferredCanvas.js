import { useEffect, useRef, useState } from "react";

// Reserve the existing layout, loading WebGL only near the viewport.
export default function useDeferredCanvas() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setReady(true);
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting && !document.hidden);
      if (entry.isIntersecting) setReady(true);
    }, { rootMargin: "250px" });
    const onVisibility = () => {
      const bounds = element.getBoundingClientRect();
      setVisible(!document.hidden && bounds.bottom > -250 && bounds.top < window.innerHeight + 250);
    };
    observer.observe(element);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return { ref, ready, visible };
}
