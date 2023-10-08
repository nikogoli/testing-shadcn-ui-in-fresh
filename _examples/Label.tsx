import { Checkbox } from "../components/ui/checkbox.tsx"
import { Label } from "../components/ui/label.tsx"

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
