function animatePlant(element, frames, delay) {
    setTimeout(() => {
        // Make the plant visible right before animation starts
        element.style.opacity = '1';
        
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function animatePlants() {
    const palm1 = document.getElementById('palm1');
    const palm2 = document.getElementById('palm2');
    const fern1 = document.getElementById('fern1');
    const fern2 = document.getElementById('fern2');
    const fern3 = document.getElementById('fern3');
    const fern4 = document.getElementById('fern4');
    const fern5 = document.getElementById('fern5');
    const cabbage1 = document.getElementById('cabbage1');
    const cabbage2 = document.getElementById('cabbage2');
    const cabbage3 = document.getElementById('cabbage3');
    const cabbage4 = document.getElementById('cabbage4');
    const cabbage5 = document.getElementById('cabbage5');
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
    
    // Create burst groups for remaining plants
    const burstPlants = shuffleArray([
        { element: fern1, frames: fernFrames },
        { element: fern2, frames: fernFrames },
        { element: fern3, frames: fernFrames },
        { element: fern4, frames: fernFrames },
        { element: fern5, frames: fernFrames },
        { element: cabbage1, frames: cabbageFrames },
        { element: cabbage2, frames: cabbageFrames },
        { element: cabbage3, frames: cabbageFrames },
        { element: cabbage4, frames: cabbageFrames },
        { element: cabbage5, frames: cabbageFrames },
        { element: tree1, frames: treeFrames },
        { element: tree2, frames: treeFrames }
    ]);

    // Split into 4 groups
    const groupSize = Math.ceil(burstPlants.length / 4);
    const groups = [];
    for (let i = 0; i < burstPlants.length; i += groupSize) {
        groups.push(burstPlants.slice(i, i + groupSize));
    }

    // Start burst sequence after palms (3000ms after start)
    setTimeout(() => {
        // Animate each group with small delays between them
        groups.forEach((group, index) => {
            const groupDelay = index * 150; // 150ms between groups
            group.forEach(plant => {
                animatePlant(plant.element, plant.frames, groupDelay);
            });
        });
    }, 3000);
}

// Add error handling to help debug deployment issues
window.addEventListener('load', () => {
    try {
        animatePlants();
    } catch (error) {
        console.error('Error initializing plant animations:', error);
    }
}); 