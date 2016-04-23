let tabDepth = 0;

export function createTemplateStringFromObject(obj: Object): string  {
    tabDepth = 0;
    return buildObject(obj, true);
}

// Local functions
function buildObject(obj: Object, last: boolean): string {
    let keys = Object.keys(obj),
        toReturn = `{`,
        tab = `  `,
        end = `}`;

    if (Array.isArray(obj)) {
        toReturn = "[";
        end = "]";
        keys = [];

        for (let a = 0; a < obj.length; a++) keys.push(a);
    }

    // Increase the tab depth every time this function is called
    tabDepth += 1;

    // Set the end of the template string
    if (last) end = `\n${end}`;
    else if (keys.length > 0) end = `\n${stringMultiply(tab, tabDepth - 1) + end}`;

    keys.forEach((a, idx, array) => {
        toReturn += Array.isArray(obj) ? `\n${stringMultiply(tab, tabDepth)}${set(obj[a])}` : `\n${stringMultiply(tab, tabDepth)}"${a}": ${set(obj[a])}`;
        if (idx !== array.length - 1) toReturn += `,`
    });

    toReturn += end;

    return toReturn;
}

// Takes care of proper syntax when adding the value
function set(value: any): any {

    let toReturn;

    switch (typeof value) {
        case "string":
            toReturn = `"${value}"`;
            break;
        case "object":
            toReturn = buildObject(value, false);

            // Reduce the tab depth after the buildObject function was called
            // so that if we get to this point again the new object is aligned correctly
            tabDepth -= 1;
            break;
        default:
            toReturn = value;
            break;
    }

    return toReturn;
}