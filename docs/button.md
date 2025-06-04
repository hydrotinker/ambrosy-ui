<script setup>
import Button from '../src/components/Button.vue'
</script>

# Button

## Import

```vue
import Button from 'ambrosy-ui/button';
```

## Basic

<Button
    label="Submit"
/>

```vue
<Button label="Submit" />
```

## Variants

<Button
    class="mr-2"
    label="Basic"
    variant="basic"
/>
<Button
    class="mr-2"
    label="Outline"
    variant="outline"
/>
<Button
    label="Link"
    variant="link"
/>

```vue

<Button label="Basic" variant="basic" />
<Button label="Outline" variant="outline" />
<Button label="Link" variant="link" />
```

## Types

<Button class="mr-2 mb-2" label="Primary" type="primary"/>
<Button class="mr-2 mb-2" label="Secondary" type="secondary" />
<Button class="mr-2 mb-2" label="Danger" type="danger" />
<Button class="mr-2 mb-2" label="Success" type="success" />
<Button class="mr-2 mb-2" label="Warning" type="warning" />
<Button class="mr-2 mb-2" label="Info" type="info" />

<Button class="mr-2 mb-2" label="Primary" variant="outline" type="primary"/>
<Button class="mr-2 mb-2" label="Secondary" variant="outline" type="secondary" />
<Button class="mr-2 mb-2" label="Danger" variant="outline" type="danger" />
<Button class="mr-2 mb-2" label="Success" variant="outline" type="success" />
<Button class="mr-2 mb-2" label="Warning" variant="outline" type="warning" />
<Button class="mr-2 mb-2" label="Info" variant="outline" type="info" />

<Button class="mr-2 mb-2" label="Primary" variant="link" type="primary"/>
<Button class="mr-2 mb-2" label="Secondary" variant="link" type="secondary" />
<Button class="mr-2 mb-2" label="Danger" variant="link" type="danger" />
<Button class="mr-2 mb-2" label="Success" variant="link" type="success" />
<Button class="mr-2 mb-2" label="Warning" variant="link" type="warning" />
<Button class="mr-2 mb-2" label="Info" variant="link" type="info" />

```vue
<Button label="Primary" type="primary"/>
<Button label="Secondary" type="secondary" />
<Button label="Danger" type="danger" />
<Button label="Success" type="success" />
<Button label="Warning" type="warning" />
<Button label="Info" type="info" />
```

## Sizes

<Button class="mr-2" label="Small" size="small" />
<Button class="mr-2" label="Medium" size="medium" />
<Button label="Large" size="large" />

```vue
<Button label="Small" size="small" />
<Button label="Medium" size="medium" />
<Button label="Large" size="large" />
```

## Rounding

<Button class="mr-2" label="None" rounded="none" />
<Button class="mr-2" label="Small" rounded="small" />
<Button class="mr-2" label="Medium" rounded="medium" />
<Button class="mr-2" label="Large" rounded="large" />
<Button label="Full" rounded="full" />

```vue
<Button label="None" rounded="none" />
<Button label="Small" rounded="small" />
<Button label="Medium" rounded="medium" />
<Button label="Large" rounded="large" />
<Button label="Full" rounded="full" />
```

## Slots

<Button>
    <template #left>
        #left
    </template>
    <template #default>
        #default
    </template>
    <template #right>
        #right
    </template>
</Button>

```vue
    <Button>
        <template #left>
            #left
        </template>
    
        #default
    
        <template #right>
            #right
        </template>
    </Button>
```