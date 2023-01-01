export const limitStringSize = (value: string | undefined): string => {
    if (!value) {
        return '';
    }
    return value.replace(/([\s\S]{2})([\s\S]+?$)/, value[0]+value[1]).toUpperCase();
};
