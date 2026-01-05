export interface ImageItem {
  id: number;
  minAmount: number;
  maxAmount: number;
  grayImage: string;
  colorImage: string;
  description: string;
}

export const imageData: ImageItem[] = [
  {
    id: 1,
    minAmount: 0,
    maxAmount: 100,
    grayImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    colorImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Small Beginnings (Cat)"
  },
  {
    id: 2,
    minAmount: 101,
    maxAmount: 1000,
    grayImage: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    colorImage: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Growing Steps (Plant)"
  },
  {
    id: 3,
    minAmount: 1001,
    maxAmount: 5000,
    grayImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    colorImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Expanding Horizons (Nature)"
  },
  {
    id: 4,
    minAmount: 5001,
    maxAmount: 10000,
    grayImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    colorImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "City Life (Urban)"
  },
  {
    id: 5,
    minAmount: 10001,
    maxAmount: Infinity,
    grayImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    colorImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Global Reach (Space)"
  }
];
