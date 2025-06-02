<script setup lang="ts">
import Button from "../components/Button.vue"
import StorybookComponent from "./StorybookComponent.vue"
import StorybookBlock from "./StorybookBlock.vue"
</script>
<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2">
            <div class="p-2">
                <div class="text-gray-500 uppercase">Form Elements</div>
                <a class="block px-2 py-1" href="#button">Button</a>
            </div>
        </div>
        <div class="col-span-10">
            <div class="p-2">
                <StorybookComponent name="Button" id="button">
                    <StorybookBlock name="Types">
                        <p>Basic</p>
                        <Button
                            label="Apply"
                        />
                        <Button
                            label="Apply"
                            type="secondary"
                        />
                        <p>Outline</p>
                        <Button
                            label="Apply"
                            variant="outline"
                        />
                        <Button
                            label="Apply"
                            variant="outline"
                            type="secondary"
                        />
                    </StorybookBlock>
                </StorybookComponent>
            </div>
        </div>
    </div>
</template>