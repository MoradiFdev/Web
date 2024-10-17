﻿let sendtoPDF = document.getElementById('sendtoPDF');
let numbering = document.getElementById('numbering');
let clearall = document.getElementById('clearall');
let qtable = document.querySelector('.questionstable');
let qlist = document.querySelector('.questionlist-table');
let qtablewrapper = document.querySelector('.qtable-wrapper');
let testgradecontent=document.querySelector('.testgradecontent');
let insertallquestions = document.getElementById('insertallquestions');
let bottommain=document.querySelector(".bottommain");
let headerIcon=document.querySelector(".header_icon");
let headerIconi=document.querySelector(".header_icon i");
let sidemenu=document.querySelector(".side-menu");
let menutimesbtn=document.querySelector(".menu-timesbtn");
let aboutbtn=document.querySelector(".aboutbtn");
let contactbtn=document.querySelector(".contactbtn");
let instructionbtn=document.querySelector(".instructionbtn");
let btntext=document.querySelector(".btntext");
let about=document.querySelector(".about");
let contact=document.querySelector(".contact");
let instruction=document.querySelector(".instruction");
let chapter=document.querySelectorAll(".chapter");
let gradesbtn=document.querySelectorAll(".gradesbtn");
let questionlistwrapper=document.querySelector(".questionlist-wrapper");
let book=document.querySelectorAll(".book");
let npages=document.querySelector('.npagesvalue');
let inputwrapper=document.querySelectorAll('.inputwrapper');
let inputs=document.querySelectorAll('.inputs');
let selectedgrade=document.querySelector('.selectedgrade');
let selectedbook=document.querySelector('.selectedbook');
let selectedchapter=document.querySelector('.selectedchapter');
let dropdownwrapper=document.querySelectorAll('.dropdown-wrapper');

