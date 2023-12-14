const resizeIframe = () => {
  const iframes = document.querySelectorAll(".grid-item iframe");
  iframes.forEach(iframe => {
    // Dynamically calculate height based on graph content
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  });
};

window.addEventListener("load", resizeIframe);
window.addEventListener("resize", resizeIframe);

