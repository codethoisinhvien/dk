// ==UserScript==
// @name          Auto Watting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://dangkyhoc.vnu.edu.vn/dang-ky-mon-hoc-nganh-1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

let test = ["ENG3029 1"]
$registrationAvailable=true;
let reSuject=[];
let sum =undefined;
function searchSubject(name){
    name=name.trim();
    var rows=  document.getElementsByClassName('table table-hover table-bordered')[0];

    for(let i=0;i<rows.rows.length;i++){

     if(rows.rows[i].cells[4].innerText.trim()==name){

        if(rows.rows[i].cells[0].getElementsByTagName("input").length>0){

        let r1=rows.rows[i].cells[0].getElementsByTagName("input")[0].getAttribute("data-rowindex");
        let r2=rows.rows[i].cells[0].getElementsByTagName("input")[0].getAttribute("data-numcrd");
        let No = parseInt(rows.rows[i].cells[2].innerText.trim());

        sum+=1;
        console.log(r1)
      reSuject.push({name:name,r:r1,u:r2})

        }
    }

}
}
function fakeRegistration(sum){
    var t = "/xac-nhan-dang-ky/" + $registrationMode;
        ajaxRequest("POST", t, "json", sum, null, null, !0);
}
function addSubject(array){
    reSuject=[]
for(let i=0;i<array.length;i++){
    searchSubject(array[i]);


}
     reSuject.forEach(function(g){
        fakePending(g.r);
    })

}

function fakePending(n)
{
    var r = (new Date).getTime(), i = "", t = "/chon-mon-hoc/" + n + "/" + $registrationMode + "/" + $dsdkMod;
    return $.ajax({ type: "POST", cache: !1, async: !1, url: t, dataType: "json", success: function (n)
    {
        i = n.message;

        sendPageViewData(t)
    }, complete: function ()
    {
        var n = (new Date).getTime(), i = n - r;
        sendUserTimeCallingAjax(t, i);
        sendEventCallingAjax(t)
		console.log("complete 1" + n);
    }
                  })

}

var main = function(){
	if(sum!=undefined){
        var sum2=sum;

        addSubject(test);
        if(sum2<sum){
		fakeRegistration(sum);
        }

        sum=undefined;
    }else{
        DSDK(2);
		sum = parseInt($('.total-credit-container').text());
	}
	console.log("running")

}
$(document).ready(function() {
	setInterval(function(){
		window.location.reload()
	},150000)
	setInterval(main,2000);
})
})();