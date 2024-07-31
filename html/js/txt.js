let data;
async function getData() {
    const response = await fetch("https://v1.hitokoto.cn/?c=i&encode=text");
    data = await response.text();
    document.getElementById("cen").innerHTML = data;
    const text = document.querySelector('#cen');
    const txt  =[data]; 

    var index=0;
    var xiaBiao= 0;
    var huan = true;

    setInterval(function(){
        if(huan){      
            text.innerHTML = txt[xiaBiao].slice(0,++index);
            console.log(index);
        }
        else{
            text.innerHTML = txt[xiaBiao].slice(0,index--);
            console.log(index);
        }

        if(index==txt[xiaBiao].length+3)
        {
            huan = false;
        }
        else if(index<0)
        {
            index = 0;
            huan = true;
            xiaBiao++;
            if(xiaBiao>=txt.length)
            {
                xiaBiao=0; 
            }
        }

    },200)
}
getData();