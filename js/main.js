// navbar scroll
  
        // JavaScript to detect scroll and add sticky class
        window.onscroll = function() {stickyNavbar()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function stickyNavbar() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add("fixed", "top-0", "z-50");
               
                // navbar.classList.remove("mx-6");
                navbar.style.width = "100%"
            } else {
                navbar.classList.remove("fixed", "top-0", "z-50");
                navbar.classList.add("");
                navbar.style.width = "95%"
            }
        }


        // 

        const messages = [
    "Wellcome Keystone Consulting Firm (KCF)!"
    
  ];

  const element = document.getElementById("typed-text");
  let msgIndex = 0;
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < messages[msgIndex].length) {
      element.innerHTML += messages[msgIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        eraseText();
      }, 1500);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      element.innerHTML = messages[msgIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      msgIndex = (msgIndex + 1) % messages.length; // 👉 Infinite loop
      setTimeout(typeWriter, 500);
    }
  }

  window.onload = typeWriter;

   
//   about js

    function showAlert() {
      alert("Appointment feature is under construction.");
    }

    //   
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    function startCounting() {
      counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.innerText;
          const increment = target / 100;

          if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });
    }

    function handleScroll() {
      const section = document.getElementById('statsSection');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100 && !hasCounted) {
        startCounting();
        hasCounted = true;
      }
    }

    window.addEventListener('scroll', handleScroll);


    // <script>
    AOS.init({
      duration: 1000,
      once: true,
    });
  

    // service
  


  AOS.init({
    duration: 1000,
    once: true
  });

   AOS.init({ duration: 1000, once: true });

    
     
    


// resposnive


