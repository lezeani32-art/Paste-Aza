let selectedBank = "";

function openBankModal() {
  document.getElementById("bankModal").classList.add("active");
}

function closeBankModal() {
  document.getElementById("bankModal").classList.remove("active");
}

function chooseBank(bankName) {
  selectedBank = bankName;
  document.getElementById("selectedBank").innerText = bankName;
  closeBankModal();
}

function filterBanks() {
  const input = document.getElementById("bankSearch").value.toLowerCase();
  const banks = document.querySelectorAll(".bank-item");

  banks.forEach(bank => {
    const text = bank.innerText.toLowerCase();
    bank.style.display = text.includes(input) ? "flex" : "none";
  });
}
