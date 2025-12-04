document.addEventListener('DOMContentLoaded', () => {
    const tetrahedron = document.querySelector('.tetrahedron');
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        
        updateRotation();
    });

    function updateRotation() {
        const tiltX = mouseY * 20;
        const tiltY = mouseX * 20;
        
        tetrahedron.style.transform = `
            rotateX(${-20 - tiltX}deg) 
            rotateY(${30 + tiltY}deg)
        `;
        
        tetrahedron.style.animationPlayState = 'paused';
    }

    document.addEventListener('mouseleave', () => {
        tetrahedron.style.animationPlayState = 'running';
        tetrahedron.style.transform = 'rotateX(-20deg) rotateY(30deg)';
    });
});
