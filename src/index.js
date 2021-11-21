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

  /*
    title: "Optimize Fibonacci with Dynamic Programming", pubDate: "2021-09-17 00:38:02", link: "https://javascript.plainenglish.io/optimize-fibonacci-with-dynamic-programming-2b31e72c5e03?source=rss-530d9586f2f------2", guid: "https://medium.com/p/2b31e72c5e03", author: "Jay Cruz"…}
    title: "Optimize Fibonacci with Dynamic Programming"
    pubDate: "2021-09-17 00:38:02"
    link: "https://javascript.plainenglish.io/optimize-fibonacci-with-dynamic-programming-2b31e72c5e03?source=rss-530d9586f2f------2"
    guid: "https://medium.com/p/2b31e72c5e03"
    author: "Jay Cruz"
    thumbnail: "https://cdn-images-1.medium.com/max/2600/0*-AcDV99KKwUE9Ths"
  */

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

  // iterate blogs and render each to page
  blogsList.innerHTML = getBlogs();
});

// render the blogs
