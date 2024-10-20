
document.addEventListener('DOMContentLoaded', () => {
    // Function to manage tab display
    function showTab(tabId) {
        // Hide all tab contents
        document.querySelectorAll(".tab-contents").forEach(tab => {
            tab.classList.remove("active-tab");
            tab.style.display = "none"; // Hide all tabs
        });

        // Remove active class from all tab links
        document.querySelectorAll(".tab-links").forEach(link => {
            link.classList.remove("active");
        });
        
        
        // Show the selected tab
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.style.display = "block"; // Show the selected tab
            activeTab.classList.add("active-tab");
        }

        // Set the clicked tab link to active
        const activeLink = document.getElementById(tabId === "01" ? "skills" : tabId === "02" ? "experience" : "education");
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Event listeners for each button
    document.getElementById('skills').addEventListener('click', function() {
        showTab("01"); // Show Skills tab
    });

    document.getElementById('experience').addEventListener('click', function() {
        showTab("02"); // Show Experience tab
    });

    document.getElementById('education').addEventListener('click', function() {
        showTab("03"); // Show Education tab
    });

    // Initial display setup
    showTab("01"); // Show Skills tab by default on page load
});


let closeMenu = document.getElementById("close"); 

closeMenu.addEventListener('click', function() {
  document.querySelector("nav ul").style.right = "-200px";
});

let openMenu = document.getElementById("open");

openMenu.addEventListener('click', function() {
  document.querySelector("nav ul").style.right = "0";
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycby3udgLPA2iQxfWwBuiyoqVwZknIY6wqky0xrneivA_Pc-fuASRTMCvrJ4-DoJuI214/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

