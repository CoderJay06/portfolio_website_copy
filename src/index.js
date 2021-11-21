// fetch blogs: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jay-cruz"

// grab .blogs from the dom
const blogsList = document.querySelector(".blogs-list");
const rssFeedUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jay-cruz";
console.log(blogsList);
async function fetchBlogs() {
  const request = await fetch(rssFeedUrl);
  const json = request.json();

  return json;
}

// fetch medium blogs rss feed
fetchBlogs().then((data) => {
  const { items: blogs } = data;

  // render each blog to the page
  blogsList.innerHTML = getBlogs();

  function getBlogs() {
    return blogs
      .map((blog) => {
        return `
        <div class="blog">
          <a class="blog-link" href=${blog.link}>
            <img class="blog-img" src=${blog.thumbnail} alt="Blog" />
          </a>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-date">
          Published: ${blog.pubDate.substring(0, blog.pubDate.indexOf(" "))}
          </p>
        </div>
        <hr />
      `;
      })
      .join("");
  }
});

// render the blogs