let mathsource = [[[
    //کتاب ریاضی هفتم
    //فصل اول
    './images/7/ch1/1.png',
    './images/7/ch1/2.png',
    './images/7/ch1/3.png',
    './images/7/ch1/4.png',
    './images/7/ch1/5.png',
    './images/7/ch1/6.png',
    './images/7/ch1/7.png',
    './images/7/ch1/8.png',
    './images/7/ch1/9.png',
    './images/7/ch1/10.png',
    './images/7/ch1/11.png',
    './images/7/ch1/12.png',
    './images/7/ch1/13.png',
    './images/7/ch1/14.png',
    './images/7/ch1/15.png',
    './images/7/ch1/16.png',
    './images/7/ch1/17.png',
    './images/7/ch1/18.png',
    './images/7/ch1/19.png',
    './images/7/ch1/20.png',
    './images/7/ch1/21.png',
    './images/7/ch1/22.png',
    './images/7/ch1/23.png',
    './images/7/ch1/24.png',
    './images/7/ch1/25.png',
    './images/7/ch1/26.png',
    './images/7/ch1/27.png',
    './images/7/ch1/28.png',
    './images/7/ch1/29.png',
    './images/7/ch1/30.png',], //ch1 is completed
[   //فصل دوم
    './images/7/ch2/1.png',
    './images/7/ch2/2.png',
    './images/7/ch2/3.png',
    './images/7/ch2/4.png',
    './images/7/ch2/5.png',
    './images/7/ch2/6.png',
    './images/7/ch2/7.png',
    './images/7/ch2/8.png',
    './images/7/ch2/9.png',
    './images/7/ch2/10.png',
    './images/7/ch2/11.png',
    './images/7/ch2/12.png',
    './images/7/ch2/13.png',
    './images/7/ch2/14.png',
    './images/7/ch2/15.png',
    './images/7/ch2/16.png',
    './images/7/ch2/17.png',
    './images/7/ch2/18.png',
    './images/7/ch2/19.png',
    './images/7/ch2/20.png',
    './images/7/ch2/21.png',
    './images/7/ch2/22.png',
    './images/7/ch2/23.png',
    './images/7/ch2/24.png',
    './images/7/ch2/25.png',
    './images/7/ch2/26.png',
    './images/7/ch2/27.png',
    './images/7/ch2/28.png',
    './images/7/ch2/29.png',
    './images/7/ch2/30.png',
    './images/7/ch2/31.png',
    './images/7/ch2/32.png',
    './images/7/ch2/33.png',
    './images/7/ch2/34.png',
    './images/7/ch2/35.png',
    './images/7/ch2/36.png',
    './images/7/ch2/37.png',
    './images/7/ch2/38.png',
    './images/7/ch2/39.png',
    './images/7/ch2/40.png',
    './images/7/ch2/41.png',
    './images/7/ch2/42.png',
    './images/7/ch2/43.png',
    './images/7/ch2/44.png',
    './images/7/ch2/45.png',
    './images/7/ch2/46.png',
    './images/7/ch2/47.png',
    './images/7/ch2/48.png',
    './images/7/ch2/49.png',
    './images/7/ch2/50.png',], //ch2 is completed
[   //فصل سوم
    './images/7/ch3/1.png',
    './images/7/ch3/2.png',
    './images/7/ch3/3.png',
    './images/7/ch3/4.png',
    './images/7/ch3/5.png',
    './images/7/ch3/6.png',
    './images/7/ch3/7.png',
    './images/7/ch3/8.png',
    './images/7/ch3/9.png',
    './images/7/ch3/10.png',
    './images/7/ch3/11.png',
    './images/7/ch3/12.png',
    './images/7/ch3/13.png',
    './images/7/ch3/14.png',
    './images/7/ch3/15.png',
    './images/7/ch3/16.png',
    './images/7/ch3/17.png',
    './images/7/ch3/18.png',
    './images/7/ch3/19.png',
    './images/7/ch3/20.png',
    './images/7/ch3/21.png',
    './images/7/ch3/22.png',
    './images/7/ch3/23.png',
    './images/7/ch3/24.png',
    './images/7/ch3/25.png',
    './images/7/ch3/26.png',
    './images/7/ch3/27.png',
    './images/7/ch3/28.png',
    './images/7/ch3/29.png',
    './images/7/ch3/30.png',
    './images/7/ch3/31.png',
    './images/7/ch3/32.png',
    './images/7/ch3/33.png',
    './images/7/ch3/34.png',
    './images/7/ch3/35.png',
    './images/7/ch3/36.png',
    './images/7/ch3/37.png',
    './images/7/ch3/38.png',
    './images/7/ch3/39.png',
    './images/7/ch3/40.png',
    './images/7/ch3/41.png',
    './images/7/ch3/42.png',
    './images/7/ch3/43.png',
    './images/7/ch3/44.png',
    './images/7/ch3/45.png',
    './images/7/ch3/46.png',
    './images/7/ch3/47.png',
    './images/7/ch3/48.png',
    './images/7/ch3/49.png',
    './images/7/ch3/50.png',
    './images/7/ch3/51.png',
    './images/7/ch3/52.png',
    './images/7/ch3/53.png',
    './images/7/ch3/54.png',
    './images/7/ch3/55.png',], //ch3 is completed
    [//فصل چهارم
    './images/7/ch4/1.png',    
    './images/7/ch4/2.png',    
    './images/7/ch4/3.png',    
    './images/7/ch4/4.png',    
    './images/7/ch4/5.png',    
    './images/7/ch4/6.png',    
    './images/7/ch4/7.png',    
    './images/7/ch4/8.png',    
    './images/7/ch4/9.png',    
    './images/7/ch4/10.png',    
    './images/7/ch4/11.png',    
    './images/7/ch4/12.png',    
    './images/7/ch4/13.png',    
    './images/7/ch4/14.png',    
    './images/7/ch4/15.png',    
    './images/7/ch4/16.png',    
    './images/7/ch4/17.png',    
    './images/7/ch4/18.png',    
    './images/7/ch4/19.png',    
    './images/7/ch4/20.png',    
    './images/7/ch4/21.png',    
    './images/7/ch4/22.png',    
    './images/7/ch4/23.png',    
    './images/7/ch4/24.png',    
    './images/7/ch4/25.png',    
    './images/7/ch4/26.png',    
    './images/7/ch4/27.png',    
    './images/7/ch4/28.png',    
    './images/7/ch4/29.png',    
    './images/7/ch4/30.png',    
    './images/7/ch4/31.png',    
    './images/7/ch4/32.png',    
    './images/7/ch4/33.png',    
    './images/7/ch4/34.png',], // ch4 is completed
    [//فصل پنجم
    './images/7/ch5/1.png',    
    './images/7/ch5/2.png',    
    './images/7/ch5/3.png',    
    './images/7/ch5/4.png',    
    './images/7/ch5/5.png',    
    './images/7/ch5/6.png',    
    './images/7/ch5/7.png',    
    './images/7/ch5/8.png',    
    './images/7/ch5/9.png',    
    './images/7/ch5/10.png',    
    './images/7/ch5/11.png',    
    './images/7/ch5/12.png',    
    './images/7/ch5/13.png',    
    './images/7/ch5/14.png',    
    './images/7/ch5/15.png',    
    './images/7/ch5/16.png',    
    './images/7/ch5/17.png',    
    './images/7/ch5/18.png',    
    './images/7/ch5/19.png',    
    './images/7/ch5/20.png',    
    './images/7/ch5/21.png',    
    './images/7/ch5/22.png',    
    './images/7/ch5/23.png',    
    './images/7/ch5/24.png',    
    './images/7/ch5/25.png',    
    './images/7/ch5/26.png',    
    './images/7/ch5/27.png',    
    './images/7/ch5/28.png',    
    './images/7/ch5/29.png',    
    './images/7/ch5/30.png',    
    './images/7/ch5/31.png',    
    './images/7/ch5/32.png',    
    './images/7/ch5/33.png',    
    './images/7/ch5/34.png',    
    './images/7/ch5/35.png',    
    './images/7/ch5/36.png',    
    './images/7/ch5/37.png',    
    './images/7/ch5/38.png',    
    './images/7/ch5/39.png',    
    './images/7/ch5/40.png',    
    './images/7/ch5/41.png',    
    './images/7/ch5/42.png',    
    './images/7/ch5/43.png',    
    './images/7/ch5/44.png',    
    './images/7/ch5/45.png',    
    './images/7/ch5/46.png',    
    './images/7/ch5/47.png',    
    './images/7/ch5/48.png',    
    './images/7/ch5/49.png',    
    './images/7/ch5/50.png',    
    './images/7/ch5/51.png',    
    './images/7/ch5/52.png',    
    './images/7/ch5/53.png',    
    './images/7/ch5/54.png',], //ch5 is completed
    [//فصل ششم
    './images/7/ch6/1.png',   
    './images/7/ch6/2.png',   
    './images/7/ch6/3.png',   
    './images/7/ch6/4.png',   
    './images/7/ch6/5.png',   
    './images/7/ch6/6.png',   
    './images/7/ch6/7.png',   
    './images/7/ch6/8.png',   
    './images/7/ch6/9.png',   
    './images/7/ch6/10.png',   
    './images/7/ch6/11.png',   
    './images/7/ch6/12.png',   
    './images/7/ch6/13.png',   
    './images/7/ch6/14.png',   
    './images/7/ch6/15.png',   
    './images/7/ch6/16.png',   
    './images/7/ch6/17.png',   
    './images/7/ch6/18.png',   
    './images/7/ch6/19.png',   
    './images/7/ch6/20.png',   
    './images/7/ch6/21.png',   
    './images/7/ch6/22.png',   
    './images/7/ch6/23.png',   
    './images/7/ch6/24.png',   
    './images/7/ch6/25.png',   
    './images/7/ch6/26.png',   
    './images/7/ch6/27.png',   
    './images/7/ch6/28.png',   
    './images/7/ch6/29.png',   
    './images/7/ch6/30.png',   
    './images/7/ch6/31.png',   
    './images/7/ch6/32.png',   
    './images/7/ch6/33.png',   
    './images/7/ch6/34.png',   
    './images/7/ch6/35.png',   
    './images/7/ch6/36.png',   
    './images/7/ch6/37.png',   
    './images/7/ch6/38.png',   
    './images/7/ch6/39.png',   
    './images/7/ch6/40.png',   
    './images/7/ch6/41.png',   
    './images/7/ch6/42.png',   
    './images/7/ch6/43.png',   
    './images/7/ch6/44.png',   
    './images/7/ch6/45.png',   
    './images/7/ch6/46.png',], //ch6 is completed
    [//فصل هفتم
    './images/7/ch7/1.png',    
    './images/7/ch7/2.png',    
    './images/7/ch7/3.png',    
    './images/7/ch7/4.png',    
    './images/7/ch7/5.png',    
    './images/7/ch7/6.png',    
    './images/7/ch7/7.png',    
    './images/7/ch7/8.png',    
    './images/7/ch7/9.png',    
    './images/7/ch7/10.png',    
    './images/7/ch7/11.png',    
    './images/7/ch7/12.png',    
    './images/7/ch7/13.png',    
    './images/7/ch7/14.png',    
    './images/7/ch7/15.png',    
    './images/7/ch7/16.png',    
    './images/7/ch7/17.png',    
    './images/7/ch7/18.png',    
    './images/7/ch7/19.png',    
    './images/7/ch7/20.png',    
    './images/7/ch7/21.png',    
    './images/7/ch7/22.png',    
    './images/7/ch7/23.png',    
    './images/7/ch7/24.png',    
    './images/7/ch7/25.png',    
    './images/7/ch7/26.png',    
    './images/7/ch7/27.png',    
    './images/7/ch7/28.png',    
    './images/7/ch7/29.png',    
    './images/7/ch7/30.png',    
    './images/7/ch7/31.png',    
    './images/7/ch7/32.png',    
    './images/7/ch7/33.png',    
    './images/7/ch7/34.png',    
    './images/7/ch7/35.png',    
    './images/7/ch7/36.png',    
    './images/7/ch7/37.png',    
    './images/7/ch7/38.png',    
    './images/7/ch7/39.png',    
    './images/7/ch7/40.png',    
    './images/7/ch7/41.png',    
    './images/7/ch7/42.png',    
    './images/7/ch7/43.png',    
    './images/7/ch7/44.png',    
    './images/7/ch7/45.png',    
    './images/7/ch7/46.png',    
    './images/7/ch7/47.png',    
    './images/7/ch7/48.png',    
    './images/7/ch7/49.png',], //ch7 is completed. 
    [//فصل هشتم
    './images/7/ch8/1.png',
    './images/7/ch8/2.png',
    './images/7/ch8/3.png',
    './images/7/ch8/4.png',
    './images/7/ch8/5.png',
    './images/7/ch8/6.png',
    './images/7/ch8/7.png',
    './images/7/ch8/8.png',
    './images/7/ch8/9.png',
    './images/7/ch8/10.png',
    './images/7/ch8/11.png',
    './images/7/ch8/12.png',
    './images/7/ch8/13.png',
    './images/7/ch8/14.png',
    './images/7/ch8/15.png',
    './images/7/ch8/16.png',
    './images/7/ch8/17.png',
    './images/7/ch8/18.png',
    './images/7/ch8/19.png',
    './images/7/ch8/20.png',
    './images/7/ch8/21.png',
    './images/7/ch8/22.png',
    './images/7/ch8/23.png',
    './images/7/ch8/24.png',
    './images/7/ch8/25.png',
    './images/7/ch8/26.png',
    './images/7/ch8/27.png',
    './images/7/ch8/28.png',
    './images/7/ch8/29.png',
    './images/7/ch8/30.png',
    './images/7/ch8/31.png',
    './images/7/ch8/32.png',
    './images/7/ch8/33.png',
    './images/7/ch8/34.png',
    './images/7/ch8/35.png',], //ch8 is completed.
 [//فصل نهم
    './images/7/ch9/1.png', 
    './images/7/ch9/2.png', 
    './images/7/ch9/3.png', 
    './images/7/ch9/4.png', 
    './images/7/ch9/5.png', 
    './images/7/ch9/6.png', 
    './images/7/ch9/7.png', 
    './images/7/ch9/8.png', 
    './images/7/ch9/9.png', 
    './images/7/ch9/10.png', 
    './images/7/ch9/11.png', 
    './images/7/ch9/12.png', 
    './images/7/ch9/13.png', 
    './images/7/ch9/14.png', 
    './images/7/ch9/15.png', 
    './images/7/ch9/16.png', 
    './images/7/ch9/17.png', 
    './images/7/ch9/18.png', 
    './images/7/ch9/19.png', 
    './images/7/ch9/20.png', 
    './images/7/ch9/21.png', 
    './images/7/ch9/22.png',] //ch9 is completed.
    ],//پایان کتاب هفتم
[
    //کتاب ریاضی هشتم
    [  //فصل اول
    './images/8/ch1/1.png',
    './images/8/ch1/2.png',
    './images/8/ch1/3.png',
    './images/8/ch1/4.png',
    './images/8/ch1/5.png',
    './images/8/ch1/6.png',
    './images/8/ch1/7.png',
    './images/8/ch1/8.png',
    './images/8/ch1/9.png',
    './images/8/ch1/10.png',
    './images/8/ch1/11.png',
    './images/8/ch1/12.png',
    './images/8/ch1/13.png',
    './images/8/ch1/14.png',
    './images/8/ch1/15.png',
    './images/8/ch1/16.png',
    './images/8/ch1/17.png',
    './images/8/ch1/18.png',
    './images/8/ch1/19.png',
    './images/8/ch1/20.png',
    './images/8/ch1/21.png',
    './images/8/ch1/22.png',
    './images/8/ch1/23.png',
    './images/8/ch1/24.png',
    './images/8/ch1/25.png',
    './images/8/ch1/26.png',
    './images/8/ch1/27.png',
    './images/8/ch1/28.png',
    './images/8/ch1/29.png',
    './images/8/ch1/30.png',
    './images/8/ch1/31.png',
    './images/8/ch1/32.png',
    './images/8/ch1/33.png',
    './images/8/ch1/34.png',
    './images/8/ch1/35.png',
    './images/8/ch1/36.png',
    './images/8/ch1/37.png',
    './images/8/ch1/38.png',
    './images/8/ch1/39.png',
    './images/8/ch1/40.png',
    './images/8/ch1/41.png',
    './images/8/ch1/42.png',
    './images/8/ch1/43.png',
    './images/8/ch1/44.png',
    './images/8/ch1/45.png',
    './images/8/ch1/46.png',
    './images/8/ch1/47.png',
    './images/8/ch1/48.png',
    './images/8/ch1/49.png',
    './images/8/ch1/50.png',
    './images/8/ch1/51.png',
    './images/8/ch1/52.png',], //ch1 is completed
    [//فصل دوم
    './images/8/ch2/1.png',
    './images/8/ch2/2.png',
    './images/8/ch2/3.png',
    './images/8/ch2/4.png',
    './images/8/ch2/5.png',
    './images/8/ch2/6.png',
    './images/8/ch2/7.png',
    './images/8/ch2/8.png',
    './images/8/ch2/9.png',
    './images/8/ch2/10.png',
    './images/8/ch2/11.png',
    './images/8/ch2/12.png',
    './images/8/ch2/13.png',
    './images/8/ch2/14.png',
    './images/8/ch2/15.png',
    './images/8/ch2/16.png',
    './images/8/ch2/17.png',
    './images/8/ch2/18.png',
    './images/8/ch2/19.png',], //ch2 is completed
    [//فصل سوم
    './images/8/ch3/1.png',
    './images/8/ch3/2.png',
    './images/8/ch3/3.png',
    './images/8/ch3/4.png',
    './images/8/ch3/5.png',
    './images/8/ch3/6.png',
    './images/8/ch3/7.png',
    './images/8/ch3/8.png',
    './images/8/ch3/9.png',
    './images/8/ch3/10.png',
    './images/8/ch3/11.png',
    './images/8/ch3/12.png',
    './images/8/ch3/13.png',
    './images/8/ch3/14.png',
    './images/8/ch3/15.png',
    './images/8/ch3/16.png',
    './images/8/ch3/17.png',
    './images/8/ch3/18.png',
    './images/8/ch3/19.png',
    './images/8/ch3/20.png',
    './images/8/ch3/21.png',
    './images/8/ch3/22.png',
    './images/8/ch3/23.png',
    './images/8/ch3/24.png',
    './images/8/ch3/25.png',
    './images/8/ch3/26.png',
    './images/8/ch3/27.png',
    './images/8/ch3/28.png',
    './images/8/ch3/29.png',
    './images/8/ch3/30.png',
    './images/8/ch3/31.png',
    './images/8/ch3/32.png',
    './images/8/ch3/33.png',
    './images/8/ch3/34.png',
    './images/8/ch3/35.png',
    './images/8/ch3/36.png',
    './images/8/ch3/37.png',
    './images/8/ch3/38.png',
    './images/8/ch3/39.png',
    './images/8/ch3/40.png',], //ch3 is completed
    [//فصل چهارم
    './images/8/ch4/1.png',  
    './images/8/ch4/2.png',  
    './images/8/ch4/3.png',  
    './images/8/ch4/4.png',  
    './images/8/ch4/5.png',  
    './images/8/ch4/6.png',  
    './images/8/ch4/7.png',  
    './images/8/ch4/8.png',  
    './images/8/ch4/9.png',  
    './images/8/ch4/10.png',  
    './images/8/ch4/11.png',  
    './images/8/ch4/12.png',  
    './images/8/ch4/13.png',  
    './images/8/ch4/14.png',  
    './images/8/ch4/15.png',  
    './images/8/ch4/16.png',  
    './images/8/ch4/17.png',  
    './images/8/ch4/18.png',  
    './images/8/ch4/19.png',  
    './images/8/ch4/20.png',  
    './images/8/ch4/21.png',  
    './images/8/ch4/22.png',  
    './images/8/ch4/23.png',  
    './images/8/ch4/24.png',  
    './images/8/ch4/25.png',  
    './images/8/ch4/26.png',  
    './images/8/ch4/27.png',  
    './images/8/ch4/28.png',  
    './images/8/ch4/29.png',  
    './images/8/ch4/30.png',  
    './images/8/ch4/31.png',  
    './images/8/ch4/32.png',  
    './images/8/ch4/33.png',  
    './images/8/ch4/34.png',  
    './images/8/ch4/35.png',  
    './images/8/ch4/36.png',  
    './images/8/ch4/37.png',  
    './images/8/ch4/38.png',  
    './images/8/ch4/39.png',  
    './images/8/ch4/40.png',  
    './images/8/ch4/41.png',  
    './images/8/ch4/42.png',  
    './images/8/ch4/43.png',  
    './images/8/ch4/44.png',  
    './images/8/ch4/45.png',  
    './images/8/ch4/46.png',  
    './images/8/ch4/47.png',  
    './images/8/ch4/48.png',  
    './images/8/ch4/49.png',  
    './images/8/ch4/50.png',  
    './images/8/ch4/51.png',  
    './images/8/ch4/52.png',  
    './images/8/ch4/53.png',  
    './images/8/ch4/54.png',  
    './images/8/ch4/55.png',  
    './images/8/ch4/56.png',  
    './images/8/ch4/57.png',  
    './images/8/ch4/58.png',  
    './images/8/ch4/59.png',  
    './images/8/ch4/60.png',  
    './images/8/ch4/61.png',  
    './images/8/ch4/62.png',], //ch4 is completed
    [//فصل پنجم
    './images/8/ch5/1.png',
    './images/8/ch5/2.png',
    './images/8/ch5/3.png',
    './images/8/ch5/4.png',
    './images/8/ch5/5.png',
    './images/8/ch5/6.png',
    './images/8/ch5/7.png',
    './images/8/ch5/8.png',
    './images/8/ch5/9.png',
    './images/8/ch5/10.png',
    './images/8/ch5/11.png',
    './images/8/ch5/12.png',
    './images/8/ch5/13.png',
    './images/8/ch5/14.png',
    './images/8/ch5/15.png',
    './images/8/ch5/16.png',
    './images/8/ch5/17.png',
    './images/8/ch5/18.png',
    './images/8/ch5/19.png',
    './images/8/ch5/20.png',
    './images/8/ch5/21.png',
    './images/8/ch5/22.png',
    './images/8/ch5/23.png',
    './images/8/ch5/24.png',
    './images/8/ch5/25.png',
    './images/8/ch5/26.png',
    './images/8/ch5/27.png',
    './images/8/ch5/28.png',
    './images/8/ch5/29.png',
    './images/8/ch5/30.png',
    './images/8/ch5/31.png',
    './images/8/ch5/32.png',
    './images/8/ch5/33.png',
    './images/8/ch5/34.png',
    './images/8/ch5/35.png',
    './images/8/ch5/36.png',], //ch5 is completed
    [//فصل ششم
    './images/8/ch6/1.png',
    './images/8/ch6/2.png',
    './images/8/ch6/3.png',
    './images/8/ch6/4.png',
    './images/8/ch6/5.png',
    './images/8/ch6/6.png',
    './images/8/ch6/7.png',
    './images/8/ch6/8.png',
    './images/8/ch6/9.png',
    './images/8/ch6/10.png',
    './images/8/ch6/11.png',
    './images/8/ch6/12.png',
    './images/8/ch6/13.png',
    './images/8/ch6/14.png',
    './images/8/ch6/15.png',
    './images/8/ch6/16.png',
    './images/8/ch6/17.png',
    './images/8/ch6/18.png',
    './images/8/ch6/19.png',], //ch6 is completed.
    [//فصل هفتم
    './images/8/ch7/1.png',  
    './images/8/ch7/2.png',  
    './images/8/ch7/3.png',  
    './images/8/ch7/4.png',  
    './images/8/ch7/5.png',  
    './images/8/ch7/6.png',  
    './images/8/ch7/7.png',  
    './images/8/ch7/8.png',  
    './images/8/ch7/9.png',  
    './images/8/ch7/10.png',  
    './images/8/ch7/11.png',  
    './images/8/ch7/12.png',  
    './images/8/ch7/13.png',  
    './images/8/ch7/14.png',  
    './images/8/ch7/15.png',  
    './images/8/ch7/16.png',  
    './images/8/ch7/17.png',  
    './images/8/ch7/18.png',  
    './images/8/ch7/19.png',  
    './images/8/ch7/20.png',  
    './images/8/ch7/21.png',  
    './images/8/ch7/22.png',  
    './images/8/ch7/23.png',  
    './images/8/ch7/24.png',  
    './images/8/ch7/25.png',  
    './images/8/ch7/26.png',  
    './images/8/ch7/27.png',  
    './images/8/ch7/28.png',  
    './images/8/ch7/29.png',  
    './images/8/ch7/30.png',  
    './images/8/ch7/31.png',  
    './images/8/ch7/32.png',  
    './images/8/ch7/33.png',
    './images/8/ch7/34.png',
    './images/8/ch7/35.png',
    './images/8/ch7/36.png',
    './images/8/ch7/37.png',
    './images/8/ch7/38.png',
    './images/8/ch7/39.png',
    './images/8/ch7/40.png',
    './images/8/ch7/41.png',
    './images/8/ch7/42.png',
    './images/8/ch7/43.png',
    './images/8/ch7/44.png',
    './images/8/ch7/45.png',
    './images/8/ch7/46.png',
    './images/8/ch7/47.png',], //ch7 is completed.
     [//فصل هشتم
    './images/8/ch8/1.png',
    './images/8/ch8/2.png',
    './images/8/ch8/3.png',
    './images/8/ch8/4.png',
    './images/8/ch8/5.png',
    './images/8/ch8/6.png',
    './images/8/ch8/7.png',
    './images/8/ch8/8.png',
    './images/8/ch8/9.png',
    './images/8/ch8/10.png',
    './images/8/ch8/11.png',
    './images/8/ch8/12.png',
    './images/8/ch8/13.png',
    './images/8/ch8/14.png',
    './images/8/ch8/15.png',
    './images/8/ch8/16.png',
    './images/8/ch8/17.png',
    './images/8/ch8/18.png',
    './images/8/ch8/19.png',
    './images/8/ch8/20.png',], //ch8 is completed.
     [//فصل نهم
    './images/8/ch9/1.png',
    './images/8/ch9/2.png',
    './images/8/ch9/3.png',
    './images/8/ch9/4.png',
    './images/8/ch9/5.png',
    './images/8/ch9/6.png',
    './images/8/ch9/7.png',
    './images/8/ch9/8.png',
    './images/8/ch9/9.png',
    './images/8/ch9/10.png',
    './images/8/ch9/11.png',
    './images/8/ch9/12.png',
    './images/8/ch9/13.png',
    './images/8/ch9/14.png',
    './images/8/ch9/15.png',
    './images/8/ch9/16.png',
    './images/8/ch9/17.png',
    './images/8/ch9/18.png',
    './images/8/ch9/19.png',
    './images/8/ch9/20.png',
    './images/8/ch9/21.png',
    './images/8/ch9/22.png',
    './images/8/ch9/23.png',
    './images/8/ch9/24.png',
    './images/8/ch9/25.png',] //ch9 is completed.
], // پایان کتاب ریاضی هشتم

    //آغاز کتاب ریاضی نهم
[[  //فصل اول
    './images/9/ch1/1.png',
    './images/9/ch1/2.png', 
    './images/9/ch1/3.png',
    './images/9/ch1/4.png',
    './images/9/ch1/5.png', 
    './images/9/ch1/6.png', 
    './images/9/ch1/7.png', 
    './images/9/ch1/8.png', 
    './images/9/ch1/9.png', 
    './images/9/ch1/10.png', 
    './images/9/ch1/11.png', 
    './images/9/ch1/12.png', 
    './images/9/ch1/13.png', 
    './images/9/ch1/14.png', 
    './images/9/ch1/15.png', 
    './images/9/ch1/16.png', 
    './images/9/ch1/17.png', 
    './images/9/ch1/18.png', 
    './images/9/ch1/19.png', 
    './images/9/ch1/20.png', 
    './images/9/ch1/21.png', 
    './images/9/ch1/22.png', 
    './images/9/ch1/23.png', 
    './images/9/ch1/24.png', 
    './images/9/ch1/25.png', 
    './images/9/ch1/26.png', 
    './images/9/ch1/27.png', 
    './images/9/ch1/28.png', 
    './images/9/ch1/29.png', 
    './images/9/ch1/30.png', 
    './images/9/ch1/31.png', 
    './images/9/ch1/32.png', 
    './images/9/ch1/33.png', 
    './images/9/ch1/34.png', 
    './images/9/ch1/35.png',], //ch1 is completed
    [//فصل دوم
    './images/9/ch2/1.png',
    './images/9/ch2/2.png',
    './images/9/ch2/3.png',
    './images/9/ch2/4.png',
    './images/9/ch2/5.png',
    './images/9/ch2/6.png',
    './images/9/ch2/7.png',
    './images/9/ch2/8.png',
    './images/9/ch2/9.png',
    './images/9/ch2/10.png',
    './images/9/ch2/11.png',
    './images/9/ch2/12.png',
    './images/9/ch2/13.png',
    './images/9/ch2/14.png',
    './images/9/ch2/15.png',
    './images/9/ch2/16.png',
    './images/9/ch2/17.png',
    './images/9/ch2/18.png',
    './images/9/ch2/19.png',
    './images/9/ch2/20.png',
    './images/9/ch2/21.png',
    './images/9/ch2/22.png',
    './images/9/ch2/23.png',
    './images/9/ch2/24.png',
    './images/9/ch2/25.png',
    './images/9/ch2/26.png',
    './images/9/ch2/27.png',
    './images/9/ch2/28.png',
    './images/9/ch2/29.png',
    './images/9/ch2/30.png',
    './images/9/ch2/31.png',
    './images/9/ch2/32.png',
    './images/9/ch2/33.png',
    './images/9/ch2/34.png',
    './images/9/ch2/35.png',
    './images/9/ch2/36.png',
    './images/9/ch2/37.png',
    './images/9/ch2/38.png',
    './images/9/ch2/39.png',
    './images/9/ch2/40.png',], //ch2 is completed
    [//فصل سوم
    './images/9/ch3/1.png',
    './images/9/ch3/2.png',
    './images/9/ch3/3.png',
    './images/9/ch3/4.png',
    './images/9/ch3/5.png',
    './images/9/ch3/6.png',
    './images/9/ch3/7.png',
    './images/9/ch3/8.png',
    './images/9/ch3/9.png',
    './images/9/ch3/10.png',
    './images/9/ch3/11.png',
    './images/9/ch3/12.png',
    './images/9/ch3/13.png',
    './images/9/ch3/14.png',
    './images/9/ch3/15.png',
    './images/9/ch3/16.png',
    './images/9/ch3/17.png',
    './images/9/ch3/18.png',
    './images/9/ch3/19.png',
    './images/9/ch3/20.png',
    './images/9/ch3/21.png',
    './images/9/ch3/22.png',
    './images/9/ch3/23.png',
    './images/9/ch3/24.png',
    './images/9/ch3/25.png',
    './images/9/ch3/26.png',
    './images/9/ch3/27.png',
    './images/9/ch3/28.png',
    './images/9/ch3/29.png',
    './images/9/ch3/30.png',
    './images/9/ch3/31.png',
    './images/9/ch3/32.png',
    './images/9/ch3/33.png',
    './images/9/ch3/34.png',
    './images/9/ch3/35.png',], //ch3 is completed
    [//فصل چهارم
    './images/9/ch4/1.png',  
    './images/9/ch4/2.png',  
    './images/9/ch4/3.png',  
    './images/9/ch4/4.png',  
    './images/9/ch4/5.png',  
    './images/9/ch4/6.png',  
    './images/9/ch4/7.png',  
    './images/9/ch4/8.png',  
    './images/9/ch4/9.png',  
    './images/9/ch4/10.png',  
    './images/9/ch4/11.png',  
    './images/9/ch4/12.png',  
    './images/9/ch4/13.png',  
    './images/9/ch4/14.png',  
    './images/9/ch4/15.png',  
    './images/9/ch4/16.png',  
    './images/9/ch4/17.png',  
    './images/9/ch4/18.png',  
    './images/9/ch4/19.png',  
    './images/9/ch4/20.png',  
    './images/9/ch4/21.png',  
    './images/9/ch4/22.png',  
    './images/9/ch4/23.png',  
    './images/9/ch4/24.png',  
    './images/9/ch4/25.png',  
    './images/9/ch4/26.png',  
    './images/9/ch4/27.png',  
    './images/9/ch4/28.png',  
    './images/9/ch4/29.png',  
    './images/9/ch4/30.png',  
    './images/9/ch4/31.png',  
    './images/9/ch4/32.png',  
    './images/9/ch4/33.png',  
    './images/9/ch4/34.png',  
    './images/9/ch4/35.png',  
    './images/9/ch4/36.png',  
    './images/9/ch4/37.png',  
    './images/9/ch4/38.png',  
    './images/9/ch4/39.png',  
    './images/9/ch4/40.png',  
    './images/9/ch4/41.png',  
    './images/9/ch4/42.png',  
    './images/9/ch4/43.png',  
    './images/9/ch4/44.png',  
    './images/9/ch4/45.png',  
    './images/9/ch4/46.png',], //ch4 is completed
    [//فصل پنجم
    './images/9/ch5/1.png',
    './images/9/ch5/2.png',
    './images/9/ch5/3.png',
    './images/9/ch5/4.png',
    './images/9/ch5/5.png',
    './images/9/ch5/6.png',
    './images/9/ch5/7.png',
    './images/9/ch5/8.png',
    './images/9/ch5/9.png',
    './images/9/ch5/10.png',
    './images/9/ch5/11.png',
    './images/9/ch5/12.png',
    './images/9/ch5/13.png',
    './images/9/ch5/14.png',
    './images/9/ch5/15.png',
    './images/9/ch5/16.png',
    './images/9/ch5/17.png',
    './images/9/ch5/18.png',
    './images/9/ch5/19.png',
    './images/9/ch5/20.png',
    './images/9/ch5/21.png',
    './images/9/ch5/22.png',
    './images/9/ch5/23.png',
    './images/9/ch5/24.png',
    './images/9/ch5/25.png',
    './images/9/ch5/26.png',
    './images/9/ch5/27.png',
    './images/9/ch5/28.png',
    './images/9/ch5/29.png',
    './images/9/ch5/30.png',
    './images/9/ch5/31.png',
    './images/9/ch5/32.png', 
    './images/9/ch5/33.png', 
    './images/9/ch5/34.png', 
    './images/9/ch5/35.png', 
    './images/9/ch5/36.png', 
    './images/9/ch5/37.png', 
    './images/9/ch5/38.png', 
    './images/9/ch5/39.png', 
    './images/9/ch5/40.png', 
    './images/9/ch5/41.png', 
    './images/9/ch5/42.png', 
    './images/9/ch5/43.png', 
    './images/9/ch5/44.png', 
    './images/9/ch5/45.png', 
    './images/9/ch5/46.png', 
    './images/9/ch5/47.png', 
    './images/9/ch5/48.png', 
    './images/9/ch5/49.png', 
    './images/9/ch5/50.png',],  //ch5 is completed.
    [//فصل ششم
    './images/9/ch6/1.png',
    './images/9/ch6/2.png',
    './images/9/ch6/3.png',
    './images/9/ch6/4.png',
    './images/9/ch6/5.png',
    './images/9/ch6/6.png',
    './images/9/ch6/7.png',
    './images/9/ch6/8.png',
    './images/9/ch6/9.png',
    './images/9/ch6/10.png',
    './images/9/ch6/11.png',
    './images/9/ch6/12.png',
    './images/9/ch6/13.png',
    './images/9/ch6/14.png',
    './images/9/ch6/15.png',
    './images/9/ch6/16.png',
    './images/9/ch6/17.png',
    './images/9/ch6/18.png',
    './images/9/ch6/19.png',
    './images/9/ch6/20.png',
    './images/9/ch6/21.png',
    './images/9/ch6/22.png',
    './images/9/ch6/23.png',
    './images/9/ch6/24.png',
    './images/9/ch6/25.png',
    './images/9/ch6/26.png',
    './images/9/ch6/27.png',
    './images/9/ch6/28.png',
    './images/9/ch6/29.png',
    './images/9/ch6/30.png',
    './images/9/ch6/31.png',
    './images/9/ch6/32.png',
    './images/9/ch6/33.png',
    './images/9/ch6/34.png',
    './images/9/ch6/35.png',
    './images/9/ch6/36.png',
    './images/9/ch6/37.png',
    './images/9/ch6/38.png',
    './images/9/ch6/39.png',
    './images/9/ch6/40.png',
    './images/9/ch6/41.png',
    './images/9/ch6/42.png',
    './images/9/ch6/43.png',
    './images/9/ch6/44.png',
    './images/9/ch6/45.png',
    './images/9/ch6/46.png',
    './images/9/ch6/47.png',], //ch6 is completed.
    [//فصل هفتم
    './images/9/ch7/1.png',
    './images/9/ch7/2.png',
    './images/9/ch7/3.png',
    './images/9/ch7/4.png',
    './images/9/ch7/5.png',
    './images/9/ch7/6.png',
    './images/9/ch7/7.png',
    './images/9/ch7/8.png',
    './images/9/ch7/9.png',
    './images/9/ch7/10.png',
    './images/9/ch7/11.png',
    './images/9/ch7/12.png',
    './images/9/ch7/13.png',
    './images/9/ch7/14.png',
    './images/9/ch7/15.png',
    './images/9/ch7/16.png',
    './images/9/ch7/17.png',
    './images/9/ch7/18.png',
    './images/9/ch7/19.png',
    './images/9/ch7/20.png',
    './images/9/ch7/21.png',
    './images/9/ch7/22.png',
    './images/9/ch7/23.png',
    './images/9/ch7/24.png',
    './images/9/ch7/25.png',
    './images/9/ch7/26.png',
    './images/9/ch7/27.png',
    './images/9/ch7/28.png',
    './images/9/ch7/29.png',
    './images/9/ch7/30.png',
    './images/9/ch7/31.png',
    './images/9/ch7/32.png',
    './images/9/ch7/33.png',
    './images/9/ch7/34.png',
    './images/9/ch7/35.png',
    './images/9/ch7/36.png',
    './images/9/ch7/37.png',
    './images/9/ch7/38.png',
    './images/9/ch7/39.png',
    './images/9/ch7/40.png',
    './images/9/ch7/41.png',
    './images/9/ch7/42.png',
    './images/9/ch7/43.png',
    './images/9/ch7/44.png',
    './images/9/ch7/45.png',
    './images/9/ch7/46.png',
    './images/9/ch7/47.png',
    './images/9/ch7/48.png',
    './images/9/ch7/49.png',
    './images/9/ch7/50.png',
    './images/9/ch7/51.png',
    './images/9/ch7/52.png',
    './images/9/ch7/53.png',
    './images/9/ch7/54.png',
    './images/9/ch7/55.png',], //ch7 is completed.
    [//فصل هشتم
    './images/9/ch8/1.png',
    './images/9/ch8/2.png',
    './images/9/ch8/3.png',
    './images/9/ch8/4.png',
    './images/9/ch8/5.png',
    './images/9/ch8/6.png',
    './images/9/ch8/7.png',
    './images/9/ch8/8.png',
    './images/9/ch8/9.png',
    './images/9/ch8/10.png',
    './images/9/ch8/11.png',
    './images/9/ch8/12.png',
    './images/9/ch8/13.png',
    './images/9/ch8/14.png',
    './images/9/ch8/15.png',
    './images/9/ch8/16.png',
    './images/9/ch8/17.png',
    './images/9/ch8/18.png',
    './images/9/ch8/19.png',
    './images/9/ch8/20.png',] //chp8 is completed.   
    //پایان کتاب نهم 
    //پایان درج سوالات سه کتاب:  14 اردیبهشت ماه 1403    
    //الحمدلله   
]];
let socialsource=[[[
    //کتاب مطالعات اجتماعی هفتم
    //فصل اول
    './images/social/7/001.png',
    './images/social/7/002.png',
    './images/social/7/003.png',
    './images/social/7/004.png',
    './images/social/7/005.png',
    './images/social/7/006.png',
    './images/social/7/007.png',
    './images/social/7/008.png',
    './images/social/7/009.png',
    './images/social/7/010.png',
    './images/social/7/011.png',
    './images/social/7/012.png',
    './images/social/7/013.png',
    './images/social/7/014.png',
    './images/social/7/015.png',
    './images/social/7/016.png',
    './images/social/7/017.png',
    './images/social/7/018.png',
    './images/social/7/019.png', //ch1 is completed.
]
]];
let sourcepack=[mathsource, socialsource];
let source=[];
let gradenumber=-1;
let chapternumber=-1;
let bookname;
let gradename;
let qheight;

