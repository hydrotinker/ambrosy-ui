<script setup>
import Checkbox from '../src/components/Checkbox.vue' 
import {ref} from 'vue' 

const value = ref(false)
</script>

# Checkbox

## Import

```vue
import Checkbox from 'ambrosy-ui/checkbox'
```
## Basic

<Checkbox v-model="value" />

```vue
<Checkbox />
```