import React, { useEffect, useRef } from 'react';
import { CursorConfig } from '../types/cursor';

interface CursorPreviewProps {
  cursor: CursorConfig;
}

export function CursorPreview({ cursor }: CursorPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!previewRef.current) return;

    const container = previewRef.current;
    const previewId = `preview-${cursor.id}`;
    container.id = previewId;
    container.innerHTML = cursor.html;
    container.style.overflow = 'hidden';
    
    const style = document.createElement('style');
    style.textContent = cursor.css.replace(/position: fixed;/, 'position: absolute;');
    container.appendChild(style);

    const wrappedJs = `
      (function() {
        const container = document.getElementById('${previewId}');
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
          const starbursts = [];
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
            starburst.style.transform = 'scale(1)';
            
            container.appendChild(starburst);
            starbursts.push(starburst);

            if (starbursts.length > 15) {
              const oldest = starbursts.shift();
              if (oldest) oldest.remove();
            }

            starbursts.forEach((sb, index) => {
              sb.style.transform = \`scale(\${1 - index * 0.1})\`;
            });

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

        if ('${cursor.id}' === 'bubble-pop') {
          container.addEventListener('click', () => {
            const bubble = container.querySelector('.bubble-pop');
            if (bubble) {
              bubble.classList.add('pop');
              setTimeout(() => bubble.classList.remove('pop'), 300);
            }
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

        if ('${cursor.id}' === 'neon-trail') {
          container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const neonTrail = document.createElement('div');
            neonTrail.classList.add('neon-trail');
            neonTrail.style.left = x + 'px';
            neonTrail.style.top = y + 'px';
            neonTrail.style.width = '2px';
            neonTrail.style.height = '2px';
            
            container.appendChild(neonTrail);

            setTimeout(() => {
              neonTrail.style.opacity = '0';
              setTimeout(() => {
                neonTrail.remove();
              }, 500);
            }, 500);
          });
        }

        if ('${cursor.id}' === 'emoji-cursor') {
          container.style.cursor = 'none';
          const emojiElement = document.createElement('div');
          emojiElement.style.position = 'absolute';
          emojiElement.style.fontSize = '20px';
          container.appendChild(emojiElement);

          container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const emojis = ['😀', '😂', '😍', '😎', '🤔', '😜', '😱', '👍', '👎', '👏'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            emojiElement.style.left = (e.clientX - rect.left) + 'px';
            emojiElement.style.top = (e.clientY - rect.top) + 'px';
            emojiElement.innerText = randomEmoji;
          });
        }

        if ('${cursor.id}' === 'cosmic-nebula') {
          const nebulaClouds = [];
          const stardustParticles = [];
          const maxClouds = 3;
          const maxStardust = 20;
          
          function createNebula(x, y) {
            const cloud = document.createElement('div');
            cloud.className = 'nebula-cloud';
            cloud.style.width = '100px';
            cloud.style.height = '100px';
            cloud.style.left = x + 'px';
            cloud.style.top = y + 'px';
            container.appendChild(cloud);
            
            setTimeout(() => {
              cloud.style.opacity = '0';
              setTimeout(() => cloud.remove(), 1000);
            }, 2000);
          }

          container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
        
            // Create nebula clouds
            if (Math.random() < 0.1) {
              createNebula(x, y);
            }

            // Manage stardust particles
            while (stardustParticles.length < maxStardust) {
              const stardust = document.createElement('div');
              stardust.className = 'stardust';
              container.appendChild(stardust);
              stardustParticles.push({
                element: stardust,
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                life: 1
              });
            }

            // Update stardust particles
            stardustParticles.forEach((particle, index) => {
              particle.x += particle.vx;
              particle.y += particle.vy;
              particle.life -= 0.02;
              
              if (particle.life <= 0) {
                particle.element.remove();
                stardustParticles.splice(index, 1);
                return;
              }

              particle.element.style.transform = \`translate(\${particle.x}px, \${particle.y}px)\`;
              particle.element.style.opacity = particle.life;
              particle.element.style.boxShadow = \`0 0 \${particle.life * 5}px white\`;
            });
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

    const script = document.createElement('script');
    script.textContent = wrappedJs;
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [cursor]);

  return (
    <div 
      ref={previewRef} 
      className="w-full h-64 bg-black/70 rounded-lg relative overflow-hidden cursor-none"
    />
  );
}
