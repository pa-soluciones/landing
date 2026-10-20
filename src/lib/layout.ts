// Keep in sync with the snap media query in globals.css.
export const SNAP_QUERY = "(min-width: 768px) and (min-height: 500px)";

export const isSnapLayout = () => window.matchMedia(SNAP_QUERY).matches;
