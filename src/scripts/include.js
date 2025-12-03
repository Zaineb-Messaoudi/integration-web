function includeHTML() {
    document.querySelectorAll('[include-html]').forEach(el => {
        const file = el.getAttribute('include-html');
        if (!file) return;

        fetch(file)
            .then(resp => resp.text())
            .then(data => {
                el.innerHTML = data;

                if (file.includes('navbar.html')) {
                    
                    const script = document.createElement('script');

                    const isInsidePages = location.pathname.includes("/src/pages/");
                    
                    script.src = isInsidePages
                        ? "../scripts/navbar.js"
                        : "./src/scripts/navbar.js";

                    document.body.appendChild(script);
                }
            })
            .catch(err => el.innerHTML = `Could not load ${file}: ${err}`);
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
