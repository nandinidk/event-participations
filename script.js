document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let usn = document.getElementById("usn").value;
  let email = document.getElementById("email").value;
  let event = document.getElementById("event").value;

  let participant = { name, usn, email };

  let list = JSON.parse(localStorage.getItem(event)) || [];
  list.push(participant);
  localStorage.setItem(event, JSON.stringify(list));

  alert("Registration Successful!");
  document.getElementById("regForm").reset();
});
