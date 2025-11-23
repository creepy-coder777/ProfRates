// Triggers
const openBtn = document.getElementById("open");

// Popups
const popupEmail = document.getElementById("popupEmail");
const popupCode = document.getElementById("popupCode");
const popupPassword = document.getElementById("popupPassword");

// Close icons
const closeEmail = document.getElementById("closeEmail");
const closeCode = document.getElementById("closeCode");
const closePassword = document.getElementById("closePassword");

// Action buttons
const sendLinkBtn = document.getElementById("sendLink");
const verifyCodeBtn = document.getElementById("verifyCode");
const resetPasswordBtn = document.getElementById("resetPassword");

// Inputs
const fpEmail = document.getElementById("fpEmail");
const fpCode = document.getElementById("fpCode");
const fpNewPass = document.getElementById("fpNewPass");
const fpConfirmPass = document.getElementById("fpConfirmPass");

// ✅ Allowed domain(s)
const allowedDomains = ["@uni.am"]; 
// Extend if needed: ["@uni.am", "@student.uni.am"]

// Helper: validate email domain
function validateEmailDomain(email) {
  return allowedDomains.some(domain => email.toLowerCase().endsWith(domain));
}

// --- LOGIN VALIDATION ---
const loginBtn = document.querySelector(".submit");
const loginEmail = document.querySelector(".mail");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stop default redirect
  if (!validateEmailDomain(loginEmail.value)) {
    alert("Please use your university email (example@uni.am).");
    return false;
  }
  // If valid, continue
  window.location.href = "home_eng.html";
});

// --- FORGOT PASSWORD FLOW ---
// Open first popup
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popupEmail.classList.add("open");
});

// Close handlers
closeEmail.addEventListener("click", () => popupEmail.classList.remove("open"));
closeCode.addEventListener("click", () => popupCode.classList.remove("open"));
closePassword.addEventListener("click", () => popupPassword.classList.remove("open"));

// Overlay click to close
[popupEmail, popupCode, popupPassword].forEach(popup => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.remove("open");
  });
});

// Flow: Email -> Code (with validation)
sendLinkBtn.addEventListener("click", () => {
  if (!validateEmailDomain(fpEmail.value)) {
    alert("Please enter a valid university email (e.g., example@uni.am).");
    return;
  }
  popupEmail.classList.remove("open");
  popupCode.classList.add("open");
});

// Flow: Code -> New Password
verifyCodeBtn.addEventListener("click", () => {
  const code = fpCode.value.trim();
  const codePattern = /^\d{6}$/;
  if (!codePattern.test(code)){
    alert("The verification code should be 6 sign digit.");
    return;
  }
  popupCode.classList.remove("open");
  popupPassword.classList.add("open");
});

// Final: Reset -> Alert
resetPasswordBtn.addEventListener("click", () => {
  if (fpNewPass && fpConfirmPass && fpNewPass.value !== fpConfirmPass.value) {
    alert("Passwords do not match.");
    return;
  }
  popupPassword.classList.remove("open");
  alert("Password Reset Successfully!");
});
