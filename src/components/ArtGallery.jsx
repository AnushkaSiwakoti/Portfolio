import { useRef } from 'react';
import './ArtGallery.css';

export default function ArtGallery() {
  const watercolorRef = useRef(null);
  const acrylicRef = useRef(null);
  const photoRef = useRef(null); // ← Add this

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollAmount = 300;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="art-gallery-container">
      {/* Watercolor Gallery */}
      <div className="gallery-block">
        <h3>🖌️ Watercolor</h3>
        <div className="scroll-wrapper">
          <button className="arrow left" onClick={() => scroll(watercolorRef, 'left')}>&lt;</button>
          <div className="gallery" ref={watercolorRef}>
            <img src="/drawings/watercolor1.jpeg" alt="Watercolor 1" />
            <img src="/drawings/watercolor2.jpeg" alt="Watercolor 2" />
            <img src="/drawings/watercolor3.jpeg" alt="Watercolor 3" />
            <img src="/drawings/watercolor4.jpeg" alt="Watercolor 4" />
            <img src="/drawings/watercolor5.jpeg" alt="Watercolor 5" />
            <img src="/drawings/watercolor6.jpeg" alt="Watercolor 6" />
            <img src="/drawings/watercolor7.jpeg" alt="Watercolor 7" />
          </div>
          <button className="arrow right" onClick={() => scroll(watercolorRef, 'right')}>&gt;</button>
        </div>
      </div>

      {/* Acrylic Gallery */}
      <div className="gallery-block">
        <h3>🎨 Acrylic</h3>
        <div className="scroll-wrapper">
          <button className="arrow left" onClick={() => scroll(acrylicRef, 'left')}>&lt;</button>
          <div className="gallery" ref={acrylicRef}>
            <img src="/drawings/acrylic1.jpeg" alt="Acrylic 1" />
            <img src="/drawings/acrylic2.jpeg" alt="Acrylic 2" />
            <img src="/drawings/acrylic5.jpeg" alt="Acrylic 5" />
            <img src="/drawings/acrylic3.jpeg" alt="Acrylic 3" />
            <img src="/drawings/acrylic4.jpeg" alt="Acrylic 4" />
          </div>
          <button className="arrow right" onClick={() => scroll(acrylicRef, 'right')}>&gt;</button>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="gallery-block">
        <h3>📸 Photo Gallery</h3>
        <div className="scroll-wrapper">
          <button className="arrow left" onClick={() => scroll(photoRef, 'left')}>&lt;</button>
          <div className="gallery" ref={photoRef}>
            <img src="/gallery/1.jpeg" alt="Photo 1" />
            <img src="/gallery/2.jpeg" alt="Photo 2" />
            <img src="/gallery/3.jpeg" alt="Photo 3" />
            <img src="/gallery/4.jpeg" alt="Photo 4" />
            <img src="/gallery/5.jpeg" alt="Photo 5" />
            <img src="/gallery/6.jpeg" alt="Photo 6" />
            <img src="/gallery/7.jpeg" alt="Photo 7" />
            <img src="/gallery/8.jpeg" alt="Photo 8" />
            <img src="/gallery/9.jpeg" alt="Photo 9" />
            <img src="/gallery/10.jpeg" alt="Photo 10" />
            <img src="/gallery/11.jpeg" alt="Photo 11" />
            <img src="/gallery/12.jpeg" alt="Photo 12" />
            <img src="/gallery/13.jpeg" alt="Photo 13" />
            <img src="/gallery/14.jpeg" alt="Photo 14" />
            <img src="/gallery/15.jpeg" alt="Photo 15" />
          </div>
          <button className="arrow right" onClick={() => scroll(photoRef, 'right')}>&gt;</button>
        </div>
      </div>
    </div>
  );
}
