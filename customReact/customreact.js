
function injectElement(reactElement, container) {
    domElement = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);

    }
    if (reactElement.children) {
        reactElement.children.forEach(child => {
            if (typeof child === 'string') {
                domElement.appendChild(document.createTextNode(child));
            } else {
                injectElement(child, domElement);
            }
        });
    }
    container.appendChild(domElement);
}

const reactTempl = {
    type: 'a',
    props: { href: 'https://www.google.com' },
    children: ['Click me']
}


const rootElement = document.querySelector("#root");    // Get the root element

injectElement(reactTempl, rootElement);    // Inject the react element into the root element