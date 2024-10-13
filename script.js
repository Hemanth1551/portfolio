
window.addEventListener("load", function() {
    const loader = document.getElementById("lds-ripple");
    setTimeout(function() {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = "none";
        }, 500);
    }, 2000); // Display loader for 4 seconds
});


function toggleMenu(x) {
    x.classList.toggle('change');
    document.getElementById('mask').classList.toggle('show-mask');
}

var cursor = document.querySelector(".pointer");
document.addEventListener("mousemove",function(e){
    console.log(e)
    cursor.style.cssText =  "left: " + e.clientX + "px; top: " + e.clientY +"px;";
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.img');
    const info = document.querySelector('.p3');
    const expMenu = document.querySelector('.exp-menu');

    const expdata = document.querySelector('.exp1-data');
    const expdata1 = document.querySelector('.exp3-data');
    const expdata2 = document.querySelector('.exp2-data');


    const screenWidth = window.innerWidth;
    const scrollY = window.scrollY;
    const expMenuTop = expMenu.getBoundingClientRect().top + window.scrollY;


    if (screenWidth >= 360 && screenWidth <= 414) {
          if (scrollY === 0) {
              navbar.style.top = '800px';
              navbar.style.left = '40px';
              info.style.transform = 'translateX(0%)'; // Move right
          }
          if (scrollY > 100) {
              navbar.style.top = '800px';
              navbar.style.left = '40px';
              info.style.transform = 'translateX(10%)'; // Move right
          } else {
              navbar.style.top = '80px';
              navbar.style.left = '40px';
              info.style.transform = 'translateX(0%)'; // Move left
          }
    }
    else {
        if (scrollY > 50) {
            navbar.style.top = '790px';
            navbar.style.left = '50px';
            info.style.transform = 'translateX(10%)'; // Move slightly right
        } else {
            navbar.style.top = '80px';/*150*/
            navbar.style.left = '50px';  /*700 px*/
            info.style.transform = 'translateX(-20%)'; // Move left
        }
        if (screenWidth >= 1000) {
    // For screen widths between 1220 and 1920
    if (screenWidth >= 1220 && screenWidth <= 1920) {
        if (scrollY > 50) {
            navbar.style.top = '770px';
            navbar.style.left = '150px';
        } else {
            navbar.style.top = '130px';
            navbar.style.left = '700px';
        }

        // Handle expdata and related elements based on scroll position
        if (scrollY >= expMenuTop - 15) {
            expdata.style.transform = 'translateX(10px)';
            expdata1.style.transform = 'translateX(10px)';
            expdata2.style.transform = 'translateX(10px)';
        } else {
            expdata.style.transform = 'translateX(-650px)';
            expdata1.style.transform = 'translateX(-650px)';
            expdata2.style.transform = 'translateX(1100px)';
        }
    } 
    // For other screen widths (below 1220)
    else {
        if (scrollY > 50) {
            navbar.style.top = '770px';
            navbar.style.left = '280px';
            info.style.transform = 'translateX(2%)';

            expdata.style.transform = 'translateX(650px)';
            expdata1.style.transform = 'translateX(650px)';
            expdata2.style.transform = 'translateX(700px)';
        } else {
            navbar.style.top = '130px';
            navbar.style.left = '700px';
            info.style.transform = 'translateX(0%)';

            expdata.style.transform = 'translateX(-650px)';
            expdata1.style.transform = 'translateX(-650px)';
            expdata2.style.transform = 'translateX(1000px)';
        }

        // Extra check if scrollY is exactly 0
        if (scrollY === 0) {
            expdata.style.transform = 'translateX(-650px)';
            expdata1.style.transform = 'translateX(-650px)';
            expdata2.style.transform = 'translateX(-720px)';
        }
    }
}

        /*
        else if(screenWidth >= 1020 && screenWidth <= 1920)
        {
            
            if (scrollY > 50) {
                navbar.style.top = '770px';
                navbar.style.left = '280px';  
                info.style.transform = 'translateX(2%)'; 
            } else {
                navbar.style.top = '130px';
                navbar.style.left = '700px';  
                info.style.transform = 'translateX(0%)'; 

            }
        }*/
    }
/*
    if (screenWidth >= 640 && screenWidth <= 1020) {
    
        if (scrollY === 0) {
            navbar.style.top = '800px';
            navbar.style.left = '40px';
            info.style.transform = 'translateX(-10%)'; // Move right
        }
        if (scrollY > 100) {
            navbar.style.top = '800px';
            navbar.style.left = '500px';
            info.style.transform = 'translateX(2%)'; // Move right
        } else {
            navbar.style.top = '80px';
            navbar.style.left = '40px';
            info.style.transform = 'translateX(-10%)'; // Move left
        }

    }

/*
    if (scrollY >= expMenuTop - 20) {
        expdata.style.transform = 'translateX(10px)';
        expdata1.style.transform = 'translateX(10px)';
        expdata2.style.transform = 'translateX(10px)';
    } else {
        expdata.style.transform = 'translateX(-650px)'; // Move left
        expdata1.style.transform = 'translateX(-650px)';
        expdata2.style.transform = 'translateX(1000px)';
    }
*/
});









