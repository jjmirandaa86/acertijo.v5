//Get ENV
function getEnv(key) {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
}

function getApiUrl() {
  const url = getEnv("VITE_URL_API");
  if (url) return url;

  const base = getEnv("VITE_URL_API");

  if (!base) {
    throw new Error("Falta VITE_URL_API en el archivo .env");
  }

  const normalizedBase = base.replace(/\/$/, "");

  return `${normalizedBase}`;
}

export { getApiUrl };
