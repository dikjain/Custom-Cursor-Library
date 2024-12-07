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


