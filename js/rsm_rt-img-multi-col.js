const imgs = Array.from(document.querySelectorAll(".rt-body figure div img"));
const iframes = Array.from(document.querySelectorAll(".rt-body figure div iframe"));
const elements = [...imgs, ...iframes];
const groupClasses = ["w-richtext-align-normal", "w-richtext-align-floatleft", "w-richtext-align-floatright"];

for (let i = 0; i < elements.length; i += 1) {
    const img = elements[i];
    const div = img.parentElement;
    const figure = div.parentElement;

    if ([...figure.classList].find((cn) => groupClasses.includes(cn))) {
        let sibling = figure.nextElementSibling;

        if (sibling.nodeName === "FIGURE" && sibling.className === figure.className) {
            const siblingDiv = [...sibling.childNodes].find((x) => x.nodeName === "DIV");

            if (siblingDiv) {
                const siblingImg = [...siblingDiv.childNodes].find((x) => x.nodeName === "IMG" || x.nodeName === "IFRAME");

                if (siblingImg) {
                    figure.prepend(siblingImg);
                    sibling.parentElement.removeChild(sibling);
                    i++;
                }
            }
        }
    }
    
    figure.prepend(img);
    figure.removeChild(div);
}
