event.preventDefault();
        const target = event.target.getAttribute("href");
        const offsetTop = document.querySelector(target).offsetTop;

        window.scroll({
          top: offsetTop,
          behavior: "smooth"
});
    