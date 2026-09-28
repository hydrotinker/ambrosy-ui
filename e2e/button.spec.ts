import { test, expect } from '@playwright/test'

test.describe('Button (docs)', () => {
  test('renders variant buttons on the docs page', async ({ page }) => {
    await page.goto('/components/button')
    await expect(page.getByRole('button', { name: 'Primary' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Secondary' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Danger' })).toBeVisible()
  })

  test('disabled button is not clickable', async ({ page }) => {
    await page.goto('/components/button')
    await expect(page.getByRole('button', { name: 'Disabled' })).toBeDisabled()
  })
})
