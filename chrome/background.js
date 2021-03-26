function toggle() {
    let ghostCssClassName = "ghost-css-toggle";
    let selector = document.querySelector(`.${ghostCssClassName}`);
  
  
    if (selector === null) {
      var style = document.createElement("style");
      style.className = ghostCssClassName;
      style.innerHTML = `
      * {
        background: #000 !important;
        color: #0f0 !important;
        outline: solid #f00 1px !important;
      }
      `;
      document.getElementsByTagName("head")[0].appendChild(style);
  
      return;
    }
    // get parent and remove itself from parent
    selector.parentElement.removeChild(selector)
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggle,
  });
});

