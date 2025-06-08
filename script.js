  document.getElementById('contactForm').onsubmit = function(event) {
    let name = this.name.value.trim();
    let email = this.email.value.trim();
    let phone = this['phone.no'].value.trim();
    let message = this.message.value.trim();

    if (name === "") {
      alert("Please enter your name.");
      this.name.focus();
      event.preventDefault();
      return false;
    }

    if (email === "") {
      alert("Please enter your email.");
      this.email.focus();
      event.preventDefault();
      return false;
    }

    if (phone === "" || isNaN(phone)) {
      alert("Please enter a valid phone number.");
      this['phone.no'].focus();
      event.preventDefault();
      return false;
    }

    if (message === "") {
      alert("Please enter your message.");
      this.message.focus();
      event.preventDefault();
      return false;
    }
  };
document.getElementById("add-image").addEventListener("click", function () {
  const imageUrl = document.getElementById("image-url").value.trim();

  if (imageUrl === "") {
    alert("Please enter an image URL.");
    return;
  }
  const img = new Image();
  img.src = imageUrl;
  img.alt = "User Added Image";

  img.onload = () => {
    document.getElementById("gallery").appendChild(img);
    document.getElementById("image-url").value = ""; // Clear input
  };

  img.onerror = () => {
    alert("Invalid image URL or the image failed to load.");
  };
});