for (let i=0; i<gradesbtn.length; i++){
    gradesbtn[i].addEventListener('click', function(){
        clearlistquestions();
        clearformquestions();
        gradename=gradesbtn[i].textContent;
        inputwrapper[0].value=gradesbtn[i].innerHTML;
        selectedgrade.innerHTML=" پایه " + gradesbtn[i].innerHTML;
        gradenumber=i;
        if (i==2){
            chapter[8].style.display="none";
        }else{
            chapter[8].style.display="block";
        }
        gradesbtn[i].style.backgroundColor="#42A5F5";
        for (let j=0; j<gradesbtn.length; j++){
            if (j!=i){
                gradesbtn[j].style.backgroundColor="#F5F5F5";
            }
        }
        if (chapternumber!=-1 && gradenumber!=-1){
            loadques(gradenumber,chapternumber);
        }
    })
}

for (let i=0; i<book.length; i++){
    book[i].addEventListener('click', function(){
        clearlistquestions();
        clearformquestions();
        bookname=book[i].innerHTML;
        selectedbook.innerHTML=book[i].innerHTML;
        inputwrapper[4].value=book[i].innerHTML;
        source=sourcepack[i];
        book[i].style.backgroundColor="#42A5F5";

        for (let j=0; j<book.length; j++){
            if (j!=i){
                book[j].style.backgroundColor="#F5F5F5";
            }
        }
        if (chapternumber!=-1 && gradenumber!=-1){
            loadques(gradenumber,chapternumber);
        }
    })
}

    for (let s=0; s<chapter.length; s++){
        chapter[s].addEventListener('click',function(){
            chapternumber=s;
            selectedchapter.innerHTML=chapter[s].innerHTML;
            bottommain.style.marginRight="0";
            chapter[s].style.backgroundColor="#42A5F5";
            for (let j=0;j<chapter.length;j++){
                if (j!=s){
                    chapter[j].style.backgroundColor="#F5F5F5";
                }
            }
                    clearlistquestions();
                    if (chapternumber!=-1 && gradenumber!=-1){
                        loadques(gradenumber,chapternumber);
                    }
        })
    }

