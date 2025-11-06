export interface Theme {
  id: string;
  name: string;
  category: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  style: {
    buttonStyle: string;
    cardStyle: string;
    layoutStyle: string;
  };
  content: {
    headline: string;
    subheadline: string;
    ctaText: string;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}
