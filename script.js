document.addEventListener('DOMContentLoaded', () => {
    let initialAnimationComplete = false;

    // Initial animation for letters
    anime.timeline({
        loop: false
    })
    .add({
        targets: '.letter',
        translateY: [-20, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 70 * i,
        complete: function(anim) {
            initialAnimationComplete = true;
            startContinuousAnimations();
        }
    });

    function startContinuousAnimations() {
        // Continuous floating animation for letters
        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            // Base floating animation
            anime({
                targets: letter,
                translateY: [-2, 2],
                rotateZ: [-1, 1],
                scale: [0.98, 1.02],
                duration: 2000 + (index * 100),
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: index * 50
            });

            // Color animation
            anime({
                targets: letter,
                color: [
                    { value: '#f0b90b', duration: 500 },
                    { value: '#f8d12f', duration: 500 },
                    { value: '#f0b90b', duration: 500 }
                ],
                loop: true,
                delay: index * 50,
                easing: 'easeInOutSine'
            });
        });
    }

    // Enhanced hover animations (additive effects)
    const logoContainer = document.querySelector('.logo-container');
    
    logoContainer.addEventListener('mouseenter', () => {
        if (!initialAnimationComplete) return; // Skip if initial animation isn't complete

        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            // Add hover effect on top of existing animations
            anime({
                targets: letter,
                scale: '*=1.2', // Multiply current scale
                rotate: '+=3',
                duration: 400,
                easing: 'easeOutElastic(1, .5)',
                delay: index * 50
            });
        });
    });

    logoContainer.addEventListener('mouseleave', () => {
        if (!initialAnimationComplete) return; // Skip if initial animation isn't complete

        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            // Return to original scale and rotation
            anime({
                targets: letter,
                scale: '*=0.833', // Divide by 1.2 to return to original scale
                rotate: '-=3',
                duration: 400,
                easing: 'easeOutElastic(1, .5)',
                delay: index * 50
            });
        });
    });

    // Replace geometric animation with new 3D logo animation
    function startLogoAnimation() {
        // Smooth 3D movement animation
        anime({
            targets: '.logo-3d',
            keyframes: [
                { 
                    rotateX: 20,
                    rotateY: 15,
                    translateZ: 20,
                    duration: 2000
                },
                { 
                    rotateX: 25,
                    rotateY: -15,
                    translateZ: 30,
                    duration: 2000
                },
                { 
                    rotateX: 15,
                    rotateY: 20,
                    translateZ: 25,
                    duration: 2000
                },
                { 
                    rotateX: 20,
                    rotateY: 0,
                    translateZ: 30,
                    duration: 2000
                }
            ],
            easing: 'easeInOutSine',
            loop: true,
            direction: 'alternate'
        });

        // Subtle floating animation
        anime({
            targets: '.hero-logo',
            translateY: [-5, 5],
            duration: 4000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        });
    }

    // Update your existing code to call this instead of startGeometricAnimation
    startLogoAnimation();

    function startFlatOctahedronAnimation() {
        anime({
            targets: '.flat-octahedron',
            rotate: [0, 360],
            duration: 30000,
            easing: 'linear',
            loop: true
        });

        anime({
            targets: '.diamond::after',
            rotate: [-45, 315],
            duration: 30000,
            easing: 'linear',
            loop: true
        });

        anime({
            targets: '.flat-octahedron',
            translateY: ['-8px', '8px'],
            duration: 4000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }

    // Call this in your DOMContentLoaded event
    startFlatOctahedronAnimation();
});

function copyRefCode(location = '') {
    const elementId = location === 'footer' ? 'refCodeFooter' : 'refCode';
    const code = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        // Show feedback
        const button = document.querySelector(`#${elementId}`).nextElementSibling;
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(() => {
            button.innerHTML = originalIcon;
        }, 2000);
    });
} 