document.querySelector('.btn-contact').onclick = function() {
    const name = document.querySelector('.input-box[name="name"]').value;
    const email = document.querySelector('.input-box[name="email"]').value;
    const message = document.querySelector('.message-box').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 

    if (!name || !email || !message) {
        alert("All fields must be filled out.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
   
};

