// log the pageview with their URL

const env = process.env.NEXT_PUBLIC_EFE_GTM_PROPERTY;

export const pageview = url => {
    window.gtag('config', `${process.env.NEXT_PUBLIC_EFE_GTM_PROPERTY}`, {
      page_path: url,
    });
};

// log specific events happening.
export const event = ({action, category, label}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};
