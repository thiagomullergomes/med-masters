document.addEventListener('DOMContentLoaded', () => {
    // Animate logo and profile text
    const logo = document.querySelector('.logo');
    const profileTexts = document.querySelectorAll('.profile h1, .profile p');
    
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.8)';
    
    profileTexts.forEach(text => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
    });
    
    // Animate logo
    setTimeout(() => {
        logo.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1)';
    }, 100);
    
    // Animate profile texts
    profileTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });

    // Animate links
    const links = document.querySelectorAll('.link-card');
    
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });

    // Add hover effect to links
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const arrow = link.querySelector('.link-arrow');
            arrow.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });

    // Add click effect
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const arrow = this.querySelector('.link-arrow');
            arrow.style.transform = 'translateX(4px)';
            
            setTimeout(() => {
                arrow.style.transform = '';
                window.location.href = this.href;
            }, 150);
        });
    });
});
