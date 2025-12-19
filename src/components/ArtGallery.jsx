import './ArtGallery.css';

export default function ArtGallery() {
  const artworks = [
    // Watercolors
    { src: '/drawings/watercolor1.jpeg', type: 'watercolor', size: 'large' },
    { src: '/drawings/watercolor2.jpeg', type: 'watercolor', size: 'medium' },
    { src: '/drawings/watercolor3.jpeg', type: 'watercolor', size: 'small' },
    { src: '/drawings/watercolor4.jpeg', type: 'watercolor', size: 'medium' },
    { src: '/drawings/watercolor5.jpeg', type: 'watercolor', size: 'large' },
    { src: '/drawings/watercolor6.jpeg', type: 'watercolor', size: 'small' },
    { src: '/drawings/watercolor7.jpeg', type: 'watercolor', size: 'medium' },
    
    // Acrylics
    { src: '/drawings/acrylic1.jpeg', type: 'acrylic', size: 'large' },
    { src: '/drawings/acrylic2.jpeg', type: 'acrylic', size: 'medium' },
    { src: '/drawings/acrylic3.jpeg', type: 'acrylic', size: 'small' },
    { src: '/drawings/acrylic4.jpeg', type: 'acrylic', size: 'medium' },
    { src: '/drawings/acrylic5.jpeg', type: 'acrylic', size: 'large' },
    
    // Photos
    { src: '/gallery/1.jpeg', type: 'photo', size: 'medium' },
    { src: '/gallery/2.jpeg', type: 'photo', size: 'small' },
    { src: '/gallery/3.jpeg', type: 'photo', size: 'large' },
    { src: '/gallery/4.jpeg', type: 'photo', size: 'medium' },
    { src: '/gallery/5.jpeg', type: 'photo', size: 'small' },
    { src: '/gallery/6.jpeg', type: 'photo', size: 'large' },
    { src: '/gallery/7.jpeg', type: 'photo', size: 'medium' },
    { src: '/gallery/8.jpeg', type: 'photo', size: 'small' },
    { src: '/gallery/9.jpeg', type: 'photo', size: 'medium' },
    { src: '/gallery/10.jpeg', type: 'photo', size: 'large' },
    { src: '/gallery/11.jpeg', type: 'photo', size: 'small' },
    { src: '/gallery/12.jpeg', type: 'photo', size: 'medium' },
    { src: '/gallery/13.jpeg', type: 'photo', size: 'large' },
    { src: '/gallery/14.jpeg', type: 'photo', size: 'small' },
    { src: '/gallery/15.jpeg', type: 'photo', size: 'medium' },
  ];

  // Handwritten overlays for some images
  const overlays = [
    { index: 2, text: "mood" },
    { index: 7, text: "vibes" },
    { index: 12, text: "pretty things" },
    { index: 18, text: "just for fun" },
    { index: 24, text: "<3" },
  ];

  return (
    <div className="collage-container" data-testid="art-collage">
      <div className="collage-grid">
        {artworks.map((art, idx) => {
          const overlay = overlays.find(o => o.index === idx);
          return (
            <div 
              key={idx} 
              className={`collage-item ${art.size}`}
              data-testid={`art-item-${idx}`}
            >
              <img src={art.src} alt={`${art.type} ${idx + 1}`} />
              {overlay && (
                <div className="handwritten-overlay">{overlay.text}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
