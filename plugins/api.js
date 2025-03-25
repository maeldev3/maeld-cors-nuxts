// import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.baseUrl;

  const customFetch = async (url, options = {}) => {
    // Ajoute /api si l'URL ne commence pas déjà par /api
    if (!url.startsWith('/api')) {
      url = '/api/' + url;
    }

    const defaultOptions = {
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
    };

    if (process.client) {
      const token = localStorage.getItem("auth_token");
      if (token) {
        mergedOptions.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    try {
      const { data, error } = await useFetch(url, mergedOptions);

      if (error.value) {
        throw error.value;
      }

      return data.value;
    } catch (error) {
      // ... (gestion des erreurs)
      throw error;
    }
  };

  nuxtApp.provide("api", customFetch);
});
