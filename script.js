document.addEventListener('DOMContentLoaded', () => {
    // Sticky Toggle Bar Logic (if extra JS is needed beyond position: sticky)
    const toggleBar = document.querySelector('.sticky-toggle-bar');
    
    // Theme Toggle Logic
    const themeBtn = document.getElementById('toggle-theme');
    let isDark = true; // Default as per request

    themeBtn.addEventListener('click', () => {
        // Just a visual toggle for now since the user asked for specific dark colors
        // In a real app we might switch variables
        
        // Spin animation for fun
        const icon = themeBtn.querySelector('svg');
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.5s';
        
        setTimeout(() => {
            icon.style.transform = 'rotate(0deg)';
            icon.style.transition = 'none';
        }, 500);

        console.log('Theme toggle clicked. Staying on dark mode as requested.');
    });

    // Code Editor "Interactivity" - Highlighting line on click
    const codeLines = document.querySelectorAll('.editor-body pre code');
    
    // Optional: Add simple copy to clipboard functionality for code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.addEventListener('click', () => {
            // Visualize selection
            block.style.backgroundColor = '#1f2937';
            setTimeout(() => {
                block.style.backgroundColor = 'transparent';
            }, 200);
        });
    });
});
