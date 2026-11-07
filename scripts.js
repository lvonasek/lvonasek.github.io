function updateLayoutClass() {
  const isMobile = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isLandscape = window.innerWidth > window.innerHeight;
  document.body.classList.remove("mobile", "desktop");

  if (isMobile && !isLandscape) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.add("desktop");
  }
}

document.addEventListener("DOMContentLoaded", updateLayoutClass);
window.addEventListener("orientationchange", updateLayoutClass);
window.addEventListener("resize", updateLayoutClass);
