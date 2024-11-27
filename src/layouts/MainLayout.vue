<template>
  <q-layout view="hHh lpR lFf">
    <q-header class="wp-header" bordered>
      <q-toolbar>
        <q-btn
          class="text-primary"
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-black">
          <q-img
            width="30px"
            src="https://cdn2.iconfinder.com/data/icons/web-development-4/512/Search_Engine-512.png"
          />
          <span class=""> Web Portal</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      :width="250"
      class="wp-main-drawer bg-white text-black admin-side-links"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="q-list bg-white q-pa-md">
        <EssentialLink
          v-for="link in adminSideMenus()"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="background: #f5f5f5">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from "components/EssentialLink.vue";
import { adminSideMenus } from "../services/menu.js";
import { ref } from "vue";

console.log(adminSideMenus());
defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
