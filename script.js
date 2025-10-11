// Scroll reveal for .fade-up and stagger rows
const reveal = () => {
    const els = document.querySelectorAll('.fade-up, .stagger');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if(e.isIntersecting){ 
          e.target.classList.add('reveal'); 
          io.unobserve(e.target); 
        } 
      });
    }, { threshold:.14 });
    els.forEach(el => io.observe(el));
  };
  reveal();
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){ 
        e.preventDefault(); 
        el.scrollIntoView({behavior:'smooth', block:'start'}); 
      }
    });
  });
  
  // Print / Save as PDF
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Subtle entry animation on load
  document.documentElement.style.scrollBehavior = 'smooth';
  