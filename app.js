
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        // Demo only: this is not secure authentication.
        if (email.trim() !== "" && password.length >= 4) {
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "home.html";
        } else {
            message.textContent =
                "Please enter a valid email and a password of at least 4 characters.";
        }
    });
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Register the service worker for offline support.
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js")
            .then(function () {
                console.log("Service worker registered.");
            })
            .catch(function (error) {
                console.error("Service worker registration failed:", error);
            });
    });
}
