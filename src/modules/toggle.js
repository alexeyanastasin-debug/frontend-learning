export function toggleContent(element, condition, textOne, textTwo) {
    if (condition === false) {
        element.textContent = textOne;
        return true;
    } else { 
        element.textContent = textTwo;
        return false;
    }
}
