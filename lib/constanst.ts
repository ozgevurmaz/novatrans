
const services: NavItemType[] = [
    {
        name: "Ground Transportation",
        href: "/ground-transportation"
    },
    {
        name: "Air Cargo",
        href: "/air-cargo"
    },
    {
        name: "Ocean Freight",
        href: "/ocean-freight"
    },
    {
        name: "Warehousing",
        href: "/warehousing"
    },
    {
        name: "Global Network",
        href: "/global-vetwork"
    },
    {
        name: "Supply Chain Management",
        href: "/supply-chain-management"
    }
]

export const navigationLinks: NavigationLinkType[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Services",
        href: "/services",
        items: services
    },
    {
        name: "Contact",
        href: "/contact"
    }
]

import { allServicesType, FreightServiceType, ServicesType } from "@/types/freightService";
import { i } from "framer-motion/client";
import { Ship, Plane, Truck, Package, PlaneIcon, ShipIcon, TruckIcon, WarehouseIcon, Notebook, EarthIcon, BarChart3, Globe, Warehouse } from "lucide-react";

export const freightServices: FreightServiceType[] = [
    {
        id: "ocean",
        title: "Ocean Freight",
        subtitle: "Reliable & Cost-Effective Sea Transport",
        description:
            "Efficient global shipping solutions for large volumes. Ideal for non-urgent deliveries with cost savings in mind. Trusted routes and full container support.",
        icon: Ship,
        image: "/images/services/ship.png",
        bullets: [
            "FCL & LCL options",
            "Global port coverage",
            "Eco-friendly transport",
        ],
        slug: "ocean-freight"
    },
    {
        id: "air",
        title: "Air Freight",
        subtitle: "Fast & Secure Global Delivery",
        description:
            "Time-sensitive shipments delivered swiftly across the globe. High security, real-time tracking, and minimal delays for your valuable cargo.",
        icon: Plane,
        image: "/images/services/air.png",
        bullets: [
            "Express delivery",
            "Worldwide airport network",
            "Priority cargo handling",
        ],
        slug: "air-freight"
    },
    {
        id: "road",
        title: "Road Freight",
        subtitle: "Flexible & Local Ground Logistics",
        description:
            "Direct door-to-door transport with full flexibility. Perfect for regional or inland shipments with versatile vehicle options and timely service.",
        icon: Truck,
        image: "/images/services/street.png",
        bullets: [
            "Domestic & cross-border transport",
            "FTL & LTL options",
            "Temperature-controlled vehicles",
        ],
        slug: "road-freight"
    },
];

export const aboutSection: { title: string, content: string } =
{
    title: "Driven by Passion, Powered by People",
    content:
        "Behind every shipment is a dedicated team that values communication, transparency, and accountability. Whether it’s ocean, air, or road freight, we make sure your cargo arrives safely and on time — every time.",
}


export const allServices: allServicesType[] = [
    {
        title: 'Air Cargo',
        description: 'Express air freight for time-sensitive shipments worldwide',
        icon: PlaneIcon
    },
    {
        title: 'Ground Transportation',
        description: 'Reliable trucking and road freight services across all major routes',
        icon: TruckIcon
    },
    {
        title: 'Ocean Freight',
        description: 'Global sea freight solutions with full container and LCL options',
        icon: ShipIcon
    },
    {
        title: 'Warehousing',
        description: 'Secure storage and distribution center management',
        icon: WarehouseIcon
    },
    {
        title: 'Supply Chain Management',
        description: 'End-to-end logistics planning and optimization',
        icon: Notebook
    },
    {
        title: 'Global Network',
        description: 'Worldwide presence with local expertise in key markets',
        icon: EarthIcon
    }
]
export const partnerLogos = [
    '/images/partners/1.png',
    '/images/partners/2.png',
    '/images/partners/3.png',
    '/images/partners/4.png',
    '/images/partners/5.png',
    '/images/partners/6.png',
    '/images/partners/7.png',
    '/images/partners/8.png',
    '/images/partners/9.png',
    '/images/partners/10.png',
]

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Supply Chain Director",
        company: "Global Manufacturing Corp",
        content: "NovaTrans has transformed our logistics operations. Their innovative solutions and reliable service have reduced our shipping costs by 30% while improving delivery times. The team's expertise in global freight is unmatched.",
        rating: 5,
        avatar: "/images/testimonials/sarah.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Operations Manager",
        company: "TechFlow Solutions",
        content: "Working with NovaTrans has been a game-changer for our business. Their air cargo services are incredibly fast and reliable. We've never had a single delayed shipment in over two years of partnership.",
        rating: 5,
        avatar: "/images/testimonials/michael.jpg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "CEO",
        company: "Sustainable Goods Inc",
        content: "The sustainability focus at NovaTrans aligns perfectly with our values. They've helped us reduce our carbon footprint while maintaining efficient global distribution. Exceptional service and environmental responsibility.",
        rating: 5,
        avatar: "/images/testimonials/emily.jpg"
    },
    {
        id: 4,
        name: "David Thompson",
        position: "Logistics Coordinator",
        company: "International Trade Partners",
        content: "NovaTrans provides outstanding ocean freight solutions. Their tracking system is incredibly detailed, and their customer support team is always available when we need them. Truly reliable partners.",
        rating: 5,
        avatar: "/images/testimonials/david.jpg"
    },
    {
        id: 5,
        name: "Lisa Zhang",
        position: "Import/Export Manager",
        company: "Pacific Commerce Ltd",
        content: "The warehousing and distribution services from NovaTrans have streamlined our entire supply chain. Their technology integration and real-time updates keep us informed every step of the way.",
        rating: 5,
        avatar: "/images/testimonials/lisa.jpg"
    }
]

