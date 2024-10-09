    document.querySelectorAll('.bento-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
        });
        
        function adjustContainerHeight() {
        const container = document.querySelector('.bento-container');
        if (window.innerWidth > 768) {
            const width = container.offsetWidth;
            const height = width * (9/16);
            container.style.height = `${height}px`;
        } else {
            container.style.height = 'auto';
        }
        }
    
    window.addEventListener('load', adjustContainerHeight);
    window.addEventListener('resize', adjustContainerHeight);