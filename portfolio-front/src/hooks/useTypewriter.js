import { useEffect, useState } from "react";

const useTypewriter = (phrases, speed = 70, pause = 1300) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setDeleting] = useState(false);

  useEffect(() => {
    const activePhrase = phrases[index % phrases.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = activePhrase.slice(0, displayText.length + 1);
          setDisplayText(nextText);

          if (nextText === activePhrase) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const nextText = activePhrase.slice(0, displayText.length - 1);
          setDisplayText(nextText);

          if (!nextText) {
            setDeleting(false);
            setIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting, pause, phrases, speed]);

  return displayText;
};

export default useTypewriter;
