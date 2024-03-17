/**
 Örnek-1.1: Toplama,çıkarma,çarpma ve bölme Jacascript işlevleri burada tutulur.
 */
/* İki sayının toplamını bulur. */
 function topla(){
	 var biriciSayi = +document.getElementById("input-1").value ;
	 var ikinciSayi = +document.getElementById("input-2").value ; 
	 var toplam;
	 
	 toplam = biriciSayi + ikinciSayi ; 
	 document.getElementById("p-1").innerHTML = toplam ; 
 }
 
 /* İlk sayıdan ikinci sayıyı çıkarır. */
 function cikar(){
	 var biriciSayi = +document.getElementById("input-1").value ;
	 var ikinciSayi = +document.getElementById("input-2").value ; 
	 var fark;
	 
	 fark = biriciSayi - ikinciSayi ; 
	 document.getElementById("p-1").innerHTML = fark ; 
 }
 
 /* İki sayıyı çarpar. */
 function carp(){
	 var biriciSayi = +document.getElementById("input-1").value ;
	 var ikinciSayi = +document.getElementById("input-2").value ; 
	 var carpim;
	 
	 carpim = biriciSayi * ikinciSayi ; 
	 document.getElementById("p-1").innerHTML = carpim ; 
 }
 
 /* İlk sayıyı, ikinci sayıya böler */
 function bol(){
	 var biriciSayi = +document.getElementById("input-1").value ;
	 var ikinciSayi = +document.getElementById("input-2").value ; 
	 var bolum;
	 
	 bolum = biriciSayi / ikinciSayi ; 
	 document.getElementById("p-1").innerHTML = bolum ; 
 }
 /* Kutuların içeriğini temizler. */
 function temizle(){
	 document.getElementById("input-1").innerText = "";
	 document.getElementById("input-1").innerText = "";
	 document.getElementById("p-1").innerHTML = "Sonuç burada gösterilecek..";
 }
