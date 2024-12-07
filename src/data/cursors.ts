import { CursorConfig } from '../types/cursor';


const cursorPreviewCode = (cursor:any) => `
    (function() {
      const container = document.getElementById('${cursor.id}');
      const cursorElement = container.querySelector('.${cursor.id}');
      let isHovering = false;

      if (cursorElement) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        cursorElement.style.left = centerX + 'px';
        cursorElement.style.top = centerY + 'px';
      }

      container.addEventListener('mouseenter', () => {
        isHovering = true;
        if (centerCircle) {
          centerCircle.style.display = 'none';
        }
      });

      container.addEventListener('mouseleave', () => {
        isHovering = false;
        if (cursorElement) {
          const rect = container.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          cursorElement.style.left = centerX + 'px';
          cursorElement.style.top = centerY + 'px';
        }
        if (centerCircle) {
          centerCircle.style.display = 'block';
        }
      });

      let centerCircle;
      if ('${cursor.id}' === 'colorful-circle-trail') {
        const colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];

        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const circle = document.createElement('div');
          circle.classList.add('circle');
          circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          circle.style.left = x + 'px';
          circle.style.top = y + 'px';
          
          container.appendChild(circle);
    
          setTimeout(() => {
            circle.style.opacity = '0';
            circle.style.transform = 'scale(0.5)';
            setTimeout(() => {
              if (container.querySelectorAll('.circle').length > 1) {
                circle.remove();
              }
            }, 500);
          }, 0);
        });

        centerCircle = document.createElement('div');
        centerCircle.classList.add('circle');
        centerCircle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        centerCircle.style.left = '50%';
        centerCircle.style.top = '50%';
        centerCircle.style.transform = 'translate(-50%, -50%)';
        container.appendChild(centerCircle);
      }

      if ('${cursor.id}' === 'supernova-meteor-cursor') {
        const createSpark = (x, y) => {
          const spark = document.createElement('div');
          spark.className = 'spark';
          spark.style.left = x + 'px';
          spark.style.top = y + 'px';
          container.appendChild(spark);

          setTimeout(() => spark.remove(), 1000);
        };

        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (cursorElement) {
            cursorElement.style.left = x + 'px';
            cursorElement.style.top = y + 'px';
          }

          if (Math.random() > 0.8) {
            createSpark(x, y);
          }
        });
      }

      if ('${cursor.id}' === 'starburst-trail') {
        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (cursorElement) {
            cursorElement.style.left = x + 'px';
            cursorElement.style.top = y + 'px';
          }

          const starburst = document.createElement('div');
          starburst.classList.add('starburst');
          starburst.style.left = x + 'px';
          starburst.style.top = y + 'px';
          
          container.appendChild(starburst);
    
          setTimeout(() => {
            starburst.style.opacity = '0';
            starburst.style.transform = 'scale(0.5)';
            setTimeout(() => {
              if (container.querySelectorAll('.starburst').length > 1) {
                starburst.remove();
              }
            }, 500);
          }, 500);
        });
      }


      container.addEventListener('mousemove', (e) => {
        if (!isHovering || !cursorElement) return;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursorElement.style.left = x + 'px';
        cursorElement.style.top = y + 'px';
      });

      ${cursor.js}
    })();
`;


