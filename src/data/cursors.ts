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
                if ('${cursor.id}' === 'light-saber') {
          const greenDots = [];
          container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const randomOffsetX = (Math.random() - 0.5) * 30; // Random offset between -30 and 30
            const randomOffsetY = (Math.random() - 0.5) * 30; // Random offset between -30 and 30

            const greenDot = document.createElement('div');
            greenDot.classList.add('green-dot');
            greenDot.style.left = (x + randomOffsetX) + 'px';
            greenDot.style.top = (y + randomOffsetY) + 'px';
            greenDot.style.width = '5px';
            greenDot.style.height = '5px';
            greenDot.style.backgroundColor = 'green';
            greenDot.style.borderRadius = '50%';
            greenDot.style.position = 'absolute';
            greenDot.style.boxShadow = '0 0 5px green';
            container.appendChild(greenDot);
            greenDots.push(greenDot);
            greenDot.style.opacity = '0.5';
            greenDot.style.transform = 'translate(-30px, -20px)';


            if (greenDots.length > 2) {
              const oldest = greenDots.shift();
              if (oldest) oldest.remove();
            }

            setTimeout(() => greenDot.remove(), 500);
          });
        }

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

      if ('${cursor.id}' === 'bubble-pop') {
        container.addEventListener('click', () => {
          const bubble = container.querySelector('.bubble-pop');
          if (bubble) {
            bubble.classList.add('pop');
            setTimeout(() => bubble.classList.remove('pop'), 300);
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
                if ('${cursor.id}' === 'light-saber') {
          const greenDots = [];
          container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const randomOffsetX = (Math.random() - 0.5) * 30; // Random offset between -30 and 30
            const randomOffsetY = (Math.random() - 0.5) * 30; // Random offset between -30 and 30

            const greenDot = document.createElement('div');
            greenDot.classList.add('green-dot');
            greenDot.style.left = (x + randomOffsetX) + 'px';
            greenDot.style.top = (y + randomOffsetY) + 'px';
            greenDot.style.width = '5px';
            greenDot.style.height = '5px';
            greenDot.style.backgroundColor = 'green';
            greenDot.style.borderRadius = '50%';
            greenDot.style.position = 'absolute';
            greenDot.style.boxShadow = '0 0 5px green';
            container.appendChild(greenDot);
            greenDots.push(greenDot);
            greenDot.style.opacity = '0.5';
            greenDot.style.transform = 'translate(-30px, -20px)';


            if (greenDots.length > 2) {
              const oldest = greenDots.shift();
              if (oldest) oldest.remove();
            }

            setTimeout(() => greenDot.remove(), 500);
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
  animation: glitchOffset 0.2s infinite;
}
.red { background: #ff0000; }
.green { background: #00ff00; }
.blue { background: #0000ff; }
@keyframes glitchOffset {
  0%, 100% { transform: translate(0); }
  33% { transform: translate(-2px, 2px); }
  66% { transform: translate(2px, -2px); }
}`,
    js: cursorPreviewCode({ id: 'glitch-cursor' }),
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
    id: 'bubble-pop',
    name: 'Bubble Pop',
    description: 'Bubbles that pop on click',
    html: '<div class="bubble-pop"></div>',
    css: `.bubble-pop {
  width: 30px;
  height: 30px;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: float 2s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-5px) scale(1.1); }
}
.pop {
  animation: pop 0.3s ease-out forwards;
}
@keyframes pop {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}`,
    js: cursorPreviewCode({ id: 'bubble-pop' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'bubble-pop' })
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
  },
  {
    id: 'light-saber',
    name: 'Light Saber',
    description: 'A light saber cursor with a glowing effect',
    html: '<div class="light-saber"></div>',
    css: `.light-saber {
  width: 5px;
  height: 50px;
  background: linear-gradient(to bottom, #00ff00, #000);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: rotate(-45deg);
  box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  animation: saberGlow 1s infinite alternate;
}
@keyframes saberGlow {
  0% { box-shadow: 0 -10px 10px #00ff00, 0 -10px 20px #00ff00; }
  100% { box-shadow: 0 -10px 12px #00ff00, 0 -10px 24px #00ff00; }
}`,
    js: cursorPreviewCode({ id: 'light-saber' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'light-saber' })
  },
  {
    id: 'black-sun',
    name: 'Black Sun',
    description: 'A black sun cursor with a glowing effect',
    html: '<div class="black-sun"></div>',
    css: `.black-sun {
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 5px #ff0000, 0 0 10px #00ff00, 0 0 15px #0000ff;
  animation: blinkShadow 10s infinite reverse;
}
@keyframes blinkShadow {
  0% { box-shadow: 0 0 10px #ff0000, 0 0 10px #00ff00, 0 0 10px #0000ff; }
  10% { box-shadow: 0 0 10px #ff7f00, 0 0 10px #7fff00, 0 0 10px #7f00ff; }
  20% { box-shadow: 0 0 10px #ffff00, 0 0 10px #00ffff, 0 0 10px #ff00ff; }
  30% { box-shadow: 0 0 10px #ff007f, 0 0 10px #7f7f00, 0 0 10px #007fff; }
  40% { box-shadow: 0 0 10px #ff7f7f, 0 0 10px #7fff7f, 0 0 10px #ff7fff; }
  50% { box-shadow: 0 0 10px #7f00ff, 0 0 10px #00ff7f, 0 0 10px #ff007f; }
  60% { box-shadow: 0 0 10px #7f7f7f, 0 0 10px #ff7f00, 0 0 10px #00ff7f; }
  70% { box-shadow: 0 0 10px #7fff00, 0 0 10px #007fff, 0 0 10px #ff00ff; }
  80% { box-shadow: 0 0 10px #ff00ff, 0 0 10px #00ffff, 0 0 10px #ff7f00; }
  90% { box-shadow: 0 0 10px #00ff00, 0 0 10px #ff0000, 0 0 10px #7f00ff; }
  100% { box-shadow: 0 0 10px #007fff, 0 0 10px #ff007f, 0 0 10px #7fff7f; }
}`,
    js: cursorPreviewCode({ id: 'black-sun' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'black-sun' })
  },
  {
    id: 'neon-trail',
    name: 'Neon Trail',
    description: 'A cursor with a trailing neon effect',
    html: '<div class="neon-trail"></div>',
    css: `.neon-trail {
  width: 8px;
  height: 8px;
  background: #0ff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
  animation: neonGlow 1s infinite alternate;
}
@keyframes neonGlow {
  0% { box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff; }
  100% { box-shadow: 0 0 15px #0ff, 0 0 25px #0ff, 0 0 35px #0ff; }
}`,
    js: cursorPreviewCode({ id: 'neon-trail' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'neon-trail' })
  },
  {
    id: 'rainbow-sparkle-cursor',
    name: 'Rainbow Sparkle Cursor',
    description: 'A cursor with a rainbow sparkle effect that changes colors',
    html: '<div class="rainbow-sparkle-cursor"></div>',
    css: `.rainbow-sparkle-cursor {
  width: 15px;
  height: 15px;
  background: linear-gradient(45deg, #ff0000, #ffa500, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 10px #ff0000, 0 0 20px #ffa500, 0 0 30px #ffff00, 0 0 40px #00ff00, 0 0 50px #00ffff, 0 0 60px #0000ff, 0 0 70px #ff00ff;
  animation: rainbowGlow 2s infinite alternate;
}
@keyframes rainbowGlow {
  0% { box-shadow: 0 0 10px #ff0000, 0 0 20px #ffa500, 0 0 30px #ffff00, 0 0 40px #00ff00, 0 0 50px #00ffff, 0 0 60px #0000ff, 0 0 70px #ff00ff; }
  100% { box-shadow: 0 0 15px #ff0000, 0 0 25px #ffa500, 0 0 35px #ffff00, 0 0 45px #00ff00, 0 0 55px #00ffff, 0 0 65px #0000ff, 0 0 75px #ff00ff; }
}`,
    js: cursorPreviewCode({ id: 'rainbow-sparkle-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'rainbow-sparkle-cursor' })
  },
  {
    id: 'galaxy-spiral-cursor',
    name: 'Galaxy Spiral Cursor',
    description: 'A cursor with a galaxy spiral effect that rotates and glows',
    html: '<div class="galaxy-spiral-cursor"></div>',
    css: `.galaxy-spiral-cursor {
  width: 20px;
  height: 20px;
  background: conic-gradient(from 180deg at center, #ff00ff, #00ffff, #0000ff, #ff00ff);
  border-radius: 0px 10px 10px 10px;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: galaxyGlow 1.5s infinite alternate;
}
@keyframes galaxyGlow {
  0% { box-shadow: 0 0 5px #ff00ff, 0 0 10px #00ffff, 0 0 15px #0000ff; }
  100% { box-shadow: 0 0 7px #ff00ff, 0 0 12px #00ffff, 0 0 17px #0000ff; }
}`,
    js: cursorPreviewCode({ id: 'galaxy-spiral-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'galaxy-spiral-cursor' })
  },
  {
    id: 'emoji-cursor',
    name: 'Emoji Cursor',
    description: 'A cursor with a fun emoji effect',
    html: '<div class="emoji-cursor">😀</div>',
    css: `.emoji-cursor {
  font-size: 20px;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}`,
    js: cursorPreviewCode({ id: 'emoji-cursor' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'emoji-cursor' })
  }
  ,
  {
    id: 'neon-pulse',
    name: 'Neon Pulse',
    description: 'A pulsating neon cursor with electric effects',
    html: '<div class="neon-pulse"></div>',
    css: `.neon-pulse {
  width: 15px;
  height: 15px;
  background: #00ff00;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: neonPulse 1.5s infinite;
}
@keyframes neonPulse {
  0% { transform: scale(1); box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
  50% { transform: scale(1.2); box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00; }
  100% { transform: scale(1); box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
}`,
    js: cursorPreviewCode({ id: 'neon-pulse' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'neon-pulse' })
  },
  {
    id: 'pixel-trail',
    name: 'Pixel Trail', 
    description: 'A retro-style pixel trail that follows your cursor',
    html: '<div class="pixel-trail"></div>',
    css: `.pixel-trail {
  width: 8px;
  height: 8px;
  background: #fff;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 8px 0 0 #ff0000, 16px 0 0 #ff7700, 24px 0 0 #ffff00,
              0 8px 0 #00ff00, 8px 8px 0 #0077ff, 16px 8px 0 #7700ff;
  animation: pixelate 0.5s infinite step-end;
}
@keyframes pixelate {
  50% { opacity: 0.7; }
}`,
    js: cursorPreviewCode({ id: 'pixel-trail' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'pixel-trail' })
  },
  {
    id: 'laser-beam',
    name: 'Laser Beam',
    description: 'A sci-fi laser beam cursor with targeting effects',
    html: '<div class="laser-beam"><div class="crosshair"></div></div>',
    css: `.laser-beam {
  width: 30px;
  height: 30px;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border: 2px solid #ff0000;
  border-radius: 50%;
  animation: target 1s infinite;
}
.crosshair {
  position: absolute;
  width: 100%;
  height: 100%;
}
.crosshair::before,
.crosshair::after {
  content: '';
  position: absolute;
  background: #ff0000;
}
.crosshair::before {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.crosshair::after {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}
@keyframes target {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}`,
    js: cursorPreviewCode({ id: 'laser-beam' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'laser-beam' })
  },
  {
    id: 'magic-dust',
    name: 'Magic Dust',
    description: 'Sparkling magic dust that trails your cursor movement',
    html: '<div class="magic-dust"></div>',
    css: `.magic-dust {
  width: 12px;
  height: 12px;
  background: radial-gradient(circle at center, #fff, #ffd700);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  filter: drop-shadow(0 0 6px #ffd700);
  animation: sparkle 1s infinite;
}
@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  25% { transform: scale(0.8) rotate(90deg); opacity: 0.8; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
  75% { transform: scale(0.8) rotate(270deg); opacity: 0.8; }
}`,
    js: cursorPreviewCode({ id: 'magic-dust' }),
    giveCode: cursorPreviewCodeGiveCode({ id: 'magic-dust' })
  }
  ,
  {
    id: 'ripple-wave',
    name: 'Ripple Wave',
    description: 'Creates expanding ripple waves with each click while leaving a glowing trail',
    html: '<div class="ripple-wave"></div>',
    css: `.ripple-wave {
  width: 20px;
  height: 20px;
  background: rgba(77, 213, 255, 0.8);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(77, 213, 255, 0.6);
}

.ripple {
  position: absolute;
  border: 2px solid rgba(77, 213, 255, 0.8);
  border-radius: 50%;
  animation: rippleEffect 1s ease-out;
  pointer-events: none;
  
}

.trail-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(77, 213, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.5s ease;
}

@keyframes rippleEffect {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
    
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}`,
    js: `
      let particles = [];
      
      container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.left = x + 'px';
        ripple.style.top = y  + 'px';
        container.appendChild(ripple);

        setTimeout(() => ripple.remove(), 1000);
      });

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (cursorElement) {
          cursorElement.style.left = x + 'px';
          cursorElement.style.top = y + 'px';
        }

        const particle = document.createElement('div');
        particle.className = 'trail-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        container.appendChild(particle);
        particles.push(particle);
        
        // Remove particle after 2 seconds regardless of mousemove
        setTimeout(() => {
          if (particles.includes(particle)) {
            const index = particles.indexOf(particle);
            if (index > -1) {
              particles.splice(index, 1);
            }
            particle.style.opacity = '0';
            setTimeout(() => particle.remove(), 500);
          }
        }, 500);

        particles.forEach((p, index) => {
          const scale = 1 - (index * 0.05);
          p.style.transform = \`scale(\${scale})\`;
          p.style.opacity = scale;
        });
      });`,
    giveCode: cursorPreviewCodeGiveCode({ id: 'ripple-wave' })
  },
  {
    id: 'magnetic-field',
    name: 'Magnetic Field',
    description: 'Cursor that attracts and repels particles in a magnetic field effect',
    html: '<div class="magnetic-field"></div>',
    css: `.magnetic-field {
  width: 30px;
  height: 30px;
  background: radial-gradient(circle at center, #ff00ff, transparent);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

.magnetic-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #ff00ff;
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.3s ease;
  opacity: 0.6;
}`,
    js: `
        const particles = [];
      const numParticles = 30;
      let isRepelling = false;

      // Create initial particles
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'magnetic-particle';
        particle.style.left = Math.random() * container.offsetWidth + 'px';
        particle.style.top = Math.random() * container.offsetHeight + 'px';
        container.appendChild(particle);
        particles.push({
          element: particle,
          x: Math.random() * container.offsetWidth,
          y: Math.random() * container.offsetHeight,
          vx: 0,
          vy: 0
        });
      }

      container.addEventListener('mousedown', () => isRepelling = true);
      container.addEventListener('mouseup', () => isRepelling = false);

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;

        if (cursorElement) {
          cursorElement.style.left = cursorX + 'px';
          cursorElement.style.top = cursorY + 'px';
        }

        particles.forEach(particle => {
          const dx = particle.x - cursorX;
          const dy = particle.y - cursorY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = isRepelling ? 1 : -1;
          
          if (distance < 100) {
            const strength = (100 - distance) / 100 * force;
            particle.vx += (dx / distance) * strength;
            particle.vy += (dy / distance) * strength;
          }

          // Apply velocity and friction
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.95;
          particle.vy *= 0.95;

          // Keep particles within bounds
          particle.x = Math.max(0, Math.min(container.offsetWidth, particle.x));
          particle.y = Math.max(0, Math.min(container.offsetHeight, particle.y));

          particle.element.style.left = particle.x + 'px';
          particle.element.style.top = particle.y + 'px';
        });
      });`,
    giveCode: cursorPreviewCodeGiveCode({ id: 'magnetic-field' })
  },
  {
    id: 'portal-cursor',
    name: 'Portal Cursor',
    description: 'Creates swirling portal effects with teleporting particles',
    html: '<div class="portal-cursor"></div>',
    css: `.portal-cursor {
  width: 40px;
  height: 40px;
  background: conic-gradient(from 0deg, #00ffff, #ff00ff, #00ffff);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  animation: portalSpin 2s linear infinite;
}

.portal-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(2px);
  opacity: 0.8;
  transition: all 0.3s ease;
}

@keyframes portalSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.portal-flash {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.8), transparent);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}`,
    js: `
      const portalParticles = [];
      let lastPortalPos = { x: 0, y: 0 };
      let portalFlash = null;

      // Create portal flash element
      portalFlash = document.createElement('div');
      portalFlash.className = 'portal-flash';
      container.appendChild(portalFlash);

      container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create teleport flash effect
        portalFlash.style.opacity = '1';
        setTimeout(() => portalFlash.style.opacity = '0', 300);

        // Teleport all particles to new location
        portalParticles.forEach(particle => {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 50;
          const newX = x + Math.cos(angle) * distance;
          const newY = y + Math.sin(angle) * distance;
          
          particle.element.style.transition = 'all 0.3s ease';
          particle.element.style.left = newX + 'px';
          particle.element.style.top = newY + 'px';
          particle.x = newX;
          particle.y = newY;
        });
      });

        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (cursorElement) {
            cursorElement.style.left = x + 'px';
            cursorElement.style.top = y + 'px';
          }

        // Create new particles
        if (portalParticles.length < 20) {
          const particle = document.createElement('div');
          particle.className = 'portal-particle';
          container.appendChild(particle);
          portalParticles.push({
            element: particle,
            x: x,
            y: y,
            angle: Math.random() * Math.PI * 2
          });
        }

        // Update particle positions
        portalParticles.forEach((particle, index) => {
          particle.angle += 0.1;
          const radius = 20 + (index * 1);
          particle.x = x + Math.cos(particle.angle) * radius;
          particle.y = y + Math.sin(particle.angle) * radius;
          
          particle.element.style.left = particle.x + 'px';
          particle.element.style.top = particle.y + 'px';
          particle.element.style.transform = \`scale(\${1 - index * 0.05})\`;
        });

        lastPortalPos = { x, y };
      });`,
    giveCode: cursorPreviewCodeGiveCode({ id: 'portal-cursor' })
  },
  {
    id: 'quantum-particles',
    name: 'Quantum Particles',
    description: 'Quantum particles that orbit and react to cursor movement with wave effects',
    html: '<div class="quantum-cursor"></div>',
    css: `.quantum-cursor {
  width: 20px;
  height: 20px;
  background: rgba(0, 255, 255, 0.8);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  box-shadow: 0 0 15px cyan;
}

.quantum-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(0, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(1px);
  transition: transform 0.3s ease;
}

.wave-ring {
  position: absolute;
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  animation: quantumWave 1.5s ease-out;
}

@keyframes quantumWave {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
    transform: translate(-50%, -50%) rotate(360deg);
  }
}`,
    js: `
      const particles = [];
      const maxParticles = 12;
      let lastPos = { x: 0, y: 0 };
      let waveTimeout = null;

      const quantumCursor = container.querySelector('.quantum-cursor');
      if (quantumCursor) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        quantumCursor.style.left = centerX + 'px';
        quantumCursor.style.top = centerY + 'px';
      }

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Move the main quantum cursor to follow the mouse
        if (quantumCursor) {
          quantumCursor.style.left = x + 'px';
          quantumCursor.style.top = y + 'px';
        }

        // Create wave effect on rapid movement
        const distance = Math.hypot(x - lastPos.x, y - lastPos.y);
        if (distance > 30) {
          if (!waveTimeout) {
            const wave = document.createElement('div');
            wave.className = 'wave-ring';
            wave.style.left = x + 'px';
            wave.style.top = y + 'px';
            container.appendChild(wave);
            
            waveTimeout = setTimeout(() => {
              wave.remove();
              waveTimeout = null;
            }, 1500);
          }
        }
        
        // Manage quantum particles
        while (particles.length < maxParticles) {
          const particle = document.createElement('div');
          particle.className = 'quantum-particle';
          container.appendChild(particle);
          particles.push({
            element: particle,
            angle: Math.random() * Math.PI * 2,
            speed: 0.05 + Math.random() * 0.05,
            radius: 15 + Math.random() * 15
          });
        }

        particles.forEach((particle, i) => {
          particle.angle += particle.speed;
          const radius = particle.radius + Math.sin(Date.now() / 1000) * 5;
          const px = x + Math.cos(particle.angle) * radius;
          const py = y + Math.sin(particle.angle) * radius;
          
          particle.element.style.left = px + 'px';
          particle.element.style.top = py + 'px';
          particle.element.style.transform = \`scale(\${1 - i * 0.05})\`;
          particle.element.style.background = \`hsla(\${(Date.now() / 50 + i * 30) % 360}, 100%, 50%, 0.6)\`;
        });

        lastPos = { x, y };
      });

      container.addEventListener('mouseleave', () => {
        if (quantumCursor) {
          const rect = container.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          quantumCursor.style.left = centerX + 'px';
          quantumCursor.style.top = centerY + 'px';
        }
      });
    `,
    giveCode: cursorPreviewCodeGiveCode({ id: 'quantum-particles' })
  }
];