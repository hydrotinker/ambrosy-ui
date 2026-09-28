// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/myong/ambrosy-ui/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.43_lightningcss@1.32.0_sass@1.101.0/node_modules/vite/dist/node/index.js";
import vue from "file:///home/myong/ambrosy-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.21_@types+node@20.19.43_lightningcss@1.32.0_sass@1.101.0__vue@3.5.38_typescript@5.9.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///home/myong/ambrosy-ui/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@20.19.43_rollup@4.62.2_typescript@5.9.3_vite@5.4.21_@types+_2ee6ffgxmyy3gstggpvok2mbpa/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/myong/ambrosy-ui/packages/components/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      cleanVueFileName: true,
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", __vite_injected_original_import_meta_url)),
      name: "AmbrosyComponents",
      formats: ["es", "cjs"],
      fileName: (format) => `components.${format === "es" ? "js" : "cjs"}`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: { vue: "Vue" }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9teW9uZy9hbWJyb3N5LXVpL3BhY2thZ2VzL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL215b25nL2FtYnJvc3ktdWkvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9teW9uZy9hbWJyb3N5LXVpL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBMaWJyYXJ5LW1vZGUgYnVpbGQgZm9yIEBhbWJyb3N5LXVpL2NvbXBvbmVudHMuXG4vLyBgdnVlYCBpcyBleHRlcm5hbGl6ZWQgKHBlZXIgZGVwZW5kZW5jeSk7IGRlY2xhcmF0aW9ucyBhcmUgZW1pdHRlZCBieVxuLy8gdml0ZS1wbHVnaW4tZHRzLiBUaGUgY29tcG9uZW50cyBhcmUgdW5zdHlsZWQsIHNvIHRoZSBidWlsZCBlbWl0cyBubyBDU1MgXHUyMDE0XG4vLyBzdHlsaW5nIGlzIHByb3ZpZGVkIGJ5IHNlcGFyYXRlIHRoZW1lIHBhY2thZ2VzLlxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICB0c2NvbmZpZ1BhdGg6ICcuL3RzY29uZmlnLmJ1aWxkLmpzb24nLFxuICAgICAgY2xlYW5WdWVGaWxlTmFtZTogdHJ1ZSxcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL2luZGV4LnRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBuYW1lOiAnQW1icm9zeUNvbXBvbmVudHMnLFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgY29tcG9uZW50cy4ke2Zvcm1hdCA9PT0gJ2VzJyA/ICdqcycgOiAnY2pzJ31gXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICBnbG9iYWxzOiB7IHZ1ZTogJ1Z1ZScgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxlQUFlLFdBQVc7QUFDblYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUg0SyxJQUFNLDJDQUEyQztBQVM3TyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixjQUFjO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxNQUNsQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxjQUFjLElBQUksSUFBSSxrQkFBa0Isd0NBQWUsQ0FBQztBQUFBLE1BQy9ELE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxjQUFjLFdBQVcsT0FBTyxPQUFPLEtBQUs7QUFBQSxJQUNwRTtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxTQUFTLEVBQUUsS0FBSyxNQUFNO0FBQUEsTUFDeEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
