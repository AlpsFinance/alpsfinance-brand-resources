export enum AlpsLogoVariant {
  BASE = "Base",
  SQUARE = "Square",
  ROUNDED = "Rounded",
  CIRCLE = "Circle",
}

export interface AlpsLogoProps {
  variant?: AlpsLogoVariant;
  type?: number;
}
