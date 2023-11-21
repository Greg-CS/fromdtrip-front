function truncateDescription(description, limit) {
    const words = description.split(' ');
    if (words.length > limit) {
        const truncatedWords = words.slice(0, limit);
        return truncatedWords.join(' ') + '...';
    }
    return description;
}

const descriptionLimit = 20;

export const truncatedDescription = truncateDescription(description, descriptionLimit || 50);
