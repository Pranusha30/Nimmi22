/**
 * Harshitha - Physiotherapist Portfolio Website
 * JavaScript Interactivity: Smooth Navigation, Mobile Menu,
 * Scroll Reveals, Active Nav Highlighting & Contact Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 0. Animated 4-Scene Video-Style Intro Sequence (0 - 12 Seconds) ---
  const videoIntro = document.getElementById('videoIntroSequence');
  const skipIntroBtn = document.getElementById('skipIntroBtn');
  const replayIntroBtn = document.getElementById('replayIntroBtn');
  const videoProgressBar = document.getElementById('videoProgressBar');
  const videoSceneLabel = document.getElementById('videoSceneLabel');
  
  const sceneElements = {
    1: document.getElementById('scene1'),
    2: document.getElementById('scene2'),
    3: document.getElementById('scene3'),
    4: document.getElementById('scene4')
  };

  const scene1Photo = document.getElementById('scene1PhotoCard');
  const timelineSteps = document.querySelectorAll('.timeline-step');

  if (videoIntro) {
    document.body.classList.add('video-intro-active');

    const totalDuration = 12000; // 12 seconds total video sequence
    let startTime = Date.now();
    let isExited = false;
    let animFrameId = null;
    let photoFadeTriggered = false;
    let currentSceneNum = 1;

    const sceneConfig = [
      { id: 1, label: 'Scene 1 / 4 • Personal Introduction', start: 0, end: 3000 },
      { id: 2, label: 'Scene 2 / 4 • Professional Experience', start: 3000, end: 6000 },
      { id: 3, label: 'Scene 3 / 4 • Skills & Patient Care', start: 6000, end: 9000 },
      { id: 4, label: 'Scene 4 / 4 • Closing Transition', start: 9000, end: 12000 }
    ];

    const showScene = (sceneNum) => {
      if (currentSceneNum === sceneNum && sceneElements[sceneNum]?.classList.contains('active')) {
        return;
      }
      currentSceneNum = sceneNum;

      // Update Scene Label
      const config = sceneConfig.find(c => c.id === sceneNum);
      if (config && videoSceneLabel) {
        videoSceneLabel.textContent = config.label;
      }

      // Update Timeline steps indicator
      timelineSteps.forEach(step => {
        const stepIndex = parseInt(step.getAttribute('data-step'), 10);
        if (stepIndex === sceneNum) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      // Update Scene Visibility
      Object.keys(sceneElements).forEach(numStr => {
        const num = parseInt(numStr, 10);
        const sceneEl = sceneElements[num];
        if (!sceneEl) return;

        if (num === sceneNum) {
          sceneEl.classList.remove('leaving');
          sceneEl.classList.add('active');
          sceneEl.setAttribute('aria-hidden', 'false');
        } else if (sceneEl.classList.contains('active')) {
          sceneEl.classList.add('leaving');
          setTimeout(() => {
            sceneEl.classList.remove('active', 'leaving');
            sceneEl.setAttribute('aria-hidden', 'true');
          }, 450);
        } else {
          sceneEl.classList.remove('active', 'leaving');
          sceneEl.setAttribute('aria-hidden', 'true');
        }
      });
    };

    const exitVideoIntro = () => {
      if (isExited) return;
      isExited = true;
      if (animFrameId) cancelAnimationFrame(animFrameId);

      videoIntro.classList.add('fade-out');
      document.body.classList.remove('video-intro-active');

      setTimeout(() => {
        videoIntro.style.display = 'none';
      }, 800);
    };

    // Main animation loop tracking 0 - 12 seconds
    const runVideoSequence = () => {
      if (isExited) return;

      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / totalDuration) * 100, 100);

      // Smooth progress bar update
      if (videoProgressBar) {
        videoProgressBar.style.width = `${progress}%`;
      }

      // Scene 1: Photo fadeout by 3 seconds (specifically around 2.4s)
      if (elapsed >= 2400 && !photoFadeTriggered) {
        photoFadeTriggered = true;
        if (scene1Photo) {
          scene1Photo.classList.add('photo-fadeout');
        }
      }

      // Determine active scene based on elapsed millisecond timestamp
      if (elapsed < 3000) {
        showScene(1);
      } else if (elapsed < 6000) {
        showScene(2);
      } else if (elapsed < 9000) {
        showScene(3);
      } else if (elapsed < 12000) {
        showScene(4);
      } else {
        exitVideoIntro();
        return;
      }

      animFrameId = requestAnimationFrame(runVideoSequence);
    };

    // Start video sequence
    animFrameId = requestAnimationFrame(runVideoSequence);

    // Skip Intro button listener
    if (skipIntroBtn) {
      skipIntroBtn.addEventListener('click', exitVideoIntro);
    }

    // Keyboard Escape to skip
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !isExited) {
        exitVideoIntro();
      }
    });

    // Replay Intro function (from footer button)
    const restartIntro = () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      videoIntro.style.display = 'flex';
      videoIntro.classList.remove('fade-out');
      document.body.classList.add('video-intro-active');
      
      isExited = false;
      photoFadeTriggered = false;
      if (scene1Photo) {
        scene1Photo.classList.remove('photo-fadeout');
      }

      startTime = Date.now();
      showScene(1);

      if (animFrameId) cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(runVideoSequence);
    };

    if (replayIntroBtn) {
      replayIntroBtn.addEventListener('click', restartIntro);
    }
  }

  // --- 1. DOM Elements ---
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.querySelector('.back-to-top');
  const contactForm = document.getElementById('consultationForm');
  const formFeedback = document.getElementById('formFeedback');

  // --- 2. Mobile Menu Toggle ---
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Toggle Hamburger / Close Icon
      const menuIcon = mobileToggle.querySelector('.icon-menu');
      const closeIcon = mobileToggle.querySelector('.icon-close');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Close menu when clicking outside or clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          const menuIcon = mobileToggle.querySelector('.icon-menu');
          const closeIcon = mobileToggle.querySelector('.icon-close');
          if (menuIcon && closeIcon) {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
          }
        }
      });
    });
  }

  // --- 3. Header Scrolled State & Back To Top Visibility ---
  const handleScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header styling on scroll
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger once on load

  // --- 4. Back To Top Smooth Scroll ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 5. Active Section Navigation Highlighting ---
  const highlightCurrentSection = () => {
    const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightCurrentSection, { passive: true });

  // --- 6. Scroll Reveal Animation via IntersectionObserver ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once for performance
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver isn't supported
    revealElements.forEach(el => el.classList.add('active'));
  }

  // --- 7. Interactive Contact Form Submission ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const service = document.getElementById('service')?.value;
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Inquiry';

      // Visual sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Sending...
        `;
      }

      // Simulate sending inquiry
      setTimeout(() => {
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <strong>Thank you, ${escapeHtml(name)}!</strong>
              <p style="margin: 0; font-size: 0.875rem;">Your message regarding <em>${escapeHtml(service || 'Consultation')}</em> has been received. Harshitha Palaparthi or the clinic team will reach out to you shortly.</p>
            </div>
          `;
          formFeedback.style.display = 'flex';
          formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        contactForm.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        // Auto-hide feedback after 8 seconds
        setTimeout(() => {
          if (formFeedback) {
            formFeedback.style.display = 'none';
          }
        }, 8000);
      }, 750);
    });
  }

  // Helper function to sanitize user input in DOM reflection
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
  }
});