const cursorPreviewCodeGiveCode = (cursor:any) => 
  `const container = document.body;
      const cursorElement = container.querySelector('.${cursor.id}');
      let isHovering = false;

      if (cursorElement) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        cursorElement.style.left = centerX + 'px';
        cursorElement.style.top = centerY + 'px';
      }

      container.addEventListener('mouseenter', () => {
        isHovering = true;
        if (centerCircle) {
          centerCircle.style.display = 'none';
        }
      });

      container.addEventListener('mouseleave', () => {
        isHovering = false;
        if (cursorElement) {
          const rect = container.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          cursorElement.style.left = centerX + 'px';
          cursorElement.style.top = centerY + 'px';
        }
        if (centerCircle) {
          centerCircle.style.display = 'block';
        }
      });

      let centerCircle;
      if ('${cursor.id}' === 'colorful-circle-trail') {
        const colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];

        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const circle = document.createElement('div');
          circle.classList.add('circle');
          circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          circle.style.left = x + 'px';
          circle.style.top = y + 'px';
          
          container.appendChild(circle);
    
          setTimeout(() => {
            circle.style.opacity = '0';
            circle.style.transform = 'scale(0.5)';
            setTimeout(() => {
              if (container.querySelectorAll('.circle').length > 1) {
                circle.remove();
              }
            }, 500);
          }, 0);
        });

        centerCircle = document.createElement('div');
        centerCircle.classList.add('circle');
        centerCircle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        centerCircle.style.left = '50%';
        centerCircle.style.top = '50%';
        centerCircle.style.transform = 'translate(-50%, -50%)';
        container.appendChild(centerCircle);
      }

      if ('${cursor.id}' === 'supernova-meteor-cursor') {
        const createSpark = (x, y) => {
          const spark = document.createElement('div');
          spark.className = 'spark';
          spark.style.left = x + 'px';
          spark.style.top = y + 'px';
          container.appendChild(spark);

          setTimeout(() => spark.remove(), 1000);
        };

        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (cursorElement) {
            cursorElement.style.left = x + 'px';
            cursorElement.style.top = y + 'px';
          }

          if (Math.random() > 0.8) {
            createSpark(x, y);
          }
        });
      }
      if ('${cursor.id}' === 'starburst-trail') {
        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (cursorElement) {
            cursorElement.style.left = x + 'px';
            cursorElement.style.top = y + 'px';
          }

          const starburst = document.createElement('div');
          starburst.classList.add('starburst');
          starburst.style.left = x + 'px';
          starburst.style.top = y + 'px';
          
          container.appendChild(starburst);
    
          setTimeout(() => {
            starburst.style.opacity = '0';
            starburst.style.transform = 'scale(0.5)';
            setTimeout(() => {
              if (container.querySelectorAll('.starburst').length > 1) {
                starburst.remove();
              }
            }, 500);
          }, 500);
        });
      }

      if ('${cursor.id}' === 'shimmering-star') {
        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (cursorElement) {
            cursorElement.style.left = x + 'px';
            cursorElement.style.top = y + 'px';
          }

          const star = document.createElement('div');
          star.className = 'glowing-star';
          star.style.left = x + 'px';
          star.style.top = y + 'px';
          
          container.appendChild(star);
    
          setTimeout(() => {
            star.style.opacity = '0';
            star.style.transform = 'scale(0.5)';
            setTimeout(() => {
              star.remove();
            }, 500);
          }, 500);
        });
      }
      }

      container.addEventListener('mousemove', (e) => {
        if (!isHovering || !cursorElement) return;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursorElement.style.left = x + 'px';
        cursorElement.style.top = y + 'px';
      });`

