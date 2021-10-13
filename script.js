const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

            //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`
            }
        });

        //burger animation
        burger.classList.toggle("toggle")
    });


}

navSlide();

        /*HUMANITIX TICKETING SYSTEM--------------------------*/

        var humanitix = {
            findPos: function(obj) {
                var curtop = 0;
                if (obj.offsetParent) {
                do {
                    curtop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return [curtop];
                }
            }
        };
        window.addEventListener('message', function (e) {
            if (e.origin !== "https://events.humanitix.com"){
                return;
            }   
            var messageData = e.data;
            var iframeEl = document.getElementById('iframe-container');
            if (iframeEl && messageData && !isNaN(messageData.scrollHeight)){
                iframeEl.style.height = messageData.scrollHeight + 'px';
            }
            if (iframeEl && messageData && messageData.pageChange) {
              window.scroll(0, humanitix.findPos(iframeEl));
          }

        }, false);
        
        /*PASSWORD SETUP-----------------------------------------------------------*/
        
        var input = document.getElementById("password");
        var div = document.getElementById("iframe-container");
        var btn = document.getElementById("button");
        var wrap = document.getElementById("code-wrapper");


        button.addEventListener("click", validate);

        function validate(){
        if (input.value == '21') { 
            div.classList.remove('hidden');
            input.classList.add('hidden');
            btn.classList.add('hidden');
            wrap.classList.add('hidden');


        } else {  
            password.focus(); 
            password.setSelectionRange(0, password.value.length);   
            alert('WRONG PASSWORD, NO DOOF FOR YOU!'); 
        }
        }

        //for hitting enter
        input.addEventListener("keydown", function(event){
            if (event.keyCode === 13){
                validate();
            }
        });



