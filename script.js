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

// ✅ Թույլատրելի դոմեյն(ներ)
const allowedDomains = ["@uni.am"]; 
// Կարող եք ավելացնել նաև այլ տարբերակներ՝ ["@uni.am", "@student.uni.am"]

// Օգնական՝ ստուգել էլ. փոստի դոմեյնը
function validateEmailDomain(email) {
  return allowedDomains.some(domain => email.toLowerCase().endsWith(domain));
}

// --- Մուտք (Login) ստուգում ---
const loginBtn = document.querySelector(".submit");
const loginEmail = document.querySelector(".mail");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // կանգնեցնել ուղղակի վերուղղումը
  if (!validateEmailDomain(loginEmail.value)) {
    alert("Խնդրում ենք օգտագործել համալսարանի էլ. փոստը (օր.` example@uni.am)։");
    return false;
  }
  // Եթե ճիշտ է, շարունակել
  window.location.href = "home_arm.html";
});

// --- Մոռացված գաղտնաբառի հոսք ---
// Բացել առաջին popup-ը
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popupEmail.classList.add("open");
});

// Փակելու հոսքեր
closeEmail.addEventListener("click", () => popupEmail.classList.remove("open"));
closeCode.addEventListener("click", () => popupCode.classList.remove("open"));
closePassword.addEventListener("click", () => popupPassword.classList.remove("open"));

// Սեղմել overlay՝ փակելու համար
[popupEmail, popupCode, popupPassword].forEach(popup => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.remove("open");
  });
});

// Հոսք՝ Էլ. փոստ -> Կոդ (ստուգմամբ)
sendLinkBtn.addEventListener("click", () => {
  if (!validateEmailDomain(fpEmail.value)) {
    alert("Խնդրում ենք մուտքագրել համալսարանի ճիշտ էլ. փոստ (օր.` example@uni.am)։");
    return;
  }
  popupEmail.classList.remove("open");
  popupCode.classList.add("open");
});

// Հոսք՝ Կոդ -> Նոր գաղտնաբառ
verifyCodeBtn.addEventListener("click", () => {
  const code = fpCode.value.trim();

  const codePattern = /^\d{6}$/;
  if (!codePattern.test(code)) {
    alert("Վավերացման կոդը պետք է լինի 6 նիշանոց թվային։");
    return;
  }
  // Կարող եք ստուգել՝ fpCode.length === 6
  popupCode.classList.remove("open");
  popupPassword.classList.add("open");
});

// Վերջնական՝ Վերականգնում -> Alert
resetPasswordBtn.addEventListener("click", () => {
  if (fpNewPass && fpConfirmPass && fpNewPass.value !== fpConfirmPass.value) {
    alert("Գաղտնաբառերը չեն համընկնում։");
    return;
  }
  popupPassword.classList.remove("open");
  alert("Գաղտնաբառը հաջողությամբ վերականգնվեց!");
});
