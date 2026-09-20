// Get saved blogs
let blogs = JSON.parse(localStorage.getItem("blogs")) || [];


// LOGIN
const loginForm = document.querySelector("#login form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  if (email === "" || password === "") {
    alert("Please enter Email and Password");
  } else {
    alert("Login Successful!");
    window.location.hash = "dashboard";
    updateDashboard();
  }
});


// REGISTER
const registerForm = document.querySelector("#register form");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = registerForm.querySelector("input[type='text']").value;
  const email = registerForm.querySelector("input[type='email']").value;
  const password = registerForm.querySelector("input[type='password']").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill all the fields");
  } else {
    alert("Registration Successful!");
    registerForm.reset();
  }
});


// CREATE BLOG
const blogForm = document.querySelector("#create-blog form");

blogForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = blogForm.querySelector("input").value;
  const content = blogForm.querySelector("textarea").value;

  if (title === "" || content === "") {
    alert("Please enter Blog Title and Content");
    return;
  }

  // Add new blog
  blogs.push({
    title: title,
    content: content
  });

  // Save blogs
  localStorage.setItem("blogs", JSON.stringify(blogs));

  alert("Blog Published Successfully!");

  blogForm.reset();

  // Update dashboard
  updateDashboard();

  // Go to dashboard
  window.location.hash = "dashboard";
});


// UPDATE DASHBOARD
function updateDashboard() {

  const totalBlogs = document.querySelector("#dashboard .dashboard-card p");
  const blogList = document.querySelector("#blog-list");

  // First blog + newly created blogs
  totalBlogs.textContent = blogs.length + 1;

  blogList.innerHTML = "";

  blogs.forEach(function(blog) {

    const blogCard = document.createElement("div");

    blogCard.className = "created-blog";

    blogCard.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
    `;

    blogList.appendChild(blogCard);
  });
}


// Update dashboard when page loads
updateDashboard();
