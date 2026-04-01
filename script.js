const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.querySelector('i').className = mobileMenu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
    });

    function closeMobile() {
        mobileMenu.classList.remove('open');
        hamburger.querySelector('i').className = 'fas fa-bars';
    }

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        this.style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
        setTimeout(() => {
            document.getElementById('successMsg').style.display = 'none';
            this.style.display = 'block';
            this.reset();
        }, 5000);
    });