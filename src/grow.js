function animatePlant(element, frames, delay) {
    setTimeout(() => {
        let currentFrame = 0;
        const interval = setInterval(() => {
            if (currentFrame < frames.length) {
                element.src = frames[currentFrame];
                currentFrame++;
            } else {
                clearInterval(interval);
            }
        }, 200);
    }, delay);
}

function animatePlants() {
    const palm1 = document.getElementById('palm1');
    const palm2 = document.getElementById('palm2');
    const fern1 = document.getElementById('fern1');
    const fern2 = document.getElementById('fern2');
    
    const palmStates = [
        {
            left: 'palm-left/palm-left1.png',
            right: 'palm-right/palm-right1.png'
        },
        {
            left: 'palm-left/palm-left2.png',
            right: 'palm-right/palm-right2.png'
        },
        {
            left: 'palm-left/palm-left3.png',
            right: 'palm-right/palm-right3.png'
        },
        {
            left: 'palm-left/palm-left4.png',
            right: 'palm-right/palm-right4.png'
        }
    ];

    const fernFrames = [
        'fern0/fern1.png',
        'fern0/fern2.png',
        'fern0/fern3.png',
        'fern0/fern4.png'
    ];

    // Animate palms first
    animatePlant(palm1, palmStates.map(s => s.left), 1000);
    animatePlant(palm2, palmStates.map(s => s.right), 1500);
    
    // Animate ferns after palms
    animatePlant(fern1, fernFrames, 2000);
    animatePlant(fern2, fernFrames, 2500);
}

// Add error handling to help debug deployment issues
window.addEventListener('load', () => {
    try {
        animatePlants();
    } catch (error) {
        console.error('Error initializing plant animations:', error);
    }
}); 