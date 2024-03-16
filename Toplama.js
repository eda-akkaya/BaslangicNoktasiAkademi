/**
 Örnek-1: Toplama, Jacascript işlevleri burada tutulur.
 */

 function topla(){
	 var biriciSayi = +document.getElementById("input-1").value ;
	 var ikinciSayi = +document.getElementById("input-2").value ; 
	 var toplam;
	 
	 toplam = biriciSayi + ikinciSayi ; 
	 document.getElementById("p-1").innerHTML = toplam ; 
 }
