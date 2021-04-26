const postParent = fetch("https://www.reddit.com/r/aww/.json").then((response) =>
  response.json()
);

postParent.then(data => {
    const sectionElement = document.getElementById("main")
    for (let postData of data.data.children) {

        // Making the title
        const titleElement = document.createElement("h3");
        titleElement.classList.add("post")
        titleElement.innerText = postData.data.title;
        sectionElement.appendChild(titleElement);

        // Making the images
        const imageElement = document.createElement("img");
        imageSource = postData.data.thumbnail;
        imageElement.src = imageSource;
        sectionElement.appendChild(imageElement);

        // Making the links
        const linkElement = document.createElement("a");
        linkSource = postData.data.url;
        linkElement.setAttribute("href", linkSource);
        linkElement.innerText = postData.data.url;
        sectionElement.appendChild(linkElement);
    }   
})
