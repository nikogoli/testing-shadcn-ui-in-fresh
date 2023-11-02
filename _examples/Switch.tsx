import { Label } from "../components/ui/label.tsx"
import { Switch } from "../components/ui/switch.tsx"

export function SwitchDemo() {
  return (
    <div class="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
