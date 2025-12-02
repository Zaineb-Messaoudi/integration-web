const btn = document.getElementById('mobile-menu-button');
const sidebar = document.getElementById('mobile-sidebar');
const overlay = document.getElementById('mobile-sidebar-overlay');
const hamburger = btn.querySelector('.hamburger-icon');
const closeBtn = btn.querySelector('.close-icon');

function openMenu() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    hamburger.classList.add('hidden');
    closeBtn.classList.remove('hidden');
}

function closeMenu() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    hamburger.classList.remove('hidden');
    closeBtn.classList.add('hidden');
}

btn.addEventListener('click', () => {
    if (sidebar.classList.contains('-translate-x-full')) openMenu();
    else closeMenu();
});
overlay.addEventListener('click', closeMenu);
document.querySelectorAll('#mobile-sidebar a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });


// =======================
// USER PROFILE DROPDOWN (Desktop Only)
// =======================

const profileBtn = document.getElementById("profile-button");
const dropdown = document.getElementById("profile-dropdown");

// Toggle dropdown on desktop only
profileBtn.addEventListener("click", (event) => {
    if (window.innerWidth >= 1024) { // lg breakpoint in Tailwind
        event.stopPropagation(); // Prevent closing immediately
        dropdown.classList.toggle("hidden");
    }
});

// Close dropdown when clicking outside (desktop only)
document.addEventListener("click", (event) => {
    if (window.innerWidth >= 1024) {
        if (!profileBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add("hidden");
        }
    }
});

// Close dropdown with ESC (desktop only)
document.addEventListener("keydown", (event) => {
    if (window.innerWidth >= 1024 && event.key === "Escape") {
        dropdown.classList.add("hidden");
    }
});
