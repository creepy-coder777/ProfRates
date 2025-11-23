function setLanguage(lang) {
  if (lang === "HY") {
    // Keep ProfRates in English
    document.querySelector(".txt h1").textContent = "ProfRates";
    document.querySelector(".txt p").textContent = "Ադմին պորտալ";
    document.querySelector(".left > p").textContent =
      "Կառավարեք ձեր դասախոսների գնահատման հարթակը հզոր գործիքներով և վերլուծություններով։";

    document.querySelectorAll(".feature")[0].querySelector("p").childNodes[0].nodeValue =
      "Անվտանգ մուտք";
    document.querySelectorAll(".feature")[0].querySelector("span").textContent =
      "Ձեր ադմին հաշվի ձեռնարկային անվտանգության մակարդակ";

    document.querySelectorAll(".feature")[1].querySelector("p").childNodes[0].nodeValue =
      "Լրիվ վերահսկողություն";
    document.querySelectorAll(".feature")[1].querySelector("span").textContent =
      "Կառավարեք օգտատերերին, դասախոսներին և գնահատականները հեշտությամբ";

    document.querySelectorAll(".feature")[2].querySelector("p").childNodes[0].nodeValue =
      "Իրական ժամանակի վերլուծություն";
    document.querySelectorAll(".feature")[2].querySelector("span").textContent =
      "Հետևեք հարթակի ակտիվությանը և ներգրավվածությանը";

    document.querySelector(".form-container h1").textContent = "Բարի վերադարձ";
    document.querySelector(".p3").textContent = "Մուտք գործեք ձեր ադմին հաշիվ";
    document.querySelector("label[for='email']").textContent = "Էլ. հասցե";
    document.querySelector("label[for='password']").textContent = "Գաղտնաբառ";
    document.querySelector(".submit").textContent = "Մուտք";
    document.querySelector(".p1:last-of-type").innerHTML =
      "Չունե՞ք հաշիվ? <a href='sign up_eng.html' class='a1'>Գրանցվեք</a>";
  } else {
    // Reset to English
    location.reload();
  }
}
