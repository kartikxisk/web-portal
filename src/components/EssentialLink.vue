<template>
  <q-item-section v-if="isGroupTitle">
    <q-item-label class="group-title">{{ props.title }}</q-item-label>
  </q-item-section>
  <template v-else>
    <q-item
      v-if="!Array.isArray(subLinks)"
      clickable
      tag="a"
      :href="props.link"
    >
      <q-item-section v-if="props.icon" avatar>
        <q-icon size="18px" :name="icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ props.title }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-list v-else class="rounded-borders">
      <q-expansion-item dense dense-toggle :icon="props.icon">
        <template v-slot:header>
          <q-item-section v-if="props.icon" avatar>
            <q-icon size="18px" :name="icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ props.title }}</q-item-label>
          </q-item-section>
        </template>
        <q-item
          v-if="Array.isArray(subLinks)"
          v-for="subLink in subLinks"
          clickable
          tag="a"
          :href="subLink.link"
          style="margin-left: 16px"
          class="sublink-item"
        >
          <q-item-section>
            <q-item-label>{{ subLink.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </template>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "",
  },
  subLinks: {
    type: Array,
  },
  isGroupTitle: {
    type: Boolean,
    default: false,
  },
});
</script>
