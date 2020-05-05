<template>
  <q-page class="row items-center justify-evenly">
    <composition-component
      title="Composition type"
      active
      :todos="todos"
      :meta="meta"
    ></composition-component>
    <class-component title="Class type" active :todos="todos" :meta="meta">
    </class-component>
    <object-component title="Object type" active :todos="todos" :meta="meta">
    </object-component>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import CompositionComponent from '../quasar-shims/component-styles/CompositionComponent.vue';
import ClassComponent from '../quasar-shims/component-styles/ClassComponent.vue';
import ObjectComponent from '../quasar-shims/component-styles/ObjectComponent.vue';
import { Todo, Meta } from '../quasar-shims/component-styles/models';

export default Vue.extend({
  name: 'PageIndex',
  components: {
    CompositionComponent,
    ClassComponent,
    ObjectComponent
  },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ];

    const meta: Meta = {
      totalCount: 1200
    };

    return { todos, meta };
  }
});
</script>