menutimesbtn.addEventListener('click', function(){
    sidemenu.style.left="-200px"; 
    headerIconi.classList="fa fa-bars";
    btntext.style.visibility="hidden";
})

headerIcon.addEventListener('click', function(){
    if (headerIconi.classList.contains("fa-bars")){
        sidemenu.style.left="0";
        headerIconi.classList="fa fa-times";
    }
    else{
        sidemenu.style.left="-200px"; 
        headerIconi.classList="fa fa-bars";
    }
})

aboutbtn.addEventListener('click', function(){
    btntext.style.top="0";
    about.style.display="block";
    contact.style.display="none";
    instruction.style.display="none";
    btntext.style.height="80px";
})

aboutbtn.addEventListener('mouseleave', function(){
    btntext.style.top="-200px";
})

contactbtn.addEventListener('click', function(){
    btntext.style.top="0";
    about.style.display="none";
    contact.style.display="block";
    instruction.style.display="none";
    btntext.style.height="80px";
})

contactbtn.addEventListener('mouseleave', function(){
    btntext.style.top="-200px";
})

instructionbtn.addEventListener('click', function(){
    btntext.style.top="0";
    about.style.display="none";
    contact.style.display="none";
    instruction.style.display="block";
    btntext.style.height="150px";
})

instructionbtn.addEventListener('mouseleave', function(){
    btntext.style.top="-200px";
})

