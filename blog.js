document.querySelectorAll('nav a').forEach(link=> {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const qualification = document.getElementById('qualification').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();

  if (!name || !email || !qualification || !phone) {
    alert("Please fill in all fields.");
    event.preventDefault(); 
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const skillsList = document.getElementById('skillsList');
  if (skillsList) {
    fetch('blog.json')
      .then(response => response.json())
      .then(skills => {
        skills.forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          skillsList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error loading skills:', error);
      });
  }
});
