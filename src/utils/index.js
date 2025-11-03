export const openCalendly = (e) => {
  e.preventDefault();
  // @ts-ignore
  Calendly.initPopupWidget({
    url: "https://calendly.com/jodnatechnologies/30min",
  });
  return false;
};
