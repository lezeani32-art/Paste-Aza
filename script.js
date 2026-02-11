function saveData() {
  const sender = document.getElementById("sender").value;
  const receiver = document.getElementById("receiver").value;
  const amount = document.getElementById("amount").value;

  localStorage.setItem("sender", sender);
  localStorage.setItem("receiver", receiver);
  localStorage.setItem("amount", amount);

  window.location.href = "confirm.html";
}

function goToReceipt() {
  window.location.href = "receipt.html";
}

window.onload = function () {
  if (document.getElementById("details")) {
    document.getElementById("details").innerHTML =
      "Sender: " + localStorage.getItem("sender") + "<br>" +
      "Receiver: " + localStorage.getItem("receiver") + "<br>" +
      "Amount: ₦" + localStorage.getItem("amount");
  }

  if (document.getElementById("receipt")) {
    document.getElementById("receipt").innerHTML =
      "₦" + localStorage.getItem("amount") +
      " was sent from " +
      localStorage.getElementById;
  }
};
