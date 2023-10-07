import { Toggle } from '../components/ui/toggle.tsx'

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <span class="i-lucide:bold flex h-4 w-4" />
    </Toggle>
  )
}
