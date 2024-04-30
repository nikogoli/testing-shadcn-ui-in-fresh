import { Checkbox } from "../../_bundled/ui/checkbox.js"
import { Label } from "../../_bundled/ui/label.js"

export function LabelDemo() {
  return (
    <div>
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" class="cursor-pointer">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
