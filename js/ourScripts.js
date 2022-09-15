const btnHD = document.querySelector(".header-button").addEventListener("click", (e => {
    e.preventDefault();
    const t = "open" != document.body.dataset.menu ? "open" : "close";
    document.body.setAttribute("data-menu", t)
  }))