import { Label } from "../../_bundled/ui/label.js"
import { Switch } from "../../_bundled/ui/switch.js"

export function SwitchDemo() {
  return (
    <div class="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
