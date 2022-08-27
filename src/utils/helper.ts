const getIdFromUrl = (url: string): string => {
    return url.replace(/[^0-9]/g, '');
};

export { getIdFromUrl };
