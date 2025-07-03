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

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.project').forEach(project => {
      const tags = project.getAttribute('data-tags').split(' ');
      if (filter === 'all' || tags.includes(filter)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});


