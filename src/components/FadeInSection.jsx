import { useEffect } from 'preact/hooks';

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100 && rect.bottom >= 0;
};

function FadeInSection({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-on-scroll');
      sections.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);
  return <div className="fade-in-section">{children}</div>;
}

export default FadeInSection;
