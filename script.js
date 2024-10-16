const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

//navbar
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links ul li a');

    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 101; // Tambahkan 100px ke posisi scroll

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const current = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === current) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const targetPosition = targetSection.offsetTop - 100; // Kurangi 100px untuk margin

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('resize', updateActiveNavLink);

    // Panggil fungsi saat halaman dimuat untuk mengatur status awal
    updateActiveNavLink();
});
