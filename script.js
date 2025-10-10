const pdfURL = "./ABDUL_MUKSITH_VM_19052001.pdf";
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
  // 📱 Auto download on mobile devices
  window.location.href = pdfURL;
  document.body.innerHTML = `
    <div class="download-msg">
      <h2>📄 Your resume is downloading...</h2>
      <p>If it doesn’t start automatically, 
      <a href="${pdfURL}" download>click here to download</a>.</p>
    </div>
  `;
} else {
  // 💻 Show PDF inline on desktop
  const embed = document.createElement("embed");
  embed.src = pdfURL;
  embed.type = "application/pdf";
  embed.className = "pdf-viewer";
  document.body.appendChild(embed);

  // Add a Download button
  const button = document.createElement("button");
  button.className = "download-btn";
  button.textContent = "⬇️ Download Resume";
  button.onclick = () => {
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "ABDUL_MUKSITH_VM_Resume.pdf";
    link.click();
  };
  document.body.appendChild(button);

  // Hide loader when PDF loads
  embed.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
    embed.style.display = "block";
    // Fade in button
    setTimeout(() => button.classList.add("show"), 300);
  });

  // Fallback after 5s if no load event
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    embed.style.display = "block";
    button.classList.add("show");
  }, 5000);
}
