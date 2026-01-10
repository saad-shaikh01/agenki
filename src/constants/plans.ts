type Feature = {
    subheading: string;
    items: string[];
};

type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: Feature[];  // Updated type for features
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "basic",
        title: "Basic",
        desc: "The perfect package for new start-ups and businesses exploring SEO - a foundation to step toward conversion",
        monthlyPrice: 599,
        yearlyPrice: 199,
        buttonText: "Get Quote",
        features: [
            {
                subheading: "Keyword Research",
                items: ["15 Keywords"]
            },
            {
                subheading: "Content",
                items: ["2 Articles (400 words)", "2 Blogs (500 words)"]
            },
            {
                subheading: "Link Building",
                items: [
                    "10 Submissions",
                    "10 Classifieds",
                    "10 Community Participation",
                    "10 Business Profiles"
                ]
            },
            {
                subheading: "Website",
                items: [
                    "Meta Tags Creation",
                    "Web Content Optimization",
                    "Keyword Optimization",
                    "Anchor Text Optimization"
                ]
            },
            {
                subheading: "Conversion Tracking",
                items: ["Google Analytics Installation"]
            },
            {
                subheading: "Reporting",
                items: ["Monthly Progress Report"]
            },
            {
                subheading: "Features",
                items: ["Dedicated Project Manager", "Support, 5 Days a Week"]
            }
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "advance",
        title: "Advance",
        desc: "A top choice preferred by businesses focusing on increasing and expanding their market share, both!",
        monthlyPrice: 649,
        yearlyPrice: 249,
        badge: "Most Popular",
        buttonText: "Get Quote",
        features: [
            {
                subheading: "Keyword Research",
                items: ["25 Keywords"],
            },
            {
                subheading: "Content",
                items: [
                    "4 Articles (400 words)",
                    "4 Blogs (500 words)",
                    "1 Press Release",
                ],
            },
            {
                subheading: "Promotional Content",
                items: ["1 Infographic"],
            },
            {
                subheading: "Link Building",
                items: [
                    "15 Submissions",
                    "15 Classifieds",
                    "15 Community Participation",
                    "15 Business Profiles",
                ],
            },
            {
                subheading: "Website",
                items: [
                    "Meta Tags Creation",
                    "Web Content Optimization",
                    "Keyword Optimization",
                    "Landing Page Optimization",
                    "Anchor Text Optimization",
                    "Image Optimization",
                ],
            },
            {
                subheading: "Conversion Tracking",
                items: ["Google Analytics Installation"],
            },
            {
                subheading: "Reporting",
                items: ["Monthly Progress Report"],
            },
            {
                subheading: "Features",
                items: [
                    "Dedicated Project Manager",
                    "Support, 5 Days a Week",
                ],
            },
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "expert",
        title: "Expert",
        desc: "Endorsed by our SEO experts to achieve consistent, exceptional, proven, and highly effective results. ",
        monthlyPrice: 749,
        yearlyPrice: 349,
        badge: "Most Popular",
        buttonText: "Get Quote",
        features: [
            {
                subheading: "Keyword Research",
                items: [
                    "35 Keywords",
                ],
            },
            {
                subheading: "Content",
                items: [
                    "6 Articles (400 words)",
                    "6 Blogs (500 words)",
                    "2 Press Releases",
                ],
            },
            {
                subheading: "Promotional Content",
                items: [
                    "1 Infographic",
                    "1 Video (non Voice-over)",
                ],
            },
            {
                subheading: "Link Building",
                items: [
                    "20 Submissions",
                    "20 Classifieds",
                    "20 Community Participation",
                    "20 Business Profiles",
                ],
            },
            {
                subheading: "Website",
                items: [
                    "Meta Tags Creation",
                    "Web Content Optimization",
                    "Keyword Optimization",
                    "Landing Page Optimization",
                    "Call to Actions",
                    "Site Speed Optimization",
                    "Anchor Text Optimization",
                    "Image Optimization",
                ],
            },
            {
                subheading: "Conversion Tracking",
                items: [
                    "Google Analytics Installation",
                ],
            },
            {
                subheading: "Reporting",
                items: [
                    "Monthly Progress Report",
                ],
            },
            {
                subheading: "Features",
                items: [
                    "Dedicated Project Manager",
                    "Support, 5 Days a Week",
                ],
            },
        ],

        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "elite",
        title: "Elite",
        desc: "A comprehensive package ideal for majorly established businesses to help dominate the target market. ",
        monthlyPrice: 1800,
        yearlyPrice: 1080,
        badge: "Most Popular",
        buttonText: "Get Quote",
        features: [ // Replacing 'features' with 'services'
            {
                subheading: "Keyword Research",
                items: [
                    "55 Keywords",
                    "Competitor Analysis",
                ],
            },
            {
                subheading: "Content",
                items: [
                    "10 Articles (400 words)",
                    "10 Blogs (500 words)",
                    "4 Press Releases (1 Paid)",
                ],
            },
            {
                subheading: "Guest Blogs (DA 40 +)",
                items: [
                    "1 Guest Blog (1000 words)",
                ],
            },
            {
                subheading: "Guest Blogs (DA 60 +)",
                items: [
                    "1 Guest Blog (1000 words)",
                ],
            },
            {
                subheading: "Promotional Content",
                items: [
                    "2 Infographics",
                    "2 Videos (w / Voice-over)",
                ],
            },
            {
                subheading: "Power Posts",
                items: [
                    "1 Power Post (2000 words)",
                ],
            },
            {
                subheading: "Link Building",
                items: [
                    "35 Submissions",
                    "35 Classifieds",
                    "35 Community Participation",
                    "35 Business Profiles",
                ],
            },
            {
                subheading: "Website",
                items: [
                    "Meta Tags Creation",
                    "Web Content Optimization",
                    "Keyword Optimization",
                    "Anchor Text Optimization",
                    "Landing Page Optimization",
                    "Call To Actions",
                    "Site Speed Optimization",
                    "Image Optimization",
                    "Mobile Text Optimization",
                ],
            },
            {
                subheading: "Conversion Tracking",
                items: [
                    "Google Analytics Installation",
                    "Google Webmaster Installation",
                    "Google Places Submissions",
                ],
            },
            {
                subheading: "Reporting",
                items: [
                    "Weekly Progress Report",
                    "Monthly Progress Report",
                    "Google Analytics Report",
                ],
            },
            {
                subheading: "Features",
                items: [
                    "Dedicated Project Manager",
                    "Support, 5 Days a Week",
                ],
            },
            {
                subheading: "Social Media",
                items: [
                    "Facebook & Twitter Page Creation",
                    "15 Facebook Posts",
                    "15 Twitter Posts",
                    "Instagram Page Creation",
                    "15 Instagram Posts",
                ],
            },
        ],
        link: "https://stripe.com/pro-plan-link"
    },  
    {
        id: "supreme",
        title: "Supreme",
        desc: "Highly recommended package for eCommerce businesses to enhance their performance and success simultaneously.",
        monthlyPrice: 2300,
        yearlyPrice: 1380,
        badge: "Most Popular",
        buttonText: "Get Quote",
        features: [
            {
                subheading: "Keyword Research",
                items: [
                    "65 Keywords",
                    "Competitor Analysis",
                ],
            },
            {
                subheading: "Content",
                items: [
                    "13 Articles (400 words)",
                    "14 Blogs (500 words)",
                    "6 Press Releases (1 Paid)",
                ],
            },
            {
                subheading: "Guest Blogs (DA 40 +)",
                items: [
                    "2 Guest Blogs (1000 words)",
                ],
            },
            {
                subheading: "Guest Blogs (DA 60 +)",
                items: [
                    "2 Guest Blogs (1000 words)",
                ],
            },
            {
                subheading: "Promotional Content",
                items: [
                    "4 Infographics",
                    "3 Videos (w / Voice-over)",
                ],
            },
            {
                subheading: "Power Posts",
                items: [
                    "1 Power Post (2000 words)",
                ],
            },
            {
                subheading: "Link Building",
                items: [
                    "50 Submissions",
                    "50 Classifieds",
                    "50 Community Participation",
                    "50 Business Profiles",
                ],
            },
            {
                subheading: "Website",
                items: [
                    "Meta Tags Creation",
                    "Web Content Optimization",
                    "Keyword Optimization",
                    "Anchor Text Optimization",
                    "Landing Page Optimization",
                    "Call To Actions",
                    "Site Speed Optimization",
                    "Image Optimization",
                    "Mobile Text Optimization",
                ],
            },
            {
                subheading: "Conversion Tracking",
                items: [
                    "Google Analytics Installation",
                    "Google Webmaster Installation",
                    "Google Places Submissions",
                ],
            },
            {
                subheading: "Reporting",
                items: [
                    "Weekly Progress Report",
                    "Monthly Progress Report",
                    "Google Analytics Report",
                ],
            },
            {
                subheading: "Features",
                items: [
                    "Dedicated Project Manager",
                    "Support, 5 Days a Week",
                ],
            },
            {
                subheading: "Social Media",
                items: [
                    "Facebook & Twitter Page Creation",
                    "30 Facebook Posts",
                    "30 Twitter Posts",
                    "Instagram Page Creation",
                    "30 Instagram Posts",
                ],
            },
        ],        
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "ultimate",
        title: "Ultimate",
        desc: "Designed specifically for large-scale eCommerce, enterprise-level firms, and corporate businesses.  ",
        monthlyPrice: 2800,
        yearlyPrice: 1680,
        badge: "Contact Sales",
        buttonText: "Get Quote",
        // features: [
        //     "Unlimited AI content generation",
        //     "All social media integrations",
        //     "Dedicated account manager",
        //     "Unlimited projects",
        //     "Custom analytics & reporting",
        //     "Enterprise-grade security",
        //     "Free updates",
        //     // "24/7 priority support"
        // ],
        features: [
            {
                subheading: "Keyword Research",
                items: [
                    "85 Keywords",
                    "Competitor Analysis",
                ],
            },
            {
                subheading: "Content",
                items: [
                    "18 Articles (400 words)",
                    "18 Blogs (500 words)",
                    "10 Press Releases (1 Paid)",
                ],
            },
            {
                subheading: "Guest Blogs (DA 40 +)",
                items: [
                    "3 Guest Blogs (1000 words)",
                ],
            },
            {
                subheading: "Guest Blogs (DA 60 +)",
                items: [
                    "3 Guest Blogs (1000 words)",
                ],
            },
            {
                subheading: "Promotional Content",
                items: [
                    "10 Infographics",
                    "5 Videos (w / Voice-over)",
                ],
            },
            {
                subheading: "Power Posts",
                items: [
                    "1 Power Post (2000 words)",
                ],
            },
            {
                subheading: "Link Building",
                items: [
                    "50 Submissions",
                    "50 Classifieds",
                    "50 Community Participation",
                    "50 Business Profiles",
                ],
            },
            {
                subheading: "Website",
                items: [
                    "Meta Tags Creation",
                    "Web Content Optimization",
                    "Keyword Optimization",
                    "Anchor Text Optimization",
                    "Landing Page Optimization",
                    "Call To Actions",
                    "Site Speed Optimization",
                    "Image Optimization",
                    "Mobile Text Optimization",
                ],
            },
            {
                subheading: "Conversion Tracking",
                items: [
                    "Google Analytics Installation",
                    "Google Webmaster Installation",
                    "Google Places Submissions",
                ],
            },
            {
                subheading: "Reporting",
                items: [
                    "Weekly Progress Report",
                    "Monthly Progress Report",
                    "Google Analytics Report",
                ],
            },
            {
                subheading: "Features",
                items: [
                    "Dedicated Project Manager",
                    "Support, 5 Days a Week",
                ],
            },
            {
                subheading: "Social Media",
                items: [
                    "Facebook & Twitter Page Creation",
                    "60 Facebook Posts",
                    "60 Twitter Posts",
                    "Instagram Page Creation",
                    "60 Instagram Posts",
                ],
            },
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
