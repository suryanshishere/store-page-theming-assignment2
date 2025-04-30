import React from 'react'
import { useThemeStore } from '@/store/themeStore'
import type { Specialty, Mode } from '@/@types/theme'

// Define available specialties and modes
const specialties: Specialty[] = ['default', 'theme1', 'theme2']
const modes: Mode[] = ['light', 'dark']

// Create combined options for specialty + mode
const options: { label: string; value: string }[] = specialties.flatMap((sp) =>
  modes.map((md) => ({
    label: `${sp.charAt(0).toUpperCase() + sp.slice(1)} ${md.charAt(0).toUpperCase() + md.slice(1)}`,
    value: `${sp}|${md}`,
  })),
)

const ThemeSelector: React.FC = () => {
  const specialty = useThemeStore((s) => s.specialty)
  const mode = useThemeStore((s) => s.mode)
  const setSpecialty = useThemeStore((s) => s.setSpecialty)
  const setMode = useThemeStore((s) => s.setMode)

  // current combined value
  const currentValue = `${specialty}|${mode}`

  // on selection change, update both specialty and mode
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sp, md] = e.target.value.split('|') as [Specialty, Mode]
    setSpecialty(sp)
    setMode(md)
  }

  return (
    <select
      value={currentValue}
      onChange={handleChange}
      className="p-2 border rounded-md bg-white text-black"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

export default ThemeSelector