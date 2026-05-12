function confirmBooking(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please complete all required fields.");
    return;
  }

  alert("Thank you " + name + "! Your booking has been confirmed.");
}
