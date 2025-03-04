import { publications } from "./publicationsData.js";

document.addEventListener("DOMContentLoaded", function () {
  const iconMappings = {
    Code: "/img/icons/github.png",
    Talk: "/img/icons/youtube.png",
    Blog: "/img/icons/blog.png",
    Slides: "img/icons/presentation.png",
  };

  // Function to generate code links buttons with icons if applicable
  function generateCodeLinksButtons(codeLinks) {
    return Object.entries(codeLinks)
      .map(([key, url]) => {
        const iconHtml = iconMappings[key]
          ? `<img src="${iconMappings[key]}" alt="${key} icon" style="height: 16px; vertical-align: middle; margin-right: 3px; margin-left: -3px; margin-top: -13px; padding: 0; margin-bottom: -10px">`
          : "";

        const buttonType =
          key === "Code" ? "btn-outline-primary" : "btn-outline-success";
        return `<a class="btn ${buttonType} btn-page-header" href="${url}" target="_blank" rel="noopener">${iconHtml}${key}</a>`;
      })
      .join("\n");
  }

  function addPublication(item) {
    const container = document.getElementById(
      "selected-publications-container"
    );
    const codeLinksButton = generateCodeLinksButtons(item.codeLinks);

    const htmlContent = `
            <div class="flex-row">
                <div class="flex-item flex-item-stretch flex-column">
                    <img class="image max-width-500" src="${item.imagePath}">
                </div>
                <div class="flex-item flex-item-stretch-3 flex-column">
                    <p class="text-large" style="margin-bottom:0;">
                        <a href="${item.pdfLink}"><b>${item.title}</b></a>
                    </p>
                    <p class="text" style="margin:0; padding-top:0; font-size:11pt">
                        ${item.authors}<br>
                    </p>
                    <p class="text" style="margin:0; padding-top:0;">
                        ${item.conference}
                    </p>
                    <div class="button-container">
                        ${codeLinksButton}
                    </div>

                </div>
            </div>
            <div><p class="text"></p></div>
            <div><p class="text"></p></div>
        `;
    container.innerHTML += htmlContent;
  }

  publications.filter((pub) => pub.selected).forEach(addPublication);

  const container2 = document.getElementById("publications-container");
  const fragment = document.createDocumentFragment();
  publications.forEach((publication) => {
    const div = document.createElement("div");
    const codeLinksButton = generateCodeLinksButtons(publication.codeLinks);
    const publicationHtml = `
		<li>
        <p class="text-large" style="margin-bottom:0;">
            <a href="${publication.pdfLink}">
                <b>${publication.title}</b></a>
        </p>
        <p class="text" style="margin:0; padding-top:0; font-size:11pt">
            ${publication.authors}<br>
        </p>
        <p class="text" style="margin:0; padding-top:0;">
            ${publication.conference}
        </p>
        ${codeLinksButton}
		</li>
    `;
    div.innerHTML = publicationHtml;
    fragment.appendChild(div);
  });
  container2.appendChild(fragment);
});
