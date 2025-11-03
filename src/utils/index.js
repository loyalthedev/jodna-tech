export const openCalendly = (e) => {
  e.preventDefault();
  // @ts-ignore
  Calendly.initPopupWidget({
    url: "https://calendly.com/jodnatechnologies/30min",
  });
  return false;
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