export const servicesInfo: ServicesType[] = [
  {
    name: "ground-transportation",
    title: "Ground Transportation",
    description: "Reliable and cost-effective trucking solutions for domestic and cross-border deliveries with comprehensive tracking and flexible scheduling options.",
    image: "/images/services/street.png",
    icon: "Truck",
    features: [
      "Nationwide coverage across all major routes",
      "Real-time GPS tracking and updates",
      "Same-day and next-day delivery options",
      "Temperature-controlled transport",
      "Flexible scheduling and routing"
    ],
    stats: [
      { label: "On-time delivery", value: "99.2%" },
      { label: "Cities covered", value: "500+" },
      { label: "Fleet size", value: "1,200+" },
      { label: "Daily shipments", value: "5,000+" }
    ],
    benefits: [
      "Cost-effective shipping rates",
      "Flexible pickup and delivery windows",
      "Professional and experienced drivers",
      "Comprehensive insurance coverage",
      "24/7 customer support"
    ],
    process: [
      { step: 1, title: "Quote Request", description: "Get instant quotes through our online platform or speak with our logistics experts." },
      { step: 2, title: "Schedule Pickup", description: "Choose your preferred pickup time and location with flexible scheduling options." },
      { step: 3, title: "Real-time Tracking", description: "Monitor your shipment's progress with live GPS tracking and automated updates." },
      { step: 4, title: "Safe Delivery", description: "Receive confirmation and proof of delivery with signature and photo documentation." }
    ],
    pricing: [
      { 
        tier: "Standard", 
        description: "Perfect for regular shipments", 
        features: ["Standard delivery timeline", "Basic tracking", "Insurance included", "Email notifications"] 
      },
      { 
        tier: "Express", 
        description: "For time-sensitive deliveries", 
        features: ["Priority handling", "Advanced tracking", "SMS alerts", "Dedicated support"] 
      },
      { 
        tier: "Premium", 
        description: "White-glove service", 
        features: ["Same-day delivery", "Real-time updates", "Personal account manager", "Custom solutions"] 
      }
    ]
  },
  {
    name: "air-cargo",
    title: "Air Cargo",
    description: "Fast and secure air freight services connecting you to global markets with priority handling and time-definite delivery guarantees.",
    image: "/images/services/air.png",
    icon: "Plane",
    features: [
      "Priority handling for urgent shipments",
      "Global airport access and connections",
      "Time-definite delivery guarantees",
      "Specialized cargo handling",
      "Customs clearance assistance"
    ],
    stats: [
      { label: "Global destinations", value: "200+" },
      { label: "Average transit time", value: "24-48h" },
      { label: "Success rate", value: "99.8%" },
      { label: "Partner airlines", value: "50+" }
    ],
    benefits: [
      "Fastest delivery times available",
      "Global reach and connectivity",
      "Secure handling procedures",
      "Real-time flight tracking",
      "Expert customs support"
    ],
    process: [
      { step: 1, title: "Air Freight Quote", description: "Receive competitive air cargo rates based on weight, dimensions, and destination." },
      { step: 2, title: "Documentation", description: "Complete all necessary air waybills and customs documentation with our assistance." },
      { step: 3, title: "Airport Processing", description: "Professional handling at departure and arrival airports with priority processing." },
      { step: 4, title: "Final Delivery", description: "Last-mile delivery or airport pickup with full tracking and confirmation." }
    ],
    pricing: [
      { 
        tier: "Economy Air", 
        description: "Cost-effective air shipping", 
        features: ["Standard air service", "Basic tracking", "Airport-to-airport", "Documentation support"] 
      },
      { 
        tier: "Express Air", 
        description: "Priority air freight", 
        features: ["Priority booking", "Expedited handling", "Door-to-door service", "Enhanced tracking"] 
      },
      { 
        tier: "Charter", 
        description: "Dedicated aircraft service", 
        features: ["Exclusive aircraft", "Custom scheduling", "Specialized cargo", "Personal coordination"] 
      }
    ]
  },
  {
    name: "ocean-freight",
    title: "Ocean Freight",
    description: "Cost-effective sea shipping for large-scale and long-distance transportation with comprehensive port-to-port and door-to-door services.",
    image: "/images/services/ship.png",
    icon: "Ship",
    features: [
      "Full container and LCL options",
      "Comprehensive customs clearance support",
      "Port-to-port or door-to-door service",
      "Cargo insurance and protection",
      "Multi-modal transportation solutions"
    ],
    stats: [
      { label: "Ports served", value: "300+" },
      { label: "Container capacity", value: "10,000+ TEU" },
      { label: "Average transit", value: "15-30 days" },
      { label: "Cost savings", value: "Up to 80%" }
    ],
    benefits: [
      "Most economical for large shipments",
      "High capacity for bulk cargo",
      "Environmentally friendly option",
      "Flexible container options",
      "Global port network access"
    ],
    process: [
      { step: 1, title: "Ocean Quote", description: "Get competitive sea freight rates for FCL or LCL shipments to your destination." },
      { step: 2, title: "Booking & Documentation", description: "Secure vessel space and complete all required shipping and customs documentation." },
      { step: 3, title: "Port Operations", description: "Professional handling at origin and destination ports with container management." },
      { step: 4, title: "Final Delivery", description: "Inland transportation to final destination or port pickup coordination." }
    ],
    pricing: [
      { 
        tier: "LCL Service", 
        description: "Less than container load", 
        features: ["Shared container space", "Port-to-port service", "Basic documentation", "Standard transit times"] 
      },
      { 
        tier: "FCL Service", 
        description: "Full container load", 
        features: ["Dedicated container", "Door-to-door options", "Priority booking", "Enhanced security"] 
      },
      { 
        tier: "Project Cargo", 
        description: "Oversized and heavy cargo", 
        features: ["Specialized equipment", "Custom solutions", "Engineering support", "Project management"] 
      }
    ]
  },
  {
    name: "warehousing",
    title: "Warehousing",
    description: "Secure and efficient warehousing solutions with flexible storage capacity, advanced inventory management, and climate-controlled environments.",
    image: "/images/contact.jpg",
    icon: "Warehouse",
    features: [
      "24/7 security monitoring and access control",
      "Advanced inventory management systems",
      "Climate-controlled storage options",
      "Pick and pack fulfillment services",
      "Cross-docking capabilities"
    ],
    stats: [
      { label: "Storage capacity", value: "2M+ sq ft" },
      { label: "Security level", value: "24/7 monitored" },
      { label: "Order accuracy", value: "99.9%" },
      { label: "Locations", value: "25+ facilities" }
    ],
    benefits: [
      "Reduce operational costs",
      "Scalable storage solutions",
      "Professional inventory management",
      "Strategic location advantages",
      "Integrated logistics services"
    ],
    process: [
      { step: 1, title: "Needs Assessment", description: "Evaluate your storage requirements and recommend optimal warehouse solutions." },
      { step: 2, title: "Setup & Integration", description: "Configure warehouse space and integrate with your inventory management systems." },
      { step: 3, title: "Operations Management", description: "Handle receiving, storage, picking, and shipping with full visibility and control." },
      { step: 4, title: "Continuous Optimization", description: "Monitor performance metrics and optimize operations for maximum efficiency." }
    ],
    pricing: [
      { 
        tier: "Basic Storage", 
        description: "Simple storage solution", 
        features: ["Standard warehouse space", "Basic security", "Monthly reporting", "Standard access hours"] 
      },
      { 
        tier: "Managed Services", 
        description: "Full-service warehousing", 
        features: ["Inventory management", "Pick & pack services", "Real-time reporting", "Extended access"] 
      },
      { 
        tier: "Enterprise", 
        description: "Comprehensive logistics hub", 
        features: ["Dedicated space", "Custom solutions", "Advanced analytics", "24/7 operations"] 
      }
    ]
  },
  {
    name: "global-network",
    title: "Global Network",
    description: "A strong logistics network across continents ensuring smooth operations everywhere with trusted partners and seamless coordination.",
    image: "/images/about.jpg",
    icon: "Globe",
    features: [
      "Trusted global partner network",
      "Multi-language customer support",
      "Seamless international coordination",
      "Local expertise in key markets",
      "Integrated technology platforms"
    ],
    stats: [
      { label: "Countries served", value: "150+" },
      { label: "Partner network", value: "500+ agents" },
      { label: "Languages supported", value: "25+" },
      { label: "Time zones covered", value: "All 24" }
    ],
    benefits: [
      "Single point of contact globally",
      "Local market expertise",
      "Consistent service standards",
      "Cultural and language support",
      "Streamlined operations"
    ],
    process: [
      { step: 1, title: "Global Planning", description: "Map out your international logistics needs and identify optimal routing strategies." },
      { step: 2, title: "Partner Coordination", description: "Leverage our trusted partner network for seamless local handling and expertise." },
      { step: 3, title: "Execution Management", description: "Monitor and coordinate all aspects of your global supply chain from a central hub." },
      { step: 4, title: "Performance Review", description: "Regular analysis and optimization of your global logistics performance and costs." }
    ],
    pricing: [
      { 
        tier: "Regional", 
        description: "Multi-country coverage", 
        features: ["Regional partnerships", "Coordinated services", "Basic reporting", "Standard support"] 
      },
      { 
        tier: "Global Standard", 
        description: "Worldwide logistics network", 
        features: ["Global partner access", "Unified tracking", "Multi-language support", "Priority handling"] 
      },
      { 
        tier: "Enterprise Global", 
        description: "Dedicated global solutions", 
        features: ["Dedicated account team", "Custom solutions", "Advanced analytics", "Executive reporting"] 
      }
    ]
  },
  {
    name: "supply-chain-management",
    title: "Supply Chain Management",
    description: "End-to-end supply chain solutions tailored to your business goals with data-driven optimization and strategic planning capabilities.",
    image: "/images/nome/servicesgeneral.jpg",
    icon: "BarChart3",
    features: [
      "Strategic planning and forecasting",
      "Inventory optimization and management",
      "Data-driven decision making tools",
      "Supplier relationship management",
      "Performance analytics and reporting"
    ],
    stats: [
      { label: "Cost reduction", value: "Up to 25%" },
      { label: "Inventory optimization", value: "30-50%" },
      { label: "Delivery improvement", value: "99%+" },
      { label: "Client satisfaction", value: "98%" }
    ],
    benefits: [
      "Optimized operational efficiency",
      "Reduced total logistics costs",
      "Improved customer satisfaction",
      "Enhanced supply chain visibility",
      "Strategic competitive advantage"
    ],
    process: [
      { step: 1, title: "Supply Chain Analysis", description: "Comprehensive assessment of your current supply chain operations and identification of opportunities." },
      { step: 2, title: "Strategy Development", description: "Create customized supply chain strategy aligned with your business objectives and market requirements." },
      { step: 3, title: "Implementation", description: "Execute supply chain improvements with project management and change management support." },
      { step: 4, title: "Continuous Improvement", description: "Ongoing monitoring, analysis, and optimization to ensure sustained performance improvements." }
    ],
    pricing: [
      { 
        tier: "Consulting", 
        description: "Strategic advisory services", 
        features: ["Supply chain assessment", "Strategy development", "Best practices", "Implementation roadmap"] 
      },
      { 
        tier: "Managed Services", 
        description: "Outsourced supply chain management", 
        features: ["End-to-end management", "Technology platforms", "Performance monitoring", "Continuous optimization"] 
      },
      { 
        tier: "Enterprise Partnership", 
        description: "Strategic supply chain partnership", 
        features: ["Dedicated team", "Custom solutions", "Advanced analytics", "Executive partnership"] 
      }
    ]
  }
]