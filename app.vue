<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <div class="login__section section--padding">
    <div class="container">
      <div class="login__section--inner">
        <div class="row row-cols-md-2 row-cols-1">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="account__login">
              <div class="account__login--header mb-25">
                <h2 class="account__login--header__title mb-10">
                  Se connecter
                </h2>
                <p class="account__login--header__desc">
                  Connectez-vous si vous êtes déjà client.
                </p>
              </div>
              <form @submit.prevent="handleLogin">
                <div class="account__login--inner">
                  <label>
                    <input
                      class="account__login--input"
                      placeholder="Email"
                      v-model="email"
                      type="email"
                      required
                    />
                  </label>
                  <label>
                    <input
                      class="account__login--input"
                      placeholder="Mot de passe"
                      v-model="password"
                      type="password"
                      required
                    />
                  </label>
                  <div
                    class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center"
                  >
                    <div class="account__login--remember position__relative">
                      <input
                        class="checkout__checkbox--input"
                        id="check1"
                        type="checkbox"
                        v-model="rememberMe"
                      />
                      <span class="checkout__checkbox--checkmark"></span>
                      <label
                        class="checkout__checkbox--label login__remember--label"
                        for="check1"
                      >
                        Se souvenir de moi
                      </label>
                    </div>
                  </div>
                  <button
                    class="account__login--btn primary__btn"
                    type="submit"
                    :disabled="loading"
                  >
                    {{ loading ? "Connexion en cours..." : "Se connecter" }}
                  </button>
                  <div class="account__login--divide">
                    <span class="account__login--divide__text">OU</span>
                  </div>
                  <p class="account__login--signup__text">
                    Vous n'avez pas de compte ?
                    <nuxt-link to="/inscription">Inscription</nuxt-link>
                  </p>
                  <p v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const loading = ref(false);
const errorMessage = ref("");
const router = useRouter();

const handleLogin = async () => {
  console.log("testz");
  try {
    const data = await $fetch("/api/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    console.log("Login successful:", data);
  } catch (error) {
    console.error("Login error:", error);
  }
};

const emails = ref("maeldev3@gmail.com");
const passwords = ref("password");

const login = async () => {
  const { data, error } = await useFetch(
    "https://api.staging.voomgle.com/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: {
        email: emails.value,
        password: passwords.value,
      },
    }
  );

  console.log(data.value);
};

login();
</script>
