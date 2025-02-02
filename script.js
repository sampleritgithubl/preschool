document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        
        carouselItems.forEach(item => item.classList.remove('active'));

        
        carouselItems[currentIndex].classList.add('active');
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }




    function toggleDetails() {
        const moreDetails = document.getElementById('more-details');
        const readMoreBtn = document.getElementById('readMoreBtn');
        const enrollBtn = document.getElementById('enrollNow1');
        
        if (moreDetails.classList.contains('hidden')) {
            // Show more details
            moreDetails.classList.remove('hidden');
            moreDetails.classList.add('show');
            readMoreBtn.textContent = 'Read Less';
            readMoreBtn.classList.add('active');
            
            // Smooth scroll to content
            moreDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Hide more details and scroll back to top
            moreDetails.classList.remove('show');
            moreDetails.classList.add('hidden');
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.classList.remove('active');
            
            // Scroll back to the top of the section
            document.querySelector('.new-programs123').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }


    // Event listeners for buttons
    nextButton.addEventListener('click', () => {
        clearInterval(interval); // Stop auto-play on button click
        showNext();
        startAutoPlay(); // Restart auto-play
    });

    prevButton.addEventListener('click', () => {
        clearInterval(interval);
        showPrev();
        startAutoPlay();
    });

    
    function startAutoPlay() {
        interval = setInterval(showNext, 8000); // Change image every 1 second
    }

    
    updateCarousel();
    startAutoPlay();

    // Read More functionality
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreDetails = document.getElementById('more-details');

    function toggleDetails() {
        const isHidden = moreDetails.classList.contains('hidden');
        
        if (isHidden) {
            moreDetails.classList.remove('hidden');
            moreDetails.classList.add('show');
            readMoreBtn.textContent = 'Read Less';
            readMoreBtn.classList.add('active');
            
            // Smooth scroll to content
            moreDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            moreDetails.classList.remove('show');
            moreDetails.classList.add('hidden');
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.classList.remove('active');
        }
    }

    readMoreBtn.addEventListener('click', toggleDetails);

    // Enroll button functionality
    const enrollBtn = document.getElementById('enrollNow1');
    enrollBtn.addEventListener('click', function() {
        window.location.href = 'ICTkids.html';
    });
});



document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});




function toggleDetails() {
    const details = document.getElementById("more-details");
    details.style.display = details.style.display === "block" ? "none" : "block";
}





document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const moreDetails = button.previousElementSibling.querySelector('.more-details');
        if (moreDetails.style.display === 'none' || moreDetails.style.display === '') {
            moreDetails.style.display = 'inline';
            button.textContent = 'Read Less';
        } else {
            moreDetails.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

//arrow button


document.addEventListener('DOMContentLoaded', () => {
    // Array of programs with their details
    const programs = [
        {
            title: "Creative Minds in Action",
            description: "Our art and craft classes spark imagination and creativity, letting little hands explore colors, shapes, and endless possibilities.",
            count: "1/3"
        },
        {
            title: "Dance, Play, and Learn",
            description: "With joyful rhythms and playful movements, our dance classes promote coordination, confidence, and self-expression for every child.",
            count: "2/3"
        },
        {
            title: "Building Bright Futures",
            description: "Our language and literacy programs lay a strong foundation for effective communication and lifelong learning.",
            count: "3/3"
        }
    ];

    let currentIndex = 0; 

    
    const titleElement = document.getElementById('program-title');
    const descriptionElement = document.getElementById('program-description');
    const countElement = document.getElementById('program-count');
    const nextButton = document.getElementById('next-button');

    // Check if all required elements exist
    if (!titleElement || !descriptionElement || !countElement || !nextButton) {
        console.error("One or more elements are missing. Please check your HTML IDs.");
        return;
    }

    // Function to update the content of the box
    function updateProgramContent() {
        const program = programs[currentIndex];
        titleElement.textContent = program.title;
        descriptionElement.textContent = program.description;
        countElement.textContent = program.count;
    }

    // Add event listener to the Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % programs.length; // Loop back to the first program
        updateProgramContent();
    });

    // Initialize the first program content
    updateProgramContent();
});

// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto slide
    setInterval(nextSlide, 5000);
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