function loadques(gradenumber,chapternumber){
            for (let k = 0; k < source[gradenumber][chapternumber].length; k++) {
                var newqlRow = qlist.insertRow();
                newqlRow.className = "qlrow";
                newqlRow.title="برای اضافه شدن این سؤال به فرم روی آن کلیک کنید.";
                qlist.appendChild(newqlRow);
                var cell1 = newqlRow.insertCell();
                cell1.innerHTML = k + 1;
                cell1.className="questionlnumber";
                var cell2 = newqlRow.insertCell();
                cell2.className = 'lquestions';
                var imgl = document.createElement('img');
                imgl.className = 'limage';
                imgl.src = source[gradenumber][chapternumber][k];
                imgl.addEventListener('click', function () {
                    var newqfRow = qtable.insertRow();
                    newqfRow.className = "qfrow";
                    qtable.appendChild(newqfRow);
                    var cell1 = newqfRow.insertCell();
                    cell1.className = "questionnumber";
                    cell1.style.position = "relative";
                    b = document.createElement('button');
                    cell1.appendChild(b);
                    b.innerHTML = "حذف سؤال";
                    var cell2 = newqfRow.insertCell();
                    cell2.className = "questions";
                    var imgq = document.createElement('img');
                    imgq.className = "qimage";
                    imgq.src = this.src;
                    cell2.appendChild(imgq);
                    var cell3 = newqfRow.insertCell();
                    cell3.className = "marks";
                    cell3.style.position = "relative";
                    var makeinput = document.createElement('input');
                    makeinput.className = "markinput";
                    cell3.appendChild(makeinput);
                    b.addEventListener('click', function () {
                        var row = this.parentNode.parentNode;
                        var rowIndex = row.rowIndex;
                        qtable.deleteRow(rowIndex);
                    })
                })
                cell2.appendChild(imgl);
            }
        }

