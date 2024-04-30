import { Label } from "../../_bundled/ui/label.js"
import { RadioGroup, RadioGroupItem } from "../../_bundled/ui/radio-group.js"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
