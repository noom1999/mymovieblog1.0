/* check click window.addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    console.log('right clicked')
  }); */ 
/*   new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "right",
    animateTime: 0.8,
    animateFunction: "ease",
  }); */
/*   slide = document.getElementById('main');
window.addEventListener('click',function(){
  if(index ==0){
    slide.

  }
}) */
/* $(function() {
  $.scrollify({
    section : "section",
    sectionName : "section-name",
    scrollSpeed: 800,
    easing: "easeOutExpo",
    offset : 0,
    standardScrollElements: ".section-two",
    standardScrollElements: ".section-three",
    standardScrollElements: ".section-four",
    touchScroll:true,
    updateHash: true,
  

  });
});  */




/*  window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i= 0; i< reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('show');
    }
    else{
      reveals[i].classList.remove('show');
    }
  }
}  */

// Declaring the cards
/*  const animation1 = document.querySelectorAll(".reveal")
// Intersection Observer function
const observer = new IntersectionObserver( 
  entries => {
    entries.forEach( a => {
      // When an entry enters the viewport, add the class "show":
      a.target.classList.toggle("show", a.isIntersecting)

      // To keep entries from fading out after, unobserve the entry with:
     if (a.isIntersecting) observer.unobserve(a.target)
    })
  }, 
  {
    // Threshold of 1 = 100% - entry needed to be in viewport before the class "show" is added
    threshold: [1],
 
    rootMargin: '10% 0px 90% 0px',
  }
     
       
)
animation1.forEach(card => { 
  observer.observe(card) 
}) ; */


// Intersection Observer to observe the cards

/* const text  = document.querySelector(".title");
window.addEventListener('scroll',() =>{
  const current  = window.scrollY;
if (current >=100){
  text.style.opacity = "0.5";
 
}if(current >=200){
  text.style.opacity = "1.0";
console.log(current)
}



}) */

/* window.addEventListener('scroll', handleScroll);

function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    var scrolled = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
} */
/* window.onscroll = function(){scrolldown()};
function scrolldown(){
  const current  = window.screenTop
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("titleshow").style.fontSize =`(${current})`

  }else{
    document.getElementById("titleshow").style.fontSize = "10px";
  }
} */
/* const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('year');
yearElement.innerHTML = currentYear
console.log("movie") */


function getCopyrightYear() {
  let current_Year = new Date().getFullYear();
  return  + current_Year;
}






  const observerOptions = {
       root: null,
       threshold: 0,
       rootMargin: '0 0 -20px 0'
   };

const cards = document.querySelectorAll(".container ,.card")
const observer = new IntersectionObserver( 
  entries => {
    entries.forEach(entry => {
   
      entry.target.classList.toggle("show", entry.isIntersecting)


       if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  }, 
  {
   
    observerOptions,
  }        
)

// Intersection Observer to observe the cards
cards.forEach(container => { 
  observer.observe(container) 
})



  let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top='0';
    } else {
   
      navbar.style.top='-80px';
    }
    prevScrollPos = currentScrollPos;
  });


  let buttontotop = document.getElementById("btn-back-to-top");
  window.onscroll = function (){
    scrollFunction();
  };
  

