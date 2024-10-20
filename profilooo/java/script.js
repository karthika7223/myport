// Form Validation and Thank You Message
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('thank-you').style.display = 'block';
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Modal for Project Details
  function openModal(projectNumber) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const link = document.getElementById('modal-link');
  
    if (projectNumber === 1) {
      title.innerText = "Project 1";
      description.innerText = "Description for project 1.";
      link.href = "https://link-to-project-1.com";
    } else if (projectNumber === 2) {
      title.innerText = "Project 2";
      description.innerText = "Description for project 2.";
      link.href = "https://link-to-project-2.com";
    } else if (projectNumber === 3) {
      title.innerText = "Project 3";
      description.innerText = "Description for project 3.";
      link.href = "https://link-to-project-3.com";
    }
  
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
  }
  
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
  }
  