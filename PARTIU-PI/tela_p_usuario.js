
    const photoInput = document.getElementById("photoInput");
    const profilePreview = document.getElementById("profilePreview");

    photoInput.addEventListener("change", function(){
      const file = this.files[0];
      if(file){
        profilePreview.src = URL.createObjectURL(file);
      }
    });