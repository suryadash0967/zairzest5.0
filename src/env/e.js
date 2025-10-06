export const be_url =
  import.meta.env.VITE_ENV === "development"
    ? "http://localhost:4000"
    : import.meta.env.VITE_BE_URL;
