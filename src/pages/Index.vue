<template>
  <q-page class="row items-center justify-evenly">
    <composition-component
      title="Composition type"
      :todos="todos"
      :meta="meta"
    ></composition-component>
    <class-component title="Class type" active :todos="todos" :meta="meta">
    </class-component>
  </q-page>
</template>

<script lang="ts">
import CompositionComponent from 'components/CompositionComponent.vue';
import ClassComponent from 'components/ClassComponent.vue';
import { Todo, Meta } from 'src/components/models';

export default {
  name: 'PageIndex',
  components: {
    CompositionComponent,
    ClassComponent
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
};
</script>
