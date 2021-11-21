test_score_1 = 0;
test_score_2 = 0;
test_score_3 = 0;

/*if(!document.getElementById("below_three").checked | !(document.getElementById("from_three_to_four").checked) | !(document.getElementById("five_and_over").checked)) {
    window.alert("Please select your age before clicking on eyechart for the test or else, you'll face a black screen. To get out of the black screen, click anywhere and then select your age please.");
    document.getElementById("chart1").innerHTML = "<div class='modal fade' id='chart1' disabled='disabled'>";
} */

window.onload = document.getElementById("five_and_over").checked = true;

function r2() {
    document.getElementById("chart1_6").style.display = "";
    document.getElementById("chart1_7").style.display = "none";   
    document.getElementById("chart1_8").style.display = "none";   
    document.getElementById("chart3_9").style.display = "none"; 
    document.getElementById("chart3_7").style.display = ""; 
    document.getElementById("chart2_7").style.display = "none";
    document.getElementById("chart2_6").style.display = "none";
    /*document.getElementById("chart1_9").style.display = "none";   
    document.getElementById("chart1_10").style.display = "none";   
    document.getElementById("chart1_11").style.display = "none"; */
   
}

function r3() {
    document.getElementById("chart1_6").style.display = "";
    document.getElementById("chart1_7").style.display = "";
    document.getElementById("chart1_8").style.display = "";  
    document.getElementById("chart2_6").style.display = ""; 
    document.getElementById("chart2_7").style.display = ""; 
    document.getElementById("chart3_6").style.display = ""; 
    document.getElementById("chart3_7").style.display = ""; 
    document.getElementById("chart3_8").style.display = ""; 
    document.getElementById("chart3_9").style.display = ""; 
   /* document.getElementById("chart1_9").style.display = "none";   
    document.getElementById("chart1_10").style.display = "none";   
    document.getElementById("chart1_11").style.display = "none"; */
}

