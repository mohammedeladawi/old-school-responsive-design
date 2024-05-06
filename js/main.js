const listItems = document.querySelectorAll(".product-info .tab li");

listItems.forEach((li) =>
  li.addEventListener("click", function () {
    // Remove Class Active And Them To The Clicked Button
    document
      .querySelector(".product-info .tab .active")
      .classList.remove("active");
    this.classList.add("active");

    // Remove Class Show And Add Them To The New Tab Info
    document
      .querySelector(".product-info .content .show")
      .classList.remove("show");
    document
      .querySelector(`.product-info .content .${this.dataset.class}`)
      .classList.add("show");
  })
);
