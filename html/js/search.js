function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  var uls = ul.getElementsByTagName("ul");
  for (i = 0; i < uls.length; i++) {
    var visibleLiCount = 0;
    var lis = uls[i].getElementsByTagName("li");
    for (var j = 0; j < lis.length; j++) {
      if (lis[j].style.display != "none") {
        visibleLiCount++;
      }
    }
    if (visibleLiCount > 0) {
      uls[i].previousElementSibling.style.display = "";
    } else {
      uls[i].previousElementSibling.style.display = "none";
    }
  }
}
