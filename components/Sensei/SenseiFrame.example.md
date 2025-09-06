# SenseiFrame Component Usage Examples

## Basic Usage

```vue
<template>
  <SenseiFrame
    sensei-image="/images/anto.png"
    background-image="/images/panel-anto.png"
    clip-path="polygon(0% 0, 100% 0, 80% 100%, 0% 100%)"
    alt="Anto sensei character"
  />
</template>
```

## Different Panel Shapes

### Left Panel (Anto style)
```vue
<SenseiFrame
  sensei-image="/images/anto.png"
  background-image="/images/panel-anto.png"
  clip-path="polygon(0% 0, 100% 0, 80% 100%, 0% 100%)"
  alt="Anto sensei character"
/>
```

### Center Panel (Fran style)
```vue
<SenseiFrame
  sensei-image="/images/fran.png"
  background-image="/images/panel-fran.png"
  clip-path="polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
  alt="Fran sensei character"
/>
```

### Right Panel (Dani style)
```vue
<SenseiFrame
  sensei-image="/images/dani.png"
  background-image="/images/panel-dani.png"
  clip-path="polygon(0% 0, 100% 0, 100% 100%, 20% 100%)"
  alt="Dani sensei character"
/>
```

## Custom Character Heights

### Shorter Character (75% height)
```vue
<SenseiFrame
  sensei-image="/images/shorter-character.png"
  sensei-image-height="75"
  background-image="/images/panel-bg.png"
  clip-path="polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
  alt="Shorter character"
/>
```

### Taller Character (100% height)
```vue
<SenseiFrame
  sensei-image="/images/taller-character.png"
  sensei-image-height="100"
  background-image="/images/panel-bg.png"
  clip-path="polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
  alt="Taller character"
/>
```

## Custom Border Thickness

### Thicker Border (10% border)
```vue
<SenseiFrame
  sensei-image="/images/sensei.png"
  background-image="/images/panel-bg.png"
  clip-path="polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
  border-percentage="10"
  alt="Sensei with thick border"
/>
```

### Thinner Border (2% border)
```vue
<SenseiFrame
  sensei-image="/images/sensei.png"
  background-image="/images/panel-bg.png"
  clip-path="polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
  border-percentage="2"
  alt="Sensei with thin border"
/>
```

## Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `senseiImage` | String | ✅ | - | Path to the sensei character image |
| `senseiImageHeight` | String/Number | ❌ | 95 | Height percentage for the character image (0-100) |
| `backgroundImage` | String | ✅ | - | Path to the panel background image |
| `clipPath` | String | ✅ | - | CSS clip-path polygon value for the frame shape |
| `borderPercentage` | String/Number | ❌ | 5 | Border size as percentage (0-50) |
| `alt` | String | ❌ | '' | Alt text for the character image |

## Complete Grid Example

```vue
<template>
  <div class="flex w-full h-160">
    <div class="w-1/3">
      <SenseiFrame
        sensei-image="/images/anto.png"
        background-image="/images/panel-anto.png"
        clip-path="polygon(0% 0, 100% 0, 80% 100%, 0% 100%)"
        alt="Anto sensei"
      />
    </div>
    <div class="w-1/3">
      <SenseiFrame
        sensei-image="/images/fran.png"
        background-image="/images/panel-fran.png"
        clip-path="polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
        alt="Fran sensei"
      />
    </div>
    <div class="w-1/3">
      <SenseiFrame
        sensei-image="/images/dani.png"
        background-image="/images/panel-dani.png"
        clip-path="polygon(0% 0, 100% 0, 100% 100%, 20% 100%)"
        alt="Dani sensei"
      />
    </div>
  </div>
</template>
```

## Important Notes

- The `senseiImageHeight` prop only affects the character image size, not the frame or background
- The border effect is created by the relationship between the container and the ::after pseudo-element
- All elements share the same clip-path for visual consistency
- The component preserves the re-render pattern from the original implementation to handle NuxtImg class loading issues
- The 95% default border size creates a 5% visible border around the panel background