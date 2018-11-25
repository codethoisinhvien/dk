/*
thêm
xóa ;
gửi xác nhận
check môn full 
*/
let test=["FLF1606 1","MAT1078 4","HIS1002 6","PES1017 32 (TH)","PES1005 18"]

$registrationAvailable=true;

let reSuject=[];
$registrationAvailable=true;
let sum =0;
function searchSubject(name){
    name=name.trim();
    var rows=  document.getElementsByClassName('table table-hover table-bordered')[0];
	
    for(let i=0;i<rows.rows.length;i++){
		console.log(rows.rows[i].cells[4].innerText.trim())
     if(rows.rows[i].cells[4].innerText.trim()==name){
        
        if(rows.rows[i].cells[0].getElementsByTagName("input").length>0){
  
        let r1=rows.rows[i].cells[0].getElementsByTagName("input")[0].getAttribute("data-rowindex");
        let r2=rows.rows[i].cells[0].getElementsByTagName("input")[0].getAttribute("data-numcrd");
        let No = parseInt(rows.rows[i].cells[2].innerText.trim());
		
        sum+=No;
        console.log(r1)
      reSuject.push({name:name,r:r1,u:r2})
     
        }
    }
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
}
 //searchSubject(PES1017 32 (<b>TH</b>) 
}
function addSubject(array){
for(let i=0;i<array.length;i++){
    searchSubject(array[i]);
    reSuject.forEach(function(g){
        fakePending(g.r);
    })
}
}
function fakeRegistration(sum){
    var t = "/xac-nhan-dang-ky/" + $registrationMode;
        ajaxRequest("POST", t, "json", sum, null, null, !0);
}
function fakePending(n)
{
    var r = (new Date).getTime(), i = "", t = "/chon-mon-hoc/" + n + "/" + $registrationMode + "/" + $dsdkMod;
    return $.ajax({ type: "POST", cache: !1, async: !1, url: t, dataType: "json", success: function (n)
    {
        i = n.message;
        console.log(i);
        sendPageViewData(t)
    }, complete: function ()
    {
        var n = (new Date).getTime(), i = n - r;
        sendUserTimeCallingAjax(t, i);
        sendEventCallingAjax(t)
    }
                  })
                 
}


   //addSubject(test);
 //fakeRegistration();
  console.log(reSuject)
  console.log(sum);
  //$(".sel-dsdk-mod").change()