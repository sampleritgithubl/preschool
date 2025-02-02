const learnMoreBtn = document.getElementById("learnMoreBtn");
const extraDetails = document.getElementById("extraDetails");


learnMoreBtn.addEventListener("click", () => {
    if (extraDetails.classList.contains("hidden")) {
        
        extraDetails.classList.remove("hidden");
        learnMoreBtn.textContent = "Show Less";
    } else {
       
        extraDetails.classList.add("hidden");
        learnMoreBtn.textContent = "Learn More";
    }
});





let currentSection = 0;
const sections = [
    'Parents, your active involvement is one of the greatest gifts you can give your child during these formative years. At our preschool, we encourage you to engage with your child's daily experiences, whether it's asking about their day, participating in special events, or exploring their favorite activities at home.',
    'Your support not only strengthens their confidence but also deepens their curiosity and enthusiasm for learning. Together, we can create a strong foundation that will inspire them to embrace challenges, foster friendships, and develop a lifelong love for learning.',
];

function navigate(direction) {
    currentSection += direction;
    if (currentSection < 0) currentSection = sections.length - 1;
    if (currentSection >= sections.length) currentSection = 0;

    document.querySelector('.message-content p').innerText = sections[currentSection];
}

// Add smooth scroll functionality
function scrollToClasses() {
    const extraDetails = document.getElementById('extraDetails');
    if (extraDetails) {
        extraDetails.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add visible class to show the details
        extraDetails.classList.add('visible');
    }
}