/* Your JS here. */
// console.log('Hello World!')

// select sections to look for and navbar object
const sections = document.querySelectorAll('.header, .section, .footer');
const navItems = document.querySelectorAll('#navbar a');

// Interaction Observer - tracks objects in the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // remove active/clicking from relevant link in navbar
            navItems.forEach(link => link.classList.remove('active'));

            // find matching section in navbar and update to active
            const activeLink = document.querySelector(`#navbar a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, { threshold: 0.5 }); // 50% threshold for section visibility

// observe every section in viewport for InteractionObserver
sections.forEach(section => {
    observer.observe(section);
});