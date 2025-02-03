function animatePalm(element, states, isRight) {
    const delay = isRight ? 500 : 0; // Right palm starts 500ms after left
    
    setTimeout(() => {
        let currentState = 0;
        const interval = setInterval(() => {
            if (currentState < states.length) {
                element.src = states[currentState][isRight ? 'right' : 'left'];
                currentState++;
            } else {
                clearInterval(interval);
            }
        }, 200);
    }, 1000 + delay); // Base delay of 1000ms + stagger delay if right palm
}

function animatePalms() {
    const palm1 = document.getElementById('palm1');
    const palm2 = document.getElementById('palm2');
    
    // Array of image states
    const states = [
        {
            left: '/palm-left/palm-left1.png',
            right: '/palm-right/palm-right1.png'
        },
        {
            left: '/palm-left/palm-left2.png',
            right: '/palm-right/palm-right2.png'
        },
        {
            left: '/palm-left/palm-left3.png',
            right: '/palm-right/palm-right3.png'
        },
        {
            left: '/palm-left/palm-left4.png',
            right: '/palm-right/palm-right4.png'
        }
    ];

    // Animate each palm separately with stagger
    animatePalm(palm1, states, false); // Left palm starts first
    animatePalm(palm2, states, true);  // Right palm starts 500ms later
}

// Initialize animation when page loads
window.addEventListener('load', animatePalms); 