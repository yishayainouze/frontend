import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: {
    $oid: string;
  };
  id: number;
  name: string;
  category: string;
  commonAttributes: {
    price: number;
    manufacturer: string;
    description: string;
    imageURL: string;
  },
  categoryAttributes:any;
}

export interface GlobalState {
  mode: string;
  userId: number;
  products: Product[];
  category: string,
  productId: string
}

const initialState: GlobalState = {
  mode: "dark",
  userId: 1,
  products: [
    {

      _id: {
        $oid: "65508a253df12112f47734e2",
      },
      id: 1,
      name: "4K Television",
      category: "Televisions",
      commonAttributes: {
        price: 1200,
        manufacturer: "VisioTech",
        description:
          "A high-definition 4K television offering a rich color display and smart TV features.",
        imageURL: "https://example.com/4k-television.jpg",
      },
      categoryAttributes: {
        resolution: "3840x2160 pixels",
        screen_size: "55 inches",
      },
    },
    {
      _id: {
        $oid: "65508a253df12112f47734e3",
      },
      id: 2,
      name: "Laptop Computer",
      category: "Computers",
      commonAttributes: {
        price: 899.99,
        manufacturer: "TechPro",
        description:
          "A powerful laptop with high-speed processing and a sleek design.",
        imageURL: "https://example.com/laptop-computer.jpg",
      },
      categoryAttributes: {
        processor: "Intel Core i7",
        ram: "16GB",
      },
    },
    {
      _id: {
        $oid: "65508a253df12112f47734e4",
      },
      id: 3,
      name: "Refrigerator",
      category: "Kitchen Appliances",
      commonAttributes: {
        price: 499.99,
        manufacturer: "CoolFridge",
        description:
          "Energy-efficient refrigerator with spacious compartments and advanced cooling technology.",
        imageURL: "https://example.com/refrigerator.jpg",
      },
      categoryAttributes: {
        capacity: "500L",
        energy_rating: "A++",
      },
    },
    {
      _id: {
        $oid: "65508a253df12112f47734e5",
      },
      id: 4,
      name: "Bluetooth Speaker",
      category: "Audio Equipment",
      commonAttributes: {
        price: 149.99,
        manufacturer: "SoundWave",
        description:
          "Portable Bluetooth speaker with superior sound quality and long battery life.",
        imageURL: "https://example.com/bluetooth-speaker.jpg",
      },
      categoryAttributes: {
        battery_life: "10 hours",
        connectivity: "Bluetooth 5.0",
      },
    },
    {
      _id: {
        $oid: "65508a253df12112f47734e6",
      },
      id: 5,
      name: "Smart Watch",
      category: "Wearable Technology",
      commonAttributes: {
        price: 199.99,
        manufacturer: "PulseTech",
        description:
          "Stylish smartwatch with health tracking and mobile connectivity.",
        imageURL: "https://example.com/smart-watch.jpg",
      },
      categoryAttributes: {
        display: "AMOLED",
        battery_life: "2 days",
      },
    },
    {
      _id: {
        $oid: "65508a253df12112f47734e7",
      },
      id: 6,
      name: "Electric Drill",
      category: "Power Tools",
      commonAttributes: {
        price: 129.99,
        manufacturer: "DrillMaster",
        description:
          "High-performance electric drill for precise and efficient drilling.",
        imageURL: "https://example.com/electric-drill.jpg",
      },
      categoryAttributes: {
        power: "750W",
        speed: "2000 RPM",
      },
    },
    {
      _id: {
        $oid: "65508a253df12112f47734e8",
      },
      id: 7,
      name: "Gaming Console",
      category: "Gaming",
      commonAttributes: {
        price: 399.99,
        manufacturer: "GameBox",
        description:
          "Next-generation gaming console with stunning graphics and an immersive gaming experience.",
        imageURL: "https://example.com/gaming-console.jpg",
      },
      categoryAttributes: {
        storage: "1TB",
        resolution: "4K HDR",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734ea",
      },
      id: 8,
      name: "OLED Television",
      category: "Televisions",
      commonAttributes: {
        price: 1500,
        manufacturer: "ClearView",
        description:
          "Stunning OLED television with deep blacks and vibrant colors.",
        imageURL: "https://example.com/oled-television.jpg",
      },
      categoryAttributes: {
        resolution: "3840x2160 pixels",
        screen_size: "65 inches",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734eb",
      },
      id: 9,
      name: "Desktop Computer",
      category: "Computers",
      commonAttributes: {
        price: 1200,
        manufacturer: "CompTech",
        description:
          "High-performance desktop computer suitable for gaming and professional use.",
        imageURL: "https://example.com/desktop-computer.jpg",
      },
      categoryAttributes: {
        processor: "Intel Core i9",
        ram: "32GB",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734ec",
      },
      id: 10,
      name: "Mini Refrigerator",
      category: "Kitchen Appliances",
      commonAttributes: {
        price: 250,
        manufacturer: "CompactCool",
        description:
          "Compact and energy-efficient mini refrigerator, perfect for small spaces.",
        imageURL: "https://example.com/mini-refrigerator.jpg",
      },
      categoryAttributes: {
        capacity: "100L",
        energy_rating: "A+",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734ed",
      },
      id: 11,
      name: "Wireless Earbuds",
      category: "Audio Equipment",
      commonAttributes: {
        price: 100,
        manufacturer: "SoundBuds",
        description:
          "High-quality wireless earbuds with noise cancellation and a secure fit.",
        imageURL: "https://example.com/wireless-earbuds.jpg",
      },
      categoryAttributes: {
        battery_life: "12 hours",
        connectivity: "Bluetooth 5.1",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734ee",
      },
      id: 12,
      name: "Fitness Tracker",
      category: "Wearable Technology",
      commonAttributes: {
        price: 150,
        manufacturer: "FitBand",
        description:
          "Advanced fitness tracker with multiple sport modes and health monitoring.",
        imageURL: "https://example.com/fitness-tracker.jpg",
      },
      categoryAttributes: {
        display: "LCD",
        battery_life: "7 days",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734ef",
      },
      id: 13,
      name: "Cordless Power Drill",
      category: "Power Tools",
      commonAttributes: {
        price: 200,
        manufacturer: "HandyTools",
        description:
          "Versatile cordless power drill with variable speed and high torque.",
        imageURL: "https://example.com/cordless-power-drill.jpg",
      },
      categoryAttributes: {
        power: "18V",
        speed: "2500 RPM",
      },
    },
    {
      _id: {
        $oid: "65508ad73df12112f47734f0",
      },
      id: 14,
      name: "Handheld Gaming Device",
      category: "Gaming",
      commonAttributes: {
        price: 300,
        manufacturer: "PlayMax",
        description:
          "Portable handheld gaming device with a large game library and HD display.",
        imageURL: "https://example.com/handheld-gaming-device.jpg",
      },
      categoryAttributes: {
        storage: "256GB",
        resolution: "1080p",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f2",
      },
      id: 15,
      name: "Curved LED TV",
      category: "Televisions",
      commonAttributes: {
        price: 1600,
        manufacturer: "VisionPro",
        description:
          "Immersive curved LED TV with a wide viewing angle and smart capabilities.",
        imageURL: "https://example.com/curved-led-tv.jpg",
      },
      categoryAttributes: {
        resolution: "3840x2160 pixels",
        screen_size: "70 inches",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f3",
      },
      id: 16,
      name: "Ultrabook Laptop",
      category: "Computers",
      commonAttributes: {
        price: 950,
        manufacturer: "SlimTech",
        description:
          "Ultra-thin, lightweight laptop with powerful performance and long battery life.",
        imageURL: "https://example.com/ultrabook-laptop.jpg",
      },
      categoryAttributes: {
        processor: "Intel Core i5",
        ram: "8GB",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f4",
      },
      id: 17,
      name: "Side-by-Side Refrigerator",
      category: "Kitchen Appliances",
      commonAttributes: {
        price: 800,
        manufacturer: "FridgeKing",
        description:
          "Luxurious side-by-side refrigerator with ample space and modern features.",
        imageURL: "https://example.com/side-by-side-refrigerator.jpg",
      },
      categoryAttributes: {
        capacity: "700L",
        energy_rating: "A++",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f5",
      },
      id: 18,
      name: "Soundbar",
      category: "Audio Equipment",
      commonAttributes: {
        price: 250,
        manufacturer: "AudioMax",
        description:
          "Sleek soundbar with superior audio quality and easy connectivity.",
        imageURL: "https://example.com/soundbar.jpg",
      },
      categoryAttributes: {
        battery_life: "N/A",
        connectivity: "Bluetooth, HDMI, Optical",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f6",
      },
      id: 19,
      name: "Smart Fitness Watch",
      category: "Wearable Technology",
      commonAttributes: {
        price: 300,
        manufacturer: "HealthWatch",
        description:
          "Smart fitness watch with advanced health monitoring and GPS tracking.",
        imageURL: "https://example.com/smart-fitness-watch.jpg",
      },
      categoryAttributes: {
        display: "Digital",
        battery_life: "10 days",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f7",
      },
      id: 20,
      name: "Corded Angle Grinder",
      category: "Power Tools",
      commonAttributes: {
        price: 150,
        manufacturer: "GrindMaster",
        description:
          "Heavy-duty corded angle grinder for cutting, grinding, and polishing.",
        imageURL: "https://example.com/corded-angle-grinder.jpg",
      },
      categoryAttributes: {
        power: "850W",
        speed: "11000 RPM",
      },
    },
    {
      _id: {
        $oid: "65508b413df12112f47734f8",
      },
      id: 21,
      name: "Racing Game Console",
      category: "Gaming",
      commonAttributes: {
        price: 450,
        manufacturer: "SpeedZone",
        description:
          "High-adrenaline racing game console with realistic simulation and controls.",
        imageURL: "https://example.com/racing-game-console.jpg",
      },
      categoryAttributes: {
        storage: "500GB",
        resolution: "4K UHD",
      },
    },

  ],
  category: "",
  productId: "",
  
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setProductId: (state, action: PayloadAction<string>) => {
      state.productId = action.payload;
    },
  },
});

export const { setMode, setCategory, setProductId } = globalSlice.actions;
export default globalSlice.reducer;
