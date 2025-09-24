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

// carosal js -------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    document.querySelector(".prev").addEventListener("click", () => {
        showSlides(slideIndex += -1);
    });

    document.querySelector(".next").addEventListener("click", () => {
        showSlides(slideIndex += 1);
    });

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlides(slideIndex = i + 1);
        });
    });

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        if (dots.length) {
            dots[slideIndex - 1].className += " active";
        }
    }
});

// modal js --------------------------------------

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalTitle.textContent = img.dataset.title;
        modalDesc.textContent = img.dataset.description;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if clicked outside the image
modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

// Navbar resizing on scroll 