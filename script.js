function openBankList() {
  const list = document.getElementById("bankList");
  list.style.display = list.style.display === "block" ? "none" : "block";
}

function chooseBank(bankName) {
  document.getElementById("bank").value = bankName;
  document.getElementById("selectedBankText").innerText = bankName;
  document.getElementById("bankList").style.display = "none";
}
