// ==UserScript==
// @name         AutoLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://dangkyhoc.vnu.edu.vn/dang-nhap
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
    var useName=""// điền usename
var passWord=""// điền passWord
$('#LoginName').val(useName);
$('#Password').val(passWord);
document.getElementsByClassName('btn btn-success')[0].click();

    });
    

})();