export interface LoyaltyProgram {
  id: string;
  name: string;
  brandColor: string;
  secondaryColor: string;
  textColor: string;
  logo: string;
  pointsPerDollar: number;
  bonusMultiplier?: {
    eliteStatus?: number;
    promotions?: number;
    creditCard?: number;
  };
}

export const LOYALTY_PROGRAMS: LoyaltyProgram[] = [
  {
    id: "marriott",
    name: "Marriott Bonvoy",
    brandColor: "#1C3F94", // Marriott blue
    secondaryColor: "#F58025", // Marriott orange
    textColor: "#FFFFFF",
    logo: "https://cdn.brandfetch.io/id0DQ-cAhI/w/360/h/360/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1667620308778",
    pointsPerDollar: 10,
    bonusMultiplier: {
      eliteStatus: 1.5, // 50% bonus for elite status
      promotions: 1.25,
      creditCard: 1.25,
    },
  },
  {
    id: "hilton",
    name: "Hilton Honors",
    brandColor: "#00406A", // Hilton blue
    secondaryColor: "#DC143C", // Hilton red
    textColor: "#FFFFFF",
    logo: "https://www.atimeshare.com/wp-content/uploads/2024/11/Hilton-Honors-Logo-teal-copy.png",
    pointsPerDollar: 10,
    bonusMultiplier: {
      eliteStatus: 2, // 100% bonus for elite status
      promotions: 1.5,
      creditCard: 1.25,
    },
  },
  {
    id: "ihg",
    name: "IHG One Rewards",
    brandColor: "#000000", // IHG black
    secondaryColor: "#C41230", // IHG red
    textColor: "#FFFFFF",
    logo: "https://www.nevistas.com/ul/4/2022/04/13/18.jpg",
    pointsPerDollar: 10,
    bonusMultiplier: {
      eliteStatus: 1.6, // 60% bonus for elite status
      promotions: 1.25,
      creditCard: 1.25,
    },
  },
  {
    id: "accor",
    name: "Accor Live Limitless",
    brandColor: "#E2001A", // Accor red
    secondaryColor: "#000000", // Accor black
    textColor: "#FFFFFF",
    logo: "https://rebrand.com/wp-content/uploads/2019/11/Accor-Thumbnail-800X600.jpg",
    pointsPerDollar: 2.5, // Accor has a different points structure
    bonusMultiplier: {
      eliteStatus: 1.25, // 25% bonus for elite status
      promotions: 1.2,
      creditCard: 1.1,
    },
  },
];
