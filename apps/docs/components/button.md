# Button

A clickable button with variants, sizes, and a loading state.

## Variants

<div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="danger">Danger</Button>
</div>

```vue
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
```

## Sizes

<div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>

## States

<div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
  <Button disabled>Disabled</Button>
  <Button loading>Loading</Button>
</div>

## Props

| Prop       | Type                                    | Default     | Description                       |
| ---------- | --------------------------------------- | ----------- | --------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger'`  | `'primary'` | Visual style                      |
| `size`     | `'sm' \| 'md' \| 'lg'`                   | `'md'`      | Button size                       |
| `type`     | `'button' \| 'submit' \| 'reset'`       | `'button'`  | Native button type                |
| `disabled` | `boolean`                               | `false`     | Disable interaction               |
| `loading`  | `boolean`                               | `false`     | Show spinner and block clicks     |
| `block`    | `boolean`                               | `false`     | Stretch to full width             |

## Events

| Event   | Payload      | Description                  |
| ------- | ------------ | ---------------------------- |
| `click` | `MouseEvent` | Fired when an enabled button is clicked |
