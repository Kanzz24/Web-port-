document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll('.social-icons a');

    
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            let url;

            
            const imgAlt = link.querySelector('img').alt.toLowerCase();
            switch (imgAlt) {
                case 'facebook':
                    url = 'https://www.facebook.com';
                    break;
                case 'instagram':
                    url = 'https://www.instagram.com';
                    break;
                case 'tiktok':
                    url = 'https://www.tiktok.com';
                    break;
                default:
                    url = '#'; 
            }

            window.location.href = url; 
        });
    });
});

  
