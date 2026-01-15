
import React, { useEffect, useRef, useState } from 'react';

type AnimationState = 'BIG_BEE' | 'EXPLODING' | 'GYM_PARTICLES';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  rotationSpeed: number;
  alpha: number;
}

interface BeeToGymAnimationProps {
  onBlast?: () => void;
}

const BeeToGymAnimation: React.FC<BeeToGymAnimationProps> = ({ onBlast }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animState, setAnimState] = useState<AnimationState>('BIG_BEE');
  const [beeScale, setBeeScale] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // 1. Zoom in the big bee
      setAnimState('BIG_BEE');
      let scale = 0;
      const zoomInterval = setInterval(() => {
        scale += 0.05;
        if (scale >= 1) {
          scale = 1;
          clearInterval(zoomInterval);
        }
        setBeeScale(scale);
      }, 30);
      
      await new Promise(r => setTimeout(r, 3000));
      
      // 2. Explode
      setAnimState('EXPLODING');
      if (onBlast) onBlast();
      await new Promise(r => setTimeout(r, 1000));
      
      // 3. Settled gym particles
      setAnimState('GYM_PARTICLES');
    };
    sequence();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = (fromCenter: boolean) => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = fromCenter ? Math.random() * 15 + 10 : Math.random() * 2 + 1;
        particles.push({
          x: fromCenter ? canvas.width / 2 : Math.random() * canvas.width,
          y: fromCenter ? canvas.height / 2 : Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 3,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          alpha: 1
        });
      }
    };

    const drawBee = (c: CanvasRenderingContext2D, x: number, y: number, s: number, wingsOpen: boolean) => {
      c.save();
      c.translate(x, y);
      c.scale(s, s);
      
      // Wings
      c.fillStyle = 'rgba(255, 255, 255, 0.4)';
      const wingW = 40, wingH = 25;
      const wingAngle = wingsOpen ? 0.4 : 0.1;
      
      c.save();
      c.rotate(-wingAngle);
      c.beginPath(); c.ellipse(-20, -15, wingW, wingH, -0.4, 0, Math.PI * 2); c.fill();
      c.restore();
      
      c.save();
      c.rotate(wingAngle);
      c.beginPath(); c.ellipse(20, -15, wingW, wingH, 0.4, 0, Math.PI * 2); c.fill();
      c.restore();

      // Body
      c.fillStyle = '#fbbf24';
      c.beginPath(); c.ellipse(0, 0, 45, 35, 0, 0, Math.PI * 2); c.fill();
      
      // Stripes
      c.strokeStyle = '#000';
      c.lineWidth = 12;
      c.beginPath();
      c.moveTo(-15, -30); c.lineTo(-15, 30);
      c.moveTo(15, -30); c.lineTo(15, 30);
      c.stroke();
      
      // Eyes
      c.fillStyle = '#000';
      c.beginPath(); c.arc(-20, -5, 5, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(20, -5, 5, 0, Math.PI * 2); c.fill();
      
      c.restore();
    };

    const drawDumbbell = (c: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number, alpha: number) => {
      c.save();
      c.translate(x, y);
      c.rotate(angle);
      c.globalAlpha = alpha;
      c.fillStyle = '#fbbf24';
      
      // Handle bar
      c.fillRect(-size * 2, -size / 4, size * 4, size / 2);
      
      // Weight plates with fallback for roundRect
      const drawWeight = (ox: number) => {
        if (typeof (c as any).roundRect === 'function') {
          (c as any).roundRect(ox, -size, size, size * 2, size / 4);
        } else {
          // Fallback to standard rect if roundRect is not available
          c.rect(ox, -size, size, size * 2);
        }
      };

      c.beginPath();
      drawWeight(-size * 2.5);
      drawWeight(size * 1.5);
      c.fill();
      c.restore();
    };

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (animState === 'BIG_BEE') {
        const floatY = Math.sin(frame * 0.05) * 20;
        drawBee(ctx, canvas.width / 2, canvas.height / 2 + floatY, beeScale * 2, frame % 10 < 5);
      } else if (animState === 'EXPLODING') {
        if (particles.length === 0) initParticles(true);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;
          drawDumbbell(ctx, p.x, p.y, p.size * 2, p.angle, p.alpha);
        });
      } else {
        if (particles.length === 0 || (particles.length > 0 && particles[0].vx > 5)) initParticles(false);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.rotationSpeed;
          if (p.x < -50) p.x = canvas.width + 50;
          if (p.x > canvas.width + 50) p.x = -50;
          if (p.y < -50) p.y = canvas.height + 50;
          if (p.y > canvas.height + 50) p.y = -50;
          drawDumbbell(ctx, p.x, p.y, p.size * 1.5, p.angle, 0.4);
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animState, beeScale]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-30 pointer-events-none" />;
};

export default BeeToGymAnimation;
