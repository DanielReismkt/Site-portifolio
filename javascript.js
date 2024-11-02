const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})

 
const textos = document.querySelectorAll('.textos, .textos1, .subtextobiografia, .titulos, .titulo3');
 
const animations = ['fade-in', 'slide-in-left'];

 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

 
textos.forEach((texto) => {
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    texto.classList.add(randomAnimation);  
    observer.observe(texto);
});


 