insertallquestions.addEventListener('click',function () {
    clearformquestions();
    var w = document.querySelectorAll('.lquestions');
    var z = document.querySelectorAll('.questions');
    var imgl = document.querySelectorAll('.limage');
    for (var i = 0; i < w.length; i++) {
        var newqfRow = qtable.insertRow();
        newqfRow.className = 'qfrow';
        var cell1 = newqfRow.insertCell();
        cell1.className = "questionnumber";
        cell1.style.position = "relative";
        b = document.createElement('button');
        cell1.appendChild(b);
        b.innerHTML = "حذف سؤال";
        var cell2 = newqfRow.insertCell();
        cell2.className = "questions";
        var imgq = document.createElement('img');
        imgq.className = "qimage";
        imgq.src = imgl[i].src;
        cell2.appendChild(imgq);
        var cell3 = newqfRow.insertCell();
        cell3.className = "marks";
        cell3.style.position = "relative";
        var makeinput = document.createElement('input');
        makeinput.className = "markinput";
        cell3.appendChild(makeinput);
        b.addEventListener('click', function () {
            var row = this.parentNode.parentNode;
            var rowIndex = row.rowIndex;
            qtable.deleteRow(rowIndex);
        })
    }
    qtable.appendChild(newqfRow);
})

numbering.addEventListener('click', function(){
    var nums = document.getElementsByClassName('questionnumber');
    for (var i = 1; i < nums.length; i++) {
        nums[i].innerHTML = i;
    }
    for (var i=0; i<inputs.length; i++){
        inputs[i].innerHTML=inputwrapper[i].value;
    }
    let marks=document.querySelectorAll('.marks');
    let markinput=document.querySelectorAll('.markinput');
    for (var i=0; i<markinput.length; i++){
        marks[i+1].innerHTML=markinput[i].value;
    }
}) 

