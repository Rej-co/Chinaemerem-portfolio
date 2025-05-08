const toggleButton = document.getElementById("darkModeToggle");
const toggleIcon = document.getElementById("toggleIcon");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }
});



new Typed('#typed-text', {
    strings: ['Frontend Developer', 'React Developer', 'CSS Specialist', 'Responsive Design Specialist'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds"
    },
    {
        text: "It's not about ideas. It's about making ideas happen.",
        author: "Scott Belsky"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "Software is like sex. It's better when it's free.",
        author: "Linus Torvalds"
    },    {
        text: "More is lost by indecision than wrong decision.",
        author: "Tony Soprano"
    }
];

let currentIndex = 0;

function changeQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        quoteText.textContent = `"${quotes[currentIndex].text}"`;
        quoteAuthor.textContent = `- ${quotes[currentIndex].author}`;

        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;

        currentIndex = (currentIndex + 1)% quotes.length;
    }, 1000);
}

changeQuote();
setInterval(changeQuote, 5000);