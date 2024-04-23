"use strict";

// Add target="_blank" and rel="noopener" to all external links.
document.addEventListener("DOMContentLoaded", _event =>
{
    const allLinks = document.getElementsByTagName("a");
    for (let i = 0; i < allLinks.length; i++)
    {
        if (allLinks[i].host !== window.location.host)
        {
            allLinks[i].target = "_blank";
            allLinks[i].rel = "noopener";
        }
    }
});

// Generate table of contents from headers.
document.addEventListener("DOMContentLoaded", _event =>
{
    const tocElement = document.getElementById("auto-toc");
    const allHeaders = document.getElementsByTagName("h2");
    for (let i = 0; i < allHeaders.length; i++)
    {
        if (allHeaders[i].id.substring(0, 4) == "toc-")
        {
            const link = document.createElement("a");
            link.setAttribute("href", "#" + allHeaders[i].id);
            link.innerText = allHeaders[i].innerText;
            tocElement.appendChild(link);
            allHeaders[i].innerHTML = "<a href=\"#" + allHeaders[i].id + "\">" + allHeaders[i].innerText + "</a>";
        }
    }
});