function view1() {
    const plate = document.querySelector('.exp1-btn');
    const key = document.querySelector('.data1');
    const remove = document.querySelector('.exp1-info');

    key.style.display = 'block';
    key.style.marginLeft = '50px';
    plate.style.display = 'none';
    remove.style.display = 'none';
    
}
function hide1(){
    const plate = document.querySelector('.exp1-btn');
    const key = document.querySelector('.data1');
    const remove = document.querySelector('.exp1-info');

    key.style.display = 'none';
    remove.style.display = 'block';
    plate.innerText = 'View Details';
    plate.style.display = 'block';
}


function view2() {
    const plate = document.querySelector('.exp2-btn');
    const key = document.querySelector('.data2');
    const remove = document.querySelector('.exp2-info');

    key.style.display = 'block';
    key.style.marginLeft = '50px';
    plate.style.display = 'none';
    remove.style.display = 'none';
    
}
function hide2(){
    const plate = document.querySelector('.exp2-btn');
    const key = document.querySelector('.data2');
    const remove = document.querySelector('.exp2-info');

    key.style.display = 'none';
    remove.style.display = 'block';
    plate.innerText = 'View Details';
    plate.style.display = 'block';
}

function view3() {
    const plate = document.querySelector('.exp3-btn');
    const key = document.querySelector('.data3');
    const remove = document.querySelector('.exp3-info');

    key.style.display = 'block';
    key.style.marginLeft = '50px';
    plate.style.display = 'none';
    remove.style.display = 'none';
    
}
function hide3(){
    const plate = document.querySelector('.exp3-btn');
    const key = document.querySelector('.data3');
    const remove = document.querySelector('.exp3-info');

    key.style.display = 'none';
    remove.style.display = 'block';
    plate.innerText = 'View Details';
    plate.style.display = 'block';
}



const words = ["Software", "Web", "Development"];
let index = 0;
const typingText = document.getElementById('typing-text');
const typingSpeed = 100; // Speed of typing effect in milliseconds

function typeWord(word, callback) {
    let i = 0;
    typingText.textContent = ''; // Clear the text
    const intervalId = setInterval(() => {
        typingText.textContent += word[i];
        i++;
        if (i >= word.length) {
            clearInterval(intervalId);
            setTimeout(callback, 1000); // Wait 1 second before starting the next word
        }
    }, typingSpeed);
}

function startTyping() {
    typeWord(words[index], () => {
        index = (index + 1) % words.length; // Move to the next word, loop back to start
        startTyping(); // Continue typing the next word
    });
}

startTyping(); // Start the typing animation
