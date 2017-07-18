let searchbar = document.querySelector("form")

searchbar.addEventListener("submit", (event) => {
  event.preventDefault()
  let searchBox = document.getElementById("Recipe-Search")
  URL = `https://crossorigin.me/http://www.recipepuppy.com/api/?q=${searchBox.value}`
  let ul = document.querySelector("ul")
  fetch(URL).then(response => response.json()).then(data => {
    for (var i = 0; i < data.results.length; i++) {
      let li = document.createElement("li")

      let a = document.createElement("a")
      a.textContent = data.results[i].title
      a.href = data.results[i].href
      li.appendChild(a)

      li.style.backgroundImage = `url(${data.results[i].thumbnail})`

      ul.appendChild(li)
    }
  })
})
