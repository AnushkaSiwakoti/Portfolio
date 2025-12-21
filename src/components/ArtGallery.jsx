import './ArtGallery.css';

export default function ArtGallery() {
  const artworks = [
    // Watercolors
    { src: '/drawings/watercolor1.jpeg', type: 'MOOO', rotate: -3, size: 'medium' },
    { src: '/drawings/watercolor2.jpeg', type: '🍊', rotate: 5, size: 'large' },
    { src: '/drawings/watercolor3.jpeg', type: 'HeeHaw', rotate: -2, size: 'small', overlay: 'mood' },
    { src: '/drawings/watercolor4.jpeg', type: 'inspo: Vegas', rotate: 4, size: 'medium' },
    { src: '/drawings/watercolor5.jpeg', type: 'PomPom', rotate: -5, size: 'large' },
    { src: '/drawings/watercolor6.jpeg', type: 'feeling the blues', rotate: 3, size: 'small' },
    { src: '/drawings/watercolor7.jpeg', type: 'Slurp', rotate: -4, size: 'medium' },
    
    // Acrylics
    { src: '/drawings/acrylic1.jpeg', type: 'Fav flowers', rotate: 2, size: 'large' },
    { src: '/drawings/acrylic2.jpeg', type: '🏞️', rotate: -6, size: 'medium', overlay: 'vibes' },
    { src: '/drawings/acrylic3.jpeg', type: 'baby sis and me!', rotate: 4, size: 'small' },
    { src: '/drawings/acrylic4.jpeg', type: 'horses for my mommy', rotate: -3, size: 'medium' },
    { src: '/drawings/acrylic5.jpeg', type: 'made with tears, but worth it', rotate: 5, size: 'large' },
    
    // Photos
    { src: '/gallery/1.jpeg', type: 'vegas', rotate: -4, size: 'medium' },
    { src: '/gallery/2.jpeg', type: 'vegass', rotate: 3, size: 'small' },
    { src: '/gallery/3.jpeg', type: 'Shinneeyyyy', rotate: -2, size: 'large', overlay: 'pretty things' },
    { src: '/gallery/4.jpeg', type: '📸', rotate: 6, size: 'medium' },
    { src: '/gallery/5.jpeg', type: 'Houston Temple', rotate: -5, size: 'small' },
    { src: '/gallery/6.jpeg', type: 'round an round', rotate: 4, size: 'large' },
    { src: '/gallery/7.jpeg', type: 'Nepal', rotate: -3, size: 'medium' },
    { src: '/gallery/8.jpeg', type: 'Nepal', rotate: 5, size: 'small' },
    { src: '/gallery/9.jpeg', type: 'Witchy', rotate: -4, size: 'medium', overlay: 'just for fun' },
    { src: '/gallery/10.jpeg', type: 'Nepal', rotate: 3, size: 'large' },
    { src: '/gallery/11.jpeg', type: 'Nepal', rotate: -2, size: 'small' },
    { src: '/gallery/12.jpeg', type: 'Nepal', rotate: 4, size: 'medium' },
    { src: '/gallery/13.jpeg', type: 'and nepal', rotate: -5, size: 'large' },
    { src: '/gallery/14.jpeg', type: 'Kittyyy', rotate: 2, size: 'small', overlay: '<3' },
    { src: '/gallery/15.jpeg', type: 'holey', rotate: -3, size: 'medium' },
  ];

  return (
    <div className="scrapbook-container" data-testid="art-collage">
      <div className="scrapbook-grid">
        {artworks.map((art, idx) => (
          <div 
            key={idx} 
            className={`scrapbook-item ${art.size}`}
            style={{ transform: `rotate(${art.rotate}deg)` }}
            data-testid={`art-item-${idx}`}
          >
            <div className="polaroid-frame">
              <img src={art.src} alt={`${art.type} ${idx + 1}`} />
              <div className="polaroid-caption">
                <span className="handwritten-caption">{art.type}</span>
              </div>
            </div>
            {art.overlay && (
              <div className="scrapbook-overlay">{art.overlay}</div>
            )}
          </div>
        ))}
      </div>
      
      {/* Decorative scrapbook elements */}
      <div className="scrapbook-doodle doodle-1">✨</div>
      <div className="scrapbook-doodle doodle-2">★</div>
      <div className="scrapbook-doodle doodle-3">♡</div>
      <div className="scrapbook-doodle doodle-4">⭐</div>
      <div className="scrapbook-doodle doodle-5">✿</div>
    </div>
  );
}
