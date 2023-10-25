export function getFullYear() {
    const today = new Date();
    const date = today.getFullYear();
    return date;
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return ("Holberton School");
    }
    else {
        return ("Holberton School main dashboard");
    }
}