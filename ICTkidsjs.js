function scrollToImage() {
    const formSection = document.getElementById("enrollment-section");
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: "smooth",
            block: "start" 
        });
    }
}

  

  document.getElementById('ict-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const parentName = document.getElementById('parent-name').value.trim();
    const parentEmail = document.getElementById('parent-email').value.trim();
    const parentContact = document.getElementById('parent-contact').value.trim();
    const childName = document.getElementById('child-name').value.trim();
    const parentAddress = document.getElementById('parent-address').value.trim();
    const childAge = document.getElementById('child-age').value;
  
    if (!parentName || !parentEmail || !parentContact || !childName || !parentAddress || !childAge) {
      alert('All fields are required!');
      return;
    }
  
    if (!/^[a-zA-Z ]+$/.test(parentName)) {
      alert('Parent\'s name should only contain letters.');
      return;
    }
  
    if (!/^[a-zA-Z ]+$/.test(childName)) {
      alert('Child\'s name should only contain letters.');
      return;
    }
  
    if (!/^[0-9]{10}$/.test(parentContact)) {
      alert('Contact number should be 10 digits.');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  