function scrollFunction(){
  if (document.body.scrollTop > 1500 || 
    document.documentElement.scrollTop > 1500) {
    // If so, show the button and fade it in
    buttontotop.classList.add('active')

  } else {
    // If not, hide the button and fade it out
    buttontotop.classList.remove('active')

  }



}
buttontotop.addEventListener("click",backtoTop);
function backtoTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
}
applyDesign();
function applyDesign() {
  const urlParams = new URLSearchParams(window.location.search);
  const design = urlParams.get('design');
  const titlefilm = document.getElementById('title') || {}; //ชื่อผู้กำกับ
  const titlefilmcontent = document.getElementById('title-content') || {}; // บทนำผู้กำกับ
  const imgheading = document.getElementById('img-heading') || {}; // บทนำผู้กำกับ
  const header = document.getElementById('header') || {}; // บทนำผู้กำกับ
  const imgheaderfilmmaker = document.getElementById('imgheader-filmmaker') || {};
  const section1 = document.getElementById('wrapper1')|| {};
 const section2 = document.getElementById('wrapper2')|| {};
 const section3 = document.getElementById('wrapper3')|| {};
 const section4 = document.getElementById('wrapper4')|| {};
 const section5 = document.getElementById('wrapper5')|| {};
 const section6 = document.getElementById('wrapper6')|| {};
 const section7 = document.getElementById('wrapper7')|| {};
 const section8 = document.getElementById('wrapper8')|| {};
 const section9 = document.getElementById('wrapper9')|| {};
 const section10 = document.getElementById('wrapper10')|| {};
 
 const titlecontent1 = document.getElementById('titlecontent-1') || {}; //ชืี่อเรื่อง 
  const titlecontent2 = document.getElementById('titlecontent-2') || {};//ชืี่อเรื่อง 
  const titlecontent3 = document.getElementById('titlecontent-3') || {};//ชืี่อเรื่อง 
  const titlecontent4 = document.getElementById('titlecontent-4') || {};//ชืี่อเรื่อง
  const titlecontent5 = document.getElementById('titlecontent-5') || {};//ชืี่อเรื่อง 
  const titlecontent6 = document.getElementById('titlecontent-6') || {};//ชืี่อเรื่อง 
  const titlecontent7 = document.getElementById('titlecontent-7') || {};//ชืี่อเรื่อง
  const titlecontent8 = document.getElementById('titlecontent-8') || {};//ชืี่อเรื่อง 
  const titlecontent9 = document.getElementById('titlecontent-9') || {};//ชืี่อเรื่อง 
  const titlecontent10 = document.getElementById('titlecontent-10') || {};//ชืี่อเรื่อง 

  const contentmovie1 = document.getElementById('text-content-1') || {}; //เนื้อหา
  const contentmovie2 = document.getElementById('text-content-2') || {}; //เนื้อหา
  const contentmovie3 = document.getElementById('text-content-3') || {}; //เนื้อหา
  const contentmovie4 = document.getElementById('text-content-4') || {}; //เนื้อหา
  const contentmovie5 = document.getElementById('text-content-5') || {}; //เนื้อหา
  const contentmovie6 = document.getElementById('text-content-6') || {}; //เนื้อหา
  const contentmovie7 = document.getElementById('text-content-7') || {}; //เนื้อหา
  const contentmovie8 = document.getElementById('text-content-8') || {}; //เนื้อหา
  const contentmovie9 = document.getElementById('text-content-9') || {}; //เนื้อหา
  const contentmovie10 = document.getElementById('text-content-10') || {}; //เนื้อหา

  const img1 = document.getElementById('img-1') || {}; //รูป
  const img2 = document.getElementById('img-2') || {}; //รูป
  const img3 = document.getElementById('img-3') || {}; //รูป
  const img4 = document.getElementById('img-4') || {}; //รูป
  const img5 = document.getElementById('img-5') || {}; //รูป
  const img6 = document.getElementById('img-6') || {}; //รูป
  const img7 = document.getElementById('img-7') || {}; //รูป
  const img8 = document.getElementById('img-8') || {}; //รูป
  const img9 = document.getElementById('img-9') || {}; //รูป
  const img10 = document.getElementById('img-10') || {}; //รูป

  if (design === 'wongkarwai') {
    imgheaderfilmmaker.src ='https://prod-images.tcm.com/Master-Profile-Images/WongKarWai.208829.jpg'
    titlefilm.innerHTML = 'หว่อง ก๊า ไหว่ (Wong Kar-Wai)'
    titlefilmcontent.innerHTML = 'Wong Kar-wai เป็นผู้สร้างภาพยนตร์ชาวฮ่องกงซึ่งเป็นที่รู้จักจากภาพยนตร์ที่ดึงดูดสายตาและกระตุ้นอารมณ์ เขาถือเป็นหนึ่งในบุคคลสำคัญในขบวนการฮ่องกงนิวเวฟในช่วงปี 1990 และภาพยนตร์ของเขายังได้รับรางวัลและรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก ภาพยนตร์ที่เป็นที่รู้จักมากที่สุดของเขา ได้แก่ "Chungking Express", "In the Mood for Love", "Fallen Angels", "Happy Together", และ "Days of Being Wild" หว่องกาไวเป็นที่รู้จักจากการใช้การถ่ายทำภาพยนตร์ ดนตรี และการตัดต่อที่แสดงออกอย่างชัดเจน และภาพยนตร์ของเขามักจะสำรวจธีมของความรัก ความสูญเสีย และกาลเวลา'
    imgheading.src = 'https://lh3.googleusercontent.com/GfDoUx3GMHaimm4V4eExwRl2b-m54iDt9kpECMl2AOSe_CH6gt4fm_irpIisYT_UH9hKi-j1Z3OJC-Rp0BR6godFPz7oxxaxppW5RaDOJ-2s-wZE-XQq6oCBG_GqO2OVM8LQADrgFQ=w2400'
    header. innerHTML = '9 อันดับหนังยอดเยี่ยม ของ หว่อง ก๊า ไหว่'




    titlecontent1.innerHTML = '9. "The Grandmaster" (2013)  '
    contentmovie1.innerHTML = '"The Grandmaster" เป็นภาพยนตร์ปี 2013 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Tony Leung, Ziyi Zhang และ Chang Chen <b>ภาพยนตร์เรื่องนี้เป็นละครศิลปะการต่อสู้ชีวประวัติเกี่ยวกับชีวิตของ Ip Man ศิลปินศิลปะการต่อสู้ที่มีชื่อเสียงจากการสอนกังฟูสไตล์หวิงชุน</b> "The Grandmaster" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 2 รางวัล ได้แก่ กำกับภาพยอดเยี่ยมและออกแบบเครื่องแต่งกายยอดเยี่ยม และได้รับรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากซีเควนซ์แอ็คชั่นที่น่าทึ่ง และการถ่ายทำภาพยนตร์ที่กระตุ้นอารมณ์'
    img1.src = 'https://cdn.theplaylist.net/wp-content/uploads/2013/01/15081635/tony-leung-1.jpg '

    titlecontent2.innerHTML = '8. "As Tears Go By" (1988)'
    contentmovie2.innerHTML = '"As Tears Go By" เป็นภาพยนตร์ปี 1988 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Andy Lau, Maggie Cheung และ Jacky Cheung <b>ภาพยนตร์เรื่องนี้เป็นละครอาชญากรรมเกี่ยวกับเพื่อนสามคนที่เข้าไปพัวพันกับโลกใต้ดินของฮ่องกง </b>"As Tears Go By" ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก และคว้าหลายรางวัล รวมทั้งรางวัลภาพยนตร์ฮ่องกงสาขาภาพยนตร์ยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักในเรื่องการเล่าเรื่องที่น่าสนใจ การแสดงที่แข็งแกร่งของนักแสดงนำ และภาพที่มีสไตล์และบรรยากาศ'
    img2.src = 'https://a.ltrbxd.com/resized/sm/upload/4n/x3/22/3v/as%20tears-1200-1200-675-675-crop-000000.jpg?v=a9f62232c5'

    titlecontent3.innerHTML = '7. "Ashes of Time"  (1994)'
    contentmovie3.innerHTML = 'Ashes of Time เป็นภาพยนตร์ปี 1994 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Leslie Cheung, Brigitte Lin และ Tony Leung <b>ภาพยนตร์เรื่องนี้เป็นละคร Wuxia (ศิลปะการต่อสู้) เกี่ยวกับกลุ่มนักดาบและความสัมพันธ์ของพวกเขาที่มีต่อกันในจีนโบราณ</b> "Ashes of Time" ได้รับการเสนอชื่อเข้าชิงหลายรางวัลในเทศกาลภาพยนตร์ทั่วโลก และคว้าหลายรางวัล รวมถึงรางวัลภาพยนตร์ฮ่องกงสาขากำกับศิลป์ยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการถ่ายทำภาพยนตร์ที่สวยงาม ดนตรีประกอบที่ไพเราะโดย Frankie Chan และ Roel A. García และการแสดงที่แข็งแกร่งของนักแสดงนำ'
    img3.src = 'https://1.bp.blogspot.com/-a1PHbfWtYtM/WBBjXvw13DI/AAAAAAAAHdo/MiI_qacR7V88w5CP9WjW-_oTcdnlgmyegCLcB/s1600/Ashes%2Bof%2BTime%2B12.jpg'

    titlecontent4.innerHTML = '6. "2046" (2004)'
    contentmovie4.innerHTML = '"2046" เป็นภาพยนตร์ปี 2004 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Tony Leung, Gong Li และ Faye Wong <b>ภาพยนตร์เรื่องนี้เป็นละครโรแมนติกที่เกิดขึ้นในทศวรรษที่ 1960 และ 1970 เกี่ยวกับนักเขียนที่เข้าไปพัวพันกับผู้หญิงหลายคนในขณะที่ดิ้นรนเพื่อหาตำแหน่งของเขาในโลกนี้</b>"2046" เป็นผลงานที่ประสบความสำเร็จในเชิงพาณิชย์เมื่อมีการเปิดตัว และถือเป็นงานคลาสสิกของหว่องกาไว ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก และได้รับรางวัลมากมาย รวมถึงรางวัล Cannes Film Festival Award สาขาผู้กำกับยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการถ่ายทำภาพยนตร์ที่สวยงาม ดนตรีประกอบที่ไพเราะโดย Shigeru Umebayashi และการแสดงที่แข็งแกร่งของนักแสดงนำ'
    img4.src = 'https://flipscreenblog.files.wordpress.com/2022/02/2046-wong-kar-wai.jpg?w=1100'

    titlecontent5.innerHTML = '5. "Happy Together" (1997)'
    contentmovie5.innerHTML = 'Happy Together เป็นภาพยนตร์ปี 1997 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Tony Leung, Leslie Cheung และ Chang Chen <b>ภาพยนตร์เรื่องนี้เป็นละครโรแมนติกเกี่ยวกับชายชาวฮ่องกงสองคนที่เดินทางไปอาร์เจนตินาเพื่อพยายามรักษาความสัมพันธ์ของพวกเขา</b>"Happy Together" ประสบความสำเร็จในเชิงวิจารณ์และเชิงพาณิชย์เมื่อมีการเปิดตัว และถือเป็นงานคลาสสิกของหว่องกาไว ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก และได้รับรางวัลมากมาย รวมถึงรางวัล Cannes Film Festival Award สาขาผู้กำกับยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการถ่ายทำภาพยนตร์ที่สวยงาม ดนตรีประกอบที่ไพเราะโดย Frankie Chan และ Roel A. García และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ยังมีความโดดเด่นในเรื่องความสัมพันธ์ระหว่างเพศเดียวกันในวัฒนธรรมที่การรักร่วมเพศไม่ได้รับการยอมรับอย่างกว้างขวางในเวลานั้น'
    img5.src = 'http://ilcinemadelcarbone.it/media/film/happy-together.jpg'

    titlecontent6.innerHTML = '4. "Days of Being Wild" (1990)'
    contentmovie6.innerHTML = '"Days of Being Wild" เป็นภาพยนตร์ปี 1990 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Leslie Cheung, Andy Lau และ Maggie Cheung <b>ภาพยนตร์เรื่องนี้เป็นแนวโรแมนติกดราม่าที่เกิดขึ้นในฮ่องกงช่วงปี 1960 เกี่ยวกับกลุ่มคนหนุ่มสาวที่ค้นหาความรักและความหมายในชีวิต</b> "Days of Being Wild" ประสบความสำเร็จในเชิงวิจารณ์และเชิงพาณิชย์เมื่อออกฉาย และถือเป็นงานคลาสสิกของหว่องกาไว ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก และได้รับรางวัลหลายรางวัล รวมทั้งรางวัลภาพยนตร์ฮ่องกงสาขาภาพยนตร์ยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการถ่ายทำภาพยนตร์ที่สวยงาม ดนตรีประกอบที่ไพเราะโดย Frankie Chan และ Roel A. García และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ยังโดดเด่นในด้านการแสดงภาพวัฒนธรรมวัยรุ่นของฮ่องกงในทศวรรษที่ 1960 และการสำรวจธีมของความรักและตัวตน'
    img6.src = 'https://m.media-amazon.com/images/M/MV5BY2M0MWEwNmMtMjJjZi00Mjk0LWFkNGEtMmNhYmI2YTFkMzI1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg'

    titlecontent7.innerHTML = '3. "Fallen Angels" (1995)'
    contentmovie7.innerHTML = 'Fallen Angels เป็นภาพยนตร์ปี 1995 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Leon Lai, Michelle Reis และ Takeshi Kaneshiro <b>ภาพยนตร์เรื่องนี้เป็นละครอาชญากรรมที่เกิดขึ้นในฮ่องกงร่วมสมัยเกี่ยวกับนักฆ่าและความสัมพันธ์ของเขากับผู้คนมากมายในเมือง</b> "Fallen Angels" ถือเป็นงานคลาสสิกของหว่องกาไว ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก และได้รับรางวัลหลายรางวัล รวมทั้งรางวัลภาพยนตร์ฮ่องกงสาขาภาพยนตร์ยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการถ่ายทำที่มีสไตล์ การประพันธ์ดนตรีประกอบโดย Frankie Chan และ Roel A. García และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ยังมีความโดดเด่นในด้านการแสดงภูมิทัศน์เมืองของฮ่องกงและธีมของความเหงาและความโดดเดี่ยว'
    img7.src = 'https://assets.mubicdn.net/images/film/391/image-w1280.jpg?1617995748'

    titlecontent8.innerHTML = '2. "Chungking Express" (1994)'
    contentmovie8.innerHTML = '"Chungking Express" เป็นภาพยนตร์ปี 1994 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Tony Leung, Faye Wong และ Brigitte Lin <b>ภาพยนตร์เรื่องนี้เป็นละครโรแมนติกที่มีฉากในฮ่องกงร่วมสมัย เกี่ยวกับเรื่องราวความรักสองเรื่องที่ตัดกันในเมือง</b> "Chungking Express" ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก และคว้ารางวัลมากมาย รวมถึงรางวัลภาพยนตร์ฮ่องกงสาขาภาพยนตร์ยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการถ่ายทำที่มีสไตล์ การประพันธ์ดนตรีประกอบโดย Frankie Chan และ Roel A. García และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ยังโดดเด่นในด้านการแสดงภูมิทัศน์เมืองของฮ่องกงและธีมของความรักและความสูญเสีย' 
    img8.src = 'https://oiger.de/wp-content/uploads/Chungking_Express_Still_05.jpg'
    
    titlecontent9.innerHTML = '1. "In the Mood for Love (2000)'
    contentmovie9.innerHTML = '"In the Mood for Love" เป็นภาพยนตร์โรแมนติกดราม่าปี 2000 ที่กำกับโดย Wong Kar-wai และนำแสดงโดย Tony Leung และ Maggie Cheung <b>ภาพยนตร์เรื่องนี้ดำเนินเรื่องในฮ่องกงช่วงต้นทศวรรษ 1960 ติดตามเรื่องราวของเพื่อนบ้านสองคน นายเชาว์และนางชาน ซึ่งถูกดึงดูดเข้าหากันเนื่องจากทั้งคู่สงสัยว่าคู่สมรสของตนกำลังมีชู้</b> ภาพยนตร์เรื่องนี้ได้รับการตอบรับอย่างดีจากนักวิจารณ์และผู้ชม และได้รับรางวัลมากมายจากเทศกาลภาพยนตร์ทั่วโลก ได้รับการเสนอชื่อเข้าชิงรางวัล Palme  ในเทศกาลภาพยนตร์เมืองคานส์ปี 2000 และได้รับรางวัลชนะเลิศด้านเทคนิคสำหรับการถ่ายทำภาพยนตร์ การกำกับศิลป์ และการออกแบบเครื่องแต่งกาย นอกจากความสำเร็จที่สำคัญแล้ว "In the Mood for Love" ยังได้รับการติดตามจากลัทธิและถือเป็นภาพยนตร์คลาสสิกของโลก ได้รับการยกย่องอย่างกว้างขวางในด้านการถ่ายทำภาพยนตร์ที่สวยงาม ดนตรีประกอบที่ไพเราะ และการแสดงที่ดึงดูดใจของ Tony Leung และ Maggie Cheung หากคุณชอบละครแนวโรแมนติกที่แฝงไปด้วยกลิ่นอายของอดีต ภาพยนตร์เรื่องนี้จะคุ้มค่าแก่การดูอย่างแน่นอน'
    img9.src = 'https://inkmagazinevcu.com/wp-content/uploads/2019/11/In-the-Mood-for-Love-073.jpg'
    
    section10.classList.add("hidden");
  
    


 
  }
  if (design === 'ridley') {
    imgheaderfilmmaker.src ='https://i.guim.co.uk/img/media/c05e3a147f8c5c15c8fe1e5d2ceb9c624b8b950e/0_150_3561_2137/master/3561.jpg?width=1200&quality=85&auto=format&fit=max&s=8c1deca48c69eca88b98557a0f96f5c6'
     titlefilm.innerHTML = 'ริดลีย์ สก็อตต์ (Ridley Scott)'
    titlefilmcontent.innerHTML = 'ริดลีย์ สก็อตต์เป็นผู้กำกับและผู้อำนวยการสร้างภาพยนตร์ที่ได้รับการยอมรับอย่างสูงและมีอิทธิพล ซึ่งเป็นที่รู้จักจากผลงานของเขาในแนวนิยายวิทยาศาสตร์ สยองขวัญ และแอ็คชั่น เขาเกิดเมื่อวันที่ 30 พฤศจิกายน พ.ศ. 2480 ที่เซาท์ชีลด์ส ประเทศอังกฤษ และเริ่มอาชีพในวงการภาพยนตร์ในฐานะนักออกแบบฉากและผู้กำกับศิลป์ ในปี 1977 เขามีผลงานการกำกับเรื่องแรกด้วยภาพยนตร์ไซไฟเรื่อง "The Duellists" ซึ่งได้รับเสียงวิจารณ์ชื่นชมและทำให้เขาได้รับรางวัลภาพยนตร์เปิดตัวยอดเยี่ยมจากเทศกาลภาพยนตร์เมืองคานส์ สก็อตต์ยังกำกับภาพยนตร์ที่ประสบความสำเร็จและทรงอิทธิพลอีกหลายเรื่อง รวมถึงภาพยนตร์ไซไฟแนวสยองขวัญคลาสสิกเรื่อง "Alien" (1979) ภาพยนตร์แนววิทยาศาสตร์แนวดิสโทเปียเรื่อง "Blade Runner" (1982) และภาพยนตร์ดราม่าอิงประวัติศาสตร์เรื่อง "Gladiator" (2000) ซึ่งได้รับรางวัลออสการ์ 5 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยม ภาพยนตร์ที่โดดเด่นเรื่องอื่นๆ ที่กำกับโดยสก็อต ได้แก่ "Prometheus" (2012), "Alien: Covenant" (2017) และ "The Martian" (2015) ซึ่งได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 7 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยมตลอดอาชีพการงานของเขา สก็อตต์เป็นที่รู้จักจากความใส่ใจในรายละเอียดและความสามารถในการสร้างโลกที่ชวนดื่มด่ำและสวยงามบนหน้าจอ เขาได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย รวมถึงรางวัลออสการ์ 3 รางวัล และได้รับเสียงวิจารณ์ชื่นชมจากการเล่าเรื่องที่สร้างสรรค์และสไตล์ภาพของเขา'
    imgheading.src = 'https://lh3.googleusercontent.com/18_m_eXZSrb7wUzdd2T66bfiU-esxxkOGM58EMRH8wp9w3V-8Ah-9bdqM1kMwP0D3129lRE5Gy_EfRr6l2p6FU1dReyte-SbUZczJFR_W7pB0YGerhFPWQUD5NReuTqNqei5_xplJw=w2400'
    header. innerHTML = '8 อันดับหนังยอดเยี่ยม ของ ริดลีย์ สก็อตต์'



    
    titlecontent1.innerHTML = '9. "Black Hawk Down" (2001)'
    contentmovie1.innerHTML = 'Black Hawk Down เป็นภาพยนตร์สงครามปี 2001 ที่กำกับโดย Ridley Scott และอิงจากหนังสือสารคดีชื่อเดียวกันในปี 1999 ของ Mark Bowden ภาพยนตร์เล่าถึงสมรภูมิแห่งโมกาดิชูซึ่งเกิดขึ้นในประเทศโซมาเลียในปี 1993 นำแสดงโดยทีมนักแสดงทั้งจอช ฮาร์ทเน็ตต์ ยวน แม็คเกรเกอร์ และทอม ไซส์มอร์ <b>เนื้อเรื่องติดตามกลุ่มทหารอเมริกันที่ถูกส่งไปยังโซมาเลียเพื่อปฏิบัติภารกิจรักษาสันติภาพ ระหว่างปฏิบัติภารกิจ เฮลิคอปเตอร์ของพวกเขาถูกยิงตก และพวกเขาพบว่าตัวเองติดอยู่ท่ามกลางความขัดแย้งที่รุนแรง เหล่าทหารต้องต่อสู้เพื่อเอาชีวิตรอดเมื่อถูกกลุ่มติดอาวุธโซมาเลียปิดล้อม </b>Black Hawk Down ได้รับเสียงชื่นชมอย่างกว้างขวางเมื่อเปิดตัวและประสบความสำเร็จในบ็อกซ์ออฟฟิศ ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์สี่รางวัล ได้แก่ ผู้กำกับยอดเยี่ยมและเสียงประกอบยอดเยี่ยม'
    img1.src = 'https://i.insider.com/51d46ef469bedd9651000004?width=1200&format=jpeg'

    titlecontent2.innerHTML = '8. "American Gangster" (2007)'
    contentmovie2.innerHTML = 'American Gangster เป็นภาพยนตร์ดราม่าอาชญากรรมที่บอก<b>เล่าเรื่องราวของแฟรงก์ ลูคัส (แสดงโดยเดนเซล วอชิงตัน) อดีตทหารผ่านศึกในสงครามเวียดนามที่กลายมาเป็นผู้เล่นหลักในการค้ายาเสพติดในนครนิวยอร์กในช่วงปี 1970 ลูคัสสามารถขึ้นสู่อำนาจได้อย่างรวดเร็วด้วยการสร้างระบบการจัดจำหน่ายใหม่ที่กำจัดพ่อค้าคนกลางและทำให้เขาสามารถขายเฮโรอีนคุณภาพสูงได้ในราคาที่ต่ำกว่าคู่แข่ง เมื่ออาณาจักรของลูคัสเติบโต เขาก็หวาดระแวงและรุนแรงมากขึ้นเรื่อยๆ นำไปสู่การเผชิญหน้ากับริชชี่ โรเบิร์ตส์ (รับบทโดยรัสเซล โครว์) นักสืบที่ได้รับมอบหมายให้กำจัดลูคัสและองค์กรของเขา โรเบิร์ตส์เป็นตำรวจที่ตรงไปตรงมาและซื่อสัตย์ เขามุ่งมั่นที่จะนำลูคัสเข้าสู่กระบวนการยุติธรรม แม้ว่าจะต้องต่อสู้กับสมาชิกที่ทุจริตในแผนกของเขาเองก็ตาม</b>'
    img2.src = 'https://www.eyeforfilm.co.uk/images/newsite/gangster_600.jpg'

    titlecontent3.innerHTML = '7. "The Martian" (2015)'
    contentmovie3.innerHTML = '"The Martian เป็นภาพยนตร์ไซไฟที่ออกฉายในปี 2015 กำกับโดย Ridley Scott และนำแสดงโดย Matt Damon ภาพยนตร์เรื่องนี้สร้างจากนวนิยายชื่อเดียวกันในปี 2011 ของ Andy Weir <b>เนื้อเรื่องติดตาม Mark Watney (แสดงโดย Damon) นักบินอวกาศที่เป็นส่วนหนึ่งของภารกิจส่งมนุษย์ไปยังดาวอังคาร เมื่อพายุรุนแรงพัดถล่มโลก วัทนีย์ถูกทิ้งไว้เบื้องหลังและสันนิษฐานว่าเสียชีวิตโดยเพื่อนร่วมทีม ซึ่งถูกบังคับให้ต้องอพยพ วัทนีย์ต้องใช้ทักษะและไหวพริบของเขาเพื่อเอาชีวิตรอดบนดาวดวงนี้ ขณะเดียวกันก็พยายามหาทางส่งสัญญาณให้โลกรู้ว่าเขายังมีชีวิตอยู่</b>The Martian ได้รับเสียงวิพากษ์วิจารณ์อย่างกว้างขวางเมื่อเปิดตัวและประสบความสำเร็จในเชิงพาณิชย์ ได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงสาขานักแสดงนำชายยอดเยี่ยมจากการแสดงของเดมอน และบทภาพยนตร์ดัดแปลงยอดเยี่ยม'
    img3.src = 'https://m.media-amazon.com/images/M/MV5BMTUxODUzMDY0NF5BMl5BanBnXkFtZTgwMDE0MDE5NTE@._V1_.jpg'

    titlecontent4.innerHTML = '6. "Alien: Covenant" (2017)'
    contentmovie4.innerHTML = 'Alien: Covenant เป็นภาพยนตร์สยองขวัญแนววิทยาศาสตร์ปี 2017 ที่กำกับโดย Ridley Scott และนำแสดงโดย Michael Fassbender, Katherine Waterston และ Billy Crudup ภาพยนตร์เรื่องนี้เป็นภาคที่สองในซีรีส์ภาคก่อนของ Alien ต่อจาก Prometheus (2012) และทำหน้าที่เป็นภาคต่อโดยตรงของภาพยนตร์เรื่องนั้น <b>เนื้อเรื่องติดตามลูกเรือของเรืออาณานิคม Covenant ซึ่งกำลังปฏิบัติภารกิจเพื่อค้นหาบ้านใหม่สำหรับมนุษยชาติ เมื่อพวกเขาพบดาวเคราะห์ที่ดูเหมือนจะสมบูรณ์แบบ พวกเขาลงจอดและพบว่ามันเป็นที่อยู่อาศัยของหุ่นยนต์ ที่นำโดยเดวิด (แสดงโดยฟาส เบ็นเดอร์) ซึ่งเป็นตัวละครจาก Prometheus (2012) ขณะที่พวกเขาสำรวจโลก พวกเขาได้พบกับสิ่งมีชีวิตที่อันตรายมากมายและต้องต่อสู้เพื่อเอาชีวิตรอด </b>Alien: Covenant ได้รับคำวิจารณ์ที่หลากหลายเมื่อเปิดตัวและประสบความสำเร็จในเชิงพาณิชย์ ตามมาด้วยภาพยนตร์อีกเรื่องในซีรีส์เรื่อง Alien: Covenant - Prologue (2017) ซึ่งเป็นภาคก่อนหน้าของภาพยนตร์หลัก'
    img4.src = 'https://www.kwanmanie.com/wp-content/uploads/2017/05/alien-covenant-ac_003_00098544_rgb_1_copy_-_h_2017.jpg'

    titlecontent5.innerHTML = '5. "Prometheus" (2012)'
    contentmovie5.innerHTML = 'Prometheus เป็นภาพยนตร์แนววิทยาศาสตร์ที่ออกฉายในปี 2012 กำกับโดย Ridley Scott และนำแสดงโดย Noomi Rapace, Michael Fassbender และ Guy Pearce ภาพยนตร์เรื่องนี้ดำเนินเรื่องอยู่ในจักรวาลเดียวกับแฟรนไชส์เอเลี่ยนของสก็อตต์ แต่ไม่ใช่ภาคก่อนโดยตรงของภาพยนตร์เอเลี่ยนเรื่องใดเรื่องหนึ่ง<b> เนื้อเรื่องติดตามทีมนักวิทยาศาสตร์ที่เดินทางไปยังดาวเคราะห์อันไกลโพ้นเพื่อค้นหาต้นกำเนิดของมนุษยชาติ พวกเขาค้นพบว่าดาวเคราะห์ดวงนี้เป็นที่อยู่อาศัยของสิ่งมีชีวิตนอกโลกขั้นสูงซึ่งมีหน้าที่สร้างชีวิตมนุษย์บนโลก ขณะที่พวกเขาสำรวจโลกและพยายามติดต่อกับสิ่งมีชีวิต พวกเขาได้ค้นพบแผนการชั่วร้ายและต้องต่อสู้เพื่อเอาชีวิตรอด </b>Prometheus ได้รับคำวิจารณ์ที่หลากหลายเมื่อเปิดตัว แต่ก็ประสบความสำเร็จในเชิงพาณิชย์ ตามมาด้วยภาคต่อ Alien: Covenant (2017) ซึ่งสานต่อเรื่องราวของภาพยนตร์'
    img5.src = 'https://m.media-amazon.com/images/M/MV5BMzQ1NTQ2Mjk3NF5BMl5BanBnXkFtZTcwODQ1MDYxNw@@._V1_.jpg'

    titlecontent6.innerHTML = '4. "Gladiator" (2000)'
    contentmovie6.innerHTML = 'Gladiator เป็นภาพยนตร์ดราม่าอิงประวัติศาสตร์ปี 2000 ที่กำกับโดย Ridley Scott และนำแสดงโดย Russell Crowe, Joaquin Phoenix และ Connie Nielsen <b>ภาพยนตร์เรื่องนี้บอกเล่าเรื่องราวของ Maximus Decimus Meridius นายพลชาวโรมันที่ถูกลูกชายของจักรพรรดิหักหลังและถูกตัดสินให้ต่อสู้ในฐานะกลาดิเอเตอร์ขณะที่ Maximus ต่อสู้ในสนามประลอง เขากลายเป็นนักสู้ที่มีชื่อเสียงและประสบความสำเร็จ แต่ยังวางแผนแก้แค้นจักรพรรดิผู้ฉ้อฉลด้วย ภาพยนตร์เรื่องนี้สำรวจธีมของความภักดี เกียรติยศ และการไถ่บาป ขณะที่แม็กซิมัสพยายามล้างแค้นให้ครอบครัวของเขาและกอบกู้เกียรติยศคืนสู่โรม</b>Gladiator ประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิจารณ์อย่างมากเมื่อออกฉาย โดยได้รับการเสนอชื่อชิงรางวัลมากมายและคว้ารางวัลออสการ์ 5 รางวัล รวมถึงนักแสดงนำชายยอดเยี่ยมจากการแสดงของโครว์และวิชวลเอฟเฟกต์ยอดเยี่ยม ได้รับการยอมรับอย่างกว้างขวางว่าเป็นภาพยนตร์แนวคลาสสิกสมัยใหม่ของภาพยนตร์มหากาพย์'
    img6.src = 'https://media.comicbook.com/2020/06/gladiator-movie-russell-crowe-tiger-2000-1224285.jpeg?auto=webp'
    
    titlecontent7.innerHTML = '3. "Blade Runner" (1982) '
    contentmovie7.innerHTML = 'Blade Runner เป็นภาพยนตร์ไซไฟปี 1982 ที่กำกับโดย Ridley Scott และนำแสดงโดย Harrison Ford, Rutger Hauer และ Sean Young ภาพยนตร์สร้างจากนิยายปี 1968 โดย ฟิลิป เค. ดิก <b>ภาพยนตร์เรื่องนี้มีฉากอยู่ในโลกอนาคตแบบดิสโทเปีย ซึ่งหุ่นยนต์ที่มีรูปร่างเหมือนมนุษย์หรือที่รู้จักในชื่อ เรพลิแทนต์ ถูกใช้ในการทำงานที่อันตรายและไม่พึงประสงค์บนดาวเคราะห์ดวงอื่น เมื่อกลุ่มผู้จำลองอันธพาลมาถึงโลกและเข้าไปหลบซ่อน เบลดรันเนอร์ (ฟอร์ด) ได้รับมอบหมายให้ติดตามพวกเขาและกำจัดพวกเขา (คำที่ใช้สำหรับการสังหารผู้เลียนแบบ) เมื่อเบลดรันเนอร์เริ่มค้นหา เขาก็เข้าไปพัวพันกับภารกิจที่ซับซ้อนและอันตรายที่บีบให้เขาต้องตั้งคำถามเกี่ยวกับความเป็นมนุษย์และธรรมชาติของชีวิต</b>Blade Runner ประสบความสำเร็จในเชิงพาณิชย์และที่สำคัญเมื่อมีการเปิดตัวและตั้งแต่นั้นมาก็กลายเป็นนิยายวิทยาศาสตร์คลาสสิก ได้รับการเผยแพร่ในเวอร์ชันต่างๆ มากมาย รวมถึงภาพยนตร์ต้นฉบับ ฉบับไดเรกเตอร์คัท และฉบับสุดท้าย'
    img7.src = 'https://www.exrey.tv/wp-content/uploads/2021/04/blader-runner-3.jpg'

    titlecontent8.innerHTML = '2. "Thelma and Louise" (1991)'
    contentmovie8.innerHTML = '"Thelma & Louise" เป็นภาพยนตร์อเมริกันที่ออกฉายในปี 1991 กำกับโดย Ridley Scott และเขียนบทโดย Callie Khouri ภาพยนตร์เรื่องนี้นำแสดงโดยซูซาน ซาแรนดอนและจีน่า เดวิสในบทเธลมาและหลุยส์ ตามลำดับ สองเพื่อนซี้ที่ออกเดินทางเพื่อหลีกหนีจากชีวิตธรรมดาๆ ของพวกเขา ภาพยนตร์เรื่องนี้ยังนำแสดงโดย Harvey Keitel, Michael Madsen และ Brad Pitt <b>ภาพยนตร์เรื่องนี้ติดตามเทลมาและหลุยส์ขณะที่พวกเขาหลบหนีจากกฎหมายหลังจากเหตุการณ์ต่างๆ รวมถึงการพยายามข่มขืนและการฆาตกรรม ทำให้พวกเขากลายเป็นอาชญากร ขณะที่พวกเขาเดินทางไปทั่วภาคตะวันตกเฉียงใต้ของสหรัฐอเมริกา พวกเขาได้พบกับตัวละครและสถานการณ์ต่างๆ มากมายที่ท้าทายมิตรภาพของพวกเขาและผลักดันพวกเขาให้ถึงขีดจำกัด</b>"Thelma & Louise" ประสบความสำเร็จในเชิงวิจารณ์และเชิงพาณิชย์เมื่อออกฉาย และตั้งแต่นั้นมาก็กลายเป็นเพลงคลาสสิกประจำลัทธิ ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 6 รางวัล รวมถึงนักแสดงนำหญิงยอดเยี่ยม (ซาแรนดอน) และนักแสดงสมทบชายยอดเยี่ยม (พิตต์) มักถูกอ้างถึงว่าเป็นภาพยนตร์ที่มีอิทธิพลซึ่งช่วยเปลี่ยนวิธีการแสดงภาพผู้หญิงในภาพยนตร์ฮอลลีวูด'
    img8.src = 'https://m.media-amazon.com/images/M/MV5BMjAyMjI1OTA0MF5BMl5BanBnXkFtZTcwODk3NDY3Mw@@._V1_.jpg'

    titlecontent9.innerHTML = '1. "Alien" (1979)'
    contentmovie9.innerHTML = 'Alien" เป็นภาพยนตร์แนวสยองขวัญแนววิทยาศาสตร์ที่กำกับโดยริดลีย์ สก็อตต์ และออกฉายในปี 1979 <b>ภาพยนตร์ติดตามลูกเรือของยานอวกาศลากจูงเชิงพาณิชย์ชื่อ นอสโตรโม ซึ่งเผชิญหน้ากับสิ่งมีชีวิตต่างดาวที่อันตรายถึงชีวิตขณะเดินทางกลับมายังโลก</b>ภาพยนตร์เรื่องนี้นำแสดงโดย Sigourney Weaver ในบท Ripley เจ้าหน้าที่หมายจับของ Nostromo ซึ่งกลายมาเป็นตัวละครหลักในการต่อสู้กับมนุษย์ต่างดาวของภาพยนตร์เรื่องนี้ "เอเลี่ยน" ประสบความสำเร็จและกลายเป็นนิยายวิทยาศาสตร์คลาสสิกและแนวสยองขวัญ มันสร้างภาคต่อ ภาคก่อน และภาคแยกออกมามากมาย และมีอิทธิพลต่อภาพยนตร์และสื่ออื่นๆ มากมายในแนวนิยายวิทยาศาสตร์และแนวสยองขวัญ สไตล์วิชวลของภาพยนตร์ ซึ่งมีการผสมผสานระหว่างเอฟเฟ็กต์ที่ใช้งานได้จริงและของจำลองขนาดย่อส่วน ได้รับการยกย่องอย่างกว้างขวาง และการออกแบบสิ่งมีชีวิตอันเป็นเอกลักษณ์โดย H. R. Giger ศิลปินแนวเซอร์เรียลิสต์ชาวสวิส ได้กลายเป็นหนึ่งในประวัติศาสตร์ภาพยนตร์ที่น่าจดจำและมีอิทธิพลมากที่สุด "Alien" เป็นที่รู้จักในเรื่องการเล่าเรื่องที่ชวนลุ้นระทึกและมีบรรยากาศ การแสดงที่แข็งแกร่ง และการใช้เทคนิคพิเศษและการออกแบบสิ่งมีชีวิตที่แปลกใหม่' 
    img9.src = 'https://m.media-amazon.com/images/M/MV5BZTc2NWU1NDMtNmVlYS00MTUyLTlkYjctZDcxNTgwMjRiYTNjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg'
   
    section10.classList.add("hidden");
   
  
    
  }
  if (design === 'bong') {
    imgheaderfilmmaker.src ='https://media.gq.com/photos/5e417dc48208a40009e9abbe/3:2/w_1998,h_1332,c_limit/Bong-Joon-Ho-Oscars-GQ-2020-021020.jpg'
     titlefilm.innerHTML = 'บง จุนโฮ (Bong Joon-ho)'
    titlefilmcontent.innerHTML = 'Bong Joon-ho เป็นผู้กำกับภาพยนตร์ ผู้เขียนบท และโปรดิวเซอร์ชาวเกาหลีใต้ เขาเป็นที่รู้จักจากภาพยนตร์แนวสร้างสรรค์และท้าทายแนวภาพยนตร์ ซึ่งมักจะผสมผสานองค์ประกอบของนิยายวิทยาศาสตร์ ตลกขบขัน และบทวิจารณ์สังคม บงมีผลงานการกำกับเรื่องแรกในปี 2543 กับภาพยนตร์เรื่อง "Barking Dogs Never Bite" และหลังจากนั้นได้กำกับภาพยนตร์ที่ได้รับเสียงวิจารณ์ชื่นชมและได้รับความนิยมมากมาย รวมถึง "Memories of Murder" (2546), "The Host" (2549), "Mother " (2009), "Snowpiercer" (2013) และ "Okja" (2017) <br>ภาพยนตร์เรื่องล่าสุดของบง "Parasite" ออกฉายในปี 2019 และกลายเป็นที่ฮือฮาไปทั่วโลก คว้ารางวัลมากมายและทำลายสถิติบ็อกซ์ออฟฟิศ "Parasite" กลายเป็นภาพยนตร์เกาหลีใต้เรื่องแรกที่คว้ารางวัล Palme จากเทศกาลภาพยนตร์เมืองคานส์ และคว้ารางวัลออสการ์ถึง 4 รางวัล รวมถึงบทภาพยนตร์ดั้งเดิมยอดเยี่ยมและภาพยนตร์นานาชาติยอดเยี่ยมบงเป็นที่รู้จักจากความสามารถในการเล่าเรื่องที่แข็งแกร่งและความสามารถในการสร้างตัวละครและโครงเรื่องที่ซับซ้อนหลายชั้น ภาพยนตร์ของเขามักกล่าวถึงประเด็นทางสังคมและการเมืองด้วยวิธีการที่กระตุ้นความคิดและมีอารมณ์ขัน และได้รับผู้ติดตามในระดับสากล'
    imgheading.src = 'https://lh3.googleusercontent.com/MXrRcJ4IxDdb1QDYefwSmPWw4z1H7vQQLWExjTprdqoAnhx3BPk0ZFUJ7rxMk_-OSwoE1rN1pNfp3gIzSzxMlQ3-V-cmlUNCFXtq3MlaxyHqwd4_j_2ctJPEn_RfWx29ShS7cTXnxQ=w2400'
    header. innerHTML = '6 อันดับหนังยอดเยี่ยม ของ บง จุนโฮ'



    
    titlecontent1.innerHTML = '6. "Okja" (2007)'
    contentmovie1.innerHTML = '"Okja" เป็นภาพยนตร์นิยายวิทยาศาสตร์ผจญภัยที่กำกับโดย Bong Joon-ho และออกฉายในปี 2017 <b>ภาพยนตร์เรื่องนี้ติดตามตัวละครของ Mija เด็กสาวจากภูเขาของเกาหลีใต้ที่ออกเดินทางเพื่อช่วยเหลือ Okja ซุปเปอร์หมูที่เธอรัก จากการถูกมิรานโด คอร์เปอเรชั่น ชิงตัวไป</b> ภาพยนตร์เรื่องนี้นำแสดงโดย Ahn Seo-hyun ในบท Mija, Tilda Swinton ในบท Lucy Mirando ซึ่งเป็น CEO ของ Mirando Corporation และ Jake Gyllenhaal ในบท Johnny Wilcox ผู้จัดรายการโทรทัศน์ที่ Mirando Corporation ว่าจ้างให้โปรโมต Okja "Okja" ยังมีนักแสดงที่เป็นที่รู้จัก ได้แก่ Paul Dano, Lily Collins และ Steven Yeun "Okja" เผยแพร่ทาง Netflix และได้รับคำวิจารณ์ในเชิงบวกจากนักวิจารณ์สำหรับการผสมผสานระหว่างการเล่าเรื่องที่อบอุ่นใจและความเห็นทางสังคมเกี่ยวกับอุตสาหกรรมเนื้อสัตว์และความโลภขององค์กร ได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงรางวัล Palme dOr จากเทศกาลภาพยนตร์เมืองคานส์ และได้รับการตอบรับอย่างดีจากแฟนหนังแนวไซไฟและการผจญภัย'
    img1.src = 'https://readthecloud.co/wp-content/uploads/2017/06/living-nana-okja-6.jpg'

    titlecontent2.innerHTML = '5. "Snowpiercer" (2013)'
    contentmovie2.innerHTML = '"Snowpiercer" เป็นภาพยนตร์แอคชั่นแนวไซไฟที่กำกับโดย Bong Joon-ho และออกฉายในปี 2013 ภาพยนตร์เรื่องนี้ดำเนินเรื่องในโลกหลังหายนะที่ผู้รอดชีวิตอาศัยอยู่บนรถไฟที่วิ่งวนรอบโลก โดยมีผู้มั่งคั่งอาศัยอยู่อย่างหรูหราที่ ด้านหน้าของรถไฟและคนยากจนที่อาศัยอยู่ในความสกปรกที่อยู่ด้านหลัง<b>ภาพยนตร์เรื่องนี้ติดตามตัวละครของเคอร์ติส รับบทโดยคริส อีแวนส์ ซึ่งเป็นผู้นำการกบฏของคนจนที่ต่อต้านชนชั้นสูงผู้มั่งคั่งที่ควบคุมรถไฟ</b> ภาพยนตร์เรื่องนี้ยังนำแสดงโดยซงคังโฮ, ทิลดา สวินตัน, เจมี เบลล์ และจอห์น เฮิร์ต "Snowpiercer" ประสบความสำเร็จในเชิงพาณิชย์และมีความสำคัญและตั้งแต่นั้นมาก็ได้รับการติดตามอย่างทุ่มเท ภาพยนตร์เรื่องนี้ผสมผสานระหว่างนิยายวิทยาศาสตร์ แอ็คชั่น และบทวิจารณ์สังคมอย่างมีเอกลักษณ์ รวมถึงการแสดงที่แข็งแกร่งและรูปแบบภาพที่แปลกใหม่ ทำให้ได้รับเสียงชื่นชมอย่างกว้างขวาง มีการเปิดตัวทั้งเวอร์ชันภาษาเกาหลีและเวอร์ชันภาษาอังกฤษ และเผยแพร่ในหลายประเทศทั่วโลก'
    img2.src = 'https://www.syfy.com/sites/syfy/files/styles/blog-post-embedded--mobile/public/2020/02/snowpiercer_1280x720.jpg'

    titlecontent3.innerHTML = '4. "The Host" (2006)'
    contentmovie3.innerHTML = 'The Host เป็นภาพยนตร์สัตว์ประหลาดของเกาหลีใต้ที่ออกฉายในปี 2549 กำกับโดย Bong Joon-ho และนำแสดงโดย Song Kang-ho, Byun Hee-bong และ Go Ah-sung <b>ภาพยนตร์เกี่ยวกับครอบครัวที่อาศัยอยู่ในกรุงโซลที่ต้องทำงานร่วมกันเพื่อช่วยเหลือลูกสาวของพวกเขา ฮยอน-ซอ (รับบทโดยโก) หลังจากที่เธอถูกสิ่งมีชีวิตลึกลับที่อาศัยอยู่ในแม่น้ำฮันลักพาตัวไป ขณะที่พวกเขาตามหาฮยอนซอ ครอบครัวก็ค้นพบว่าสิ่งมีชีวิตที่เรียกว่า "โฮสต์" คือมนุษย์กลายพันธุ์ที่เกิดจากมลพิษทางเคมีในแม่น้ำ </b>The Host ได้รับเสียงวิจารณ์ชื่นชมอย่างกว้างขวางเมื่อออกฉายและประสบความสำเร็จในเชิงพาณิชย์ กลายเป็นภาพยนตร์ที่ทำรายได้สูงสุดเรื่องหนึ่งในประวัติศาสตร์เกาหลีใต้ วางจำหน่ายในกว่า 30 ประเทศและได้รับการตอบรับอย่างดีจากนานาชาติ'
    img3.src = 'https://phasrmedia.com/wp-content/uploads/2021/07/Editorial-Images-Host.png'

    titlecontent4.innerHTML = '3. "Mother" (2009)'
    contentmovie4.innerHTML = 'Mother" (หรือที่เรียกว่า "Madeo" ในภาษาเกาหลี) เป็นภาพยนตร์ระทึกขวัญแนวจิตวิทยาที่ออกฉายในปี 2009 กำกับโดย Bong Joon-ho และนำแสดงโดย Kim Hye-ja และ Won Bin <b>ภาพยนตร์เรื่องนี้บอกเล่าเรื่องราวของแม่ (Kim Hye-ja ) ซึ่งพยายามอย่างมากที่จะช่วยลูกชายที่พิการทางสมองของเธอ (วอนบิน) หลังจากที่เขาถูกกล่าวหาว่าฆ่าเด็กมัธยมปลาย เมื่อการสืบสวนคดีฆาตกรรมลึกซึ้งยิ่งขึ้น ผู้เป็นแม่ก็ยิ่งมุ่งมั่นที่จะหาตัวฆาตกรตัวจริงและพิสูจน์ความบริสุทธิ์ของลูกชาย เธอออกเดินทางเพื่อค้นพบ เปิดเผยความลับและคำโกหกที่ซ่อนอยู่ในเมืองเล็กๆ ที่พวกเขาอาศัยอยู่ เมื่อเธอเข้าใกล้ความจริงมากขึ้น เธอก็ตระหนักว่าผู้ร้ายตัวจริงอาจอยู่ใกล้บ้านมากกว่าที่เธอเคยคิด </b>"Mother" ได้รับเสียงวิจารณ์ชื่นชมอย่างกว้างขวางเมื่อออกฉาย และประสบความสำเร็จในเชิงพาณิชย์ในเกาหลีใต้ โดยทำรายได้ทะลุบ็อกซ์ออฟฟิศไปกว่า 53 ล้านเหรียญ ภาพยนตร์เรื่องนี้ยังได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงรางวัล Grand Bell Award สาขานักแสดงนำหญิงยอดเยี่ยม (คิมฮเยจา) และรางวัล Blue Dragon Film Award สาขานักแสดงนำหญิงยอดเยี่ยม (คิมฮเยจา)'
    img4.src = 'https://reviewchiangmai.com/wp-content/uploads/ABQWmother-madeo-bong-joon-ho.jpg'

    titlecontent5.innerHTML = '2. "Memories of Murder" (2003)'
    contentmovie5.innerHTML = '"Memories of Murder" เป็นละครอาชญากรรมที่กำกับโดย Bong Joon-ho และออกฉายในปี 2546 ภาพยนตร์สร้างจากเรื่องจริงของคดีฆาตกรต่อเนื่องคดีแรกในเกาหลีใต้ซึ่งเกิดขึ้นในช่วงปี 1980 <b>ภาพยนตร์ติดตามตัวละครของ Detective Park ซึ่งรับบทโดย Song Kang-ho ในขณะที่เขาสืบสวนคดีฆาตกรรมที่โหดเหี้ยมในเมืองชนบทของ Hwaseong ภาพยนตร์เรื่องนี้ ยังนำแสดงโดยแบดูนาในฐานะนักสืบหญิงสาวและพัคแฮอิลในฐานะชายท้องถิ่นที่ตกเป็นผู้ต้องสงสัยในคดีนี้</b> "Memories of Murder" ประสบความสำเร็จในเชิงพาณิชย์และประสบความสำเร็จในเกาหลีใต้ และหลังจากนั้นก็ได้รับการติดตามจากนานาชาติ เป็นที่รู้จักจากการแสดงที่แข็งแกร่ง โดยเฉพาะอย่างยิ่งโดยซงคังโฮ และการแสดงภาพชีวิตในชนบทในยุค 1980 ของเกาหลีใต้ที่ชวนดื่มด่ำและดื่มด่ำ ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงรางวัล Palme จากเทศกาลภาพยนตร์เมืองคานส์ และได้รับการยกย่องจากการแสดงภาพคดีในชีวิตจริงที่ซับซ้อนและสะเทือนขวัญได้อย่างสมจริงและน่าสนใจ'
    img5.src = 'https://www.kwanmanie.com/wp-content/uploads/2021/08/Memories-of-Murder-1-1600x900-c-default.jpeg'

    titlecontent6.innerHTML = '1. "Parasite" (2019)'
    contentmovie6.innerHTML = '"Parasite" (หรือที่รู้จักกันในชื่อ "Gisaengchung" ในภาษาเกาหลี) เป็นภาพยนตร์แนวตลกระทึกขวัญสีดำที่ออกฉายในปี 2019 กำกับโดย Bong Joon-ho และนำแสดงโดย Song Kang-ho, Lee Sun-kyun และ Cho Yeo-jeong <b>ภาพยนตร์เรื่องนี้บอกเล่าเรื่องราวของครอบครัว Kim ที่ยากจนและตกงาน ซึ่งวางแผนแทรกซึมเข้าไปในบ้านของครอบครัว Park ที่ร่ำรวยและกลายเป็นคนรับใช้ของพวกเขา เมื่อ Kim เริ่มแทรกซึมเข้าไปในชีวิตของครอบครัว Park พวกเขาก็พัวพันกับพลวัตและความลับที่ซับซ้อนมากขึ้นเรื่อยๆ ซึ่งนำไปสู่เหตุการณ์ต่างๆ มากมายที่ควบคุมไม่ได้</b>"Parasite" ได้รับเสียงวิพากษ์วิจารณ์อย่างกว้างขวางเมื่อออกฉายและประสบความสำเร็จในเชิงพาณิชย์ โดยทำรายได้ทะลุบ็อกซ์ออฟฟิศไปกว่า 266 ล้านเหรียญ ภาพยนตร์เรื่องนี้ยังคว้ารางวัลมากมาย รวมถึงรางวัล Palme  จากเทศกาลภาพยนตร์เมืองคานส์ รางวัลลูกโลกทองคำสาขาภาพยนตร์ภาษาต่างประเทศยอดเยี่ยม และรวมถึงรางวัลออสการ์ 4 รางวัล รวมถึงบทภาพยนตร์ดั้งเดิมยอดเยี่ยมและภาพยนตร์สารคดีต่างประเทศยอดเยี่ยม ภาพยนตร์เรื่องนี้ได้รับความชื่นชอบจากการผสมผสานองค์ประกอบประเภทแนวใหม่และบทวิจารณ์ที่กระตุ้นความคิดเกี่ยวกับความไม่เสมอภาคทางชนชั้นและความมั่งคั่งทำให้เป็นภาพยนตร์ที่ไม่ใช่ภาษาอังกฤษเรื่องแรกที่คว้ารางวัลนี้'
    img6.src = 'https://stylecaster.com/wp-content/uploads/2020/02/parasite.png'

  
    section7.classList.add("hidden");
    section8.classList.add("hidden");
    section9.classList.add("hidden");
    section10.classList.add("hidden");
  
    
  }
  if (design === 'david') {
    imgheaderfilmmaker.src ='https://assets.telegraphindia.com/telegraph/2022/Aug/1661605327_david-fincher.jpg'
     titlefilm.innerHTML = 'เดวิด ฟินเชอร์ (David Fincher)'
    titlefilmcontent.innerHTML = 'เดวิด ฟินเชอร์เป็นผู้กำกับภาพยนตร์ โปรดิวเซอร์ และผู้เขียนบทภาพยนตร์ชาวอเมริกัน ซึ่งเป็นที่รู้จักจากผลงานของเขาในภาพยนตร์ที่ได้รับเสียงวิจารณ์ชื่นชมมากมาย รวมถึง "Se7en," "Fight Club," "The Social Network" และ "Gone Girl" ฟินเชอร์เริ่มต้นอาชีพในวงการภาพยนตร์ด้วยการเป็นผู้กำกับมิวสิกวิดีโอ และกำกับภาพยนตร์ที่ประสบความสำเร็จหลายเรื่องในช่วงปี 1990 และ 2000 ภาพยนตร์ของเขาเป็นที่รู้จักจากภาพที่มีสไตล์ ตัวละครที่ซับซ้อน และธีมที่มืดมน นอกจากผลงานภาพยนตร์แล้ว ฟินเชอร์ยังได้กำกับซีรีส์ทางโทรทัศน์อีกหลายเรื่อง Fincher ได้รับการเสนอชื่อเข้าชิงรางวัลมากมายตลอดอาชีพของเขา รวมถึงรางวัลออสการ์หลายรางวัล และได้รับรางวัลมากมายจากผลงานภาพยนตร์และโทรทัศน์ของเขา'
    imgheading.src = 'https://lh3.googleusercontent.com/QHP0aWc4fS7VBs6qxkai_hxeHyoQbtKPxjrtvpUUkbD6RwOcJxmXLAVYnmDXXly8rT8Qo__bXXZk3hTFFO6OJqhngInd99THOK8vtAUdkfmBYb5GuuHRhXJP9zhjqOMIXQLB50Sbqw=w2400'
    header. innerHTML = '8 อันดับหนังยอดเยี่ยม ของ เดวิด ฟินเชอร์'



    
    titlecontent1.innerHTML = '8. "The Curious Case of Benjamin Button" (2008)'
    contentmovie1.innerHTML = 'The Curious Case of Benjamin Button เป็นภาพยนตร์ดราม่าแฟนตาซีปี 2008 ที่กำกับโดย David Fincher และนำแสดงโดย Brad Pitt, Cate Blanchett และ Taraji P. Henson <b>ภาพยนตร์เรื่องนี้สร้างจากเรื่องสั้นชื่อเดียวกันในปี 1922 ของเอฟ. สก็อตต์ ฟิตซ์เจอรัลด์ เนื้อเรื่องติดตามเบนจามิน บัตตัน (แสดงโดยพิตต์) ชายผู้เกิดมาแก่และอายุกลับกัน เมื่อเขาโตขึ้น เขาได้สัมผัสกับเหตุการณ์ทางประวัติศาสตร์มากมายและได้พบกับผู้คนหลากหลาย รวมถึงเดซี่ (แสดงโดยแบลนเชตต์) ผู้หญิงที่เขาตกหลุมรักด้วย</b> The Curious Case of Benjamin Button ได้รับเสียงวิจารณ์ชื่นชมอย่างกว้างขวางเมื่อเปิดตัวและประสบความสำเร็จในเชิงพาณิชย์ ได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย รวมทั้งได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 13 รางวัล และได้รับรางวัลออสการ์ 3 รางวัล ได้แก่ กำกับศิลป์ยอดเยี่ยมและวิชวลเอฟเฟกต์ยอดเยี่ยม'
    img1.src = 'https://kodungmovie.com/wp-content/uploads/2021/04/curious-1.jpg'

    titlecontent2.innerHTML = '7. "The Game" (1997)'
    contentmovie2.innerHTML = '"The Game" เป็นภาพยนตร์ระทึกขวัญแนวจิตวิทยาที่กำกับโดย David Fincher และออกฉายในปี 1997 ภาพยนตร์เรื่องนี้นำแสดงโดย Michael Douglas ในบท Nicholas Van Orton วาณิชธนกิจผู้มั่งคั่งที่ติดอยู่ในเกมลึกลับและอันตรายที่ออกแบบมาเพื่อท้าทายและทดสอบเขาถึงขีดจำกัด สติของเขา <b>เรื่องราวของ Nicholas Van Orton นำแสดงโดย Michael Douglas หนุ่มใหญ่วัย 48 ที่ประสบความสำเร็จในชีวิต แต่ขาดซึ่งความเห็นอกเห็นใจผู้อื่น และเห็นแก่ตัว จนกระทั่ง Conrad น้องชายเจ้าปัญหาของ Nicholas นำแสดงโดย Sean Penn เข้ามายินดีในงานวันเกิดพร้อมทั้งเสนอให้ Nicholas เข้าร่วมเล่นเกมกับบริษัทสันทนาการที่ชื่อ CRS</b>"The Game" เป็นที่รู้จักในเรื่องการเล่าเรื่องที่สมจริงและมีบรรยากาศ เช่นเดียวกับการแสดงที่แข็งแกร่งและการใช้เทคนิคพิเศษที่เป็นนวัตกรรมใหม่ ภาพยนตร์สำรวจประเด็นเรื่องความเชื่อใจ อัตลักษณ์ และเส้นแบ่งที่พร่ามัวระหว่างความเป็นจริงกับภาพลวงตา มันประสบความสำเร็จในเชิงพาณิชย์และที่สำคัญเมื่อเปิดตัวและตั้งแต่นั้นมาก็ได้รับการติดตามอย่างทุ่มเทจากแฟน ๆ ของหนังระทึกขวัญแนวจิตวิทยา'
    img2.src = 'https://townsquare.media/site/442/files/2017/09/the-game-movie.jpg'

    titlecontent3.innerHTML = '6. "Zodiac" (2007)'
    contentmovie3.innerHTML = '"Zodiac" เป็นภาพยนตร์ระทึกขวัญอาชญากรรมที่กำกับโดย David Fincher และออกฉายในปี 2007 <b>ภาพยนตร์สร้างจากเรื่องจริงของการตามล่าฆาตกร Zodiac ฆาตกรต่อเนื่องที่คุกคามบริเวณอ่าวซานฟรานซิสโกในช่วงปลายทศวรรษ 1960 และต้นทศวรรษ 1970 ภาพยนตร์เรื่องนี้นำแสดงโดย Jake Gyllenhaal ในบท Robert Graysmith นักเขียนการ์ตูนเรื่อง San Francisco Chronicle ที่หมกมุ่นอยู่กับคดีนี้ และ Mark Ruffalo ในบท Dave Toschi นักสืบในคดีนี้ ภาพยนตร์เรื่องนี้มี Robert Downey Jr. เป็น Paul Avery นักข่าวอาชญากรรมของ Chronicle และ Anthony Edwards เป็นสารวัตร William Armstrong ซึ่งเป็นผู้นำการสืบสวน</b> "Zodiac" เป็นที่รู้จักจากการแสดงภาพการตามล่าหานักฆ่า Zodiac ที่สมจริงและได้บรรยากาศ ตลอดจนการแสดงที่แข็งแกร่งและการใส่ใจในรายละเอียด ภาพยนตร์เรื่องนี้สำรวจธีมของความหลงใหล การหลอกลวง และเส้นแบ่งที่พร่ามัวระหว่างความดีและความชั่ว '
    img3.src = 'https://m.media-amazon.com/images/M/MV5BODY0MDc0MDE0Nl5BMl5BanBnXkFtZTcwOTU5NDIyMw@@._V1_.jpg'

    titlecontent4.innerHTML = '5. "Gone Girl" (2014) '
    contentmovie4.innerHTML = '""Gone Girl" เป็นภาพยนตร์ระทึกขวัญแนวจิตวิทยาที่กำกับโดยเดวิด ฟินเชอร์และออกฉายในปี 2014 <b>ภาพยนตร์เรื่องนี้สร้างจากนวนิยายขายดีในชื่อเดียวกันของกิลเลียน ฟลินน์ ผู้เขียนบทภาพยนตร์เรื่องนี้ด้วย นำแสดงโดย Ben Affleck ในบท Nick Dunne ชายที่ภรรยาของ Amy ซึ่งรับบทโดย Rosamund Pike หายตัวไปในวันครบรอบแต่งงานปีที่ 5 ของพวกเขา เมื่อการสืบสวนคดีการหายตัวไปของเอมี่เข้มข้นขึ้น นิคกลายเป็นผู้ต้องสงสัยคนสำคัญ และความลับดำมืดจากอดีตของพวกเขาก็ถูกเปิดเผย</b> ภาพยนตร์เรื่องนี้ประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิจารณ์อย่างมากเมื่อออกฉาย และได้รับแฟนหนังระทึกขวัญแนวจิตวิทยาที่ติดตามอย่างเหนียวแน่น สำรวจประเด็นที่ซับซ้อนและน่าวิตกกังวล เช่น การแต่งงาน การหลอกลวง และด้านมืดของธรรมชาติมนุษย์'
    img4.src = 'https://api.time.com/wp-content/uploads/2014/07/gone-girl.jpg'

    titlecontent5.innerHTML = '4. "The Girl with the Dragon Tattoo" (2011)'
    contentmovie5.innerHTML = '"The Girl with the Dragon Tattoo" เป็นภาพยนตร์ระทึกขวัญลึกลับที่กำกับโดย David Fincher และออกฉายในปี 2011 ภาพยนตร์เรื่องนี้สร้างจากนวนิยายขายดีในชื่อเดียวกันของนักเขียนชาวสวีเดน Stieg Larsson และเป็นภาคแรกใน "Millennium" ชุด. <b>ภาพยนตร์เรื่องนี้นำแสดงโดย Daniel Craig ในบท Mikael Blomkvist นักข่าวที่ได้รับการว่าจ้างจากนักอุตสาหกรรมผู้มั่งคั่งให้สืบสวนคดีฆาตกรรมอายุหลายสิบปี และ Rooney Mara ในบท Lisbeth Salander แฮ็กเกอร์คอมพิวเตอร์ที่กลายมาเป็นคู่หูของ Blomkvist ในการสืบสวน</b> ภาพยนตร์เรื่องนี้ยังนำแสดงโดยนักแสดงที่มีชื่อเสียง ได้แก่ คริสโตเฟอร์ พลัมเมอร์, สเตลแลน สการ์สการ์ด และโรบิน ไรท์"The Girl with the Dragon Tattoo" เป็นที่รู้จักจากการแสดงภาพความลึกลับที่ชวนดื่มด่ำและบรรยากาศ ตลอดจนการแสดงที่แข็งแกร่งและความใส่ใจในรายละเอียด ภาพยนตร์สำรวจประเด็นเรื่องความเชื่อใจ อัตลักษณ์ และเส้นแบ่งที่พร่ามัวระหว่างความถูกและผิด'
    img5.src = 'https://m.media-amazon.com/images/M/MV5BMTY2MzQwODMxN15BMl5BanBnXkFtZTcwNjQzNDAxNw@@._V1_.jpg'

    titlecontent6.innerHTML = '3. "The Social Network" (2010)' 
    contentmovie6.innerHTML = '"The Social Network" เป็นละครชีวประวัติที่กำกับโดย David Fincher และออกฉายในปี 2010 <b>ภาพยนตร์เรื่องนี้บอกเล่าเรื่องราวของการสร้างแพลตฟอร์มโซเชียลมีเดีย Facebook และการต่อสู้ทางกฎหมายที่ตามมา</b> ภาพยนตร์เรื่องนี้นำแสดงโดย Jesse Eisenberg ในบท Mark Zuckerberg ผู้ร่วมก่อตั้งและ CEO ของ Facebook และ Andrew Garfield ในบท Eduardo Saverin หุ้นส่วนทางธุรกิจของ Zuckerberg และผู้ร่วมก่อตั้ง Facebook ภาพยนตร์เรื่องนี้ยังนำแสดงโดยนักแสดงที่มีชื่อเสียงซึ่งรวมถึง Justin Timberlake, Armie Hammer และ Rashida Jones "โซเชียลเน็ตเวิร์ก" เป็นที่รู้จักจากการแสดงภาพบรรยากาศในยุคแรกๆ ของ Facebook ที่ชวนดื่มด่ำ ตลอดจนประสิทธิภาพที่โดดเด่นและความใส่ใจในรายละเอียด ภาพยนตร์สำรวจธีมของมิตรภาพ ความภักดี และแรงผลักดันสู่ความสำเร็จ'
    img6.src = 'https://media.timeout.com/images/68649/750/422/image.jpg'
    
    titlecontent7.innerHTML = '2. "Fight Club" (1999)' 
    contentmovie7.innerHTML = '"Fight Club" เป็นภาพยนตร์ตลกมืดที่กำกับโดย David Fincher และออกฉายในปี 1999 <b>ภาพยนตร์เรื่องนี้สร้างจากนวนิยายชื่อเดียวกันของ Chuck Palahniuk และแสดงโดย Brad Pitt ในบท Tyler Durden ชายผู้ลึกลับและมีเสน่ห์ที่ก่อตั้งชมรมต่อสู้ใต้ดิน เพื่อเป็นการระบายความคับข้องใจของเขาที่มีต่อสังคมสมัยใหม่ และเอ็ดเวิร์ด นอร์ตัน เป็นผู้บรรยาย พนักงานออฟฟิศที่ไม่แยแสซึ่งถูกดึงดูดเข้าสู่โลกของไฟท์คลับ</b> ภาพยนตร์เรื่องนี้ยังนำแสดงโดยนักแสดงที่มีชื่อเสียงซึ่งรวมถึงเฮเลนา บอนแฮม คาร์เตอร์ในบทมาร์ลา ซิงเกอร์ ผู้หญิงที่เข้าไปพัวพันกับไฟต์คลับ "Fight Club" เป็นที่รู้จักในเรื่องการเล่าเรื่องที่แหวกแนวและขัดแย้ง รวมถึงการแสดงที่แข็งแกร่งและการใช้เทคนิคพิเศษที่แปลกใหม่ ภาพยนตร์เรื่องนี้สำรวจธีมของความเป็นชาย ตัวตน และเส้นแบ่งที่พร่ามัวระหว่างความเป็นจริงกับภาพลวงตา'
    img7.src = 'https://thescriptlab.com/wp-content/uploads/2011/08/fight-club-8sb.jpg'
    
    titlecontent8.innerHTML = '1. "Se7en" (1995)' 
    contentmovie8.innerHTML = '"Se7en" เป็นภาพยนตร์ระทึกขวัญแนวจิตวิทยาที่กำกับโดย David Fincher และออกฉายในปี 1995 <b>ภาพยนตร์เรื่องนี้นำแสดงโดย Brad Pitt ในบทนักสืบ David Mills นักสืบที่เพิ่งเข้ามาในเมืองที่เต็มไปด้วยฆาตกรต่อเนื่องที่ใช้บาปมหันต์เจ็ดประการเป็นวิธีการดำเนินการของเขา และ มอร์แกน ฟรีแมน รับบทเป็น วิลเลียม ซอมเมอร์เซ็ต นักสืบผู้ช่ำชองซึ่งกำลังจะเกษียณในอีกหนึ่งสัปดาห์ และได้รับมอบหมายให้ช่วยมิลส์ไขคดีนี้</b> ภาพยนตร์เรื่องนี้ยังนำแสดงโดยนักแสดงที่มีชื่อเสียงซึ่งรวมถึง Gwyneth Paltrow ในบท Tracy Mills ภรรยาของ David Mills และ Kevin Spacey ในบท John Doe ฆาตกรต่อเนื่อง "Se7en" เป็นที่รู้จักจากการแสดงภาพการตามล่าฆาตกรต่อเนื่องที่ชวนดื่มด่ำและบรรยากาศ รวมถึงการแสดงที่แข็งแกร่งและความใส่ใจในรายละเอียด ภาพยนตร์สำรวจประเด็นเรื่องศีลธรรม ความยุติธรรม และเส้นแบ่งที่พร่ามัวระหว่างความดีและความชั่ว'
    img8.src = 'https://m.media-amazon.com/images/M/MV5BMjE2NDc0NjkwNl5BMl5BanBnXkFtZTcwOTAzNzY3Mw@@._V1_.jpg'


    section9.classList.add("hidden");
    section10.classList.add("hidden");
  
    
  }
  if (design === 'nolan') {
    imgheaderfilmmaker.src ='https://www.hollywoodreporter.com/wp-content/uploads/2021/09/Christopher-Nolan-attends-the-screening-of-2001-A-Space-Odyssey-Getty-H-2021.jpg?w=1296'
     titlefilm.innerHTML = 'คริสโตเฟอร์ โนแลน (Christopher Nolan)'
    titlefilmcontent.innerHTML = 'คริสโตเฟอร์ โนแลนเป็นผู้สร้างภาพยนตร์ชาวอังกฤษ-อเมริกันที่กำกับภาพยนตร์ที่ประสบความสำเร็จอย่างสูงและได้รับเสียงวิจารณ์ชื่นชมมากมาย เขาเกิดที่ลอนดอน ประเทศอังกฤษ ในปี 1970 และเติบโตในย่านชานเมืองของลอนดอน เขาเรียนวรรณคดีอังกฤษที่มหาวิทยาลัยคอลเลจลอนดอนก่อนจะไปโรงเรียนภาพยนตร์ โนแลนเริ่มต้นอาชีพของเขาในการสร้างภาพยนตร์สั้นและภาพยนตร์อิสระ และความสำเร็จในเชิงพาณิชย์ครั้งใหญ่เรื่องแรกของเขาคือภาพยนตร์เขย่าขวัญแนวจิตวิทยาเรื่อง "Memento" (2000) ซึ่งได้รับการยกย่องจากโครงสร้างการเล่าเรื่องที่แปลกใหม่และไม่เชิงเส้น เขาได้กำกับภาพยนตร์บล็อกบัสเตอร์หลายเรื่อง รวมถึงไตรภาค "Dark Knight", "Inception," "Dunkirk" และ "Tenet" โนแลนเป็นที่รู้จักในเรื่องการเล่าเรื่องที่ทะเยอทะยานและสร้างสรรค์ รวมถึงการใช้เอฟเฟ็กต์ที่ใช้งานได้จริงและฉากที่ซับซ้อน เขาได้รับการยกย่องอย่างกว้างขวางว่าเป็นหนึ่งในผู้สร้างภาพยนตร์ที่มีความสามารถและมีอิทธิพลมากที่สุดในรุ่นของเขา และได้รับรางวัลมากมายจากผลงานของเขา'
    imgheading.src = 'https://lh3.googleusercontent.com/13g7RRj57BpshXo9peITy7f-u-ORcXuP_ZWAVA5h3RXjS1rDT3WuYKO5DNIku1rERS3dDGtt-LZ6RRDi_3rxZ4V5pmGEhqbCjYGnCH7NuMqDIEcj0C-i_w-_pEI-LdfDRpAMUaOpjg=w2400'
    header. innerHTML = '8 อันดับหนังยอดเยี่ยม ของ คริสโตเฟอร์ โนแลน'


    titlecontent1.innerHTML = '8. "INSOMNIA " (2002)'
    contentmovie1.innerHTML = '"Insomnia" เป็นภาพยนตร์ระทึกขวัญแนวอาชญากรรมที่กำกับโดยคริสโตเฟอร์ โนแลน และออกฉายในปี 2002 <b>ภาพยนตร์เรื่องนี้นำแสดงโดยอัล ปาชิโนในบทนักสืบวิล ดอร์เมอร์ นักสืบที่เข้าไปพัวพันกับการสืบสวนคดีฆาตกรรมในขณะที่ต้องต่อสู้กับโรคนอนไม่หลับระหว่างการเดินทางไปอลาสก้า</b> ภาพยนตร์เรื่องนี้ยังนำเสนอการแสดงที่ยอดเยี่ยมของโรบิน วิลเลียมส์ ในฐานะผู้ต้องสงสัยคนสำคัญในคดีฆาตกรรม และฮิลารี สแวงก์ในฐานะนักสืบท้องถิ่น "INSOMNIA" เป็นที่รู้จักจากการแสดงภาพทิวทัศน์ของอลาสก้าที่ชวนดื่มด่ำและดื่มด่ำ รวมถึงการสำรวจแก่นเรื่องศีลธรรม ความผิด และเส้นแบ่งที่พร่ามัวระหว่างความดีและความชั่ว ภาพยนตร์เรื่องนี้ประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิจารณ์อย่างมากเมื่อออกฉาย  ได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงรางวัลออสการ์สาขาภาพยนตร์ยอดเยี่ยม'
    img1.src = 'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyMDAzN15BMl5BanBnXkFtZTcwOTAwNTkxNA@@._V1_.jpg'

    
    titlecontent2.innerHTML = '7. "TENET" (2020)'
    contentmovie2.innerHTML = '"Tenet" เป็นภาพยนตร์แอคชั่นแนวไซไฟที่กำกับโดยคริสโตเฟอร์ โนแลน และออกฉายในปี 2020 <b>ภาพยนตร์เรื่องนี้นำแสดงโดยจอห์น เดวิด วอชิงตันในฐานะตัวเอก สายลับที่ได้รับมอบหมายให้ควบคุมเวลาเพื่อป้องกันหายนะทั่วโลก </b>ภาพยนตร์เรื่องนี้ยังประกอบด้วยทีมนักแสดง ได้แก่ Robert Pattinson, Elizabeth Debicki, Dimple Kapadia และ Michael Caine เป็นต้น "Tenet" เป็นที่รู้จักในเรื่องการเล่าเรื่องที่ซับซ้อนและสร้างสรรค์ รวมถึงเอฟเฟกต์พิเศษและฉากแอ็คชั่นที่น่าประทับใจ ภาพยนตร์สำรวจธีมของเวลา'
    img2.src = 'https://thefilmstage.com/wp-content/uploads/2019/12/Tenet-1-759x500.jpg'

    titlecontent3.innerHTML = '6. "MEMENTO" (2000)'
    contentmovie3.innerHTML = '"Memento" เป็นภาพยนตร์ระทึกขวัญแนวจิตวิทยาแนวนีโอนัวร์ที่กำกับโดยคริสโตเฟอร์ โนแลน และออกฉายในปี 2000 <b>ภาพยนตร์เรื่องนี้นำแสดงโดยกาย เพียร์ซ รับบทเป็นลีโอนาร์ด เชลบี ชายผู้ไม่สามารถสร้างความทรงจำใหม่หลังจากเหตุการณ์ที่กระทบกระเทือนจิตใจ</b> ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากโครงสร้างการเล่าเรื่องที่สร้างสรรค์และไม่เชิงเส้น ซึ่งเล่าตามลำดับเวลาย้อนกลับ ภาพยนตร์เรื่องนี้ยังนำเสนอการแสดงที่ยอดเยี่ยมของ Carrie-Anne Moss และ Joe Pantoliano และอื่น ๆ"Memento" เป็นการสำรวจความทรงจำ ตัวตน และเส้นแบ่งที่พร่ามัวระหว่างความเป็นจริงกับภาพลวงตาที่กระตุ้นความคิดและดื่มด่ำ ภาพยนตร์เรื่องนี้ได้รับรางวัล BAFTA Award สาขาบทภาพยนตร์ดั้งเดิมยอดเยี่ยม และได้รับการเสนอชื่อเข้าชิงรางวัลอื่นๆ อีกหลายรางวัล'
    img3.src = 'https://pbs.twimg.com/media/E0XSMS-XsAIDDXL.jpg'

    titlecontent4.innerHTML = '5. "DUNKIRK" (2017)'
    contentmovie4.innerHTML = '"Dunkirk" เป็นภาพยนตร์สงครามอิงประวัติศาสตร์ที่กำกับโดย Christopher Nolan และออกฉายในปี 2017 <b>ภาพยนตร์เรื่องนี้เกิดขึ้นระหว่างการอพยพของชาว Dunkirk ในช่วงสงครามโลกครั้งที่ 2 และติดตามเรื่องราวของทหารและพลเรือนหลายคนขณะที่พวกเขาพยายามหลบหนีการรุกรานฝรั่งเศสของเยอรมัน</b> ภาพยนตร์เรื่องนี้นำแสดงโดยฟิออน ไวท์เฮด, ทอม กลินน์-คาร์นีย์ และแจ็ค โลว์เดน รวมถึงนักแสดงสมทบซึ่งรวมถึงเคนเนธ บรานาห์ มาร์ค ไรแลนซ์ และทอม ฮาร์ดี<br>"ดันเคิร์ก" เป็นที่รู้จักจากการแสดงภาพบรรยากาศการอพยพของชาวดันเคิร์กที่ชวนดื่มด่ำและการสำรวจธีมของการเอาชีวิตรอด ความกล้าหาญ และต้นทุนของมนุษย์ในสงคราม ภาพยนตร์เรื่องนี้ได้รับการยกย่องจากความเชี่ยวชาญด้านเทคนิคและการแสดงที่แข็งแกร่ง และประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิจารณ์เมื่อออกฉาย ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์หลายรางวัล รวมถึงภาพยนตร์ยอดเยี่ยม และคว้าสามรางวัล ได้แก่ การตัดต่อเสียงยอดเยี่ยมและการผสมเสียงยอดเยี่ยม'
    img4.src = 'https://thestandard.co/wp-content/uploads/2017/07/BB-TT-0006.jpg?x18862'

    titlecontent5.innerHTML = '4. "THE PRESTIGE" (2006)'
    contentmovie5.innerHTML = '"The Prestige" เป็นภาพยนตร์ระทึกขวัญแนวลึกลับที่กำกับโดยคริสโตเฟอร์ โนแลนและออกฉายในปี 2549 <b>ภาพยนตร์เรื่องนี้นำแสดงโดยคริสเตียน เบลและฮิวจ์ แจ็คแมนในฐานะนักมายากลคู่ปรับในลอนดอนยุควิคตอเรียนที่เข้าไปพัวพันกับการแข่งขันที่อันตรายถึงชีวิต</b>  "The Prestige" เป็นที่รู้จักจากการแสดงภาพโลกแห่งเวทมนตร์ที่ชวนดื่มด่ำและดื่มด่ำ รวมถึงการสำรวจธีมของความหลงใหล ความลับ และเส้นแบ่งที่พร่ามัวระหว่างความเป็นจริงกับภาพลวงตา ภาพยนตร์นี้ได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงรางวัล BAFTA สาขาบทภาพยนตร์ดั้งเดิมยอดเยี่ยม'
    img5.src = 'https://m.media-amazon.com/images/M/MV5BODc0MzkxOTg5N15BMl5BanBnXkFtZTcwODkzNDMyMw@@._V1_.jpg'

    titlecontent6.innerHTML = '3. "INCEPTION" (2010)'
    contentmovie6.innerHTML = '"Inception" เป็นภาพยนตร์แอคชั่นแนวไซไฟที่กำกับโดยคริสโตเฟอร์ โนแลน และออกฉายในปี 2010 <b>ภาพยนตร์เรื่องนี้นำแสดงโดยลีโอนาร์โด ดิคาปริโอ ในบทคอบบ์ หัวขโมยที่เชี่ยวชาญในการเข้าไปในความฝันของผู้อื่นเพื่อปลูกความคิดในจิตใต้สำนึกของพวกเขา คอบบ์ได้รับคัดเลือกจากนักธุรกิจลึกลับให้ทำภารกิจที่ดูเหมือนจะเป็นไปไม่ได้ นั่นคือการปลูกฝังแนวคิดในความคิดของผู้บริหารองค์กรในขณะที่เขากำลังฝันอยู่</b> ภาพยนตร์เรื่องนี้ยังประกอบด้วยทีมนักแสดงซึ่งรวมถึงเอลเลน เพจ, ทอม ฮาร์ดี, เคน วาตานาเบะ และโจเซฟ กอร์ดอน-เลวิตต์ และอื่นๆ "Inception" เป็นที่รู้จักในเรื่องการเล่าเรื่องที่ซับซ้อนและแปลกใหม่ รวมถึงเอฟเฟกต์พิเศษและฉากแอ็คชั่นที่น่าประทับใจ ภาพยนตร์เรื่องนี้สำรวจธีมของพลังแห่งจิตใจ เส้นแบ่งที่พร่ามัวระหว่างความเป็นจริงกับภาพลวงตา ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์หลายรางวัล รวมถึงภาพยนตร์ยอดเยี่ยม และได้รับรางวัลสี่รางวัล ได้แก่ กำกับภาพยอดเยี่ยมและตัดต่อเสียงยอดเยี่ยม'
    img6.src = ' https://m.media-amazon.com/images/M/MV5BMTMxNDExNzM4MV5BMl5BanBnXkFtZTcwNDY0OTk1Mw@@._V1_.jpg'

    titlecontent7.innerHTML = '2. "insterstellar" (2014)'
    contentmovie7.innerHTML = '"Interstellar" เป็นภาพยนตร์แนววิทยาศาสตร์ที่กำกับโดยคริสโตเฟอร์ โนแลน และออกฉายในปี 2014 <b>ภาพยนตร์เรื่องนี้นำแสดงโดยแมทธิว แมคคอนาเฮย์ในบทคูเปอร์ อดีตนักบินที่ได้รับคัดเลือกจากทีมนักวิทยาศาสตร์ให้เดินทางผ่านรูหนอนเพื่อค้นหาบ้านใหม่สำหรับมนุษยชาติ</b> "Interstellar" เป็นที่รู้จักในด้านความทะเยอทะยานและดื่มด่ำไปกับการเดินทางในอวกาศและการสำรวจความรัก การเสียสละ และพลังแห่งจิตวิญญาณมนุษย์ ภาพยนตร์เรื่องนี้ได้รับการยกย่องจากความเชี่ยวชาญด้านเทคนิคและการแสดงที่แข็งแกร่ง และประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิจารณ์เมื่อออกฉาย ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์หลายรางวัล รวมถึงวิชวลเอฟเฟกต์ยอดเยี่ยมและเพลงประกอบภาพยนตร์ยอดเยี่ยม และได้รับรางวัลออสการ์สาขาวิชวลเอฟเฟกต์ยอดเยี่ยม'
    img7.src = 'https://www.salika.co/wp-content/uploads/2020/09/christopher-nolan-inception-interstellar-0.jpg'

    titlecontent8.innerHTML = '1. "The Dark Knight Trilogy" 2005-2012 ' 
    contentmovie8.innerHTML = 'ไตรภาค "Dark Knight" เป็นซีรีส์ภาพยนตร์ซูเปอร์ฮีโร่ที่กำกับโดยคริสโตเฟอร์ โนแลน และออกฉายระหว่างปี 2005 ถึง 2012 ไตรภาคประกอบด้วยภาพยนตร์ต่อไปนี้ <br><b>1. "Batman Begins" (2005) - ภาพยนตร์เรื่องนี้ติดตามตัวละครของ Batman ขณะที่เขาฝึกฝนกับนินจาและต่อสู้กับอาชญากรรมในเมือง Gotham</b> ภาพยนตร์เรื่องนี้นำแสดงโดยคริสเตียน เบลในบทแบทแมน และมีการแสดงที่แข็งแกร่งโดยเลียม นีสัน, เคธี่ โฮล์มส์ และไมเคิล เคน และอื่น ๆ อีกมากมาย<br><b>2. "The Dark Knight" (2008) - ภาพยนตร์เรื่องนี้ติดตามตัวละครของแบทแมนในขณะที่เขาต่อสู้กับโจ๊กเกอร์จอมวายร้าย</b>ที่รับบทโดย ฮีธ เลดเจอร์ <br><b>3. "The Dark Knight Rises" (2012) - ภาพยนตร์เรื่องนี้ติดตามตัวละครของ Batman ในขณะที่เขาต่อสู้กับ Bane ที่ชั่วร้ายและเผชิญกับความท้าทายของความชราและการสูญเสีย</b> ภาพยนตร์เรื่องนี้นำแสดงโดย Christian Bale ในบท Batman และมีการแสดงที่แข็งแกร่งโดย Tom Hardy ในบท Bane, Anne Hathaway ในบท Catwoman และ Michael Caine ในบท Alfred เป็นต้น<br>ภาพยนตร์ไตรภาค "Dark Knight" เป็นที่รู้จักในเรื่องการเล่าเรื่องที่ซับซ้อนและกระตุ้นความคิด ตลอดจนการแสดงที่แข็งแกร่งและความเชี่ยวชาญด้านเทคนิค ภาพยนตร์เรื่องนี้ประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิพากษ์วิจารณ์อย่างมากเมื่อออกฉาย และได้รับการติดตามอย่างเหนียวแน่นจากบรรดาแฟนภาพยนตร์ซูเปอร์ฮีโร่ ภาพยนตร์ไตรภาคนี้ได้รับรางวัลมากมาย รวมถึงรางวัลออสการ์สาขานักแสดงสมทบชายยอดเยี่ยมจากการแสดงของฮีธ เลดเจอร์ใน "The Dark Knight" และการตัดต่อเสียงยอดเยี่ยมจาก "The Dark Knight Rises"'
    img8.src = 'https://cdn.vox-cdn.com/thumbor/DGlmxfKfBTq_cR16Hg81YppljtA=/0x0:2000x1083/1200x675/filters:focal(843x115:1163x435)/cdn.vox-cdn.com/uploads/chorus_image/image/70477179/DKR1.0.jpeg'

    section9.classList.add("hidden");
    section10.classList.add("hidden");


  
    
  }
  if (design === 'steven') {
    imgheaderfilmmaker.src ='https://media.vanityfair.com/photos/6048f2a19c91611f734cc169/master/w_2560%2Cc_limit/GettyImages-622342830.jpg'
     titlefilm.innerHTML = 'สตีเวน สปีลเบิร์ก (Steven Spielberg)'
    titlefilmcontent.innerHTML = 'Steven Spielberg เป็นผู้สร้างภาพยนตร์ชาวอเมริกันที่ได้รับการยกย่องอย่างกว้างขวางว่าเป็นหนึ่งในผู้กำกับที่มีอิทธิพลและประสบความสำเร็จมากที่สุดในประวัติศาสตร์ภาพยนตร์ เขาเกิดที่เมืองซินซินนาติ รัฐโอไฮโอ ในปี 2489 และเริ่มสร้างหนังสั้นในขณะที่ยังเรียนอยู่ชั้นมัธยมปลาย ต่อมาเขาเข้าเรียนที่ California State University, Long Beach ซึ่งเขาศึกษาเกี่ยวกับการผลิตภาพยนตร์และรายการโทรทัศน์ สปีลเบิร์กได้รับการยอมรับอย่างกว้างขวางเป็นครั้งแรกด้วยการเปิดตัวภาพยนตร์เรื่อง "Jaws" ในปี 1975 ซึ่งกลายเป็นภาพยนตร์ยอดฮิตและสร้างมาตรฐานให้กับภาพยนตร์ฟอร์มยักษ์ในช่วงฤดูร้อนยุคใหม่ เขายังคงกำกับภาพยนตร์ที่ประสบความสำเร็จอย่างสูงและได้รับเสียงวิจารณ์ชื่นชมอีกหลายเรื่อง เช่น "E.T. the Extra-Terrestrial," "Indiana Jones," "Jurassic Park" และ "Schindler is List" <br>สปีลเบิร์กเป็นที่รู้จักจากความสามารถในการสร้างเรื่องราวที่น่าสนใจและสะท้อนอารมณ์ ตลอดจนการใช้เทคนิคพิเศษและเทคนิคพิเศษที่ล้ำสมัย เขาได้รับรางวัลมากมายจากผลงานของเขา รวมถึงรางวัลออสการ์สาขาผู้กำกับยอดเยี่ยม 3 รางวัล และได้รับการเสนอชื่อเข้าชิงรางวัลอื่นๆ อีกมากมาย'
    imgheading.src = 'https://lh3.googleusercontent.com/aF9WboklQhrw_rFWA3ZiiMJDMPTzDeoW7yjZvuMwpLs24EYOCSCBhNQynkCpA0j45Jy5kaWz02FCzHxlLthRW5Hg2g-4ZbE27JmH6Q09u_uL2LT33B6dKOBEiobws6IEpSbRELd9Lw=w2400'
    header. innerHTML = '7 อันดับหนังยอดเยี่ยม ของ สตีเวน สปีลเบิร์ก'


    titlecontent1.innerHTML = '7. "Catch Me If You Can" (2002) '
    contentmovie1.innerHTML = '"Catch Me If You Can" เป็นภาพยนตร์อาชญากรรมเกี่ยวกับชีวประวัติของชาวอเมริกัน ออกฉายปี 2545 กำกับโดยสตีเวน สปีลเบิร์ก และเขียนบทโดยเจฟฟ์ นาธานสัน <b>ภาพยนตร์เรื่องนี้สร้างจากเรื่องราวในชีวิตจริงของแฟรงค์ อบาเนล นักต้มตุ๋นหนุ่มและนักต้มตุ๋นที่สามารถผ่านเช็คฉ้อฉลมูลค่าหลายล้านดอลลาร์ในช่วงปี 1960</b> ภาพยนตร์เรื่องนี้นำแสดงโดยลีโอนาร์โด ดิคาปริโอในบทแฟรงก์ อบาเนลและทอม แฮงค์ในฐานะเจ้าหน้าที่เอฟบีไอคาร์ล ฮันแรตตี ผู้ซึ่งได้รับมอบหมายให้ติดตามและจับกุมอบาเกล ภาพยนตร์เรื่องนี้ยังนำแสดงโดยคริสโตเฟอร์ วอลเคน, มาร์ติน ชีน และนาตาลี เบย์ "Catch Me If You Can" เป็นภาพยนตร์ที่สนุกสนานและสนุกสนานที่บอกเล่าเรื่องราวที่ไม่ธรรมดาของอาชีพอาชญากรของ Frank Abagnale และการถูก FBI จับในที่สุด ภาพยนตร์เรื่องนี้ได้รับคำวิจารณ์ในเชิงบวกโดยทั่วไปเมื่อออกฉายและได้รับการเสนอชื่อเข้าชิงหลายรางวัล รวมถึงรางวัลออสการ์สองรางวัล'
    img1.src = 'https://i.ytimg.com/vi/lN6Irv9tnYI/maxresdefault.jpg'

    
    titlecontent2.innerHTML = '6. "Jurassic Park" (1993)'
    contentmovie2.innerHTML = '"จูราสสิค พาร์ค" เป็นภาพยนตร์ไซไฟผจญภัยปี 1993 ที่กำกับโดยสตีเวน สปีลเบิร์ก และสร้างจากนวนิยายชื่อเดียวกันของไมเคิล ไครช์ตัน <b>ภาพยนตร์ติดตามกลุ่มนักวิทยาศาสตร์ที่ได้รับเชิญให้ไปเยี่ยมชมสวนสนุกที่สร้างขึ้นบนเกาะที่ซึ่งไดโนเสาร์ที่ได้รับการดัดแปลงพันธุกรรมได้ฟื้นคืนชีพขึ้นมา </b>ภาพยนตร์เรื่องนี้นำแสดงโดยแซม นีล, ลอร่า เดิร์น, เจฟฟ์ โกลด์บลัม และริชาร์ด แอตเทนโบโรห์ และนำเสนอเทคนิคพิเศษที่แปลกใหม่ในช่วงเวลาที่ออกฉาย ขณะที่นักวิทยาศาสตร์สำรวจเกาะและโต้ตอบกับไดโนเสาร์ พวกเขาพบกับอันตรายหลายอย่างและต้องต่อสู้เพื่อเอาชีวิตรอด ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากฉากแอ็คชั่นที่น่าตื่นเต้น ตัวละครที่น่าจดจำ และสเปเชียลเอฟเฟ็กต์ที่แหวกแนว ซึ่งทำให้เรื่องนี้ได้รับรางวัลออสการ์ถึงสามรางวัล "จูราสสิค พาร์ค" ประสบความสำเร็จอย่างมากในบ็อกซ์ออฟฟิศเมื่อออกฉาย'
    img2.src = 'https://loudandclearreviews.com/wp-content/uploads/2022/06/jurassic-park-film-post-cover.jpg.webp'

    titlecontent3.innerHTML = '5. "Indiana Jones and the Raiders of the Lost Ark" (1981) '
    contentmovie3.innerHTML = '"อินเดียน่า โจนส์ แอนด์ เดอะ เรดเดอร์ส ออฟ เดอะ ลอสต์ อาร์ค" เป็นภาพยนตร์แอคชั่นผจญภัยปี 1981 กำกับโดยสตีเวน สปีลเบิร์ก และอำนวยการสร้างโดยจอร์จ ลูคัส ภาพยนตร์เรื่องนี้นำแสดงโดยแฮร์ริสัน ฟอร์ดในบทอินเดียน่า โจนส์ นักโบราณคดีที่เริ่มต้นภารกิจสุดอันตรายเพื่อค้นหาหีบพันธสัญญา ซึ่งเป็นโบราณวัตถุในพระคัมภีร์ไบเบิลที่เชื่อว่ามีพลังมหาศาล <b>ภาพยนตร์เรื่องนี้ติดตามอินเดียน่า โจนส์ ในขณะที่เขาเดินทางไปยังสถานที่แปลกใหม่และพบกับอุปสรรคและศัตรูมากมาย รวมถึงทหารนาซีกลุ่มหนึ่งที่กำลังค้นหาหีบนั้นด้วย ระหว่างทาง เขาได้พบกับตัวละครที่น่าจดจำมากมายและพบกับตัวละครมากมาย ฉากแอ็คชั่นอันโด่งดัง รวมถึงฉากที่น่าจดจำ<b>'
    img3.src = 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fea6dd27c-4454-11e6-a45d-8299bb50a973.jpg?crop=2581%2C1721%2C182%2C113'

    titlecontent4.innerHTML = '4. "E.T. the Extra-Terrestrial" (1982)'
    contentmovie4.innerHTML = '"E.T. the Extra-Terrestrial" เป็นภาพยนตร์ไซไฟปี 1982 ที่กำกับโดยสตีเวน สปีลเบิร์ก และเขียนบทโดยเมลิสซา มาธิสัน <b>ภาพยนตร์เรื่องนี้บอกเล่าเรื่องราวของเด็กหนุ่มชื่อเอลเลียตที่ได้ผูกมิตรกับมนุษย์ต่างดาวที่เป็นมิตรซึ่งถูกทิ้งไว้บนโลกและกำลังพยายามหาทางกลับบ้าน</b> ภาพยนตร์เรื่องนี้นำแสดงโดย Henry Thomas ในบท Elliott และ Drew Barrymore ในบท Gertie น้องสาวของเขา และมีการแสดงที่น่าจดจำโดยให้เสียง Dee Wallace ในฐานะแม่ของพวกเขา ภาพยนตร์เรื่องนี้ยังนำเสนอเทคนิคพิเศษที่แปลกใหม่ในช่วงเวลาที่ออกฉาย "E.T. the Extra-Terrestrial" ประสบความสำเร็จอย่างมากในบ็อกซ์ออฟฟิศเมื่อเปิดตัว และตั้งแต่นั้นมาก็กลายเป็นนิยายวิทยาศาสตร์คลาสสิก ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 9 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยม และได้รับรางวัล 4 รางวัล รวมถึงสาขาวิชวลเอฟเฟกต์ยอดเยี่ยม ภาพยนตร์เรื่องนี้มีผลกระทบยาวนานต่อวัฒนธรรมสมัยนิยมและกลายเป็นภาพยนตร์ที่เป็นที่รักมากที่สุดเรื่องหนึ่งตลอดกาล'
    img4.src = 'https://m.media-amazon.com/images/M/MV5BMjQ3NzgyODA1NF5BMl5BanBnXkFtZTgwNTM0NjYyMzI@._V1_.jpg'

    titlecontent5.innerHTML = '3. "Jaws" (1975)'
    contentmovie5.innerHTML = '"จอว์ส" เป็นภาพยนตร์เขย่าขวัญอเมริกันปี 1975 กำกับโดยสตีเวน สปีลเบิร์ก และสร้างจากนวนิยายชื่อเดียวกันของปีเตอร์ เบนช์ลีย์ <b>ภาพยนตร์ติดตามหัวหน้าตำรวจ นักวิทยาศาสตร์ และชาวประมงผมหงอกขณะที่พวกเขาออกล่าฉลามขาวที่กำลังคุกคามชุมชนริมชายหาดบนเกาะ Amity</b>ภาพยนตร์เรื่องนี้นำแสดงโดย Roy Scheider รับบทเป็น Martin Brody หัวหน้า Richard Dreyfuss รับบทเป็น Matt Hooper นักสมุทรศาสตร์ และ Robert Shaw รับบทเป็น Quint ชาวประมง "Jaws" เป็นที่รู้จักจากเพลงประกอบที่ชวนลุ้นระทึกโดยจอห์น วิลเลียมส์ ซึ่งรวมถึง "ธีมฉลาม" อันเป็นสัญลักษณ์ และสเปเชียลเอฟเฟกต์ที่แหวกแนวซึ่งใช้ในการสร้างฉลามจักรกลที่ปรากฏในภาพยนตร์  "Jaws" ประสบความสำเร็จอย่างมากในบ็อกซ์ออฟฟิศเมื่อออกฉาย และตั้งแต่นั้นมาก็กลายเป็นหนังระทึกขวัญคลาสสิก ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 4 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยม และได้รับรางวัล 3 รางวัล รวมถึงเพลงประกอบภาพยนตร์ยอดเยี่ยม'
    img5.src = 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190627154653-007-highest-grossing-films-jaws.jpg'

    titlecontent6.innerHTML = '2. "Schindler is List" (1993)'
    contentmovie6.innerHTML = '"Schindler is List" เป็นภาพยนตร์ดราม่าอิงประวัติศาสตร์ปี 1993 ที่กำกับโดย Steven Spielberg และสร้างจากนวนิยายเรื่อง "Schindler is Ark" ของ Thomas Keneally <b>ภาพยนตร์เรื่องนี้บอกเล่าเรื่องราวที่แท้จริงของออสการ์ ชินด์เลอร์ นักธุรกิจชาวเยอรมันที่ช่วยชีวิตผู้ลี้ภัยชาวยิวกว่า 1,100 คนในช่วงหายนะด้วยการจ้างพวกเขาในโรงงานของเขา</b> ภาพยนตร์เรื่องนี้นำแสดงโดย Liam Neeson ในบท Schindler และ Ben Kingsley ในบท Itzhak Stern นักบัญชีชาวยิวที่ช่วย Schindler ในความพยายามของเขาในการปกป้องผู้ลี้ภัย ภาพยนตร์เรื่องนี้ยังนำเสนอ Ralph Fiennes ในบท Amon Göth ผู้บัญชาการของค่ายกักกัน Plaszow และ Caroline Goodall ในบท Emilie ภรรยาของ Schindler "Schindler is List" ประสบความสำเร็จในเชิงพาณิชย์เมื่อออกฉาย และคว้ารางวัลออสการ์ 7 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยมและผู้กำกับยอดเยี่ยมจากสปีลเบิร์ก'
    img6.src = 'https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd'

    titlecontent7.innerHTML = '1. "Saving Private Ryan" (1998)'
    contentmovie7.innerHTML = '"Saving Private Ryan" เป็นภาพยนตร์สงครามอเมริกันปี 1998 กำกับโดย Steven Spielberg และเขียนบทโดย Robert Rodat <b>ภาพยนตร์ติดตามกลุ่มทหารพรานของกองทัพสหรัฐในช่วงสงครามโลกครั้งที่ 2 ขณะที่พวกเขาถูกส่งไปปฏิบัติภารกิจเพื่อค้นหาและนำไพร่พลเจมส์ ฟรานซิส ไรอัน ทหารพลร่มที่พี่น้องทั้งสามคนถูกสังหารขณะปฏิบัติหน้าที่</b> ภาพยนตร์เรื่องนี้นำแสดงโดยทอม แฮงค์สในบทกัปตันจอห์น เอช. มิลเลอร์ ผู้นำของเรนเจอร์ และยังมีนักแสดงที่มีชื่อเสียง ได้แก่ แมตต์ เดมอนในบทไรอันส่วนตัว ทอม ไซส์มอร์ เอ็ดเวิร์ด เบิร์นส์และแบร์รี่ เปปเปอร์ "Saving Private Ryan" เป็นที่รู้จักจากการแสดงภาพที่สมจริงและกราฟิกของการรุกรานนอร์มังดีในวัน D-Day และฉากการต่อสู้ที่เข้มข้น"Saving Private Ryan" ประสบความสำเร็จในเชิงพาณิชย์เมื่อออกฉาย และคว้ารางวัลออสการ์ 5 รางวัล รวมถึงผู้กำกับยอดเยี่ยมจากสปีลเบิร์ก ภาพยนตร์เรื่องนี้มีผลกระทบยาวนานต่อวัฒนธรรมสมัยนิยม และได้รับการพิจารณาอย่างกว้างขวางว่าเป็นหนึ่งในภาพยนตร์สงครามที่ยิ่งใหญ่ที่สุดเท่าที่เคยมีมา'
    img7.src = 'https://www.framerated.co.uk/frwpcontent/uploads/2018/07/savingprivateryan01.jpg'

    section8.classList.add("hidden");
    section9.classList.add("hidden");
    section10.classList.add("hidden");


  
    
  }
  if (design === 'peter') {
    imgheaderfilmmaker.src ='https://popcornfor2.com/upload/57/news-full-56333.jpg'
     titlefilm.innerHTML = 'ปีเตอร์ แจ็กสัน (Peter Jackson)'
    titlefilmcontent.innerHTML = 'Steven Spielberg เป็นผู้สร้างภาพยนตร์ชาวอเมริกันที่ได้รับการยกย่องอย่างกว้างขวางว่าเป็นหนึ่งในผู้กำกับที่มีอิทธิพลและประสบความสำเร็จมากที่สุดในประวัติศาสตร์ภาพยนตร์ เขาเกิดที่เมืองซินซินนาติ รัฐโอไฮโอ ในปี 2489 และเริ่มสร้างหนังสั้นในขณะที่ยังเรียนอยู่ชั้นมัธยมปลาย ต่อมาเขาเข้าเรียนที่ California State University, Long Beach ซึ่งเขาศึกษาเกี่ยวกับการผลิตภาพยนตร์และรายการโทรทัศน์ สปีลเบิร์กได้รับการยอมรับอย่างกว้างขวางเป็นครั้งแรกด้วยการเปิดตัวภาพยนตร์เรื่อง "Jaws" ในปี 1975 ซึ่งกลายเป็นภาพยนตร์ยอดฮิตและสร้างมาตรฐานให้กับภาพยนตร์ฟอร์มยักษ์ในช่วงฤดูร้อนยุคใหม่ เขายังคงกำกับภาพยนตร์ที่ประสบความสำเร็จอย่างสูงและได้รับเสียงวิจารณ์ชื่นชมอีกหลายเรื่อง เช่น "E.T. the Extra-Terrestrial," "Indiana Jones," "Jurassic Park" และ "Schindler is List" <br>สปีลเบิร์กเป็นที่รู้จักจากความสามารถในการสร้างเรื่องราวที่น่าสนใจและสะท้อนอารมณ์ ตลอดจนการใช้เทคนิคพิเศษและเทคนิคพิเศษที่ล้ำสมัย เขาได้รับรางวัลมากมายจากผลงานของเขา รวมถึงรางวัลออสการ์สาขาผู้กำกับยอดเยี่ยม 3 รางวัล และได้รับการเสนอชื่อเข้าชิงรางวัลอื่นๆ อีกมากมาย'
    imgheading.src = 'https://lh3.googleusercontent.com/kyiVdsW0lZgEE8z0Radm2G6JpRVW1V_K4Vo8AlVyWCUf9di6dgIiZnV3Qw6OQO2sSHnhEQaSfddER2g-48OZuByKGYITbD2iBCMjjiZufu5pDEuQIesAdzL6X5ImbGblxvZki2rVew=w2400'
    header. innerHTML = '3 อันดับหนังยอดเยี่ยม ของ สตีเวน สปีลเบิร์ก'


    titlecontent1.innerHTML = '3. "King Kong" (2005)'
    contentmovie1.innerHTML = '"คิงคอง" เป็นภาพยนตร์ผจญภัยปี 2548 กำกับโดยปีเตอร์ แจ็คสัน และสร้างจากภาพยนตร์ชื่อเดียวกันในปี 2476 <b>ภาพยนตร์ติดตามกลุ่มผู้สร้างภาพยนตร์ที่เดินทางไปยังเกาะลึกลับในมหาสมุทรอินเดียเพื่อทำสารคดีและพบกับลิงยักษ์ชื่อก้อง</b> ภาพยนตร์เรื่องนี้นำแสดงโดยนาโอมิ วัตส์ในบทแอน แดร์โรว์ นักแสดงหญิงที่กำลังดิ้นรนซึ่งถูกคองลักพาตัวไป และยังมีแจ็ค แบล็คในบทคาร์ล เดนแฮม ผู้กำกับสารคดี และเอเดรียน โบรดีในบทแจ็ค ดริสคอล นักเขียนบทที่มีความสัมพันธ์โรแมนติกกับแอน ภาพยนตร์เรื่องนี้นำเสนอเทคนิคพิเศษสุดล้ำที่ใช้สร้างลิงยักษ์และสิ่งมีชีวิตต่างๆ ที่อาศัยอยู่ในเกาะ <br>"คิงคอง" ประสบความสำเร็จในเชิงพาณิชย์เมื่อออกฉาย และได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 3 สาขา รวมถึงสาขาวิชวลเอฟเฟ็กต์ยอดเยี่ยม'
    img1.src = 'https://occ-0-32-3211.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXs-QGrkLDadIChYJEeaPChoB8rgMhB5XitGj_pIwnEn7VmeySPo4onkeDRYbT1bdSyAEiGlHxhsQ17zBnVfTVL6VjA9cCyZHlOP.jpg?r=0b8'

    
    titlecontent2.innerHTML = '2. "The Hobbit" trilogy (2012-2014)'
    contentmovie2.innerHTML = '"The Hobbit" เป็นนวนิยายของ เจ.อาร์.อาร์. โทลคีนตีพิมพ์ครั้งแรกในปี 1937 <b>มีฉากอยู่ในโลกแฟนตาซีของมิดเดิลเอิร์ธและติดตามการเดินทางของฮอบบิทชื่อบิลโบ แบ๊กกิ้นส์ ขณะที่เขาเดินทางกับกลุ่มคนแคระเพื่อทวงคืนภูเขาโลนลี่จากมังกรสม็อก ระหว่างทางพวกเขาพบกับความท้าทายมากมายและได้เพื่อนใหม่ รวมถึงแกนดัล์ฟ พ่อมดผู้ชาญฉลาด และนักรบบาร์ดเดอะโบว์แมน</b> นวนิยายเรื่องนี้ได้รับการดัดแปลงเป็นรูปแบบต่างๆ มากมาย'
    img2.src = 'https://atolkienistperspective.files.wordpress.com/2014/07/the-hobbit-trilogy-teaser-posters.jpg'

    titlecontent3.innerHTML = '1. "The Lord of the Rings" trilogy (2001-2003)'
    contentmovie3.innerHTML = 'ไตรภาค "เดอะลอร์ดออฟเดอะริงส์" เป็นซีรีส์ภาพยนตร์แฟนตาซีระดับมหากาพย์สามเรื่องที่กำกับโดยปีเตอร์ แจ็คสัน และสร้างจากนวนิยายเรื่อง "เดอะลอร์ดออฟเดอะริงส์" โดยเจ.อาร์.อาร์. โทลคีน <b>ภาพยนตร์ติดตามการเดินทางของฮอบบิทชื่อโฟรโด แบ๊กกิ้นส์ ผู้ได้รับมอบหมายให้ทำลายแหวนวันริง สิ่งประดิษฐ์อันทรงพลัง</b> ไตรภาคประกอบด้วยภาพยนตร์เรื่อง "The Lord of the Rings: The Fellowship of the Ring" (2001), "The Lord of the Rings: The Two Towers" (2002) และ "The Lord of the Rings: The Return of the คิง" (2546). ภาพยนตร์เรื่องนี้นำแสดงโดย Elijah Wood ในบท Frodo Baggins และทีมนักแสดงประกอบด้วย Ian McKellen ในบท Gandalf, Viggo Mortensen ในบท Aragorn และ Sean Astin ในบท Samwise Gamgee <br>ภาพยนตร์ไตรภาค "เดอะลอร์ดออฟเดอะริงส์" ประสบความสำเร็จเมื่อออกฉาย และได้รับรางวัลออสการ์ทั้งหมด 17 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยมจาก "เดอะรีเทิร์นออฟเดอะคิง" และได้รับการพิจารณาอย่างกว้างขวางว่าเป็นหนึ่งในภาพยนตร์ที่ยิ่งใหญ่ที่สุดเท่าที่เคยมีมา'
    img3.src = 'http://1.bp.blogspot.com/-J9k0CKnFphA/TeQJf49vIRI/AAAAAAAACpE/MXYyFlBi7Ag/w1200-h630-p-k-no-nu/LOTR.jpg'

    section4.classList.add("hidden");
    section5.classList.add("hidden");
    section6.classList.add("hidden");
    section7.classList.add("hidden");
    section8.classList.add("hidden");
    section9.classList.add("hidden");
    section10.classList.add("hidden");


  
    
  }if (design === 'james') {
    imgheaderfilmmaker.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/JamesCameronHWOFOct2012.jpg/640px-JamesCameronHWOFOct2012.jpg'
     titlefilm.innerHTML = 'เจมส์ แคเมรอน (James Cameron)'
    titlefilmcontent.innerHTML = 'James Cameron เป็นผู้สร้างภาพยนตร์และนักเขียนบทภาพยนตร์ชาวแคนาดา ซึ่งเป็นที่รู้จักจากผลงานภาพยนตร์ไซไฟและภาพยนตร์แอ็คชั่น เช่น Titanic, Avatar และภาพยนตร์แฟรนไชส์ ​​Terminator เขายังเป็นที่รู้จักในเรื่องความใส่ใจในรายละเอียดและการใช้เทคนิคพิเศษและเทคโนโลยีในภาพยนตร์ของเขาอย่างสร้างสรรค์ นอกเหนือจากการทำงานในฐานะผู้สร้างภาพยนตร์แล้ว คาเมรอนยังเป็นนักเคลื่อนไหวด้านสิ่งแวดล้อมและได้ทำสารคดีเกี่ยวกับมหาสมุทรและการเปลี่ยนแปลงของสภาพอากาศ เขาได้รับรางวัลมากมายจากผลงานของเขา รวมถึงรางวัลออสการ์ 3 รางวัลสำหรับไททานิค เขาถือเป็นหนึ่งในผู้สร้างภาพยนตร์ที่ประสบความสำเร็จมากที่สุดในฮอลลีวูดและมีผลอย่างมากต่ออุตสาหกรรมภาพยนตร์'
    imgheading.src = 'https://lh3.googleusercontent.com/BNNKZe3-c98lZA6xyCk3xrmSG4yF4afztfBJ-f4o0sU-NPZfN9X4PXZHchheoP1EkjMqOTdV5uHGnSuRrTqA0BvfPYc9q_jA98Olg6mjpcsJ6CDMDSZwTnlGIMfOViEZkfnUzzjAxg=w2400'
    header. innerHTML = '5 อันดับหนังยอดเยี่ยม ของ เจมส์ แคเมรอน'
    
    titlecontent1.innerHTML = '5. Aliens (1986)'
    contentmovie1.innerHTML = '"Aliens" เป็นภาพยนตร์แนววิทยาศาสตร์ปี 1986 ที่กำกับโดย James Cameron และนำแสดงโดย Sigourney Weaver, Michael Biehn และ Carrie Henn <b>ในภาพยนตร์เรื่องนี้ เอลเลน ริปลีย์ (วีฟเวอร์) ผู้รอดชีวิตเพียงคนเดียวจากภาคแรก ได้รับการช่วยเหลือหลังจากอยู่ในสภาวะนอนหลับมากเกินไปเป็นเวลา 57 ปี จากนั้นเธอก็ได้รับคัดเลือกจากกลุ่มนาวิกโยธินอาณานิคมให้กลับไปยังโลก</b> "เอเลี่ยน" เป็นที่รู้จักจากฉากแอ็คชั่นและการใช้เอฟเฟ็กต์พิเศษเพื่อสร้างสิ่งมีชีวิตต่างดาว ภาพยนตร์เรื่องนี้ได้รับคำวิจารณ์และประสบความสำเร็จในเชิงพาณิชย์เมื่อออกฉาย และได้รับรางวัลออสการ์ 2 รางวัล รวมถึงสาขาวิชวลเอฟเฟ็กต์ยอดเยี่ยม และได้สร้างภาคต่อและภาคแยกออกมามากมาย'
    img1.src = 'https://m.media-amazon.com/images/M/MV5BMTExMjE2ODE4MDJeQTJeQWpwZ15BbWU2MDQwNTQ2Nw@@._V1_.jpg'


    titlecontent2.innerHTML = '4. Terminator 2: Judgment Day (1991)'
    contentmovie2.innerHTML = '"Terminator 2: Judgment Day" เป็นภาพยนตร์ไซไฟปี 1991 ที่กำกับโดย James Cameron และนำแสดงโดย Arnold Schwarzenegger, Linda Hamilton และ Edward Furlong <b>ในภาพยนตร์เรื่องนี้ ไซบอร์กจากอนาคตชื่อ T-1000 ถูกส่งย้อนเวลากลับไปเพื่อฆ่าจอห์น คอนเนอร์ ผู้นำในอนาคตของการต่อต้านมนุษย์กับเครื่องจักร เพื่อปกป้องจอห์น การต่อต้านของมนุษย์ได้ส่ง T-800 Terminator ที่ถูกตั้งโปรแกรมใหม่ย้อนเวลากลับไปเพื่อปกป้องเขา ในขณะที่ T-1000 ไล่ตาม John และ T-800 อย่างไม่ลดละ ตัวละครทั้งสามจะต้องหลบเลี่ยงการไล่ตามและหาทางหยุดการกำเนิดของเครื่องจักรก่อนที่จะสายเกินไป</b> ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากซีเควนซ์แอ็คชั่นและสเปเชียลเอฟเฟกต์ โดยเฉพาะอย่างยิ่งการใช้ภาพที่สร้างจากคอมพิวเตอร์ที่แปลกใหม่เพื่อสร้าง T-1000 "Terminator 2: Judgment Day" ประสบความสำเร็จในเชิงพาณิชย์เมื่อออกฉาย และคว้ารางวัลออสการ์ 4 รางวัล รวมทั้งการตัดต่อเสียงยอดเยี่ยม ภาพยนตร์เรื่องนี้มีผลกระทบยาวนานต่อวัฒนธรรมสมัยนิยม และได้สร้างภาคต่อและภาคแยกออกมามากมาย'
    img2.src = 'https://media.timeout.com/images/101619493/image.jpg'



    titlecontent3.innerHTML = '3. "Avatar (2009)'
    contentmovie3.innerHTML = '"Avatar" เป็นภาพยนตร์แนววิทยาศาสตร์ที่ออกฉายในปี 2009 กำกับ เขียนบท และอำนวยการสร้างโดย James Cameron และนำแสดงโดย Sam Worthington, Zoe Saldana และ Sigourney Weaver ภาพยนตร์เรื่องนี้เกิดขึ้นในช่วงกลางศตวรรษที่ 22 และติดตาม Jake Sully อดีตนาวิกโยธินที่เป็นอัมพาตครึ่งล่างซึ่งถูกส่งไปยังดวงจันทร์ Pandora ซึ่งเป็นส่วนหนึ่งของภารกิจในการใช้ประโยชน์จากทรัพยากรของโลก ขณะอยู่บนแพนดอร่า เจคสามารถใช้ร่างกายที่ได้รับการดัดแปลงพันธุกรรม หรืออวตาร เพื่อโต้ตอบกับชาวแพนโดราพื้นเมือง นั่นคือ Navi เมื่อเขาเข้ากับ Navi ได้มากขึ้น เจคต้องเลือกระหว่างคนของเขาเองกับโลกใบใหม่ที่เขาหลงรัก <br>"Avatar" ประสบความสำเร็จในเชิงวิจารณ์และเชิงพาณิชย์เมื่อออกฉาย และกลายเป็นภาพยนตร์ที่ทำรายได้สูงสุดตลอดกาล ซึ่งเป็นสถิติที่มีมานานกว่าทศวรรษ ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 9 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยม และได้รับรางวัล 3 รางวัล รวมถึงสาขาวิชวลเอฟเฟกต์ยอดเยี่ยม มีผลกระทบยาวนานต่อวัฒนธรรมสมัยนิยมและได้สร้างภาคต่อออกมามากมาย'
    img3.src = 'https://i0.wp.com/fugitives.com/wp-content/uploads/2022/12/Avatar-Ending-Explained-2009-Fantasy-Thriller-Film.jpg'

    titlecontent4.innerHTML = '2. "The Terminator" (1984)'
    contentmovie4.innerHTML = '"The Terminator" เป็นภาพยนตร์นิยายวิทยาศาสตร์ปี 1984 ที่กำกับโดย James Cameron และนำแสดงโดย Arnold Schwarzenegger, Linda Hamilton และ Michael Biehn ภาพยนตร์เรื่องนี้ดำเนินเรื่องในอนาคตหลังหายนะและติดตามซาราห์ คอนเนอร์ หญิงสาวที่ตกเป็นเป้าหมายของการลอบสังหารโดยไซบอร์กหรือเทอร์มิเนเตอร์ ซึ่งถูกส่งย้อนเวลากลับไปฆ่าเธอก่อนที่เธอจะให้กำเนิดลูกชายชื่อจอห์น ที่จะเติบโตขึ้นเป็นผู้นำในการต่อต้านมนุษย์กับเครื่องจักร เทอร์มิเนเตอร์ รับบทโดยชวาร์เซเน็กเกอร์ เป็นเครื่องจักรสังหารที่ไม่หยุดยั้งซึ่งแทบจะทำลายไม่ได้และจะไม่หยุดยั้งที่จะทำภารกิจให้สำเร็จ Sarah ได้รับความช่วยเหลือจาก Kyle Reese ทหารจากอนาคตที่ถูกส่งย้อนเวลามาเพื่อปกป้องเธอ <br>"The Terminator" ประสบความสำเร็จในเชิงวิจารณ์และเชิงพาณิชย์เมื่อออกฉาย และสร้างภาคต่อและภาคแยกออกมาหลายภาค ภาพยนตร์เรื่องนี้มีผลกระทบยาวนานต่อวัฒนธรรมสมัยนิยมและได้รับการยอมรับอย่างกว้างขวางว่าเป็นประเภทคลาสสิกของนิยายวิทยาศาสตร์'
    img4.src = 'https://mutantreviewers.files.wordpress.com/2011/04/the-terminator.jpg?w=723&h=391'

    titlecontent5.innerHTML = '1. "Titanic" (1997)'
    contentmovie5.innerHTML = '"Titanic" เป็นภาพยนตร์ดราม่าโรแมนติกปี 1997 ที่กำกับ เขียนบท และร่วมอำนวยการสร้างโดย James Cameron และนำแสดงโดย Leonardo DiCaprio และ Kate Winslet ภาพยนตร์สร้างจากชีวิตจริงของ RMS Titanic ที่จมในปี 1912 และ<b>ติดตามเรื่องราวของ Jack Dawson และ Rose DeWitt Bukater คู่รักหนุ่มสาวสองคนที่อยู่บนเรือเมื่อเรือจมหลังจากชนภูเขาน้ำแข็ง</b> ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากสเกลที่ยิ่งใหญ่ การใช้เอฟเฟกต์พิเศษเพื่อสร้างการจมของเรือขึ้นมาใหม่ และเพลงประกอบที่น่าจดจำ "ไททานิค" กลายเป็นภาพยนตร์ที่ทำรายได้สูงสุดตลอดกาล ซึ่งเป็นสถิติที่ยาวนานกว่าทศวรรษ ภาพยนตร์เรื่องนี้ได้รับรางวัลออสการ์ 11 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยมและผู้กำกับยอดเยี่ยมจากคาเมรอน'
    img5.src = 'https://i0.wp.com/blimey.pro/wp-content/uploads/2022/04/Sut-fylma-Tytanyk-1997-syuzhet-smisl-konczovky-ydeya-prototypi-geroev.jpg?resize=730%2C426&ssl=1'
   
    section6.classList.add("hidden");
    section7.classList.add("hidden");
    section8.classList.add("hidden");
    section9.classList.add("hidden");
    section10.classList.add("hidden");


  
    
  }if (design === 'martin') {
    imgheaderfilmmaker.src ='https://variety.com/wp-content/uploads/2022/10/GettyImages-1433012981.jpg'
     titlefilm.innerHTML = 'มาร์ติน สกอร์เซซี (Martin Scorsese)'
    titlefilmcontent.innerHTML = 'Martin Scorsese เป็นผู้กำกับภาพยนตร์ โปรดิวเซอร์ และผู้เขียนบทภาพยนตร์ชาวอเมริกันที่ได้รับการยกย่องและมีอิทธิพล เขาได้รับการยกย่องอย่างกว้างขวางว่าเป็นหนึ่งในผู้กำกับที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ภาพยนตร์ และเคยกำกับภาพยนตร์ที่ได้รับการยกย่องและทรงอิทธิพลมาแล้วหลายเรื่อง สกอร์เซซีเกิดในนิวยอร์กซิตี้ในปี 2485 และเติบโตในย่านลิตเติลอิตาลี เขาเริ่มสนใจภาพยนตร์ตั้งแต่อายุยังน้อยและเริ่มสร้างภาพยนตร์สั้นในขณะที่ยังเรียนอยู่ชั้นมัธยมปลาย เขาเข้าเรียนที่ Tisch School of the Arts ของ NYU ซึ่งเขาศึกษาด้านภาพยนตร์และสำเร็จการศึกษาในปี 2507 อาชีพของสกอร์เซซีเริ่มต้นขึ้นในทศวรรษที่ 1960 และ 1970 ในระหว่างนั้นเขาได้กำกับภาพยนตร์ที่ทรงอิทธิพลและแปลกใหม่หลายเรื่อง รวมถึง "Mean Streets," "Taxi Driver" และ "Raging Bull" ภาพยนตร์เหล่านี้สร้างชื่อเสียงให้เขาในฐานะผู้นำในอุตสาหกรรมภาพยนตร์อเมริกันและช่วยนิยามขบวนการ "ฮอลลีวูดยุคใหม่" ของทศวรรษ 1970 ตลอดอาชีพการงานของเขา สกอร์เซซีได้รับรางวัลและคำชมเชยมากมายจากผลงานของเขา ซึ่งรวมถึงการเสนอชื่อเข้าชิงรางวัลออสการ์และการคว้ารางวัลมากมาย นอกเหนือจากงานในฐานะผู้กำกับแล้ว สกอร์เซซียังทำหน้าที่เป็นผู้อำนวยการสร้างและเขียนบทภาพยนตร์อีกหลายเรื่อง และเคยทำงานเป็นนักประวัติศาสตร์และผู้สนับสนุนการอนุรักษ์ภาพยนตร์'
    imgheading.src = 'https://lh3.googleusercontent.com/5bgd2E0uG5qU3ifl_dhDArX61ovT04hpICOdbRXE6Bk4S9u5EYitriOs_4yx6HC0fJ89ulTifL5GVVNI34xchixpIoUMgLZbSmHG0YkGLeExTVYEGej4HIn4UAO9H_I68hL2KfTVhQ=w2400'
    header. innerHTML = '10 อันดับหนังยอดเยี่ยม ของ มาร์ติน สกอร์เซซี'


    titlecontent1.innerHTML = '10. "The Irishman" (2019) '
    contentmovie1.innerHTML = '"The Irishman" เป็นภาพยนตร์ดราม่าอาชญากรรมปี 2019 ที่กำกับโดย Martin Scorsese และเขียนบทโดย Steven Zaillian <b>ภาพยนตร์ติดตามชีวิตและอาชีพของ Sheeran ในฐานะนักฆ่า ตั้งแต่ช่วงที่เขารับใช้ชาติในสงครามโลกครั้งที่ 2 ไปจนถึงการมีส่วนร่วมกับครอบครัวอาชญากร Bufalino สำรวจความสัมพันธ์ระหว่างชีแรนกับฮอฟฟา และเหตุการณ์ที่นำไปสู่การหายตัวไปของฮอฟฟาในปี 1975 <b>"The Irishman" เป็นที่รู้จักจากรันไทม์ที่ยอดเยี่ยมและการใช้เทคโนโลยีลดอายุเพื่อให้นักแสดงสามารถแสดงตัวละครของพวกเขาในช่วงอายุต่างๆ และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย รวมถึงรางวัลออสการ์ 10 รางวัล แม้ว่าจะไม่ได้รับรางวัลใดๆ เลยก็ตาม'
    img1.src = 'https://m.media-amazon.com/images/M/MV5BM2UyMmM0NGItZWNlMS00MmE0LWE4NmQtMTI0NTU5ZDU2NTViXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'

    
    titlecontent2.innerHTML = '9. "Shutter Island" (2010)'
    contentmovie2.innerHTML = '"Shutter Island" เป็นภาพยนตร์ระทึกขวัญแนวจิตวิทยาที่ออกฉายในปี 2010 กำกับโดย Martin Scorsese และเขียนบทโดย Laeta Kalogridis อิงจากนวนิยายชื่อเดียวกันในปี 2003 ของ Dennis Lehane <b>ภาพยนตร์เรื่องนี้นำแสดงโดยลีโอนาร์โด ดิคาปริโอในบท เท็ดดี้ แดเนียลส์ ที่กำลังสืบสวนการหายตัวไปของผู้ป่วยที่โรงพยาบาลจิตเวชบนเกาะนอกชายฝั่งแมสซาชูเซตส์ ขณะที่เท็ดดี้สืบสวน เขาเริ่มเชื่อมากขึ้นว่าโรงพยาบาลและพนักงานกำลังปิดบังอะไรบางอย่างอยู่ และเขาอาจตกอยู่ในอันตราย</b> "Shutter Island" เป็นที่รู้จักจากตอนจบที่บิดเบี้ยวและการใช้ธีมทางจิตวิทยาเพื่อสร้างความรู้สึกไม่สบายใจและไม่แน่นอน และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย'
    img2.src = 'https://s18675.pcdn.co/wp-content/uploads/2017/06/shutter_island.jpg'

    titlecontent3.innerHTML = '8. "Casino" (1995)'
    contentmovie3.innerHTML = '"Casino" เป็นภาพยนตร์ดราม่าอาชญากรรมปี 1995 ที่กำกับโดย Martin Scorsese และเขียนบทโดย Nicholas Pileggi โดยสร้างจากหนังสือชื่อเดียวกันของ Pileggi <b>ภาพยนตร์เรื่องนี้นำแสดงโดยโรเบิร์ต เดอ นีโรในบทแซม "เอซ" ร็อธสไตน์ ผู้บริหารคาสิโนได้รับมอบหมายให้ดูแลแทนเจียร์คาสิโนในลาสเวกัส และชารอน สโตนในบทจินเจอร์ แมคเคนนา นักธุรกิจหญิงและอดีตโสเภณีที่เอซหลงรัก <br> "คาสิโน" เป็นที่รู้จักจากการแสดงภาพอุตสาหกรรมคาสิโนในลาสเวกัสในทศวรรษที่ 1970 และ 1980 และการสำรวจประเด็นต่างๆ เช่น ความโลภ การทุจริต  และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย'
    img3.src = 'https://prod-images.tcm.com/v5cache/TCM/Images/Dynamic/i450/casino1995_70428_1023x768_08282017050354.jpg'

    titlecontent4.innerHTML = '7. "The King of Comedy" (1982)'
    contentmovie4.innerHTML = '"The King of Comedy" เป็นภาพยนตร์ตลกสีดำที่ออกฉายในปี 1982 กำกับโดย Martin Scorsese และเขียนบทโดย Paul D. Zimmerman <b>ภาพยนตร์เรื่องนี้นำแสดงโดยโรเบิร์ต เดอ นีโรในบทรูเพิร์ต พัพกิ้น นักแสดงตลกที่ต้องดิ้นรนและหมกมุ่นกับการเป็นแขกรับเชิญในรายการทอล์คโชว์ยอดนิยมรอบดึก "The Jerry Langford Show" ซึ่งดำเนินรายการโดยเจอร์รี่ แลงฟอร์ด (เจอร์รี ลูอิส)</b> "The King of Comedy" เป็นการเสียดสีวงการบันเทิงและลัทธิของผู้มีชื่อเสียง และสำรวจประเด็นของความหลงใหลและชื่อเสียง ภาพยนตร์เรื่องนี้ประสบความสำเร็จและได้รับการวิจารณ์อย่างมากเมื่อออกฉาย'
    img4.src = 'https://3.bp.blogspot.com/-V1H--8MGcjA/WnkoYFQDWcI/AAAAAAAAVb4/X7O1VfVm2DM7VqCfSRiV0xqjX9SYtUOPgCLcBGAs/s1600/The%2BKing%2BOf%2BComedy%2B1.png'

    titlecontent5.innerHTML = '6. "Mean Streets" (1973)'
    contentmovie5.innerHTML = '"Mean Streets" เป็นภาพยนตร์ดราม่าอาชญากรรมปี 1973 กำกับโดย Martin Scorsese และเขียนบทโดย Scorsese และ Mardik Martin <b>ภาพยนตร์เรื่องนี้นำแสดงโดย Harvey Keitel ในบท Charlie ชายหนุ่มที่พยายามสำรวจโลกที่รุนแรงและเสื่อมทรามในย่านลิตเติ้ลอิตาลีในนิวยอร์กซิตี้ และ Robert De Niro ในบท Johnny Boy ชายหนุ่มหัวร้อนและบ้าบิ่นที่มีปัญหาอยู่ตลอดเวลา ชาร์ลีตัดสินใจเลือกระหว่างความภักดีที่มีต่อเพื่อนและครอบครัว ผู้มีส่วนพัวพันกับกลุ่มอาชญากร กับความปรารถนาที่จะมีชีวิตที่ซื่อสัตย์และมีคุณธรรมมากขึ้น</b> "Mean Streets" เป็นที่รู้จักจากการแสดงภาพชีวิตในโลกใต้พิภพของเมืองที่สมจริง และการใช้ด้นสดและกล้องมือถือเพื่อสร้างความรู้สึกฉับไวและเข้มข้น ภาพยนตร์เรื่องนี้ประสบความสำเร็จเมื่อออกฉาย และตั้งแต่นั้นมาก็กลายเป็นแนวอาชญากรรมคลาสสิก'
    img5.src = 'https://m.media-amazon.com/images/M/MV5BMTk3MTY1NTc1Nl5BMl5BanBnXkFtZTgwNjA2NjIwMjE@._V1_.jpg'

    titlecontent6.innerHTML = '5. "The Wolf of Wall Street" (2013)'
    contentmovie6.innerHTML = '"The Wolf of Wall Street" เป็นภาพยนตร์ตลกสีดำที่ออกฉายในปี 2013 กำกับโดย Martin Scorsese และเขียนบทโดย Terence Winter โดยสร้างจากไดอารี่ชื่อเดียวกันของ Jordan Belfort <b>ภาพยนตร์เรื่องนี้นำแสดงโดยลีโอนาร์โด ดิคาปริโอในบทเบลฟอร์ต นายหน้าค้าหุ้นที่เข้าไปพัวพันกับการฉ้อฉลและคอร์รัปชันในช่วงปี 1990 ซึ่งนำไปสู่การล่มสลายในที่สุด ภาพยนตร์เรื่องนี้ติดตามเบลฟอร์ตเมื่อเขาขึ้นสู่จุดสูงสุดของโลกการเงินและกลายเป็นหนึ่งในบุคคลที่ประสบความสำเร็จและร่ำรวยที่สุดในประเทศ แต่ท้ายที่สุดก็ตกเป็นเหยื่อของความโลภและความโลภของเขาเอง</b>"หมาป่าแห่งวอลล์สตรีท" เป็นที่รู้จักจากการพรรณนาความเกินจริงของวอลล์สตรีทและการสำรวจประเด็นต่างๆ เช่น ความโลภ การคอรัปชั่น และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย และได้รับการยกย่องอย่างกว้างขวางว่าเป็นประเภทคลาสสิก'
    img6.src = 'https://images.mubicdn.net/images/film/105773/cache-75354-1541632664/image-w1280.jpg'

    titlecontent7.innerHTML = '4. "The Departed" (2006)'
    contentmovie7.innerHTML = '"The Departed" เป็นภาพยนตร์ดราม่าอาชญากรรมปี 2549 กำกับโดย Martin Scorsese และเขียนบทโดย William Monahan อิงจากภาพยนตร์ฮ่องกงปี 2545 เรื่อง "Infernal Affairs" <b>ภาพยนตร์เรื่องนี้นำแสดงโดยลีโอนาร์โด ดิคาปริโอในบทบิลลี่ คอสติแกน เจ้าหน้าที่ตำรวจหนุ่มที่แทรกซึมเข้าไปในองค์กรอาชญากรรมอเมริกันไอริชที่นำโดยแฟรงก์ คอสเตลโล (แจ็ค นิโคลสัน) และแมตต์ เดมอนในบทโคลิน ซัลลิแวน สมาชิกแก๊งคอสเตลโลที่แทรกซึมเข้าไปในกรมตำรวจ </b> "The Departed" เป็นที่รู้จักจากพล็อตเรื่องที่ซับซ้อนและหักมุม การแสดงที่แข็งแกร่ง และการสำรวจประเด็นต่างๆ เช่น ความภักดี ตัวตน และการหลอกลวง และได้รับรางวัลออสการ์ 4 รางวัล รวมถึงภาพยนตร์ยอดเยี่ยมและผู้กำกับยอดเยี่ยมจากสกอร์เซซี และได้รับการยกย่องอย่างกว้างขวางว่าเป็นประเภทคลาสสิกของอาชญากรรม'
    img7.src = 'https://m.media-amazon.com/images/M/MV5BMTM4NzAwNzExNV5BMl5BanBnXkFtZTcwNTY4MzMyNw@@._V1_.jpg'

    titlecontent8.innerHTML = '3. "Raging Bull" (1980)'
    contentmovie8.innerHTML = '"Raging Bull" เป็นภาพยนตร์ดราม่ากีฬาชีวประวัติปี 1980 กำกับโดย Martin Scorsese และเขียนบทโดย Paul Schrader และ Mardik Martin โดยสร้างจากบันทึกชื่อเดียวกันของ Jake LaMotta <b>ภาพยนตร์เรื่องนี้นำแสดงโดยโรเบิร์ต เดอ นีโรในบทลามอตตา นักมวยรุ่นมิดเดิลเวตที่กลายเป็นแชมป์โลก<b>ภาพยนตร์ติดตามการก้าวขึ้นสู่จุดสูงสุดของวงการมวยโลกของ LaMotta รวมถึงชีวิตส่วนตัวที่วุ่นวายของเขา ซึ่งเกิดจากความสัมพันธ์ที่ไม่แน่นอนของเขากับภรรยาของเขา<b> "Raging Bull" เป็นที่รู้จักจากการแสดงภาพการชกมวยที่เข้มข้นและรุนแรง เช่นเดียวกับการสำรวจประเด็นต่างๆ เช่น ความเป็นชาย ความหึงหวง และการทำลายตนเอง และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย รวมถึงการเสนอชื่อเข้าชิงรางวัลออสการ์ 8 ครั้ง และได้รับการยกย่องอย่างกว้างขวางว่าเป็นประเภทกีฬาคลาสสิก'
    img8.src = 'https://m.media-amazon.com/images/M/MV5BMTczMTMzODc2M15BMl5BanBnXkFtZTcwOTkwNjMwNA@@._V1_.jpg'

    titlecontent9.innerHTML = '2. "Taxi Driver" (1976)'
    contentmovie9.innerHTML = '"Taxi Driver" เป็นภาพยนตร์ดราม่าแนวจิตวิทยาปี 1976 กำกับโดย Martin Scorsese และเขียนบทโดย Paul Schrader <b>ทหารผ่านศึกในสงครามเวียดนามที่ทำงานเป็นคนขับรถแท็กซี่ในนิวยอร์กซิตี้ เทรวิสเริ่มโดดเดี่ยวมากขึ้นและไม่แยแสกับโลกรอบตัวเขา และกำลังวางแผนบางอย่างอยู่</b> "Taxi Driver" เป็นที่รู้จักจากการแสดงภาพมหานครนิวยอร์กในช่วงปี 1970 ที่ดิบและสมจริง ตลอดจนการสำรวจประเด็นต่างๆ เช่น ความโดดเดี่ยว ความแปลกแยก และผลกระทบทางจิตใจจากความรุนแรง  และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย รวมถึงการเสนอชื่อเข้าชิงรางวัลออสการ์สี่ครั้ง และได้รับการยกย่องอย่างกว้างขวางว่าเป็นประเภทคลาสสิกของแนวเขย่าขวัญทางจิตวิทยา'
    img9.src = 'https://m.media-amazon.com/images/M/MV5BMzQwNDM1NDY4MF5BMl5BanBnXkFtZTgwNjIwNzIwMjE@._V1_.jpg'
   
    titlecontent10.innerHTML = '1. "Goodfellas" (1990)'
    contentmovie10.innerHTML = '"Goodfellas" เป็นภาพยนตร์ดราม่าอาชญากรรมปี 1990 ที่กำกับโดย Martin Scorsese และเขียนบทโดย Nicholas Pileggi โดยอิงจากหนังสือสารคดีของ Pileggi เรื่อง "Wiseguy" <b>ภาพยนตร์เรื่องดังกล่าวนำแสดงโดย Ray Liotta ในบท Henry Hill ชายหนุ่มที่เข้าไปพัวพันกับกลุ่มอาชญากรในย่านลิตเติ้ลอิตาลีของนครนิวยอร์ก และในที่สุดก็เติบโตขึ้นมาเป็นสมาชิกที่มีอำนาจของครอบครัวอาชญากรรม Lucchese ภาพยนตร์เรื่องนี้ติดตามเฮนรี่ในขณะที่เขาสำรวจโลกที่อันตรายและทุจริตของมาเฟีย และความสัมพันธ์ของเขากับสมาชิกคนอื่นๆ ขององค์กรอาชญากรรม</b>  "Goodfellas" เป็นที่รู้จักจากการแสดงภาพอาชญากรรมที่เข้มข้นและสมจริง เช่นเดียวกับการสำรวจประเด็นต่างๆ เช่น ความภักดี การหักหลัง และผลที่ตามมาจากชีวิตแห่งอาชญากรรม ภาพยนตร์เรื่องนี้ประสบความสำเร็จ และได้รับการเสนอชื่อเข้าชิงรางวัลมากมาย รวมถึงการเสนอชื่อเข้าชิงรางวัลออสการ์ 6 รางวัล'
    img10.src = 'https://media.timeout.com/images/102793667/image.jpg'




  
    
  }
  if (design === 'quentin') {
    imgheaderfilmmaker.src ='https://variety.com/wp-content/uploads/2013/10/quentin-tarantino-recycler.jpg?w=681&h=383&crop=1'
     titlefilm.innerHTML = 'เควนติน แทแรนติโน (Quentin Tarantino)'
    titlefilmcontent.innerHTML = 'Quentin Jerome Tarantino เป็นผู้กำกับภาพยนตร์ โปรดิวเซอร์ และผู้เขียนบทภาพยนตร์ชาวอเมริกัน ซึ่งเป็นที่รู้จักจากผลงานประเภทแอ็คชั่นและอาชญากรรม เขาเกิดที่เมืองน็อกซ์วิลล์ รัฐเทนเนสซี ในปี 1963 และเติบโตมาพร้อมกับความรักในภาพยนตร์ ทาแรนติโนเริ่มอาชีพของเขาในอุตสาหกรรมการเช่าวิดีโอและในที่สุดก็ได้รับการยอมรับจากผลงานของเขาในภาพยนตร์เรื่อง Reservoir Dogs และ Pulp Fiction ทาแรนติโนเป็นที่รู้จักกันดีที่สุดจากผลงานของเขาในภาพยนตร์ที่ได้รับคำวิจารณ์ชื่นชมมากมาย รวมถึง Pulp Fiction, Reservoir Dogs, Kill Bill และ Once Upon a Time in Hollywood ภาพยนตร์เหล่านี้เป็นที่รู้จักจากโครงเรื่องที่ไม่เชิงเส้น บทสนทนาที่ไม่เหมือนใคร และการใช้การแสดงความเคารพและการอ้างอิงถึงภาพยนตร์เรื่องอื่น พวกเขาประสบความสำเร็จในเชิงพาณิชย์และได้รับการวิพากษ์วิจารณ์ และช่วยสร้างให้ทาแรนติโนเป็นหนึ่งในผู้สร้างภาพยนตร์ที่ประสบความสำเร็จและมีอิทธิพลมากที่สุดในโลก นอกจากผลงานในฐานะผู้สร้างภาพยนตร์แล้ว ทาแรนติโนยังเป็นที่รู้จักจากความรักในประวัติศาสตร์ภาพยนตร์และการใช้การแสดงความเคารพและการอ้างอิงถึงภาพยนตร์เรื่องอื่นในผลงานของเขาเอง เขาเป็นที่รู้จักจากความใส่ใจในรายละเอียดและการใช้ดนตรีและเสียงในภาพยนตร์ของเขา และได้รับรางวัลมากมายจากผลงานของเขา รวมทั้งได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์หลายรางวัล'
    imgheading.src = 'https://lh3.googleusercontent.com/jgxfGFdKt8l7kV097SWEbBd5yMBqNEnB16GjBxQfLC6k8e5kY1HmWniXWQcwIiC0VPUi3R1oYnOmiebt90V9V3BCueyzrrb2kt8B8fILs8HrDvO8bICd2KAymLS7h1KkwADqmPr0sw=w2400'
    header. innerHTML = '10 อันดับหนังยอดเยี่ยม ของ เควนติน แทแรนติโน'


    titlecontent1.innerHTML = '10. "Death Proof. (2007)'
    contentmovie1.innerHTML = '"Death Proof" เป็นภาพยนตร์แอคชั่นระทึกขวัญปี 2007 ที่เขียนบทและกำกับโดยเควนติน ทาแรนติโน นำแสดงโดยเคิร์ต รัสเซลล์ในบทสตั๊นท์แมนชื่อไมค์ ผู้สะกดรอยตามและสังหารหญิงสาวด้วยรถสตันท์ของเขาและนำแสดงโดยโรซาริโอ ดอว์สัน, วาเนสซา เฟอร์ลิโต, จอร์แดน แลดด์ และโรส แมคโกแวน ภาพยนตร์เรื่องนี้ดำเนินเรื่องในเมืองออสติน รัฐเท็กซัส และเป็นส่วนหนึ่งของภาพยนตร์ทารันติโนอีกเรื่องเรื่อง "Planet Terror" <b>ภาพยนตร์เรื่องนี้ติดตามกลุ่มเพื่อนที่ออกไปท่องราตรีในเมือง และเกิดเหตุการลุ้นระทึกขึ้น </b>ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการใช้ภาพยนตร์ไล่ล่า'
    img1.src = 'https://ianfarrington.files.wordpress.com/2016/09/027-deathproof.jpg'

    
    titlecontent2.innerHTML = '9. "Jackie Brown" (1997)'
    contentmovie2.innerHTML = '"Jackie Brown" เป็นภาพยนตร์อาชญากรรมที่กำกับโดย Quentin Tarantino และออกฉายในปี 1997 สร้างจากนวนิยายเรื่อง "Rum Punch" ของ Elmore Leonard และ<b>ติดตามพนักงานต้อนรับบนเครื่องบินชื่อ Jackie Brown (แสดงโดย Pam Grier) ซึ่งถูกจับได้ว่าลักลอบขนเงินและ ต้องคิดแผนเอาตัวรอดออกจากคุกให้ได้ </b>ภาพยนตร์เรื่องนี้ยังนำแสดงโดยซามูเอล แอล. แจ็กสัน, โรเบิร์ต ฟอร์สเตอร์ และโรเบิร์ต เดอ นีโร และมีซาวด์แทร็กของดนตรีแนวโซลและฟังค์จากช่วงปี 1970 "แจ็กกี บราวน์" ได้รับคำวิจารณ์ในแง่บวกเมื่อออกฉาย ได้รับการเสนอชื่อเข้าชิงรางวัล Screen Actors Guild Award สาขาการแสดงยอดเยี่ยมโดยนักแสดงในภาพยนตร์'
    img2.src = 'https://m.media-amazon.com/images/M/MV5BMTk0MDI4NDAzMl5BMl5BanBnXkFtZTcwOTE2NzEyNw@@._V1_.jpg'

    titlecontent3.innerHTML = '8. "Once Upon a Time in Hollywood" (2019) '
    contentmovie3.innerHTML = '"Once Upon a Time in Hollywood" เป็นภาพยนตร์ตลก-ดราม่าที่กำกับโดยเควนติน ทาแรนติโน และออกฉายในปี 2019 ภาพยนตร์เรื่องนี้ดำเนินเรื่องในปี 1969 แล<b>ติดตามนักแสดงโทรทัศน์ที่จางหายไปชื่อริก ดาลตัน (แสดงโดยลีโอนาร์โด ดิคาปริโอ) และคลิฟฟ์ บูธคู่หูผาดโผนของเขา (แสดงโดยแบรด พิตต์) ขณะที่พวกเขานำทางอุตสาหกรรมภาพยนตร์ที่เปลี่ยนแปลงในฮอลลีวูด</b>"Once Upon a Time in Hollywood" ได้รับการตอบรับอย่างดีจากนักวิจารณ์และได้รับการเสนอชื่อเข้าชิงหลายรางวัลรวมถึงรางวัลออสการ์สิบรางวัล คว้าสองรางวัลออสการ์สาขานักแสดงสมทบชายยอดเยี่ยม (แบรด พิตต์) และตัดต่อเสียงยอดเยี่ยม ภาพยนตร์เรื่องนี้ยังคว้ารางวัลอื่นๆ อีกหลายรางวัล รวมถึงรางวัลลูกโลกทองคำสาขาภาพยนตร์เพลงหรือตลกยอดเยี่ยม'
    img3.src = 'https://www.indiewire.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-21-at-11.05.51-AM.png'

    titlecontent4.innerHTML = '7. "The Hateful Eight" (2015)'
    contentmovie4.innerHTML = '"The Hateful Eight" เป็นภาพยนตร์ตะวันตกที่กำกับโดย Quentin Tarantino และออกฉายในปี 2015 <b>ภาพยนตร์เรื่องนี้ดำเนินเรื่องในไวโอมิงหลังสงครามกลางเมืองและติดตามกลุ่มคนแปลกหน้าแปดคนที่หาที่หลบภัยในจุดจอดรถม้าที่เรียกว่า Minnie is Haberdashery ระหว่าง พายุหิมะ คนแปลกหน้ารวมถึงนักล่าค่าหัว (แสดงโดยเคิร์ต รัสเซล) นักโทษของเขา (แสดงโดยเจนนิเฟอร์ เจสัน ลีห์) อดีตนายพลฝ่ายสัมพันธมิตร (แสดงโดยซามูเอล แอล. แจ็คสัน) และเพชฌฆาต (แสดงโดยทิม รอธ) ขณะที่พายุโหมกระหน่ำข้างนอก ความตึงเครียดก็เพิ่มขึ้นและความลับก็ถูกเปิดเผยเมื่อคนแปลกหน้าพยายามค้นหาว่าใครในหมู่พวกเขาที่ไม่ใช่คนที่พวกเขาอ้างว่าเป็น "The Hateful Eight"</b> ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 3 รางวัล รวมถึงนักแสดงสมทบชายยอดเยี่ยมจากซามูเอล แอล. แจ็คสัน นอกจากนี้ยังได้รับการเสนอชื่อเข้าชิงรางวัลอื่นๆ อีกมากมาย รวมถึงลูกโลกทองคำสาขาภาพยนตร์ยอดเยี่ยม'
    img4.src = 'https://m.media-amazon.com/images/M/MV5BMjEyMDI1MjkwMl5BMl5BanBnXkFtZTgwMDA5MDM1NjE@._V1_.jpg'

    titlecontent5.innerHTML = '6. "Kill Bill: Volume 2 (2004)'
    contentmovie5.innerHTML = '"Kill Bill: Volume 2" เป็น<b>ภาพยนตร์แอ็คชั่นที่กำกับโดย Quentin Tarantino และออกฉายในปี 2004 เป็นภาคที่สองของภาพยนตร์สองภาค โดยภาคแรกคือ "Kill Bill: Volume 1" ซึ่งออกฉายในปี 2003 "Kill Bill: Volume 2" สานต่อเรื่องราวของ The Bride (แสดงโดย Uma Thurman) ผู้ซึ่งกำลังออกค้นหาเพื่อแก้แค้นอดีตเพื่อนนักฆ่าของเธอหลังจากที่ถูกทิ้งให้ตายในวันแต่งงานของเธอ ในภาพยนตร์เรื่องนี้ The Bride เผชิญหน้ากับคู่ต่อสู้คนสุดท้ายของเธอซึ่งเป็นหัวหน้าหน่วยลอบสังหาร Deadly Viper</b> (แสดงโดย David Carradine)  "Kill Bill: Volume 2" ได้รับคำวิจารณ์ในแง่บวกเมื่อออกฉาย และได้รับการยกย่องจากฉากแอ็คชั่นและการแสดง โดยเฉพาะฉากของ Uma Thurman และ David Carradine ได้รับการเสนอชื่อเข้าชิงรางวัลลูกโลกทองคำสาขาภาพยนตร์เพลงหรือตลกยอดเยี่ยม'
    img5.src = 'https://f.ptcdn.info/037/066/000/py2xw29sx3ItYjrZw9RM-o.jpg'

    titlecontent6.innerHTML = '5. "Kill Bill: Volume 1 (2003)'
    contentmovie6.innerHTML = '"Kill Bill: Volume 1" เป็นภาพยนตร์แอ็คชั่นที่กำกับโดย Quentin Tarantino และออกฉายในปี 2003 <b>ภาพยนตร์เรื่องนี้ติดตามผู้หญิงคนหนึ่งชื่อ The Bride (แสดงโดย Uma Thurman) ที่เริ่มต้นภารกิจเพื่อแก้แค้นอดีตเพื่อนร่วมงานมือสังหารของเธอหลังจากถูกทิ้งให้ เสียชีวิตในวันแต่งงานของเธอ การเดินทางของ The Bride พาเธอไปทั่วเอเชียและสหรัฐอเมริกาในขณะที่เธอต่อสู้ฝ่าฟันคู่ต่อสู้ที่น่ากลัวมากขึ้นเรื่อยๆ รวมถึงนักรบญี่ปุ่นผู้กวัดแกว่งดาบ</b> (แสดงโดย Lucy Liu)  "Kill Bill: Volume 1" ตามมาด้วยภาคต่อ "Kill Bill: Volume 2" ซึ่งเปิดตัวในปี 2004 เได้รับคำวิจารณ์ในแง่บวกเมื่อออกฉาย และตั้งแต่นั้นมาก็กลายเป็นเพลงคลาสสิกประจำลัทธิ ได้รับการเสนอชื่อเข้าชิงรางวัลลูกโลกทองคำสาขาภาพยนตร์เพลงหรือตลกยอดเยี่ยม'
    img6.src = 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/syfywire_blog_post/2018/09/kill_bill.jpg'

    titlecontent7.innerHTML = '4. "Reservoir Dogs" (1992)'
    contentmovie7.innerHTML = '"Reservoir Dogs" เป็นภาพยนตร์อาชญากรรมที่กำกับโดย Quentin Tarantino และออกฉายในปี 1992 เป็นภาพยนตร์เปิดตัวของ Tarantino และหลังจากนั้นก็กลายเป็นภาพยนตร์อิสระคลาสสิก <b>ภาพยนตร์ติดตามกลุ่มอาชญากรที่วางแผนและลงมือปฏิบัติการปล้นเพชร แต่เรื่องกลับผิดพลาดเมื่อหนึ่งในสมาชิกถูกสงสัยว่าเป็นตำรวจนอกเครื่องแบบ <b>ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากโครงสร้างการเล่าเรื่องแบบไม่เชิงเส้น ซึ่งสอดแทรกเหตุการณ์ของการปล้นเข้ากับปูมหลังของตัวละครและปฏิสัมพันธ์ของพวกเขาภายหลังการปล้นที่ล้มเหลว "Reservoir Dogs" นำแสดงโดยทีมนักแสดงซึ่งรวมถึง Harvey Keitel, Tim Roth, Michael Madsen และ Steve Buscemi ได้รับเสียงวิจารณ์ชื่นชมเมื่อออกฉายและได้รับการยกย่องจากบทภาพยนตร์ ทิศทาง และการแสดง ได้รับการเสนอชื่อเข้าชิงรางวัล BAFTA สาขาบทภาพยนตร์ดั้งเดิมยอดเยี่ยม'
    img7.src = 'https://m.media-amazon.com/images/M/MV5BMjA0MDc5MTQ3OF5BMl5BanBnXkFtZTgwOTkxOTIwMjE@._V1_.jpg'

    titlecontent8.innerHTML = '3. "Django Unchained" (2012)'
    contentmovie8.innerHTML = '"Django Unchained" เป็นภาพยนตร์ตะวันตกที่กำกับโดย Quentin Tarantino และออกฉายในปี 2012 <b>ภาพยนตร์เรื่องนี้ติดตามทาสที่ได้รับการปลดปล่อยชื่อ Django (แสดงโดย Jamie Foxx) ซึ่งร่วมมือกับนักล่าเงินรางวัลชาวเยอรมันชื่อ Dr. King Schultz (แสดงโดย Christoph Waltz) เพื่อช่วยเหลือภรรยาของเขา บรูมฮิลดา (แสดงโดยเคอร์รี วอชิงตัน) จากเจ้าของสวนชื่อคาลวิน แคนดี (แสดงโดยลีโอนาร์โด ดิคาปริโอ) ระหว่างทาง Django และ Schultz เผชิญหน้ากับความเป็นจริงของการเป็นทาสและการเหยียดเชื้อชาติ</b>"Django Unchained" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 5 สาขา รวมถึงบทภาพยนตร์ดั้งเดิมยอดเยี่ยมและนักแสดงสมทบชายยอดเยี่ยมจาก Christoph Waltz คว้าสองรางวัลออสการ์สาขานักแสดงสมทบชายยอดเยี่ยม (คริสตอฟ วอลซ์) และบทภาพยนตร์ดั้งเดิมยอดเยี่ยม ภาพยนตร์เรื่องนี้ยังได้รับรางวัลอื่นๆ อีกมากมาย รวมถึงรางวัลลูกโลกทองคำสาขาบทภาพยนตร์ยอดเยี่ยม'
    img8.src = 'https://cinemaautopsy.files.wordpress.com/2013/01/django-unchained-foxx-waltz-1024x605.jpeg'

    titlecontent9.innerHTML = '2. "Inglourious Basterds" (2009) '
    contentmovie9.innerHTML = '"Inglourious Basterds" เป็นภาพยนตร์สงครามที่กำกับโดย Quentin Tarantino และออกฉายในปี 2009 <b>ภาพยนตร์เรื่องนี้ดำเนินเรื่องในช่วงสงครามโลกครั้งที่ 2 และติดตามกลุ่มทหารอเมริกันเชื้อสายยิวที่รู้จักกันในชื่อ "Basterds" ซึ่งได้รับมอบหมายให้ลอบสังหารผู้นำนาซี </b>การเล่าเรื่องของภาพยนตร์ผสมผสานเรื่องราวของ Basterds กับเรื่องราวของหญิงสาวชาวฝรั่งเศส-ยิวชื่อ Shosanna (แสดงโดย Mélanie Laurent) ผู้ซึ่งพยายามแก้แค้นพวกนาซีที่ฆ่าครอบครัวของเธอ "Inglourious Basterds" นำแสดงโดยทีมนักแสดงทั้งแบรด พิตต์, คริสตอฟ วอลซ์, ไดแอน ครูเกอร์ และเอลี รอธ ภาพยนตร์เรื่องนี้ได้รับคำวิจารณ์ในแง่บวกเมื่อออกฉายและได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 8 รางวัล รวมถึงบทภาพยนตร์ดั้งเดิมยอดเยี่ยมและนักแสดงสมทบชายยอดเยี่ยมจากคริสตอฟ วอลซ์ ได้รับรางวัล BAFTA สาขาบทภาพยนตร์ดั้งเดิมยอดเยี่ยม'
    img9.src = 'https://images.squarespace-cdn.com/content/v1/5a1c2452268b96d901cd3471/1536371349885-GT54DCTPNCFE7FJLI2R5/inglourious_basterds01.jpg?format=1500w'
   
    titlecontent10.innerHTML = '1. "Pulp Fiction" (1994)'
    contentmovie10.innerHTML = '"Pulp Fiction" เป็นภาพยนตร์อาชญากรรมที่กำกับโดย Quentin Tarantino และออกฉายในปี 1994 ภาพยนตร์เรื่องนี้มีโครงสร้างการเล่าเรื่องที่เกี่ยวพันกันและทีมนักแสดงซึ่งประกอบด้วย John Travolta, Uma Thurman และ Samuel L. Jackson <b>ติดตามเรื่องราวที่เกี่ยวข้องกับอาชญากรรมและการไถ่บาปในลอสแองเจลิส รวมถึงเรื่องราวของนักฆ่า (แสดงโดยทราโวลตา) และภรรยาลึกลับของเจ้านายของเขา (แสดงโดยเธอร์แมน) หัวขโมยคู่หนึ่ง (แสดงโดยทิม รอธและอแมนดา พลัมเมอร์ ) และนักมวยที่หมดสภาพ (แสดงโดย Bruce Willis)</b> "Pulp Fiction" ได้รับการวิจารณ์และประสบความสำเร็จในเชิงพาณิชย์เมื่อออกฉาย ภาพยนตร์เรื่องนี้ได้รับรางวัล Palme จากเทศกาลภาพยนตร์เมืองคานส์ และได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 7 รางวัล รวมทั้งภาพยนตร์ยอดเยี่ยม ได้รับการยกย่องอย่างกว้างขวางในด้านบทภาพยนตร์ ทิศทาง และการแสดง และได้รับการจัดอันดับจากนักวิจารณ์มากมายให้เป็นหนึ่งในภาพยนตร์ที่ยิ่งใหญ่ที่สุดเท่าที่เคยมีมา'
    img10.src = 'https://static.metacritic.com/images/gallery_photos/default/s2240_gp4002_1563837993.jpg'

  } 
  if (design === 'alfred') {
    imgheaderfilmmaker.src ='https://www.thoughtco.com/thmb/dfjgLHR6Y_4l-LTj2i5eQFwqcVw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/alfred-hitchcock-155464665-5c84743446e0fb00012c66eb.jpg'
     titlefilm.innerHTML = 'อัลเฟรด ฮิตช์ค็อก (Alfred Hitchcock)'
    titlefilmcontent.innerHTML = 'Alfred Hitchcock เกิดเมื่อวันที่ 13 สิงหาคม พ.ศ. 2442 ในเมือง Leytonstone ประเทศอังกฤษ เขาเริ่มอาชีพในวงการภาพยนตร์ในช่วงทศวรรษที่ 1920 โดยทำงานเป็นนักออกแบบชื่อเรื่องและผู้กำกับศิลป์ก่อนที่จะก้าวไปสู่การกำกับ ภาพยนตร์เรื่องแรกของเขา เช่น "The Lodger: A Story of the London Fog" และ "Blackmail" ทำให้เขากลายเป็นปรมาจารย์ด้านความระทึกขวัญและช่วยให้เขาเริ่มต้นอาชีพในฐานะผู้กำกับภาพยนตร์ ในช่วงทศวรรษที่ 1930 และ 1940 ฮิตช์ค็อกได้กำกับภาพยนตร์ที่ประสบความสำเร็จหลายชุดซึ่งทำให้ชื่อเสียงของเขาแข็งแกร่งขึ้นในฐานะปรมาจารย์ด้านความใจจดใจจ่อ ภาพยนตร์เหล่านี้ ได้แก่ "The 39 Steps," "The Lady Vanishes," "Rebecca" และ "Notorious" ในปี 1950 และ 1960 เขายังคงสร้างภาพยนตร์ที่ได้รับการยกย่องอย่างสูงอีกหลายเรื่อง รวมถึง "Vertigo" "North by Northwest" และ "Psycho" ฮิตช์ค็อกเป็นที่รู้จักจากความใส่ใจในรายละเอียดอย่างพิถีพิถันและการใช้เทคนิคกล้องที่เป็นนวัตกรรมใหม่เพื่อสร้างความตึงเครียดและความใจจดใจจ่อ เขายังเป็นที่รู้จักจากการร่วมงานกับนักแสดง เช่น เจมส์ สจ๊วร์ตและเกรซ เคลลี และจากการปรากฏตัวรับเชิญที่น่าจดจำในภาพยนตร์ของเขาเอง ฮิตช์ค็อกได้รับการยกย่องอย่างกว้างขวางว่าเป็นหนึ่งในผู้สร้างภาพยนตร์ที่ยิ่งใหญ่ที่สุดและทรงอิทธิพลที่สุดในประวัติศาสตร์ภาพยนตร์ และผลงานของเขายังส่งผลต่อภาพยนตร์ประเภทระทึกขวัญและระทึกขวัญอย่างยาวนาน เขาได้รับรางวัลมากมายจากผลงานของเขา รวมถึงรางวัล Lifetime Achievement Award ของ American Film Institute ท่านถึงแก่กรรมเมื่อวันที่ 29 เมษายน พ.ศ. 2523 ขณะอายุได้ 80 ปี'
    imgheading.src = 'https://lh3.googleusercontent.com/9GkvKpTMGqKKVRafI2IJISRBtCWVjIC3DTe1vCk0Sl2z84_56vBwxzcSYyABVF57KAHEcbdqH_8ua2zjzxvbcrKq-rHB4YygPfgMoX8SuxwtmHtpZGTgTF5d0wBmEMZ-RCT3e9Z8VA=w2400'
    header. innerHTML = '10 อันดับหนังยอดเยี่ยม ของ อัลเฟรด ฮิตช์ค็อก'


    titlecontent1.innerHTML = '10. "Rebecca" (1940) '
    contentmovie1.innerHTML = '"Rebecca" เป็นภาพยนตร์ปี 1940 ที่กำกับโดย Alfred Hitchcock และสร้างจากนวนิยายชื่อเดียวกันของ Daphne du Maurier ภาพยนตร์นำแสดงโดยลอเรนซ์ โอลิเวียร์และโจน ฟงแตน <b>บอกเล่าเรื่องราวของหญิงสาวที่กลายเป็นภรรยาคนที่สองของพ่อม่ายผู้มั่งคั่ง และเริ่มสงสัยว่าบรรพบุรุษของเธออาจไม่ได้เสียชีวิตตามธรรมชาติ</b> "รีเบคก้า" คว้ารางวัลออสการ์สาขาภาพยนตร์ยอดเยี่ยม รวมถึงกำกับภาพขาวดำยอดเยี่ยม และกำกับภาพขาวดำยอดเยี่ยม ภาพยนตร์เรื่องนี้ยังได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์อีก 6 รางวัล ได้แก่ ผู้กำกับยอดเยี่ยม (อัลเฟรด ฮิตช์ค็อก) และนักแสดงนำหญิงยอดเยี่ยม (โจน ฟอนเทน) นอกจากนี้ "รีเบคก้า" ยังได้รับเลือกให้เก็บรักษาในทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2545'
    img1.src = 'https://www.intofilm.org/intofilm-production/scaledcropped/1096x548https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__2917-rebecca--hi_res-1c225016.jpg/film__2917-rebecca--hi_res-1c225016.jpg'

    
    titlecontent2.innerHTML = '9. "Dial M for Murder" (1954)'
    contentmovie2.innerHTML = '"Dial M for Murder" เป็นภาพยนตร์ปี 1954 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย Ray Milland, Grace Kelly และ Robert Cummings <b>ภาพยนตร์เรื่องนี้สร้างจากละครเวทีชื่อเดียวกันโดย Frederick Knott และบอกเล่าเรื่องราวของชายคนหนึ่งที่วางแผนจะฆ่าภรรยาของเขาเพื่อเงินของเธอ แต่แผนกลับผิดพลาด</b> "Dial M for Murder" ได้รับการตอบรับอย่างดีจากการเปิดตัว และตั้งแต่นั้นมาก็กลายเป็นงานคลาสสิกของฮิตช์ค็อก ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์สาขากำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2547 ภาพยนตร์เรื่องนี้มีความโดดเด่นในด้านการใช้เทคโนโลยี 3 มิติ ซึ่งค่อนข้างใหม่ในขณะนั้น และมีความน่าตื่นเต้น พล็อตและตอนจบที่บิดเบี้ยว'
    img2.src = 'https://m.media-amazon.com/images/M/MV5BMTQxNTY3NjA1Nl5BMl5BanBnXkFtZTcwNzQyODMwOQ@@._V1_.jpg'

    titlecontent3.innerHTML = '8. "Shadow of a Doubt" (1943)'
    contentmovie3.innerHTML = '"Shadow of a Doubt" เป็นภาพยนตร์ปี 1943 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย Teresa Wright, Joseph Cotten และ Hume Cronyn <b>ภาพยนตร์เรื่องนี้ติดตามเรื่องราวของหญิงสาวชื่อชาร์ลีที่เริ่มสงสัยว่าลุงของเธอที่มาเยี่ยมครอบครัวของเธออาจเป็นฆาตกรต่อเนื่อง</b> "Shadow of a Doubt" ได้รับการตอบรับอย่างดีจากการเปิดตัวและถือเป็นงานคลาสสิคของ Hitchcock ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 3 รางวัล ได้แก่ บทภาพยนตร์ยอดเยี่ยม บทภาพยนตร์ และดนตรีประกอบยอดเยี่ยม การให้คะแนนภาพยนตร์ดราม่า นอกจากนี้ ภาพยนตร์เรื่องนี้ได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี พ.ศ. 2534'
    img3.src = 'https://images.squarespace-cdn.com/content/v1/57e05e534402434aa0f846c2/1492812948714-HGTCEFDF1USRTK9VF0GO/5234.jpg?format=1000w'

    titlecontent4.innerHTML = '7. "Strangers on a Train" (1951)'
    contentmovie4.innerHTML = '"Strangers on a Train" เป็นภาพยนตร์ปี 1951 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย Farley Granger และ Robert Walker <b>ภาพยนตร์เรื่องนี้สร้างจากนวนิยายชื่อเดียวกันของ Patricia Highsmith และบอกเล่าเรื่องราวของชายสองคนที่พบกันบนรถไฟและตกลงที่จะแลกเปลี่ยนคดีฆาตกรรมกัน</b> "Strangers on a Train" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์สาขากำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 1992 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากโครงเรื่องที่ชวนสงสัยและการใช้เทคนิคกล้องเพื่อสร้างความตึงเครียดและ ใจจดใจจ่อ'
    img4.src = 'https://rocklandmaine.gov/wp-content/uploads/2019/11/december-26-farley-granger-robert-walker-in-strangers-on-a-train.png'

    titlecontent5.innerHTML = '6. "Notorious" (1946)'
    contentmovie5.innerHTML = '"Notorious" เป็นภาพยนตร์ที่กำกับโดย Alfred Hitchcock ในปี 1946 และนำแสดงโดย Cary Grant, Ingrid Bergman และ Claude Rains <b>ภาพยนตร์เรื่องนี้เป็นสายลับระทึกขวัญที่ติดตามเรื่องราวของหญิงสาวที่ได้รับคัดเลือกจากเจ้าหน้าที่ของรัฐให้แทรกซึมเข้าไปในกลุ่มนาซีในอเมริกาใต้</b> "Notorious" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 2 รางวัล ได้แก่ นักแสดงนำหญิงยอดเยี่ยม (อิงกริด เบิร์กแมน) และบทภาพยนตร์ยอดเยี่ยม (เบน เฮชต์) นอกจากนี้ ภาพยนตร์เรื่องนี้ได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติสหรัฐอเมริกาในปี 2541 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากโครงเรื่องที่น่าลุ้นระทึก การใช้เทคนิคกล้องเพื่อสร้างความตึงเครียดและลุ้นระทึก และการแสดงที่แข็งแกร่งของนักแสดงนำ'
    img5.src = 'https://f.ptcdn.info/384/064/000/pss7x352c6fkC2ZEDQhg-o.jpg'

    titlecontent6.innerHTML = '5. "North by Northwest" (1959) '
    contentmovie6.innerHTML = '"North by Northwest" เป็นภาพยนตร์ปี 1959 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย Cary Grant, Eva Marie Saint และ James Mason <b>ภาพยนตร์เรื่องนี้เป็นหนังระทึกขวัญระทึกขวัญเกี่ยวกับชายผู้บริสุทธิ์ที่ถูกเข้าใจผิดว่าเป็นเจ้าหน้าที่ของรัฐและกลายเป็นเป้าหมายของกลุ่มสายลับ</b> "North by Northwest" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 3 รางวัล ได้แก่ สาขากำกับศิลป์ยอดเยี่ยม และ สาขาบันทึกเสียงยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากฉากไล่ล่าที่โดดเด่น บทประพันธ์ที่น่าจดจำโดยเบอร์นาร์ด แฮร์มันน์ และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ "North by Northwest" ยังได้รับเลือกให้เก็บรักษาไว้ในทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2542'
    img6.src = 'https://m.media-amazon.com/images/M/MV5BMTMyMTYyNjIzMF5BMl5BanBnXkFtZTcwODE2ODUwNA@@._V1_.jpg'

    titlecontent7.innerHTML = '4. "The Birds" (1963)'
    contentmovie7.innerHTML = '"The Birds" เป็นภาพยนตร์ปี 1963 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย Tippi Hedren, Rod Taylor และ Suzanne Pleshette <b>ภาพยนตร์เรื่องนี้เป็นแนวสยองขวัญระทึกขวัญเกี่ยวกับเมืองเล็กๆ แห่งหนึ่งที่ถูกโจมตีโดยฝูงนก</b> "The Birds" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์สาขาเทคนิคพิเศษยอดเยี่ยม และได้รับเลือกให้เก็บรักษาไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2539 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากโครงเรื่องที่น่าสงสัย การใช้เทคนิคพิเศษเพื่อสร้างการโจมตีของนก และการแสดงที่แข็งแกร่งของนักแสดงนำ'
    img7.src = 'https://prod-images.tcm.com/Master-Profile-Images/thebirds1963.30594.jpg'

    titlecontent8.innerHTML = '3. "Rear Window" (1954)'
    contentmovie8.innerHTML = '"Rear Window" เป็นภาพยนตร์ปี 1954 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย James Stewart, Grace Kelly และ Wendell Corey <b>ภาพยนตร์เรื่องนี้เป็นหนังระทึกขวัญระทึกขวัญเกี่ยวกับช่างภาพที่ขาหักต้องถูกกักขังอยู่ในอพาร์ทเมนต์ของเขา และเริ่มสงสัยว่าเพื่อนบ้านของเขาอาจลงมือฆาตกรรม</b> "Rear Window" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 4 สาขา ได้แก่ ผู้กำกับยอดเยี่ยม (อัลเฟรด ฮิทช์ค็อก) และบทภาพยนตร์ยอดเยี่ยม (จอห์น ไมเคิล เฮย์ส) ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการใช้เทคนิคกล้องอย่างสร้างสรรค์เพื่อสร้างความตึงเครียดและความลุ้นระทึก เช่นเดียวกับการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ "Rear Window" ยังได้รับเลือกให้เก็บรักษาไว้ในทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2540'
    img8.src = 'https://static.mfah.com/images/rear-window.3099215809119315916.jpg?width=1631'

    titlecontent9.innerHTML = '2. "Vertigo" (1958)'
    contentmovie9.innerHTML = '"Vertigo" เป็นภาพยนตร์ปี 1958 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย James Stewart และ Kim Novak <b>ภาพยนตร์เรื่องนี้เป็นแนวจิตวิทยาระทึกขวัญเกี่ยวกับนักสืบวัยเกษียณที่หมกมุ่นอยู่กับผู้หญิงคนหนึ่งที่เขาจ้างให้ติดตาม และเริ่มสงสัยว่าเธออาจตกอยู่ในอันตราย</b> "Vertigo" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 2 รางวัล รวมถึงกำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2539 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการใช้เทคนิคกล้องที่แปลกใหม่เพื่อสร้างความตึงเครียดและความลุ้นระทึก เช่นเดียวกับ การแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ "Vertigo" ยังปรากฏในรายชื่อภาพยนตร์ที่ยิ่งใหญ่ที่สุดตลอดกาลหลายรายการ และมักถูกพิจารณาว่าเป็นหนึ่งในความสำเร็จที่ยิ่งใหญ่ที่สุดของฮิตช์ค็อก'
    img9.src = 'https://m.media-amazon.com/images/M/MV5BMTUyNDM3NjYwNV5BMl5BanBnXkFtZTcwODYzMjAyNw@@._V1_.jpg'

    titlecontent10.innerHTML = '1. "Psycho" (1960)'
    contentmovie10.innerHTML = '"Psycho" เป็นภาพยนตร์ปี 1960 ที่กำกับโดย Alfred Hitchcock และนำแสดงโดย Anthony Perkins, Janet Leigh และ Vera Miles <b>ภาพยนตร์เรื่องนี้เป็นหนังระทึกขวัญแนวจิตวิทยาเกี่ยวกับหญิงสาวที่พยายามหลบหนีหลังจากที่เขายักยอกเงินจากนายจ้างและพยายามหลบหนี และไปพักที่โรงแรมแห่งหนึ่ง เรื่องราวต่างๆ จึงได้เริ่มต้นขึ้น</b> "Psycho" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 4 รางวัล รวมถึงนักแสดงสมทบหญิงยอดเยี่ยม (เจเน็ต ลีห์) และผู้กำกับยอดเยี่ยม (อัลเฟรด ฮิตช์ค็อก) ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากโครงเรื่องที่น่าสงสัย บทประพันธ์ที่โดดเด่นโดยเบอร์นาร์ด แฮร์มันน์ และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ "Psycho" ยังได้รับเลือกให้เก็บรักษาไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 1992'
    img10.src = 'https://pbs.twimg.com/media/EYo_9D3UEAA-szC?format=jpg&name=large'

 
  }
  if (design === 'stanley') {
    imgheaderfilmmaker.src ='https://prod-images.tcm.com/Master-Profile-Images/StanleyKubrick.jpg'
     titlefilm.innerHTML = 'สแตนลีย์ คูบริก (Stanley Kubrick)'
    titlefilmcontent.innerHTML = 'Stanley Kubrick เป็นผู้กำกับภาพยนตร์ ผู้เขียนบท และโปรดิวเซอร์ชาวอเมริกัน ซึ่งได้รับการยอมรับอย่างกว้างขวางว่าเป็นหนึ่งในผู้สร้างภาพยนตร์ที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ภาพยนตร์ Kubrick เกิดในปี 1928 ในย่านบรองซ์ นิวยอร์ก เริ่มอาชีพช่างภาพและผันตัวมากำกับสารคดีสั้นและภาพยนตร์สารคดีในที่สุด เขาเป็นที่รู้จักในเรื่องการเล่าเรื่องที่แปลกใหม่ ความเชี่ยวชาญด้านเทคนิค และการใส่ใจในรายละเอียด และภาพยนตร์ของเขามักจะสำรวจธีมและแนวคิดที่ซับซ้อน  ภาพยนตร์ที่โด่งดังที่สุดของ Kubrick ได้แก่ "2001: A Space Odyssey," "A Clockwork Orange," "The Shining" และ "Full Metal Jacket" "2001: A Space Odyssey" เป็นมหากาพย์นิยายวิทยาศาสตร์ที่สำรวจวิวัฒนาการของมนุษยชาติและความสัมพันธ์ระหว่างมนุษย์กับปัญญาประดิษฐ์ "A Clockwork Orange" เป็นละครอาชญากรรมแนวดิสโทเปียที่สำรวจธีมของเจตจำนงเสรีและศีลธรรม "The Shining" เป็นภาพยนตร์สยองขวัญที่ติดตามครอบครัวที่แยกตัวออกมาในโรงแรมผีสิง "Full Metal Jacket" เป็นภาพยนตร์สงครามที่สำรวจผลกระทบทางจิตวิทยาของการฝึกทหารและการต่อสู้กับทหาร นอกจากภาพยนตร์เหล่านี้แล้ว คูบริกยังกำกับภาพยนตร์คลาสสิกอีกหลายเรื่อง เช่น "Spartacus," "Dr. Strangelove," "Lolita" และ "Eyes Wide Shut" ภาพยนตร์ของเขาได้รับรางวัลมากมายและได้รับการยกย่องอย่างกว้างขวางจากนักวิจารณ์และผู้ชมจากการเล่าเรื่องที่แปลกใหม่ ความเป็นเลิศทางเทคนิค และความคิด Kubrick ได้รับการยกย่องอย่างกว้างขวางว่าเป็นหนึ่งในผู้สร้างภาพยนตร์ที่ยิ่งใหญ่และมีอิทธิพลมากที่สุดในประวัติศาสตร์ภาพยนตร์ และผลงานของเขาส่งผลกระทบต่ออุตสาหกรรมภาพยนตร์มาอย่างยาวนาน เขาได้รับรางวัลมากมายจากผลงานของเขา รวมทั้งได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์หลายครั้ง นอกเหนือจากการทำงานในฐานะผู้สร้างภาพยนตร์แล้ว Kubrick ยังเป็นที่รู้จักในด้านความสันโดษและแนวทางการสร้างภาพยนตร์ที่พิถีพิถัน'
    imgheading.src = 'https://lh3.googleusercontent.com/HvZlBibO0zFoi0WzfAgRZrtbnUXWJGMseEOtHpvz_O42l_ieUG7BUuuU27p9dcwEFvnslK884V-ugk2XuLn9y9DjKkGHTWd9_WjDs610_ZoPhClDtAJvos1UZpyoP2sE9X20wWz-ng=w2400'
    header. innerHTML = '10 อันดับหนังยอดเยี่ยม ของ อัลเฟรด ฮิตช์ค็อก'


    titlecontent1.innerHTML = '10. "Spartacus" (1960)'
    contentmovie1.innerHTML = '"Spartacus" เป็นภาพยนตร์ปี 1960 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Kirk Douglas, Laurence Olivier และ Jean Simmons <b>ภาพยนตร์เรื่องนี้เป็นมหากาพย์ประวัติศาสตร์เกี่ยวกับชีวิตของ Spartacus นักสู้ที่เป็นผู้นำการประท้วงต่อต้านอาณาจักรโรมัน</b> "สปาร์ตาคัส" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 6 สาขา รวมถึงนักแสดงนำชายยอดเยี่ยม (เคิร์ก ดักลาส) และนักแสดงสมทบชายยอดเยี่ยม (ลอเรนซ์ โอลิเวียร์) ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากขอบเขตที่ยิ่งใหญ่ การแสดงที่แข็งแกร่งของนักแสดงนำ และบทประพันธ์ที่น่าจดจำโดยอเล็กซ์ นอร์ธ นอกจากนี้ "Spartacus" ยังได้รับเลือกให้เก็บรักษาในทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2541'
    img1.src = 'https://jaredandkyal.files.wordpress.com/2017/03/ac454-spartacus2b1.jpg'

    
    titlecontent2.innerHTML = '9. "Eyes Wide Shut" (1999)'
    contentmovie2.innerHTML = '"Eyes Wide Shut" เป็นภาพยนตร์ปี 1999 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Tom Cruise และ Nicole Kidman <b>ภาพยนตร์เรื่องนี้เป็นแนวจิตวิทยาระทึกขวัญเกี่ยวกับแพทย์ที่ประสบความสำเร็จซึ่งเข้าไปพัวพันกับโลกลึกลับและอันตรายหลังจากที่ภรรยาของเขายอมรับว่ามีจินตนาการทางเพศเกี่ยวกับชายอื่น</b> "Eyes Wide Shut" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 2 รางวัล รวมถึงกำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติสหรัฐอเมริกาในปี 2561 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการแสดงที่แข็งแกร่งของนักแสดงนำ การสำรวจธีมของ ความซื่อสัตย์และความปรารถนา และจุดจบที่เป็นปริศนาและกำกวม'
    img2.src = 'https://classic.imgix.net/movies/headers/eyes%20wide.png?auto=compress,format&w=1440&h=602&fit=crop&v=20221026'

    titlecontent3.innerHTML = '8. "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb" (1964)'
    contentmovie3.innerHTML = '"Dr. Strangelove or: How I Learn to Stop Worrying and Love the Bomb" เป็นภาพยนตร์ปี 1964 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Peter Sellers, George C. Scott และ Sterling Hayden <b>ภาพยนตร์เรื่องนี้เป็นการเสียดสีทางการเมืองเกี่ยวกับกลุ่มทหารและบุคคลสำคัญทางการเมืองที่พยายามป้องกันภัยพิบัตินิวเคลียร์หลังจากที่นายพลสั่งให้โจมตีสหภาพโซเวียตด้วยนิวเคลียร์</b> "Dr. Strangelove" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 4 รางวัล รวมถึงนักแสดงนำชายยอดเยี่ยม (ปีเตอร์ เซลเลอร์ส) และกำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2536 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากอารมณ์ขันที่มืดมน การเหน็บแนม เข้าสู่สงครามเย็นและการแสดงที่แข็งแกร่งของนักแสดงนำ'
    img3.src = 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/dr-strangelove-1963-020-peter-bull-peter-sellers-war-room-telephones-00m-dtr.jpg?itok=BtKPobcm'

    titlecontent4.innerHTML = '7. "Barry Lyndon" (1975)'
    contentmovie4.innerHTML = '"Barry Lyndon" เป็นภาพยนตร์ปี 1975 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Ryan O Neal, Marisa Berenson และ Patrick Magee <b>ภาพยนตร์เรื่องนี้เป็นละครอิงประวัติศาสตร์เกี่ยวกับชายหนุ่มที่ขึ้นๆ ลงๆ ในสังคมในช่วงศตวรรษที่ 18 โดยสร้างจากนวนิยายเรื่อง "The Luck of Barry Lyndon" โดย William Makepeace Thackeray</b> "แบร์รี ลินดอน" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 7 รางวัล รวมถึงนักแสดงนำชายยอดเยี่ยม (ไรอัน โอนีล) และกำกับศิลป์ยอดเยี่ยม และคว้ารางวัลออสการ์ 4 สาขา รวมถึงกำกับภาพยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักในด้านภาพที่น่าทึ่ง ความใส่ใจในรายละเอียดทางประวัติศาสตร์อย่างพิถีพิถัน และการแสดงที่แข็งแกร่งของนักแสดงนำ นอกจากนี้ "แบร์รี ลินดอน" ยังได้รับเลือกให้เก็บรักษาในทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2533'
    img4.src = 'https://m.media-amazon.com/images/M/MV5BMjI3MzA3Nzc0OF5BMl5BanBnXkFtZTgwMjE0NTU5MTE@._V1_.jpg'

    titlecontent5.innerHTML = '6. "Lolita" (1962)'
    contentmovie5.innerHTML = '"Lolita" เป็นภาพยนตร์ที่กำกับโดย Stanley Kubrick ในปี 1962 และนำแสดงโดย James Mason, Sue Lyon และ Shelley Winters <b>ภาพยนตร์เรื่องนี้เป็นละครที่สร้างจากนวนิยายชื่อเดียวกันของวลาดิเมียร์ นาโบคอฟ เกี่ยวกับชายวัยกลางคนที่หลงรักเด็กสาววัยรุ่น</b> "Lolita" ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 2 รางวัล ได้แก่ นักแสดงนำชายยอดเยี่ยม (เจมส์ เมสัน) และบทภาพยนตร์ดัดแปลงยอดเยี่ยม และได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติสหรัฐอเมริกาในปี 2010 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากเนื้อหาที่เป็นประเด็นขัดแย้ง การแสดงที่แข็งแกร่ง โดยนักแสดงนำและสไตล์ภาพที่มีสไตล์และชวนดื่มด่ำ'
    img5.src = 'https://plotandtheme.files.wordpress.com/2017/04/a-scene-from-lolita.png'

    titlecontent6.innerHTML = '5. "Paths of Glory" (1957)'
    contentmovie6.innerHTML = '"Paths of Glory" เป็นภาพยนตร์ปี 1957 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Kirk Douglas, Ralph Meeker และ Adolphe Menjou <b>เรื่องราวของนายพลที่ได้รับคำสั่งให้ยึดแอนท์ฮิลล์ ซึ่งเป็นภารกิจที่ไม่มีทางประสบความสำเร็จ แต่ก็ต้องรับเพื่อหวังจะได้เลื่อนตำแหน่งโดยไม่สนใจความสูญเสียที่จะเกิดขึ้น และเมื่อภารกิจล้มเหลว นายพลโกรธมาก เพื่อไม่ให้ตัวเองขายหน้า ทหาร 3 นายถูกเลือกมาเป็นแพะรับบาปและต้องโทษประหาร</b> "Paths of Glory" ถือเป็นงานคลาสสิกของ Kubrick ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 3 รางวัล รวมถึงนักแสดงนำชายยอดเยี่ยม (เคิร์ก ดักลาส) และกำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติสหรัฐอเมริกาในปี 2532 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการแสดงภาพอันทรงพลังของความน่าสะพรึงกลัวของสงคราม การแสดงที่แข็งแกร่งของนักแสดงนำและประเด็นด้านคุณธรรมและจริยธรรม'
    img6.src = 'https://thefilmspectrum.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-27-at-6.37.25-PM.png'

    titlecontent7.innerHTML = '4. "Full Metal Jacket" (1987)'
    contentmovie7.innerHTML = '"Full Metal Jacket" เป็นภาพยนตร์ปี 1987 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Matthew Modine, Adam Baldwin และ Vincent D Onofrio <b>ภาพยนตร์เรื่องนี้เป็นละครสงครามเกี่ยวกับกลุ่มทหารเกณฑ์นาวิกโยธินที่ได้รับการฝึกฝนเพื่อรับใช้ในสงครามเวียดนาม</b> "Full Metal Jacket" ได้รับการเสนอชื่อเข้าชิงหนึ่งรางวัลออสการ์สาขาบทภาพยนตร์ดัดแปลงยอดเยี่ยม และได้รับเลือกให้อนุรักษ์ไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติสหรัฐอเมริกาในปี 2554 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากการแสดงภาพความโหดร้ายของสงครามที่สมจริง การแสดงที่แข็งแกร่งโดย นักแสดงนำและบทประพันธ์ที่น่าจดจำโดย Abigail Mead และ Nigel Goulding มันเป็นความสำเร็จที่สำคัญและประสบความสำเร็จในเชิงพาณิชย์เมื่อเปิดตัวและถือเป็นงานคลาสสิกของ Kubrick"'
    img7.src = 'https://m.media-amazon.com/images/M/MV5BNDIxNzcwOTEyM15BMl5BanBnXkFtZTcwOTg4NDIwNA@@._V1_.jpg'

    titlecontent8.innerHTML = '3. "2001: A Space Odyssey" (1968)'
    contentmovie8.innerHTML = '"2001: A Space Odyssey" เป็นภาพยนตร์ปี 1968 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Keir Dullea, Gary Lockwood และ William Sylvester <b>การค้นพบแท่งหินสีดำลึกลับที่เรียกว่าโมโนลิธบนดวงจันทร์โดยบังเอิญ และค้นพบร่องรอยว่ามีแท่งหินแบบเดียวกันอีกแท่งบนดวงจันทร์จาเพตัสของดาวเสาร์ ทำให้องค์การนาซาส่งยานโอดิสซีย์ออกไปสำรวจ ลูกเรือของยานโอดิสซีย์ต้องฝ่าฟันอุปสรรคมากมาย ก่อนจะค้นพบความจริงของจักรวาล</b> "2001: A Space Odyssey" ประสบความสำเร็จในเชิงพาณิชย์เมื่อมีการออกฉาย และถือเป็นนิยายวิทยาศาสตร์คลาสสิกและผลงานของ Kubrick ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 4 รางวัล รวมถึงผู้กำกับยอดเยี่ยม (สแตนลีย์ คูบริก) และวิชวลเอฟเฟกต์ยอดเยี่ยม และคว้าหนึ่งรางวัลออสการ์สาขาเทคนิคพิเศษภาพพิเศษยอดเยี่ยม ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากสเปเชียลเอฟเฟ็กต์ที่แปลกใหม่ การเล่าเรื่องที่เป็นนามธรรมและเป็นปริศนา และดนตรีประกอบที่มีอิทธิพลโดย Richard Strauss และ György Ligeti นอกจากนี้ "2001: A Space Odyssey" ยังได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 1991'
    img8.src = 'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/2001-a-space-odyssey-1968/2001.jpg'

    titlecontent9.innerHTML = '2. "A Clockwork Orange" (1971)'
    contentmovie9.innerHTML = '"A Clockwork Orange" เป็นภาพยนตร์ปี 1971 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Malcolm McDowell, Patrick Magee และ Michael Bates <b>ภาพยนตร์เรื่องนี้เป็นละครแนวอาชญากรรมเกี่ยวกับชายหนุ่มที่ต้องเข้ารับการบำบัดทดลองที่พยายามรักษานิสัยชอบใช้ความรุนแรงของเขา</b> "A Clockwork Orange" ประสบความสำเร็จในเชิงพาณิชย์เมื่อมีการเปิดตัวและถือเป็นงานคลาสสิกของ Kubrick ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 4 รางวัล รวมถึงนักแสดงนำชายยอดเยี่ยม (มัลคอล์ม แมคโดเวลล์) และผู้กำกับยอดเยี่ยม (สแตนลีย์ คูบริก) และได้รับเลือกให้เก็บรักษาในสำนักทะเบียนภาพยนตร์แห่งชาติสหรัฐอเมริกาในปี 2536 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากธีมที่เร้าใจ การแสดงที่แข็งแกร่ง โดยนักแสดงนำและสไตล์ภาพที่โดดเด่นและดนตรีประกอบโดยเวนดี้ คาร์ลอส'
    img9.src = 'https://m.media-amazon.com/images/M/MV5BMjE0NTk2NDkzNl5BMl5BanBnXkFtZTcwMzE4NzMyNQ@@._V1_.jpg'

    titlecontent10.innerHTML = '1. "The Shining" (1980)'
    contentmovie10.innerHTML = 'The Shining เป็นภาพยนตร์ปี 1980 ที่กำกับโดย Stanley Kubrick และนำแสดงโดย Jack Nicholson, Shelley Duvall และ Danny Lloyd <b>ภาพยนตร์เรื่องนี้เป็นแนวสยองขวัญเชิงจิตวิทยาเกี่ยวกับครอบครัวหนึ่งที่ติดอยู่ในโรงแรมผีสิงในช่วงนอกฤดูกาลท่องเที่ยว</b> "The Shining" ประสบความสำเร็จในเชิงวิจารณ์และเชิงพาณิชย์เมื่อออกฉาย และถือเป็นงานคลาสสิกของหนังสยองขวัญและผลงานของ Kubrick ภาพยนตร์เรื่องนี้ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ 3 รางวัล รวมถึงเสียงประกอบยอดเยี่ยมและกำกับศิลป์ยอดเยี่ยม และได้รับเลือกให้เก็บรักษาไว้ในสำนักทะเบียนภาพยนตร์แห่งชาติของสหรัฐอเมริกาในปี 2550 ภาพยนตร์เรื่องนี้เป็นที่รู้จักจากบรรยากาศที่วุ่นวาย การแสดงที่น่าจดจำของนักแสดงนำ ภาพและคะแนนที่โดดเด่นโดย Wendy Carlos และ Rachel Elkind'
    img10.src = 'https://m.media-amazon.com/images/M/MV5BMTA0NzUxMjU3OTJeQTJeQWpwZ15BbWU4MDc5NTQ1NjYz._V1_.jpg'

   

  }

}



