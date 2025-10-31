export const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (!target) return;

        const pageContainer = document.querySelector('.pageContainer');

        if (pageContainer) {
            // Compute offset of target relative to pageContainer by summing offsetTop
            let offset = 0;
            let el = target;
            // Walk up offsetParent chain until we hit the container (or document)
            while (el && el !== pageContainer && el.offsetParent) {
                offset += el.offsetTop;
                el = el.offsetParent;
            }

            // Ensure non-negative target
            const top = Math.max(0, offset);
            pageContainer.scrollTo({ top, behavior: 'smooth' });
        } else {
            // Fallback to window scrolling (document flow)
            const top = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset);
            window.scrollTo({ top, behavior: 'smooth' });
        }
 }