function submit3() {

  test_score_200 = 0;
  test_score_300 = 0;

    val21 = document.getElementById("chart3_1").value;
    val22 = document.getElementById("chart3_2").value;
    val23 = document.getElementById("chart3_3").value;
    val24 = document.getElementById("chart3_4").value;
    val25 = document.getElementById("chart3_5").value;
    val26 = document.getElementById("chart3_6").value;
    val27 = document.getElementById("chart3_7").value;
    val28 = document.getElementById("chart3_8").value;
    val29 = document.getElementById("chart3_9").value;


  if (document.getElementById("from_three_to_four").checked) {

  if (val21 == "H") {
    test_score_200 += 1;
 }
 if (val22 == "EZ") {
   test_score_200 += 1;
 }
 if (val23 == "LPOT") {
   test_score_200 += 1;
 }
 if (val24 == "DAFV") {
 test_score_200 += 1;
 }
 if (val25 == "NEUC") {
test_score_200 += 1;
 }
 if (val26 == "VACB") {
test_score_200 += 1;
 }
 if (val27 == "HLOPS") {
  test_score_200 += 1;
  }
  if (val28 == "ZFDAX") {
    test_score_200 += 1;
  }

 if (test_score_200 == 8) {
   window.alert("Your score was " + test_score_200 + " out of 8. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
}
if (test_score_200 >= 0 & test_score_200 <= 3) {
   window.alert("Your score was " + test_score_200 + " out of 8. I suggest that you consult with an ophthalmologist as soon as possible. Thank you for choosing Sharvil eye tests.");
}
if (test_score_200 >= 4 & test_score_200 <= 7) {
    window.alert("Your score was " + test_score_200 + " out of 8. Your eyesight is good however, you should take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
}
window.location.reload();
}

if (document.getElementById("five_and_over").checked) {

  if (val21 == "H") {
    test_score_300 += 1;
 }
 if (val22 == "EZ") {
   test_score_300 += 1;
 }
 if (val23 == "LPOT") {
   test_score_300 += 1;
 }
 if (val24 == "DAFV") {
 test_score_300 += 1;
 }
 if (val25 == "NEUC") {
test_score_300 += 1;
 }
 if (val26 == "VACB") {
test_score_300 += 1;
 }
 if (val27 == "HLOPS") {
  test_score_300 += 1;
  }
if (val28 == "ZFDAX") {
  test_score_300 += 1;
  }
  if (val29 == "LVECNO") {
    test_score_300 += 1;
    }

  if (test_score_300 == 9) {
    window.alert("Your score was " + test_score_300 + " out of 9. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
 }
 if (test_score_300 >= 0 & test_score_300 <= 4) {
    window.alert("Your score was " + test_score_300 + " out of 9. I suggest that you consult with an ophthalmologist as soon as possible. Thank you for choosing Sharvil eye tests.");
 }
 if (test_score_300 >= 5 & test_score_300 <= 8) {
     window.alert("Your score was " + test_score_300 + " out of 9. You should really take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
 }
window.location.reload();
}

}

function submit2() {

  test_score_20 = 0;
  test_score_30 = 0;

  val11 = document.getElementById("chart2_1").value;
  val12 = document.getElementById("chart2_2").value;
  val13 = document.getElementById("chart2_3").value;
  val14 = document.getElementById("chart2_4").value;
  val15 = document.getElementById("chart2_5").value;
  val16 = document.getElementById("chart2_6").value;
  val17 = document.getElementById("chart2_7").value;


  if (document.getElementById("from_three_to_four").checked) {

  if (val11 == "TZ") {
    test_score_20 += 1;
 }
 if (val12 == "PTOC") {
   test_score_20 += 1;
 }
 if (val13 == "ZLPED") {
   test_score_20 += 1;
 }
 if (val14 == "ETODCF") {
 test_score_20 += 1;
 }
 if (val15 == "DPCZLFT") {
test_score_20 += 1;
 }

 if (test_score_20 == 5) {
   window.alert("Your score was " + test_score_20 + " out of 5. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
}
if (test_score_20 >= 0 & test_score_20 <= 2) {
   window.alert("Your score was " + test_score_20 + " out of 5. I suggest that you consult with an ophthalmologist as soon as possible. Thank you for choosing Sharvil eye tests.");
}
if (test_score_20 >= 3 & test_score_20 <= 4) {
    window.alert("Your score was " + test_score_20 + " out of 5. Your eyesight is good however, you should take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
}
window.location.reload();
}

if (document.getElementById("five_and_over").checked) {

  if (val11 == "TZ") {
    test_score_30 += 1;
 }
 if (val12 == "PTOC") {
   test_score_30 += 1;
 }
 if (val13 == "ZLPED") {
   test_score_30 += 1;
 }
 if (val14 == "ETODCF") {
 test_score_30 += 1;
 }
 if (val15 == "DPCZLFT") {
test_score_30 += 1;
 }
 if (val16 == "CFDTEOPL") {
test_score_30 += 1;
 }
 if (val17 == "LDCZOTEP") {
  test_score_30 += 1;
  }

  if (test_score_30 == 7) {
    window.alert("Your score was " + test_score_30 + " out of 7. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
 }
 if (test_score_30 >= 0 & test_score_30 <= 3) {
    window.alert("Your score was " + test_score_30 + " out of 7. I suggest that you consult with an ophthalmologist as soon as possible.Thank you for choosing Sharvil eye tests.");
 }
 if (test_score_30 >= 4 & test_score_30 <= 6) {
     window.alert("Your score was " + test_score_30 + " out of 7. You should really take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
 }
window.location.reload();
}

}
 
function submit1() 
{
    test_score_2 = 0;
    test_score_3 = 0;

    val1 = document.getElementById("chart1_1").value;
    val2 = document.getElementById("chart1_2").value;
    val3 = document.getElementById("chart1_3").value;
    val4 = document.getElementById("chart1_4").value;
    val5 = document.getElementById("chart1_5").value;
    val6 = document.getElementById("chart1_6").value;
    val7 = document.getElementById("chart1_7").value;
    val8 = document.getElementById("chart1_8").value;

  /*  val9 = document.getElementById("chart1_9").value;
    val10 = document.getElementById("chart1_10").value;
    val11 = document.getElementById("chart1_11").value; */
    
  if (document.getElementById("from_three_to_four").checked) 
  {
    
      if(val1 == "E"){
        test_score_2 += 1;
     } 
     if(val2 == "FP"){
        test_score_2 += 1;
    } 
    if(val3 == "TOZ"){
        test_score_2 += 1;
    } 
    if(val4 == "LPED"){
        test_score_2 += 1;
    } 
    if(val5 == "PECFD"){
        test_score_2 += 1;
    } 
    if(val6 == "EDFCZP"){
        test_score_2 += 1;
    }

  if (test_score_2 == 6) {
     window.alert("Your score was " + test_score_2 + " out of 6. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
  }
  if (test_score_2 >= 0 & test_score_2 <= 2) {
     window.alert("Your score was " + test_score_2 + " out of 6. I suggest that you consult with an ophthalmologist as soon as possible. Thank you for choosing Sharvil eye tests.");
  }
  if (test_score_2 >= 3 & test_score_2 <= 5) {
      window.alert("Your score was " + test_score_2 + " out of 6. Your eyesight is good however, you should take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
  }

}

if (document.getElementById("five_and_over").checked) 
{
  
    if(val1 == "E"){
      test_score_3 += 1;
   } 
   if(val2 == "FP"){
    test_score_3 += 1;
  } 
  if(val3 == "TOZ"){
    test_score_3 += 1;
  } 
  if(val4 == "LPED"){
    test_score_3 += 1;
  } 
  if(val5 == "PECFD"){
    test_score_3 += 1;
  } 
  if(val6 == "EDFCZP"){
    test_score_3 += 1;
  }
  if(val7 == "FELOPZD"){
    test_score_3 += 1;
  }
  if (val8 == "DEFPOTEC") {
    test_score_3 += 1;
  }
if (test_score_3 == 8) {
   window.alert("Your score was " + test_score_3 + " out of 8. Therefore, your eye health is very good. Although, remember it's always good to have a break from screen from time-to-time. Thank you for choosing Sharvil eye tests."); 
}
if (test_score_3 >= 0 & test_score_3 <= 3) {
   window.alert("Your score was " + test_score_3 + " out of 8. I suggest that you consult with an ophthalmologist as soon as possible. Thank you for choosing Sharvil eye tests.");
}
if (test_score_3 >= 4 & test_score_3 <= 7) {
    window.alert("Your score was " + test_score_3 + " out of 8. You should really take a break for some time or rest you eyes for now. Thank you for choosing Sharvil eye tests.");
}

}

for (i=1;i<9;i++)
{
    ValId="chart1_"+i;
    document.getElementById(ValId).value="";
} 


}
 


function test() {
  
  test_score_vision_acuity = 0;

 if (document.getElementById("one").checked) {
  test_score_vision_acuity += 1;
 }

if (document.getElementById("one_two").checked) {
  test_score_vision_acuity += 1;
}

if (document.getElementById("one_three").checked) {
  test_score_vision_acuity += 1;
}

if (document.getElementById("one_four").checked) {
  test_score_vision_acuity += 1;
}

if (test_score_vision_acuity < 2) {
   window.alert("Your score was " + test_score_vision_acuity + " out of 4. You should definitely have a break and then try this test again or else consult with an opthalmologist to check your eyesight. Thank you for choosing Sharvil eye tests.");
} else {
  window.alert("Your score was " + test_score_vision_acuity + " out of 4. Good job, this proves that your eyesight is great and healthy, however don't forget to take breaks from a screen from time-to-time. Thank you for choosing Sharvil eye tests.");
}
window.location.reload();
}

function store() {
    name = document.getElementById("name").value;
    console.log("Name = " + name);
    comment = document.getElementById("comment").value;
    console.log("Comment = " + comment);
}