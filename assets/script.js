var form=document.querySelector("form"),
    resultOutput=document.querySelector("#result"),
    input=document.querySelector('input[type="text"]');

    input.addEventListener("focus",function(){input.classList.add("active")}),
    input.addEventListener("blur",function(){input.value||input.classList.remove("active")}),
    input.addEventListener("input",function(){resultOutput.value="",resultOutput.classList.remove("active"),input.value&&(input.value=input.value.replace(/[^0-1]+/g,""))}),

    form.addEventListener("submit",function(t){t.preventDefault(),input.blur();for(var e=input.value.split("").reverse(),u=0,n=0;n<e.length;n++)0!=e[n]&&(u+=e[n]*Math.pow(2,n));resultOutput.classList.add("active"),resultOutput.value=u});