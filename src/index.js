

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navBar = document.querySelectorAll("nav a")
const navLiks = Object.values(siteContent.nav)
navBar.forEach((link,index)=>{
  link.textContent = navLiks[index]
  link.classList.add("italic")
})

const titleH = document.querySelector(".cta h1")
titleH.textContent = siteContent.cta.h1

const titleB = document.querySelector(".cta button")
titleB.textContent = siteContent.cta.button


const topContact = document.querySelector(".top-content")
topContact.children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topContact.children[0].children[1].textContent = siteContent["main-content"]["features-content"]
topContact.children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topContact.children[1].children[1].textContent = siteContent["main-content"]["about-content"]

const bottomContact = document.querySelector(".bottom-content")
const lowHead = bottomContact.querySelectorAll('h4')
lowHead[0].textContent = siteContent["main-content"]["services-h4"]
lowHead[1].textContent = siteContent["main-content"]["product-h4"]
lowHead[2].textContent = siteContent["main-content"]["vision-h4"]

const lowText = bottomContact.querySelectorAll("p")
lowText[0].textContent = siteContent["main-content"]["services-content"]
lowText[1].textContent = siteContent["main-content"]["product-content"]
lowText[2].textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector("section.contact")
contact.children[0].textContent = siteContent.contact["contact-h4"]
contact.children[1].textContent = siteContent.contact["address"]
contact.children[2].textContent = siteContent.contact["phone"]
contact.children[3].textContent = siteContent.contact["email"]

const footerLink = document.querySelector("footer a")
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add("bold")
 


const logoImg = document.querySelector("#logo-img")
logoImg.scr = siteContent.images['logo-img']

const ctaImg = document.querySelector("#cta-img")
ctaImg.scr = siteContent.images["cta-img"]

const accentImg = document.querySelector("#middle-img")
accentImg.scr = siteContent.images["accent-img"]

 
 
 
