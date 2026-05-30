function getEnv(key) {
  if (typeof window !== "undefined" && window.__ENV__) {
    const runtime = window.__ENV__[key];
    if (typeof runtime === "string" && runtime.length > 0) {
      return runtime.trim();
    }
  }

  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
}

function getApiUrl() {
  const base = getEnv("VITE_URL_API");

  if (!base) {
    throw new Error("Falta VITE_URL_API en el archivo .env");
  }

  return base.replace(/\/$/, "");
}

export { getApiUrl };
