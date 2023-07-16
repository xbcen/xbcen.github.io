function myFunction() {
  var input, filter, ul, li, a, i, h2;
  input = document.getElementById('mySearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById('myMenu').getElementsByTagName('ul');

  for (i = 0; i < ul.length; i++) {
    li = ul[i].getElementsByTagName('li');
    h2 = ul[i].previousElementSibling;
    var visibleLiCount = 0;

    for (var j = 0; j < li.length; j++) {
      a = li[j].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[j].style.display = "";
        visibleLiCount++;
      } else {
        li[j].style.display = "none";
      }
    }

    if (visibleLiCount > 0) {
      h2.style.display = "";
    } else {
      h2.style.display = "none";
    }
  }
}
