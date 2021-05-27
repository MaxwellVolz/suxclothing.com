
function place_svg(root_selector, new_element, id=''){
    var rootElement = document.querySelector(root_selector);
    if(id != ''){
        rootElement.id = id
    }
    rootElement.appendChild(new_element);
}
