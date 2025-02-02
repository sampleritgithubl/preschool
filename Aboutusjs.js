document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const additionalDetails = document.querySelector(".additional-details");
  
    readMoreBtn.addEventListener("click", () => {
      if (additionalDetails.style.display === "none" || additionalDetails.style.display === "") {
        additionalDetails.style.display = "block";
        readMoreBtn.textContent = "Show Less";
      } else {
        additionalDetails.style.display = "none";
        readMoreBtn.textContent = "Read More";
      }
    });
  });
  



//buton cliked


  