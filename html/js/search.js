document.getElementById('mySearch').addEventListener('keyup', function () {
    var input, filter, ul, li, a, i, h2;
    input = document.getElementById('mySearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myMenu').getElementsByTagName('ul');

    for (i = 0; i < ul.length; i++) {
        li = ul[i].getElementsByTagName('li');
        h2 = ul[i].previousElementSibling;
        var hasVisibleChild = false;

        for (var j = 0; j < li.length; j++) {
            a = li[j].getElementsByTagName('a')[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[j].style.display = "";
                hasVisibleChild = true;
            } else {
                li[j].style.display = "none";
            }
        }

        if (hasVisibleChild) {
            if (h2) { 
                h2.style.display = ""; 
            }
            ul[i].style.display = ""; 
        } else {
            if (h2) { 
                h2.style.display = "none";
            }
            ul[i].style.display = "none"; 
        }
    }
});
