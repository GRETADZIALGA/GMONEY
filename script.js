document.querySelectorAll('.section').forEach(section => {
  section.addEventListener('click', () => {
    // Deactivate all others
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // Activate this one
    section.classList.add('active');
    
    // Optional: scroll lock
    document.body.style.overflow = 'hidden';
  });
});

// Optional: click anywhere else to unlock scroll
document.addEventListener('click', (e) => {
  if (!e.target.closest('.section')) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.body.style.overflow = 'auto';
  }
});
