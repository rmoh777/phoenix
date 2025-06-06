/**
 * Mobile Plans Data Structure
 * 
 * This file contains the complete list of mobile plans used by the Mobile Plan Finder application.
 * Each plan has the following structure:
 * - id: Unique identifier for the plan
 * - name: Name of the plan
 * - carrier: Mobile carrier offering the plan
 * - price: Monthly price in USD
 * - data: Data allowance description
 * - features: Array of features included in the plan
 * - hotspot: Hotspot capability description
 * - isLifeline: Whether this is a Lifeline plan
 * - signupUrl: Official signup URL for the plan
 * - coverageArea: Coverage area description
 * - additionalFeatures: Additional features specific to the plan
 */

const MOBILE_PLANS = [
    // IM TELECOM (Excess Telecom) Plans
    {
        id: 1,
        name: "Standard Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 0,
        data: "4.5GB",
        features: ["3,000 minutes", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "Nationwide",
        additionalFeatures: []
    },
    {
        id: 2,
        name: "Advantage Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 1,
        data: "6.5GB",
        features: ["3,000 minutes", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "Nationwide",
        additionalFeatures: []
    },
    {
        id: 3,
        name: "Kentucky Standard Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 0,
        data: "4.5GB",
        features: ["Unlimited talk", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "Kentucky only",
        additionalFeatures: []
    },
    {
        id: 4,
        name: "Kentucky Advantage Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 1,
        data: "6.5GB",
        features: ["Unlimited talk", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "Kentucky only",
        additionalFeatures: []
    },
    {
        id: 5,
        name: "California Standard Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 0,
        data: "6GB",
        features: ["Unlimited talk", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "California only",
        additionalFeatures: []
    },
    {
        id: 6,
        name: "Tribal Standard Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 0,
        data: "6GB",
        features: ["3,000 minutes", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "Qualifying Tribal Lands",
        additionalFeatures: []
    },
    {
        id: 7,
        name: "Tribal Advantage Plan",
        carrier: "IM TELECOM (Excess Telecom)",
        price: 1,
        data: "8GB",
        features: ["3,000 minutes", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.excesstelecom.com/plans/lifeline",
        coverageArea: "Qualifying Tribal Lands",
        additionalFeatures: []
    },

    // Tracfone Wireless Plans
    {
        id: 8,
        name: "Standard Lifeline Discount",
        carrier: "TRACFONE WIRELESS",
        price: 0,
        data: "4.5GB+",
        features: [
            "Variable voice minutes",
            "Variable text messages",
            "Caller ID",
            "Call Waiting",
            "Voicemail",
            "3-way calling",
            "Free 411 and 911 access",
            "Free calls to Customer Care"
        ],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.tracfonewirelessinc.com/en/lifeline",
        coverageArea: "Most states (excluding Oregon, Nebraska, and South Dakota)",
        additionalFeatures: [
            "Caller ID",
            "Call Waiting",
            "Voicemail",
            "3-way calling",
            "Free 411 and 911 access",
            "Free calls to Customer Care"
        ]
    },
    {
        id: 9,
        name: "Tribal Lifeline Discount",
        carrier: "TRACFONE WIRELESS",
        price: 0,
        data: "4.5GB+",
        features: [
            "Variable voice minutes",
            "Variable text messages",
            "Caller ID",
            "Call Waiting",
            "Voicemail",
            "3-way calling",
            "Free 411 and 911 access",
            "Free calls to Customer Care"
        ],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.tracfonewirelessinc.com/en/lifeline",
        coverageArea: "Qualifying Tribal Lands",
        additionalFeatures: [
            "Caller ID",
            "Call Waiting",
            "Voicemail",
            "3-way calling",
            "Free 411 and 911 access",
            "Free calls to Customer Care"
        ]
    },

    // Assurance Wireless Plans
    {
        id: 10,
        name: "Standard Lifeline Service",
        carrier: "VIRGIN MOBILE USA (Assurance Wireless)",
        price: 0,
        data: "4.5GB high-speed data",
        features: ["3,000 minutes", "Unlimited text"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.assurancewireless.com/",
        coverageArea: "Nationwide (enhanced offers in CA, KY, NE, TX, UT, WI)",
        additionalFeatures: [
            "Free Scam Block and Scam ID services",
            "Option to bring your own phone"
        ]
    },
    {
        id: 11,
        name: "Data Peace of Mind Plan",
        carrier: "VIRGIN MOBILE USA (Assurance Wireless)",
        price: 10,
        data: "7GB/month high-speed mobile hotspot data",
        features: ["Mobile hotspot data"],
        hotspot: "7GB/month",
        isLifeline: true,
        signupUrl: "https://www.assurancewireless.com/",
        coverageArea: "Nationwide",
        additionalFeatures: ["Low-cost add-on"]
    },

    // AirTalk Wireless Plans
    {
        id: 12,
        name: "Standard Lifeline Service",
        carrier: "AIR VOICE WIRELESS (AirTalk Wireless)",
        price: 0,
        data: "5G+ high-speed data (up to 10GB)",
        features: [
            "Unlimited talk",
            "Unlimited text",
            "Free international calling to 200+ countries",
            "Free Wi-Fi Calling"
        ],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://airtalkwireless.com/apply",
        coverageArea: "Nationwide coverage",
        additionalFeatures: [
            "Free smartphones (iPhone or Samsung)",
            "Free international calling to over 200 countries",
            "No activation fees",
            "No monthly charges",
            "No hidden costs",
            "Loyalty and trade-in programs",
            "Free Wi-Fi Calling",
            "Multilingual customer support",
            "No contracts"
        ]
    },

    // Verizon Plans
    {
        id: 13,
        name: "Lifeline Discount",
        carrier: "VERIZON",
        price: 0,
        data: "Variable",
        features: ["Variable voice minutes", "Variable text messages"],
        hotspot: "Not specified",
        isLifeline: true,
        signupUrl: "https://www.verizon.com/solutions-and-services/lifeline/",
        coverageArea: "Nationwide",
        additionalFeatures: ["$9.25+ monthly discount"]
    },
    {
        id: 14,
        name: "$25.00 Lifeline Plan",
        carrier: "VERIZON",
        price: 15.75,
        data: "No data service",
        features: [
            "1,000 anytime minutes",
            "Unlimited local mobile to mobile calling",
            "Unlimited text messaging"
        ],
        hotspot: "Not available",
        isLifeline: true,
        signupUrl: "https://www.verizon.com/solutions-and-services/lifeline/",
        coverageArea: "Parts of Iowa, North Dakota, New York, and Wisconsin",
        additionalFeatures: ["Domestic long distance calls included"]
    },
    {
        id: 15,
        name: "$19.99 Home Phone Connect Plan",
        carrier: "VERIZON",
        price: 10.74,
        data: "N/A",
        features: [
            "Unlimited anytime minutes",
            "Unlimited local mobile to mobile calling"
        ],
        hotspot: "Not available",
        isLifeline: true,
        signupUrl: "https://www.verizon.com/solutions-and-services/lifeline/",
        coverageArea: "Parts of Iowa, North Dakota, New York, and Wisconsin",
        additionalFeatures: [
            "Requires Home Phone Connect device",
            "Domestic long distance calls included",
            "Tribal Link Up assistance available"
        ]
    },

    // T-Mobile Plans
    {
        id: 16,
        name: "Essentials",
        carrier: "T-Mobile",
        price: 60,
        data: "Unlimited",
        features: ["5G", "Talk & Text", "Basic streaming"],
        hotspot: "3G speeds"
    },
    {
        id: 17,
        name: "Magenta",
        carrier: "T-Mobile",
        price: 70,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "5GB hotspot", "Netflix included"],
        hotspot: "5GB"
    },
    {
        id: 18,
        name: "Magenta MAX",
        carrier: "T-Mobile",
        price: 85,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "40GB hotspot", "Netflix included", "4K video"],
        hotspot: "40GB"
    },
    {
        id: 19,
        name: "Go5G",
        carrier: "T-Mobile",
        price: 75,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "15GB hotspot", "Apple TV+ included"],
        hotspot: "15GB"
    },
    {
        id: 20,
        name: "Go5G Plus",
        carrier: "T-Mobile",
        price: 90,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "50GB hotspot", "Apple TV+ included", "4K video"],
        hotspot: "50GB"
    },

    // AT&T Plans
    {
        id: 21,
        name: "Unlimited Starter",
        carrier: "AT&T",
        price: 65,
        data: "Unlimited",
        features: ["5G", "Talk & Text", "Basic streaming"],
        hotspot: "No"
    },
    {
        id: 22,
        name: "Unlimited Extra",
        carrier: "AT&T",
        price: 75,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "15GB hotspot", "HBO Max included"],
        hotspot: "15GB"
    },
    {
        id: 23,
        name: "Unlimited Elite",
        carrier: "AT&T",
        price: 85,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "40GB hotspot", "HBO Max included", "4K video"],
        hotspot: "40GB"
    },
    {
        id: 24,
        name: "Value Plus",
        carrier: "AT&T",
        price: 50,
        data: "Unlimited",
        features: ["5G", "Talk & Text", "Basic streaming"],
        hotspot: "No"
    },
    {
        id: 25,
        name: "Premium",
        carrier: "AT&T",
        price: 80,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "30GB hotspot", "HBO Max included", "HD video"],
        hotspot: "30GB"
    },

    // Budget Carrier Plans
    {
        id: 26,
        name: "Unlimited",
        carrier: "Visible",
        price: 30,
        data: "Unlimited",
        features: ["5G", "Talk & Text", "Basic streaming"],
        hotspot: "One device"
    },
    {
        id: 27,
        name: "Unlimited Plus",
        carrier: "Visible",
        price: 45,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "Unlimited hotspot", "HD video"],
        hotspot: "Unlimited"
    },
    {
        id: 28,
        name: "Unlimited",
        carrier: "Mint Mobile",
        price: 30,
        data: "Unlimited",
        features: ["5G", "Talk & Text", "Basic streaming"],
        hotspot: "5GB"
    },
    {
        id: 29,
        name: "Unlimited Premium",
        carrier: "Mint Mobile",
        price: 40,
        data: "Unlimited",
        features: ["5G", "Premium streaming", "15GB hotspot", "HD video"],
        hotspot: "15GB"
    },
    {
        id: 30,
        name: "Unlimited",
        carrier: "Metro by T-Mobile",
        price: 50,
        data: "Unlimited",
        features: ["5G", "Talk & Text", "Basic streaming", "Google One included"],
        hotspot: "5GB"
    }
];

// Export the data structure
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOBILE_PLANS };
} else {
    // For browser usage
    window.MOBILE_PLANS = MOBILE_PLANS;
} 

