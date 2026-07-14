/* =====================================
   MOBILE MENU
===================================== */


const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector("#navbar");


function toggleMenu(){

    navbar.classList.toggle("active");

}



if(menuBtn){

    menuBtn.addEventListener("click", toggleMenu);

}



/* Close menu after clicking link */


const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navbar.classList.remove("active");


    });


});





/* =====================================
   SMOOTH SCROLL BUTTON FUNCTION
===================================== */


function scrollSection(id){


    const section=document.getElementById(id);


    if(section){


        section.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    }


}





/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */


const revealElements=document.querySelectorAll(

".course-card, .trainer-content, .trainer-photo, .gallery-grid img, .contact-box"

);



const observer=new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.15

});




revealElements.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});





/* =====================================
   ACTIVE NAV LINK
===================================== */


const sections=document.querySelectorAll("section");


const links=document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop=section.offsetTop - 150;


        const sectionHeight=section.clientHeight;



        if(

            scrollY >= sectionTop &&

            scrollY < sectionTop + sectionHeight

        ){


            current=section.getAttribute("id");


        }


    });



    links.forEach(link=>{


        link.classList.remove("active");



        if(link.getAttribute("href")==="#"+current){


            link.classList.add("active");


        }


    });


});






/* =====================================
   NAVBAR SHADOW ON SCROLL
===================================== */


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        header.style.boxShadow=

        "0 10px 30px rgba(0,0,0,.08)";


    }

    else{


        header.style.boxShadow="none";


    }


});






/* =====================================
   CONTACT FORM
===================================== */


const form=document.querySelector("form");



if(form){


form.addEventListener("submit",(e)=>{


    e.preventDefault();



    alert(

    "Thank you! Your enquiry has been received. We will contact you soon."

    );



    form.reset();


});


}






/* =====================================
   COURSE CARD CLICK EFFECT
===================================== */


const cards=document.querySelectorAll(".course-card");



cards.forEach(card=>{


    card.addEventListener("click",()=>{


        card.classList.toggle("selected");


    });


});





/* =====================================
   YEAR UPDATE AUTOMATICALLY
===================================== */


const year=document.querySelector(".year");


if(year){


    year.innerHTML=new Date().getFullYear();


}