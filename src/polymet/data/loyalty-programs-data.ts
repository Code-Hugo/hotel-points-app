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
    logo: "linear-gradient(135deg, #1C3F94, #F58025)", // Marriott gradient
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
    logo: "linear-gradient(135deg, #00406A, #DC143C)", // Hilton gradient
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
    logo: "linear-gradient(135deg, #000000, #C41230)", // IHG gradient
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
    logo: "linear-gradient(135deg, #E2001A, #000000)", // Accor gradient
    pointsPerDollar: 2.5,
    bonusMultiplier: {
      eliteStatus: 1.25, // 25% bonus for elite status
      promotions: 1.2,
      creditCard: 1.1,
    },
  },
];
