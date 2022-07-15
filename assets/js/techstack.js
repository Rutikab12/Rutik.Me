AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [{
        langImage: "assets/images/techstack-page/html.png",
        langName: "HyperText Markup Language",
        langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
    },
    {
        langImage: "assets/images/techstack-page/css.png",
        langName: "Cascading Style Sheets",
        langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
    },
    {
        langImage: "assets/images/techstack-page/javascript.png",
        langName: "JavaScript",
        langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
    },
    {
        langImage: "assets/images/techstack-page/python.png",
        langName: "Python",
        langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
    },
    {
        langImage: "assets/images/techstack-page/cpp.png",
        langName: "C++",
        langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
    },
    {
        langImage: "assets/images/techstack-page/git.png",
        langName: "Git",
        langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
    },
    {
        langImage: "assets/images/techstack-page/bootstrap.png",
        langName: "Bootstrap",
        langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
    },
    {
        langImage: "assets/images/techstack-page/csharp.png",
        langName: "C#",
        langDesc: "<li>C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.</li>",
    },
    {
        langImage: "assets/images/techstack-page/entity framework.png",
        langName: "Entity Framework",
        langDesc: "<li>Entity Framework is an open source object–relational mapping framework for ADO.NET. It was originally shipped as an integral part of .NET Framework. Starting with Entity Framework version 6, it has been delivered separately from the .NET Framework.</li>",
    },
    {
        langImage: "assets/images/techstack-page/sql.png",
        langName: "Structured Query Langauge",
        langDesc: "<li>SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system. </li>",
    },
    {
        langImage: "assets/images/techstack-page/ml.jpg",
        langName: "Machine Learning",
        langDesc: "<li>Machine learning is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence.</li>"
    },
    {
        langImage: "assets/images/techstack-page/dl.png",
        langName: "Deep Learning",
        langDesc: "<li>Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.</li>",
    },
    {
        langImage: "assets/images/techstack-page/powerbi.jpg",
        langName: "Power BI",
        langDesc: "<li>Power BI is an interactive data visualization software product developed by Microsoft with a primary focus on business intelligence. It is part of the Microsoft Power Platform.</li>",
    }
];

const displayTechStacksCards = () => {
    const entireCardTemplate =
        techStack.map((stack) => {
            return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `
        }).join('');
    techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);