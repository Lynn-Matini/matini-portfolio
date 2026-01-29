import { useEffect } from 'preact/hooks';

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100 && rect.bottom >= 0;
};

function FadeInSection({ children }) {
  useEffect(() => {
    const handleFadeIn = () => {
      const sections = document.querySelectorAll('.fade-in-on-scroll');
      sections.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleFadeIn);
    window.addEventListener('load', handleFadeIn);
    // handleFadeIn();

    return () => {
      window.removeEventListener('scroll', handleFadeIn);
      window.removeEventListener('load', handleFadeIn);
    };
  }, []);
  return <div className="fade-in-on-scroll">{children}</div>;
}

export default FadeInSection;
