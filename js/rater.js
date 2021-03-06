export function Rater(ratingElement) {
    const stars = ratingElement.querySelectorAll('.star');

    const setRating = ev => {
        ratingElement.setAttribute('data-rating', 
        ev.currentTarget.getAttribute('data-value')
        );
    }

    const ratingHover = ev => {
        const currentHover = ev.currentTarget.getAttribute('data-value');
        highlightRate(currentHover);
    };

    const resetRating = ev => {
        const currentRating = ratingElement.getAttribute('data-rating');
        highlightRate(currentRating);
    };

    const highlightRate = (rating) => {
        stars.forEach(star => {
            star.style.color = 
            rating >= star.getAttribute('data-value') ? 'goldenrod' : 'lightslategrey';
        });
    }

    resetRating();

    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', ratingHover);
    });

    ratingElement.addEventListener('mouseout', resetRating);
    
}