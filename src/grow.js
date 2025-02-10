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
    const cabbage1 = document.getElementById('cabbage1');
    const cabbage2 = document.getElementById('cabbage2');
    const tree1 = document.getElementById('tree1');
    const tree2 = document.getElementById('tree2');
    
    const palmLeftFrames = [
        'palm-left/palm-left1.png',
        'palm-left/palm-left2.png',
        'palm-left/palm-left3.png',
        'palm-left/palm-left4.png'
    ];

    const palmRightFrames = [
        'palm-right/palm-right1.png',
        'palm-right/palm-right2.png',
        'palm-right/palm-right3.png',
        'palm-right/palm-right4.png'
    ];

    const fernFrames = [
        'fern0/fern1.png',
        'fern0/fern2.png',
        'fern0/fern3.png',
        'fern0/fern4.png'
    ];

    const cabbageFrames = [
        'cabbage0/cabbage1.png',
        'cabbage0/cabbage2.png',
        'cabbage0/cabbage3.png',
        'cabbage0/cabbage4.png'
    ];

    const treeFrames = [
        'tree1/tree1.png',
        'tree1/tree2.png',
        'tree1/tree3.png',
        'tree1/tree4.png',
        'tree1/tree5.png'
    ];

    // Animate palms first
    animatePlant(palm1, palmLeftFrames, 1000);
    animatePlant(palm2, palmRightFrames, 1500);
    
    // Animate ferns after palms
    animatePlant(fern1, fernFrames, 2000);
    animatePlant(fern2, fernFrames, 2500);

    // Animate cabbages next
    animatePlant(cabbage1, cabbageFrames, 3000);
    animatePlant(cabbage2, cabbageFrames, 3500);

    // Animate trees last
    animatePlant(tree1, treeFrames, 4000);
    animatePlant(tree2, treeFrames, 4500);
}

// Add error handling to help debug deployment issues
window.addEventListener('load', () => {
    try {
        animatePlants();
    } catch (error) {
        console.error('Error initializing plant animations:', error);
    }
}); 