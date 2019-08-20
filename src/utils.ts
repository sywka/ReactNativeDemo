export function validateEmail(email: string) {
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(String(email).toLowerCase());
}

interface Obj {
    [prop: string]: string | number;
}

export function filterArray<T extends Obj>(items: T[], filter: string, properties?: string[]) {
    const filterStr = filter.toLowerCase();

    return items.filter((item) => {
        const filterValues = (properties || Object.keys(item)).reduce((array, key) => {
            const value = item[key];
            if (value) {
                array.push(value);
            }
            return array;
        }, [] as (string | number)[]);

        return filterValues.some((value) => String(value).toLowerCase().includes(filterStr));
    });
}
