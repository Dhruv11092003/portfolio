import { useEffect } from "react";

const useScrollSpy = (sections, onActive) => {
  useEffect(() => {
    const handleScroll = () => {
      const midPoint = window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();
        if (top <= midPoint && bottom >= midPoint) {
          onActive(section.href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [onActive, sections]);
};

export default useScrollSpy;
