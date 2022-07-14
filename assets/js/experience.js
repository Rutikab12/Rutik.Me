AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Graduate Engineer Trainee",
        cardImage: "assets/images/experience-page/vois logo.jpg",
        place: "Vodafone Intelligent Services",
        time: "(Upcoming - Aug, 2022)",
        desp: "<li>_VOIS, Pune</li>",
    },
    {
        title: "Frontend Development Intern",
        cardImage: "assets/images/experience-page/Nvest Solution Logo.svg",
        place: "Nvest Solution Pvt Ltd",
        time: "(Jan, 2022 - Jun, 2022)",
        desp: "<li>Worked as a full stack developer.</li> <li>Worked on some of the best insurance products in India.</li> <li>TATA AIA, Bajaj Allianz, ET Life, PNB Metlife, etc.</li> <li>Tech Stack Used: C#, JavaScript, Entity Framework, jQuery, etc.</li>",
    },
    {
        title: "Web Developer Intern",
        cardImage: "assets/images/experience-page/Logo.bmp",
        place: "Bele Technologies Pvt Ltd",
        time: "(Apr,2021 - Sep, 2021)",
        desp: "<li>Role was to develop the best products using the required tech stack.</li><li>Developed official site Bele Technologies.</li><li>Helped the company to grow its main tool Tx Converter. </li><li>Tech stack in use: CSS, JavaScript, SQL, Python,etc.</li>",
    },

];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [{
        title: "GirlScript Summer Of Code 2021,2022",
        cardImage: "assets/images/experience-page/1.jpg",
        description: "Worked as both Contributor and Mentor. Responsible for handling the projects MLCapsule.",
    },
    {
        title: "Delta Winter of Code 2021",
        cardImage: "assets/images/experience-page/DWOC Logo.png",
        description: "Responsible for contributing frontend part to the project Ezy-Parking. Finished in Top 50.",
    },
    {
        title: "Lets Grow More Summer of Code 2021",
        cardImage: "assets/images/experience-page/LGWOC Logo.jpg",
        description: "Responsible for contributing to the project MLProjectKart. Top 2 Contibutor for the mentioned project.",
    },
];

const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [{
        title: "Ingenious Hackathon",
        subtitle: "Mentor",
        image: "assets/images/experience-page/atlas.png",
        desp: "Ingenious is a 2-day virtual hackathon that helps students to contribute their skills with help of various domains.",
    },

];

const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp }) =>
        (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);