sendtoPDF.addEventListener('click', function() {
    qtablewrapper.cloneNode(true);
    const formheight=qtablewrapper.clientHeight;
    const a4hincm=29.7;
    const dpi=72;
    const a4hinpx=(a4hincm/2.54)*dpi;
    const nofpages=Math.ceil(formheight/a4hinpx);
    npages.innerHTML=nofpages;
    
    let printWindow=window.open('' ,'_blank');
    printWindow.document.write("<html><head><title></title>");
    printWindow.document.write("<link rel='stylesheet' type='text/css' href='./style.css'>");
    printWindow.document.write("</head><body>");
    printWindow.document.write(qtablewrapper.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.title=" آزمون " + bookname + " پایه " + gradename;
    printWindow.document.close();
    printWindow.print();

    printWindow.onafterprint=function(){
        printWindow.close();
    }
    
})

clearall.addEventListener('click', clearformquestions);

function clearlistquestions() {
    for (var i = 0; ; i++) {
        var row = document.querySelectorAll('.qlrow');
        if (row.length > 0) {
            qlist.deleteRow(1);
        }
        else { break; }
    }
}

function clearformquestions() {
    for (var i = 0; ; i++) {
        var row = document.querySelectorAll('.qfrow');
        if (row.length > 0) {
            qtable.deleteRow(1);
        }
        else { break; }
    }
    for (var i=0; i<inputs.length; i++){
        inputs[i].innerHTML="";
    }
    npages.innerHTML="";

}

