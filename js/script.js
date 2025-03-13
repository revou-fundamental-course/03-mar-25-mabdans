// Log that JS is working
console.log('JS is Working');

// Scroll to top on page load
window.onload = function () {
    window.scrollTo(0, 0);
    setTimeout(replaceName, 100); // Delay to ensure scroll works properly
};

// Function to Replace Name
function replaceName() {
    let name = prompt("Hello, what's your name?", "");

    // Default name if empty
    if (!name) {
        name = "USER";
    }

    document.getElementById("name").innerHTML = name.toUpperCase();

    // Scroll to top after setting the name
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
}


// Responsive Navbar Toggle Function
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a');
    
    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('nav-open');
        mainNav.classList.toggle('nav-closed');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('nav-open');
            mainNav.classList.add('nav-closed');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('nav-open')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('nav-open');
            mainNav.classList.add('nav-closed');
        }
    });
});


// Banner slideshow functionality
let bannerIndex = 0;
const banners = document.querySelectorAll('.banner-img');
const totalBanners = banners.length;

// Function to show banner with fade effect
function showBanner() {
    banners.forEach((banner, index) => {
        banner.style.opacity = index === bannerIndex ? "1" : "0";
    });
}

// Function to change to next banner
function nextBanner() {
    bannerIndex = (bannerIndex + 1) % totalBanners;
    showBanner();
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
    showBanner();
    setInterval(nextBanner, 3000); // Auto-slide every 3 seconds
    
    // Apply fade-in class to message title
    const messageTitle = document.querySelector("#message-header-title");
    if (messageTitle) {
        messageTitle.classList.add("fade-in-message-title");
    }
    
    // Check for elements in viewport initially
    handleScroll();
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100 && rect.bottom >= 0;
}

// Function to handle scroll event and apply fade-in effect
function handleScroll() {
    const messageTitle = document.querySelector("#message-header-title");
    if (messageTitle && isInViewport(messageTitle)) {
        messageTitle.classList.add("visible");
    }
}

// Listen for scroll event
window.addEventListener("scroll", handleScroll);

// Function to Validate Form
function validateForm() {
    const fullName = document.getElementById('fullname').value;
    const birthDate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const messages = document.getElementById("messages").value;

    if (fullName === "" || birthDate === "" || !gender || messages === "") {
        alert("Please fill in all fields");
        return false;
    } else {
        const currentTime = new Date();
        const genderValue = gender.value;
        displayMessage(fullName, birthDate, genderValue, messages, currentTime);
        
        // Optional: Clear form after submission
        // document.getElementById('contact-form').reset();
        
        return true;
    }
}

// Function to Display Current Message
function displayMessage(name, birthDate, gender, message, timestamp) {
    document.getElementById("sender-full-name").textContent = name;
    document.getElementById("sender-birth-date").textContent = birthDate;
    document.getElementById("sender-gender").textContent = gender;
    document.getElementById("sender-messages").textContent = message;

    // Format date: "12 Mar 2025, 14:30"
    const formattedTime = timestamp.toLocaleString('en-GB', { 
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    document.getElementById("sender-timestamp").textContent = formattedTime;
    
    // Add animation effect to the message card
    const messageCard = document.querySelector('.message-card');
    messageCard.style.animation = 'none';
    setTimeout(() => {
        messageCard.style.animation = 'messageFadeIn 0.5s ease-out';
    }, 10);
}

// Add this to your existing CSS
function addMessageAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes messageFadeIn {
            from { opacity: 0.6; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .message-card {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Call this function when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    addMessageAnimationCSS();
    
    // Apply fade-in class to message title
    const messageTitle = document.querySelector("#message-header-title");
    if (messageTitle) {
        messageTitle.classList.add("fade-in-message-title");
    }
    
    // Check for elements in viewport initially
    handleScroll();
});