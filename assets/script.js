"use strict";
const message = document.querySelector(".message");

const emailAddress = document.querySelector(".email-address");

const newsteller = document.querySelector(".newsteller");

newsteller.addEventListener("click", () => {
  if (!emailAddress.value.includes("@" && ".com")) {
    message.classList.remove("hidden");
    emailAddress.style.border = "1px solid hsl(4, 100%, 67%)";
    emailAddress.style.backgroundColor = "hsl(4, 100%, 90%)";
    emailAddress.style.color = "hsl(4, 100%, 67%)";
  } else {
    document.querySelector("main").classList.add("hidden");
    document.querySelector(".success").classList.remove("hidden");
  }
});

document.querySelector(".dismiss").addEventListener("click", () => {
  document.querySelector("main").classList.remove("hidden");
  document.querySelector(".success").classList.add("hidden");
  emailAddress.value = "";
  1;
  emailAddress.style.border = "";
  emailAddress.style.backgroundColor = "";
  emailAddress.style.color = "";
});
