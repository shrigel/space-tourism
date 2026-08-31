const images = import.meta.glob('../assets/**/*.{png,webp,jpg}', {
    eager: true,
    import: 'default',
});

export const getImageUrl = (path) => {
    if (!path) return '';
    const cleanPath = path.replace(/^\.\//, '');
    return images[`../assets/${cleanPath}`];
};