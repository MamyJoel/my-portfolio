// Minimal contact handler: validate and open mail client via mailto.
function showAlert(container, message, type = "success") {
     if (!container) return;
     container.innerHTML = `<div class="alert alert-${type} py-2" role="alert">${message}</div>`;
}

document.addEventListener("DOMContentLoaded", function () {
     const form = document.getElementById("contactForm");
     if (!form) return;
     const nameEl = document.getElementById("contact-name");
     const emailEl = document.getElementById("contact-email");
     const messageEl = document.getElementById("contact-message");
     const alertEl = document.getElementById("form-alert");

     form.addEventListener("submit", function (e) {
          e.preventDefault();
          alertEl && (alertEl.innerHTML = "");

          const name = (nameEl.value || "").trim();
          const email = (emailEl.value || "").trim();
          const message = (messageEl.value || "").trim();

          if (name.length < 2) {
               showAlert(alertEl, "Le nom doit comporter au moins 2 caractères.", "danger");
               nameEl.focus();
               return;
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
               showAlert(alertEl, "Veuillez saisir une adresse e-mail valide.", "danger");
               emailEl.focus();
               return;
          }
          if (message.length < 10) {
               showAlert(alertEl, "Le message doit contenir au moins 10 caractères.", "danger");
               messageEl.focus();
               return;
          }

          const subject = encodeURIComponent("Message depuis le site — " + name);
          const body = encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\n" + message);
          window.location.href = `mailto:joelgeorges0901@gmail.com?subject=${subject}&body=${body}`;
     });

     const contactBtn = document.getElementById("contact-me");
     if (contactBtn)
          contactBtn.addEventListener("click", function (ev) {
               ev.preventDefault();
               document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          });
});
