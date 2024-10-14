// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Read More functionality
function toggleReadMore() {
    const moreText = document.getElementById("more");
    const btn = document.getElementById("readMoreBtn");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Show the extra text
        btn.textContent = "Read Less"; // Change button text
    } else {
        moreText.style.display = "none"; // Hide the extra text
        btn.textContent = "Read More"; // Change button text
    }
}

// Popup functions
function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function showPopup2() {
    document.getElementById("popup2").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup2() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
