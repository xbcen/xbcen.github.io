document.getElementById("mySearch").addEventListener("keyup", function () {
  const filter = this.value.toUpperCase();
  const ulElements = document
    .getElementById("myMenu")
    .getElementsByTagName("ul");

  for (let i = 0; i < ulElements.length; i++) {
    const liElements = ulElements[i].getElementsByTagName("li");
    const h2 = ulElements[i].previousElementSibling;
    let hasVisibleChild = false;

    for (let j = 0; j < liElements.length; j++) {
      const a = liElements[j].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().includes(filter)) {
        liElements[j].style.display = "";
        hasVisibleChild = true;
      } else {
        liElements[j].style.display = "none";
      }
    }

    ulElements[i].style.display = hasVisibleChild ? "" : "none";
    if (h2) {
      h2.style.display = hasVisibleChild ? "" : "none";
    }
  }
});