function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });
  }
  
  // Galerías organizadas por proyecto
  const galleries = {
    payroll: [
      "images/index.png",
      "images/login.png",
      "images/perfiles.png",
      "images/planilla.png",
      "images/vacaciones.png"
    ],
    ml: [
      "images/analisis.png",
      "images/analisis2.png",
      "images/analisis3.png",
      "images/analisis4.png"
    ]
  };
  
  let currentGallery = [];
  let currentIndex = 0;
  
  function openGallery(project) {
    currentGallery = galleries[project];
    currentIndex = 0;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
    document.getElementById("galleryModal").style.display = "block";
  }
  
  function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
  }
  