export const cursors: CursorConfig[] = [
  {
    id: 'ring-ripple',
    name: 'Ring Ripple',
    description: 'A smooth ripple effect that follows your cursor',
    html: '<div class="ring-ripple cursor-ring"></div>',
    css: `.cursor-ring {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 100%;
  position: fixed;
  pointer-events: none;
  transition: all 150ms ease;
  transition-property: background-color, opacity, transform, mix-blend-mode;
  z-index: 9999;
  mix-blend-mode: difference;
}`,
    js: cursorPreviewCode({ id: 'ring-ripple' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'ring-ripple' })
  },
  {
    id: 'gradient-trail',
    name: 'Gradient Trail',
    description: 'Colorful gradient trail that follows your cursor',
    html: '<div class="gradient-trail cursor-trail"></div>',
    css: `.cursor-trail {
  width: 15px;
  height: 15px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  filter: blur(2px);
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
    js: cursorPreviewCode({ id: 'gradient-trail' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'gradient-trail' })
  },
  {
    id: 'magnetic-dots',
    name: 'Magnetic Dots',
    description: 'Multiple dots that magnetically follow your cursor',
    html: '<div class="magnetic-dots magnetic-cursor"></div>',
    css: `.magnetic-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
.magnetic-cursor::before,
.magnetic-cursor::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.8;
  transition: transform 0.2s ease;
}
.magnetic-cursor::before { transform: translate(-10px, -10px); }
.magnetic-cursor::after { transform: translate(10px, 10px); }`,
    js: cursorPreviewCode({ id: 'magnetic-dots' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'magnetic-dots' })
  },
  {
    id: 'pixel-cursor',
    name: 'Pixel Cursor',
    description: 'Retro pixel-style cursor with animation',
    html: '<div class="pixel-cursor"></div>',
    css: `.pixel-cursor {
  width: 20px;
  height: 20px;
  background: #fff;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 20% 20%, 20% 100%, 0% 100%);
  animation: pixelate 1s infinite alternate;
}
@keyframes pixelate {
  0% { transform: rotate(10deg); }
  100% { transform: rotate(-20deg); }
}`,
    js: cursorPreviewCode({ id: 'pixel-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'pixel-cursor' })
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    description: 'Vibrant neon cursor with pulsating glow effect',
    html: '<div class="neon-glow neon-cursor"></div>',
    css: `.neon-cursor {
  width: 25px;
  height: 25px;
  background: transparent;
  border: 2px solid #0ff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 15px #0ff, inset 0 0 15px #0ff;
  animation: neonPulse 1.5s ease-in-out infinite;
}
@keyframes neonPulse {
  0% { box-shadow: 0 0 15px #0ff, inset 0 0 15px #0ff; }
  50% { box-shadow: 0 0 25px #0ff, inset 0 0 25px #0ff; }
  100% { box-shadow: 0 0 15px #0ff, inset 0 0 15px #0ff; }
}`,
    js: cursorPreviewCode({ id: 'neon-glow' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'neon-glow' })
  },
  {
    id: 'geometric-shapes',
    name: 'Geometric Shapes',
    description: 'Rotating geometric shapes following the cursor',
    html: '<div class="geometric-shapes geo-cursor"><div class="shape"></div></div>',
    css: `.geo-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
.shape {
  width: 30px;
  height: 30px;
  background: transparent;
  border: 2px solid #fff;
  animation: morphShape 4s linear infinite;
}
@keyframes morphShape {
  0% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
  25% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
  50% { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
  75% { clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); }
  100% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
}`,
    js: cursorPreviewCode({ id: 'geometric-shapes' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'geometric-shapes' })
  },
  {
    id: 'supernova-meteor-cursor',
    name: 'Supernova Meteor Cursor',
    description: 'A glowing meteor cursor with a sparkling particle burst and rotating spiral effect',
    html: `
      <div class="supernova-meteor-cursor">
        <div class="meteor-core"></div>
        <div class="meteor-trail"></div>
        <div class="meteor-spiral"></div>
        <div class="meteor-sparks"></div>
      </div>
    `,
    css: `
      .supernova-meteor-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
      }
  
      .supernova-meteor-cursor .meteor-core {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: radial-gradient(circle, #ff4500 0%, #ffa500 80%, transparent 100%);
        box-shadow: 0 0 20px rgba(255, 69, 0, 0.8), 0 0 35px rgba(255, 165, 0, 0.6);
        animation: flicker 1.2s infinite alternate;
      }
  
      .supernova-meteor-cursor .meteor-trail {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        background: conic-gradient(from 180deg at center, rgba(255, 69, 0, 0.4), transparent);
        border-radius: 50%;
        filter: blur(20px);
        opacity: 0.6;
        pointer-events: none;
        z-index: -1;
        animation: meteorTrail 0.5s infinite ease-in-out;
      }
  
      .supernova-meteor-cursor .meteor-spiral {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        background: conic-gradient(rgba(255, 69, 0, 0.5), transparent, rgba(255, 165, 0, 0.2), transparent);
        border-radius: 50%;
        animation: spiralRotate 1.5s linear infinite;
        pointer-events: none;
        z-index: -2;
      }
  
      .supernova-meteor-cursor .meteor-sparks {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        pointer-events: none;
        z-index: -3;
      }
  
      @keyframes flicker {
        0% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.9; transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
  
      @keyframes meteorTrail {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
        100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
      }
  
      @keyframes spiralRotate {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
  
      .spark {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: radial-gradient(circle, #ffdd00, #ff4500, transparent);
        animation: sparkFade 1s ease-out forwards;
        pointer-events: none;
        position: absolute;
      }
  
      @keyframes sparkFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
      }
    `,
    js: cursorPreviewCode({ id: 'supernova-meteor-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'supernova-meteor-cursor' })
  },  
  {
    id: 'ghost-trail',
    name: 'Ghost Trail',
    description: 'Ethereal trailing effect behind the cursor',
    html: '<div class="ghost-trail"></div>',
    css: `.ghost-trail {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
.ghost-trail::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: ghostFade 1s linear infinite;
}
@keyframes ghostFade {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2.5); opacity: 0; }
}`,
    js: cursorPreviewCode({ id: 'ghost-trail' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'ghost-trail' })
  },
  {
    id: 'liquid-cursor',
    name: 'Liquid Cursor',
    description: 'Fluid blob that follows the cursor',
    html: '<div class="liquid-cursor"></div>',
    css: `.liquid-cursor {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  filter: blur(4px);
  animation: liquidMorph 4s ease-in-out infinite;
  transition: all 0.1s ease-out;
}
@keyframes liquidMorph {
  0%, 100% { border-radius: 50%; }
  25% { border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%; }
  50% { border-radius: 30% 70% 70% 30% / 40% 60% 40% 60%; }
  75% { border-radius: 40% 60% 30% 70% / 70% 30% 70% 30%; }
}`,
    js: cursorPreviewCode({ id: 'liquid-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'liquid-cursor' })
  },
  {
    id: 'glitch-cursor',
    name: 'Glitch Cursor',
    description: 'Glitch effect cursor with RGB split',
    html: `<div class="glitch-cursor">
  <div class="glitch-part red"></div>
  <div class="glitch-part green"></div>
  <div class="glitch-part blue"></div>
</div>`,
    css: `.glitch-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
.glitch-part {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: screen;
}
.red { background: #ff0000; }
.green { background: #00ff00; }
.blue { background: #0000ff; }
@keyframes glitchOffset {
  0%, 100% { transform: translate(0); }
  33% { transform: translate(-2px, 2px); }
  66% { transform: translate(2px, -2px); }
}`,
    js: cursorPreviewCode({ id: 'glitch-cursor' }) + `
    const parts = container.querySelectorAll('.glitch-part');
parts.forEach(part => {
  part.style.animation = 'glitchOffset 0.2s infinite';
});`,
    giveCode: cursorPreviewCodeGiveCode({ id: 'glitch-cursor' })
  },
  {
    id: 'galactic-trail-cursor',
    name: 'Galactic Trail Cursor',
    description: 'Cursor with a galactic glowing trail that follows movement',
    html: `
      <div class="galactic-trail-cursor">
        <div class="trail"></div>
      </div>
    `,
    css: `
      .galactic-trail-cursor {
        width: 16px;
        height: 16px;
        background: radial-gradient(circle, #ff00ff 0%, #ff6fff 50%, transparent 100%);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        animation: flicker 2s infinite alternate;
        transform: translate(-50%, -50%);
      }
  
      .galactic-trail-cursor .trail {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
        height: 64px;
        background: radial-gradient(circle, rgba(255, 0, 255, 0.5) 0%, transparent 100%);
        filter: blur(12px);
        opacity: 0.7;
        animation: trailPulse 1s ease-in-out infinite alternate;
        pointer-events: none;
        z-index: -1;
      }
  
      @keyframes flicker {
        0% { opacity: 0.9; }
        50% { opacity: 1; }
        100% { opacity: 0.8; }
      }
  
      @keyframes trailPulse {
        0% {
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0.5;
        }
      }
    `,
    js: cursorPreviewCode({ id: 'galactic-trail-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'galactic-trail-cursor' })
  },
  {
    id: 'colorful-circle-trail',
    name: 'Colorful Circle Trail',
    description: 'Cursor with small colorful circles trailing its movement',
    html: `
      <div class="colorful-circle-trail">
        <div class="circle"></div>
      </div>
    `,
    css: `
      .circle {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
      }
    `,
    js: cursorPreviewCode({ id: 'colorful-circle-trail' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'colorful-circle-trail' })
  },
  {
    id: 'glowing-arrow-cursor',
    name: 'Glowing Arrow Cursor',
    description: 'A glowing elongated triangular cursor that points and follows the movement',
    html: `
      <div class="glowing-arrow-cursor">
        <div class="glow"></div>
      </div>
    `,
    css: `
      .glowing-arrow-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 20px;
        height: 40px;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background: linear-gradient(145deg, #ff0000, #ff8c00);
        box-shadow: 0 0 15px rgba(255, 69, 0, 0.8), 0 0 25px rgba(255, 140, 0, 0.6);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: arrowGlow 1.5s ease-in-out infinite alternate;
      }
  
      .glowing-arrow-cursor .glow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, rgba(255, 140, 0, 0.6), transparent);
        transform: translate(-50%, -50%);
        filter: blur(10px);
        opacity: 0.8;
        pointer-events: none;
        z-index: -1;
      }
      
      @keyframes arrowGlow {
        0% {
          transform: translate(-50%, -50%) scale(1) rotate(-45deg);
          opacity: 1;
          background: linear-gradient(145deg, #ff0000, #ff8c00);
          box-shadow: 0 0 15px rgba(255, 69, 0, 0.8), 0 0 25px rgba(255, 140, 0, 0.6);
        }
        10% {
          background: linear-gradient(145deg, #ff8c00, #ffd700);
          box-shadow: 0 0 15px rgba(255, 140, 0, 0.8), 0 0 25px rgba(255, 215, 0, 0.6);
        }
        20% {
          background: linear-gradient(145deg, #ffd700, #adff2f);
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.8), 0 0 25px rgba(173, 255, 47, 0.6);
        }
        30% {
          background: linear-gradient(145deg, #adff2f, #00ff00);
          box-shadow: 0 0 15px rgba(173, 255, 47, 0.8), 0 0 25px rgba(0, 255, 0, 0.6);
        }
        40% {
          background: linear-gradient(145deg, #00ff00, #00ffff);
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.8), 0 0 25px rgba(0, 255, 255, 0.6);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.1) rotate(-45deg);
          opacity: 0.9;
          background: linear-gradient(145deg, #00ffff, #0000ff);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 25px rgba(0, 0, 255, 0.6);
        }
        60% {
          background: linear-gradient(145deg, #0000ff, #8a2be2);
          box-shadow: 0 0 15px rgba(0, 0, 255, 0.8), 0 0 25px rgba(138, 43, 226, 0.6);
        }
        70% {
          background: linear-gradient(145deg, #8a2be2, #ff00ff);
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.8), 0 0 25px rgba(255, 0, 255, 0.6);
        }
        80% {
          background: linear-gradient(145deg, #ff00ff, #ff1493);
          box-shadow: 0 0 15px rgba(255, 0, 255, 0.8), 0 0 25px rgba(255, 20, 147, 0.6);
        }
        90% {
          background: linear-gradient(145deg, #ff1493, #ff4500);
          box-shadow: 0 0 15px rgba(255, 20, 147, 0.8), 0 0 25px rgba(255, 69, 0, 0.6);
        }
        100% {
          transform: translate(-50%, -50%) scale(1) rotate(-45deg);
          opacity: 1;
          background: linear-gradient(145deg, #ff4500, #ff0000);
          box-shadow: 0 0 15px rgba(255, 69, 0, 0.8), 0 0 25px rgba(255, 0, 0, 0.6);
        }
      }
    `,
    js: cursorPreviewCode({ id: 'glowing-arrow-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'glowing-arrow-cursor' })
  },
  {
    id: 'crystal-shard-cursor',
    name: 'Crystal Shard Cursor',
    description: 'A glowing crystal shard cursor with a sharp angular shape.',
    html: `
      <div class="crystal-shard-cursor">
        <div class="crystal-core"></div>
      </div>
    `,
    css: `
      .crystal-shard-cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        transform: translate(-50%, -50%) rotate(45deg);
        pointer-events: none;
        z-index: 9999;
      }
  
      .crystal-shard-cursor .crystal-core {
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #00c6ff, #0072ff);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        box-shadow: 0 0 10px rgba(0, 198, 255, 0.7), 0 0 20px rgba(0, 114, 255, 0.6);
        animation: crystalPulse 1s infinite alternate;
      }
  
      @keyframes crystalPulse {
        0% { transform: translate(-50%, -50%) rotate(45deg) scale(1); opacity: 1; }
        50% { transform: translate(-50%, -50%) rotate(45deg) scale(1.1); opacity: 0.8; }
        100% { transform: translate(-50%, -50%) rotate(45deg) scale(1); opacity: 1; }
      }
    `,
    js: cursorPreviewCode({ id: 'crystal-shard-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'crystal-shard-cursor' })
  },
  {
    id: 'neon-crystal-cursor',
    name: 'Neon Crystal Cursor',
    description: 'A dazzling cursor with a neon crystal shard design, featuring a dynamic glow and sparkle effect.',
    html: `
      <div class="neon-crystal-cursor">
        <div class="neon-core"></div>
      </div>
    `,
    css: `
      .neon-crystal-cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        transform: translate(-50%, -50%) rotate(60deg);
        pointer-events: none;
        z-index: 10001;
        opacity: 0.95;
      }
  
      .neon-crystal-cursor .neon-core {
        width: 28px;
        height: 28px;
        background: linear-gradient(60deg, #ff00ff, #00ff00, #0000ff);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        box-shadow: 0 0 18px rgba(255, 0, 255, 0.9), 0 0 28px rgba(0, 255, 0, 0.9), 0 0 35px rgba(0, 0, 255, 0.6);
        animation: neonGlow 1.8s infinite alternate, neonSparkle 2.5s infinite linear;
      }
  
      @keyframes neonGlow {
        0% { transform: translate(-50%, -50%) rotate(-120deg) scale(1); opacity: 0.95; }
        50% { transform: translate(-50%, -50%) rotate(-120deg) scale(1.2); opacity: 0.75; }
        100% { transform: translate(-50%, -50%) rotate(-120deg) scale(1); opacity: 0.95; }
      }
  
      @keyframes neonSparkle {
        0% { box-shadow: 0 0 18px rgba(255, 0, 255, 0.9), 0 0 28px rgba(0, 255, 0, 0.9), 0 0 35px rgba(0, 0, 255, 0.6); }
        100% { box-shadow: 0 0 25px rgba(255, 0, 255, 1), 0 0 40px rgba(0, 255, 0, 1), 0 0 45px rgba(0, 0, 255, 0.8); }
      }
    `,
    js: cursorPreviewCode({ id: 'neon-crystal-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'neon-crystal-cursor' })
  },
  {
    id: 'starburst-trail',
    name: 'Starburst Trail',
    description: 'A cursor with a trail of starbursts that follow its movement',
    html: '<div class="starburst-trail"></div>',
    css: `.starburst-trail {
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #ffdd00, #ff4500);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: starburstGlow 1.5s infinite alternate, starburstRotate 2s infinite linear;
}
@keyframes starburstGlow {
  0% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.8; transform: scale(1); }
}
@keyframes starburstRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.starburst {
  position: absolute;
  width: 20px;
  height: 20px;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background: linear-gradient(45deg, #ffdd00, #ff4500);
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.starburst-trail::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #ffffff, transparent);
  border-radius: 50%;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: starburstAppear 1s infinite;
}
@keyframes starburstAppear {
  0% { opacity: 0; transform: translateY(0) scale(0.5); }
  50% { opacity: 1; transform: translateY(-10px) scale(1); }
  100% { opacity: 0; transform: translateY(-20px) scale(0.5); }
}`,
    js: cursorPreviewCode({ id: 'starburst-trail' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'starburst-trail' })
  },
  {
    id: 'shimmering-star',
    name: 'Shimmering Star',
    description: 'A cursor with a shimmering star effect that changes color',
    html: '<div class="shimmering-star"></div>',
    css: `.shimmering-star {
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #ffffff, #ff00ff, transparent);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: shimmer 2s infinite alternate;
}
@keyframes shimmer {
  0% { box-shadow: 0 0 10px #ffffff, 0 0 20px #ff00ff; }
  50% { box-shadow: 0 0 15px #ff00ff, 0 0 30px #ffffff; }
  100% { box-shadow: 0 0 10px #ffffff, 0 0 20px #ff00ff; }
}
.glowing-star {
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #ffffff, #ff00ff, transparent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}`,
    js: cursorPreviewCode({ id: 'shimmering-star' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'shimmering-star' })
  }
  
];









