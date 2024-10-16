document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("main-content");
    const tocList = document.getElementById("toc-list");

    const headings = mainContent.querySelectorAll("h2, h3");

    if (headings.length === 0) {
        return;
    }

    headings.forEach(heading => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${heading.id}`; 
        link.textContent = heading.textContent; 

        if (heading.tagName === "H2") {
            link.style.fontSize = "1.4em"; 
            link.style.fontWeight = "bold"; 
            listItem.style.marginLeft = "1"; 
        } else if (heading.tagName === "H3") {
            link.style.fontSize = "1em"; 
            link.style.fontWeight = "normal"; 
            listItem.style.marginLeft = "20px"; 
        }

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
});
