function includeHTML() {
  document.querySelectorAll('[include-html]').forEach(el => {
    const file = el.getAttribute('include-html');
    if (!file) return;

    // Resolve the full path relative to the current HTML page
    const pageDir = window.location.pathname.substring(
      0,
      window.location.pathname.lastIndexOf('/') + 1
    );
    const fullPath = new URL(file, window.location.origin + pageDir).href;

    fetch(fullPath)
      .then(resp => {
        if (!resp.ok) throw new Error(`${resp.status} ${resp.statusText}`);
        return resp.text();
      })
      .then(data => {
        el.innerHTML = data;

        if (file.includes('navbar.html')) {
          const script = document.createElement('script');
          // Dynamically determine path to navbar.js
          const isInsidePages = window.location.pathname.includes("/src/pages/");
          script.src = isInsidePages
            ? "../scripts/navbar.js"
            : "./src/scripts/navbar.js";
          document.body.appendChild(script);
        }
      })
      .catch(err => {
        el.innerHTML = `Could not load ${file}: ${err}`;
        console.error(`Could not load ${file}: ${err}`);
      });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
