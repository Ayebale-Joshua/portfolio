// Project Data Store for Modal Pop-ups
const projectData = {
    "bp-monitor": {
        title: "Wearable Blood Pressure Monitor",
        status: "In Progress",
        statusClass: "in-progress",
        problem: "Traditional medical blood pressure monitors lack real-time portable tracking and automated alert triggers for vulnerable patients.",
        solution: "An embedded system prototype integrating biomedical sensors with microcontroller logic for continuous, portable health tracking.",
        features: "Sensor-based hardware feedback, automated data logging, and low-power microcontroller deployment.",
        ctaText: "Inquire on WhatsApp",
        ctaLink: "https://wa.me/+256784778551?text=I%20would%20like%20to%20inquire%20about%20the%20Wearable%20Blood%20Pressure%20Monitor"
    },
    "jcore-platform": {
        title: "J-Core Labs Active Platform",
        status: "Deployed",
        statusClass: "deployed",
        problem: "Students and local clients lack an accessible, unified hub for professional campus tech support, data recovery, and IT engineering solutions.",
        solution: "An actively running web production platform built for J-Core Labs, streamlining service bookings and client outreach.",
        features: "Responsive web layout, service catalog integration, direct client contact flow, and active technical resource catalogs.",
        ctaText: "Visit Live Site",
        ctaLink: "https://jcorelabs.example.com"
    },
    "emergency-app": {
        title: "Emergency Book Mobile App",
        status: "Deployed",
        statusClass: "deployed",
        problem: "Crucial emergency contacts and life-saving guides are difficult to access quickly during offline or high-stress situations.",
        solution: "A cross-platform mobile contact application engineered using Python, Kivy framework, and an embedded SQLite3 database.",
        features: "Optimized mobile UI layout, local lightweight storage, and instant offline retrieval of critical communication channels.",
        ctaText: "View GitHub Repo",
        ctaLink: "#github"
    },
    "accom-portal": {
        title: "Accommodation Portal",
        status: "Deployed",
        statusClass: "deployed",
        problem: "University students struggle to find reliable housing and hostel information aggregated in one convenient digital platform.",
        solution: "A responsive web platform built with HTML5, CSS3, and JavaScript to aggregate and display rental listings.",
        features: "Mobile-optimized search experience for students looking for housing on the go.",
        ctaText: "Visit Portal",
        ctaLink: "#github"
    },
    "village-saving": {
        title: "Village Saving System",
        status: "Deployed",
        statusClass: "deployed",
        problem: "Rural saving groups manually balance books and ledgers, creating high risk for human calculation error and record loss.",
        solution: "A Python and Kivy application automating financial calculations with encrypted local data storage and cloud sync.",
        features: "Encrypted transaction ledgers and offline-first functionality with secure cloud synchronization.",
        ctaText: "View Project",
        ctaLink: "#github"
    },
    "style-sanctuary": {
        title: "Style Sanctuary Boutique",
        status: "Deployed",
        statusClass: "deployed",
        problem: "Small businesses in Hoima City lacked an effective digital storefront to showcase and market products online.",
        solution: "A responsive e-commerce web interface enabling customers to browse inventory and connect directly with sellers.",
        features: "Product catalog categorization, clean responsive grid layouts, and fast mobile loading times.",
        ctaText: "Visit Store",
        ctaLink: "#site"
    }
};

// Modal Functions
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];

    if (project) {
        modalBody.innerHTML = `
            <div class="modal-body-inner">
                <span class="modal-status ${project.statusClass}">${project.status}</span>
                <h3>${project.title}</h3>
                <p><strong>Problem:</strong> ${project.problem}</p>
                <p><strong>Solution:</strong> ${project.solution}</p>
                <p><strong>Key Features:</strong> ${project.features}</p>
                <div class="modal-actions">
                    <a href="${project.ctaLink}" target="_blank" class="btn-action visit">${project.ctaText}</a>
                </div>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside the modal content box
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    //  Automatic Theme Syncing with System Preferences
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    applyTheme(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', (e) => {
        applyTheme(e.matches);
    });

    // Dynamic Scroll Reveal & Progress Bar Animation (Intersection Observer API)
    const revealSections = document.querySelectorAll('.reveal-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Trigger progress bars animation when skills section comes into view
                const bars = entry.target.querySelectorAll('.progress-fill');
                bars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-target');
                    bar.style.width = targetWidth;
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealSections.forEach(section => {
        sectionObserver.observe(section);
    });
});