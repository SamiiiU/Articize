import { FaBullhorn, FaBullseye, FaCartShopping, FaChartLine, FaChartPie, FaComments, FaLayerGroup, FaLink, FaLinkSlash, FaMagnifyingGlass, FaMoneyBillWave, FaPalette, FaRegChartBar, FaRegNewspaper, FaRocket, FaUsers, FaUserTag } from 'react-icons/fa6'
import heroImg from '../../../Assets/Images/ServicesIMG/EcommerceBG.png'
import { MdBugReport, MdContentCopy, MdLocationOn, MdOutlineMobileFriendly, MdOutlineRateReview, MdOutlineStarPurple500 } from 'react-icons/md'
import { GrAchievement, GrOptimize } from 'react-icons/gr'
import { IoAnalytics } from 'react-icons/io5'


import BG from '../../../Assets/Images/ServicesIMG/SEOImages/MarketingHeroBG.png'
import { FaAd, FaBuilding, FaCode, FaCog, FaCogs, FaCommentDots, FaFileAlt, FaGlobe, FaGlobeAmericas, FaGoogle, FaImage, FaKey, FaLanguage, FaLock, FaMapMarkedAlt, FaMapMarkerAlt, FaMobileAlt, FaPenAlt, FaPlusCircle, FaRedoAlt, FaSearch, FaServer, FaShareAlt, FaShieldAlt, FaSitemap, FaSpider, FaStar, FaStarAndCrescent, FaTachometerAlt, FaTags, FaThumbsUp, FaUserAlt, FaUserFriends, FaVideo } from 'react-icons/fa'

import popularPlatform from '../../../Assets/Images/ServicesIMG/SEOImages/popular.png'
import { AiOutlineDashboard } from 'react-icons/ai'
import { RiSearchEyeLine } from 'react-icons/ri'



export const EcommerceSEOData = {

    heroSection: {
        heading: "Boost Your E-Commerce Store with Expert SEO Strategies",
        para: "In the competitive e-commerce landscape, distinguishing your online store is crucial for increasing sales and enhancing your digital presence. Our tailored E-commerce SEO services are designed to elevate your store’s visibility and attract more qualified traffic. We combine effective SEO strategies and deep industry knowledge to optimize product listings, improve user experience, and boost conversion rates. From technical SEO and content creation to keyword targeting and mobile performance, our expert team ensures your store not only ranks higher but also offers the best shopping experience, turning visitors into loyal customers. Let us drive your e-commerce success by maximizing traffic and sales like never before.",
        img: heroImg,
        bg: BG,
    },
    // Hero section data ends


    customPricing: {

        heading: 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        mainHeading: "Custom E-commerce SEO Package",

        overview: "Tailored specifically for e-commerce businesses, this package enhances online visibility and drives sales by addressing key areas critical to online retail success.",

        benifits: [
            { heading: "Enhanced E-commerce Visibility: ", description: "Attract and engage potential customers actively searching for your products." },
            { heading: "Boosted Sales Conversion: ", description: "Attract and engage potential customers actively searching for your products." },
            { heading: "Improved Customer Retention: ", description: "Encourage repeat business through an enhanced shopping experience." },

        ],

        keyFeatures: [
            { heading: "E-commerce Content Strategy", description: "Optimize product descriptions and blogs with targeted keywords to improve visibility and engagement." },
            { heading: "E-commerce Specific Link Building", description: "Build high-quality backlinks from relevant e-commerce platforms to enhance site authority." },
            { heading: "Mobile Optimization", description: "Ensure your site is responsive and performs well on all devices, crucial for capturing mobile shoppers." },
            { heading: "User Experience Optimization", description: "Improve site usability and speed to facilitate easier navigation and quicker load times." },
            { heading: "SEO Audit for E-commerce", description: "Conduct regular SEO audits to identify and resolve issues impacting site performance." },
            { heading: "Keyword Research and Management", description: "Identify high-value keywords specific to your niche and manage them effectively to drive targeted traffic." },
            { heading: "Competitor Analysis", description: " Analyze competitors to understand their strengths and weaknesses and refine your strategy accordingly." },
            { heading: "Conversion Rate Optimization", description: "Implement testing and adjustments on key pages to increase the conversion rate of visitors to customers." }
        ],

        startingAt: "$4200/Month",
    },

    //Booster Section start here 
    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {
                name: "Optimized Product Categories",
                icon: popularPlatform,
                whyMatters: "Properly categorized products not only help search engines understand the structure and content of your store better, but they also enhance the user experience by enabling easier and more intuitive navigation. This strategic categorization aids in driving more targeted traffic to specific product pages, which can lead to higher conversion rates.",

                includes: [
                    "Keyword research to find optimal terms for categories.",
                    "Creation of SEO-optimized titles and meta descriptions for category pages.",
                    "Structuring categories logically to improve user flow and search engine indexing.",
                ],
                benifit: "Enhanced discoverability in search engines leads to increased organic traffic, while a well-structured user interface boosts conversion rates by simplifying customer navigation.",

            },

            {
                name: "User-Generated Reviews & SEO",
                icon: popularPlatform,
                whyMatters: "Reviews from users provide authentic content that enhances credibility, while also serving as fresh and relevant content that search engines value highly. This user-generated content helps to naturally incorporate keywords and increase content volume, which significantly boosts SEO performance.",

                includes: [
                    "Implementation of review collection widgets on product pages.",
                    "Optimization of review displays with SEO-friendly schema markup.",
                    "Strategies to encourage more customer reviews post-purchase.",
                ],
                benifit: "Improves product page SEO and increases conversion rates by providing social proof that encourages more customers to complete purchases.",

            },

            {
                name: "Mobile-First Optimization",
                icon: popularPlatform,
                whyMatters: "A mobile-first approach is essential in today's market where the majority of users access the internet via mobile devices. Optimizing for mobile first means better performance in mobile search results and a user experience optimized for mobile users, which are critical for capturing and converting this growing audience.",

                includes: [
                    "Responsive web design to ensure usability on all devices.",
                    "Image and video optimization to reduce load times on mobile.",
                    "Touch optimization for easier navigation on touch devices.",
                ],
                benifit: "Higher search engine rankings for mobile searches and an improved user experience that reduces bounce rates and increases time on site.",

            },

            {
                name: "Schema Markup for E-commerce",
                icon: popularPlatform,
                whyMatters: "Implementing schema markup significantly boosts the way search engines interpret and display your product listings in the search results. This structured data helps to directly communicate the details of your products to search engines, enhancing the richness of your listings which can attract more clicks.",

                includes: [
                    "Implementation of Product schema to highlight price, availability, and review ratings.",
                    "Use of Offer and AggregateRating schemas to enhance entry appeal.",
                    "Continuous updates to schema as standards and best practices evolve.",
                ],
                benifit: "Enhanced product displays in search results lead to higher click-through rates and potentially greater sales volumes.",

            },

            {
                name: "Internal Linking Strategies",
                icon: popularPlatform,
                whyMatters: "Internal linking is a pivotal SEO strategy that not only helps with site indexing and spreading link equity but also significantly enhances user engagement by facilitating easier discovery of additional content and products on your site.",

                includes: [
                    "Mapping out key pages for strategic link placement.",
                    "Using relevant anchor texts that align with target keywords.",
                    "Creating linkable assets like infographics and blogs that naturally encourage internal links.",
                ],
                benifit: "Enhanced site authority, better indexed pages, and a cohesive user journey that increases the likelihood of conversion.",

            },

            {
                name: "E-commerce Site Speed Optimization",
                icon: popularPlatform,
                whyMatters: "Site speed is a critical SEO and user experience factor. Faster sites rank higher in search engines and offer a better user experience, reducing bounce rates and increasing user retention, which are vital for maximizing conversions.",

                includes: [
                    "Minifying CSS, JavaScript, and HTML.",
                    "Implementing lazy loading for images and videos.",
                    "Choosing high-performance web hosting optimized for e-commerce.",
                ],
                benifit: "Improved site performance leads to better user experience, higher SEO rankings, and increased customer retention and sales.",

            },

            {
                name: "Competitor Analysis for E-commerce SEO",
                icon: popularPlatform,
                whyMatters: "Keeping an eye on competitors’ SEO strategies provides invaluable insights that can inform and refine your own strategies, allowing you to exploit weaknesses in their tactics and strengthen your own online presence in contrast.",

                includes: [
                    "Detailed analysis of competitor SEO strategies and keyword usage.",
                    "Monitoring competitor backlink profiles and content marketing efforts.",
                    "Regularly updating your strategy based on competitor movements and market changes.",
                ],
                benifit: "Enables strategic adjustments in your SEO approach to outpace competitors and capture more market share.",

            },

            {
                name: "Conversion-Focused SEO Content",
                icon: popularPlatform,
                whyMatters: "Focusing on SEO content that drives conversions is crucial in turning traffic into sales. By aligning content with user intent and optimizing it for different stages of the customer journey, you significantly increase the likelihood of engaging visitors and converting them into paying customers.",

                includes: [
                    "Creation of buying guides and product-focused articles.",
                    "SEO-optimized product descriptions that highlight benefits and features.",
                    "Engaging, actionable content that drives consumers towards making a purchase.",
                ],
                benifit: "Increases in both traffic and conversion rates as content is optimized to engage users effectively, guiding them towards making a purchase.",

            },


        ],
    },
    //Booster Section ends here 

    //PowerBy starts here 
    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200, explanation: "Showcasing a percentage increase in organic traffic highlights the effectiveness of your SEO strategies in driving more users to the website naturally, without paid advertising." },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100, explanation: "Focusing on conversion rate improvement emphasizes how SEO not only drives traffic but also makes that traffic valuable by converting visitors into customers. This addresses the effectiveness of site optimization and content strategies." },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300, explanation: "Highlighting the return on investment is crucial for businesses to understand the financial benefits of investing in SEO. It ties the cost of your services to tangible financial gains, making it easier for decision-makers to justify the investment." },

        ],
    },
    //PowerBy ends here 


    tailoredSection: {
        heading: "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para: "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems: [
            {
                heading: "Maximize Your Shopify Store's Potential with Expert E-commerce SEO Services",
                para: "Elevate your Shopify store's performance with our dedicated E-commerce SEO services, specifically tailored to meet the unique challenges and opportunities presented by the e-commerce landscape. Our approach focuses on optimizing your Shopify site to significantly enhance its visibility and attractiveness to search engines. This results in not only increased organic traffic but also a better shopping experience that can dramatically improve conversion rates. We employ a blend of advanced SEO techniques and deep insights into e-commerce behavior to ensure your store stands out from the competition and captures more sales.",
                offers: [
                    "<strong>Product Page Optimization: </strong>We meticulously craft product titles, descriptions, and metadata with SEO-rich content that increases visibility and attracts more organic traffic.",

                    "<strong>Schema Markup Integration: </strong>By implementing detailed schema markup, we ensure your products stand out in SERPs with rich snippets like pricing, availability, and reviews, which drive higher click-through rates.",

                    "<strong>Content Strategy Tailored to E-commerce: </strong>Our content experts create compelling, relevant content that speaks directly to your customers\’ needs, enhancing their shopping experience and boosting your SEO efforts.",

                    "<strong>Strategic Link Building: </strong>We secure high-quality backlinks from reputable and relevant sources, boosting your site's authority and helping it rank higher in search results.",
                ],
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {
                heading: "Elevate Your WooCommerce Store with Premier SEO Services",
                para: "Unlock the full potential of your WooCommerce store with our specialized SEO services. As a flexible and powerful e-commerce platform, WooCommerce offers extensive customization and optimization opportunities. However, tapping into these features effectively requires expert knowledge and strategic execution. Our SEO services are specifically designed to maximize your store’s visibility, enhance user engagement, and increase your conversion rates through targeted optimizations that leverage WooCommerce's unique capabilities.",
                offers: [
                    "<strong>Technical SEO Audits: </strong>We dive deep into your store’s infrastructure to identify and fix issues related to duplicate content, slow speeds, and indexing inefficiencies, ensuring your WooCommerce operates at peak technical health.",
                    "<strong>Keyword Mapping: </strong>Our keyword strategies are specially crafted for WooCommerce, aligning critical keywords with your product and category pages to draw in the most relevant traffic and enhance product discoverability.",
                    "<strong>Content Optimization: </strong>We develop SEO-rich product descriptions, compelling blogs, and informative landing pages tailored to engage your target audience and significantly boost your organic search presence.",
                    "<strong>Performance Enhancements: </strong> By optimizing site speed, implementing schema markup for rich snippets, and making core web vitals adjustments, we enhance your store’s user experience, contributing to faster page loads and smoother navigation that are key to securing higher conversion rates.",
                ],

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {
                heading: "Maximize Your Magento Store's Potential with Advanced E-commerce SEO Services",
                para: "Magento, renowned for powering complex and large-scale e-commerce operations, requires a nuanced approach to SEO that aligns with its capabilities and challenges. Our Magento E-commerce SEO services are expertly designed to enhance your store’s online visibility, drive targeted traffic, and optimize conversion rates, tapping into the platform's vast potential for scalability and customization.",
                offers: [
                    "<strong>Advanced Keyword Strategy: </strong>We develop comprehensive keyword strategies tailored specifically for Magento, enhancing visibility and driving engagement on your product and category pages.",

                    "<strong>Custom Schema Implementation: </strong>By integrating detailed schema for products, reviews, and breadcrumbs, we enhance your listings in search results, making them more informative and clickable.",

                    "<strong>E-commerce Performance Optimization: </strong>Focusing on optimizing your Magento store's architecture for faster load times and smoother navigation, directly impacting user experience and SEO performance.",
                ],
                image: "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {
                heading: "Maximize Your BigCommerce Store's Potential with Expert E-commerce SEO Services",
                para: "BigCommerce is engineered to power sophisticated online stores, offering extensive tools and functionalities tailor-made for e-commerce success. However, maximizing its potential requires strategic SEO that aligns with its robust capabilities. Our BigCommerce SEO services are specifically designed to optimize every aspect of your store, from product visibility to user engagement, ensuring you not only attract but also retain and convert a high volume of customers.",
                offers: [
                    "<strong>On-Page Optimization: </strong>We enhance product pages, category structures, and internal linking with precise SEO techniques, ensuring each element is fully optimized for search engines and user experience.",

                    "<strong>Content Strategy: </strong>Our experts develop compelling, keyword-optimized content including product descriptions, informative guides, and blogs that engage and convert your target audience.",

                    "<strong>Mobile SEO: </strong>Given the predominance of mobile traffic, we focus on mobile optimization to create fast, user-friendly pages that cater to mobile shoppers, thereby improving your search rankings and user satisfaction.",
                ],
                image: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {
                heading: "Maximize Your Wix and Squarespace Store's Potential with Expert E-commerce SEO Services",
                para: "Wix and Squarespace make website design accessible, but truly excelling in SEO on these platforms requires specialized strategies. Our SEO services for Wix and Squarespace are crafted to enhance site visibility and user experience, transforming your website into a powerful sales engine. By focusing on the unique capabilities and SEO potentials of Wix and Squarespace, we ensure your online store not only attracts more visitors but also drives significant conversions.",
                offers: [
                    "<strong>Site Structure Optimization: </strong> We create clean, SEO-friendly navigation and URL structures that make your site easy to index and navigate, enhancing both user experience and search engine visibility.",

                    "<strong>Content Optimization: </strong>Our team improves your product pages, blogs, and FAQs with targeted SEO practices to boost organic traffic and engage visitors effectively.",

                    "<strong>E-commerce Performance Enhancement:  </strong>Focusing on site speed and seamless navigation, we optimize your website's performance to ensure it meets the fast-paced demands of online shoppers, which is vital for maintaining competitive edge and improving conversion rates.",
                ],

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {
                heading: "Maximize Your Online Reach with Expert Multi-Platform E-commerce SEO Consulting",
                para: "Operating across multiple platforms such as Shopify, WooCommerce, and Magento offers tremendous growth opportunities but also presents unique SEO challenges. Our Multi-Platform SEO Consulting services are specifically designed to unify and optimize your SEO efforts across all your e-commerce platforms, ensuring consistent performance and maximized visibility.",
                offers: [
                    "<strong>Comprehensive SEO Audits: </strong>We conduct detailed audits across platforms to identify and resolve SEO discrepancies, ensuring a cohesive strategy that enhances overall visibility and searchability.",

                    "<strong>Keyword Harmonization: </strong>We optimize your keyword strategy across all platforms, ensuring that your products are consistently found by the right audiences, regardless of where they shop.",

                    "<strong>Content Planning: </strong>We develop unified content strategies that adapt to the strengths and audiences of each platform, maintaining brand consistency and maximizing engagement.",
                ],
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },

    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping />   },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink />  },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly />  , spans : 4},

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize />  },

        ],
    },

    platformSection: {
        heading: "We Optimize eCommerce Stores on These Platforms",
        para: "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",

        platforms: [
            {
                heading: "Popular Platforms", 
                items: [
                    { itemName: "Shopify", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s" },
                    { itemName: "WoCommerce", itemImg : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png"},
                    { itemName: "BigCommerce", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s"},
                    { itemName: "Magento", itemImg : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/magento-icon.png"},
                ],
                
            },

            {
                heading: "Enterprise-Level Solutions", items: [
                    { itemName: "NetSuite", itemImg : "https://w7.pngwing.com/pngs/425/614/png-transparent-netsuite-hd-logo-thumbnail.png"},
                    { itemName: "nopCommerce", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqJ70oLX1StlSR697nOOOojwrE8gmDqMncg&s"},
                    { itemName: "Celerant", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJjPCE3EsXWL3NLTmJaO6KkTVTN7df-lOQ&s"},
                    { itemName: "Unilog", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiV85C_hOBvOLW9atOccH3v7FjGguMl5QKyg&s"},
                ],
            },

            {
                heading: "Content Management Systems (CMS)", items: [
                    { itemName: "WordPress", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "Drupal", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Umbraco", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ChnjmwSlQ7zDVIGkGI38zqlZFrfrLC8V8g&s"},
                ],
            },

            {
                heading: "Other Platforms", items: [
                    { itemName: "Volusion", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU" },
                    { itemName: "Drupal", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Umbraco", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ChnjmwSlQ7zDVIGkGI38zqlZFrfrLC8V8g&s"},
                ],
            }
        ]
    },

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "Optimizing online visibility for tools and hardware to reach and convert ready-to-buy customers.", approaches: [
                    "Keyword Optimization: Focusing on product-specific keywords for increased visibility.",
                    "Site Structure Optimization: Streamlining navigation and indexing for better user experience.",
                    "Content Optimization: Creating SEO-rich product content to convert visitors."
                ], increase: 450, increaseIn: "Growth in organic traffic, leading to a significant increase in sales."
            },
            {
                header: "E-commerce SEO for Apparel", challenge: "Standing out in the competitive apparel market to capture potential sales.", approaches: [
                    "Enhanced Visual Content SEO: Optimizing product visuals for better engagement.",

                    "Mobile Optimization: Ensuring a seamless shopping experience on mobile devices.",
                    "Seasonal Campaigns: Leveraging SEO during peak shopping periods."
                ], increase: 350, increaseIn: "Increase in page views and longer site engagement, boosting transaction rates."
            },
            {
                header: "E-commerce SEO for Consumer Electronics", challenge: "Addressing product turnover and informed consumer comparison before purchases.", approaches: [
                    "Technical SEO Enhancements: Improving website speed and performance.",
                    "Competitive Keyword Analysis: Targeting specific customer search terms.",
                    "User Experience Optimization: Enhancing navigation and product information clarity."
                ], increase: 520, increaseIn: "Rise in organic search traffic and improved conversion rates due to enhanced targeting and usability."
            },

        ],
    },

    pathToSuccess: {
        heading: "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R</span>.<span class= 'text-[#207DE9]'>O</span>.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",

        paths: [
            {
                letter: "G", heading: "Generate Traffic", matters: "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products.", how: ["Keyword research to identify high-intent, transactional search terms.", "Target long-tail keywords that align with buyer needs", "Optimize for Google Shopping and other search engines."],
                outcome: "More targeted visitors who are ready to buy."
            },
            {
                letter: "R", heading: "Rank Higher", matters: "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first.", how: ["On-page optimization (titles, meta tags, headers).", "Implement schema markup for product details, reviews, and rich snippets.", "Build high-quality backlinks to improve domain authority."],
                outcome: "Improved search engine rankings that boost brand visibility."
            },

            {
                letter: "O",
                heading: "Optimize Content",
                matters: "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers.",
                how: [
                    "Write detailed, keyword-optimized product descriptions.",
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs.",
                    "Optimize multimedia (images and videos) with proper alt text and titles."],
                outcome: "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {
                letter: "W",
                heading: "Win Clicks*",
                matters: "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings.",
                how: [
                    "Craft irresistible meta titles and descriptions that drive clicks.",
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs",
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."],
                outcome: "Higher CTRs, more traffic, and better engagement with your products."
            },

            {
                letter: "T",
                heading: "Target Keywords",
                matters: "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark.",
                how: [
                    "Research high-converting, buyer-intent keywords for product and category pages.",
                    "Implement long-tail keywords that capture niche search queries.",
                    "Monitor keyword rankings and refine strategies based on performance."],
                outcome: "Increased visibility in search results for terms your audience is actively searching."
            },

            {
                letter: "H",
                heading: "Highlight Products",
                matters: "Showcasing your products effectively helps customers find the right solution quickly and drives conversions",
                how: [
                    "Use product schema to highlight key details like price, reviews, and availability.",
                    "Optimize product images, videos, and descriptions for clarity and SEO.",
                    "Create internal links to popular and high-converting product pages."],
                outcome: "Improved visibility in search results and higher engagement on product pages."
            },

            {
                letter: <MdOutlineStarPurple500 />,
                focus: "By focusing on :",
                focusOn: ["Generating Traffic", "Ranking Higher", "Optimizing Content", "Winning Clicks", "Targeting Keywords", "Highlighting Products"],
                how: [
                    "Increased organic traffic.",
                    "Higher search rankings.",
                    "More conversions and sales."],
                outcome: "Improved visibility in search results and higher engagement on product pages."

            },


        ]
    },


    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {
                header: "Basic E-commerce SEO Package",                //<strong>
                price: "$500/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Keyword Identification: Focus on primary product keywords to boost search visibility.",
                    "Basic On-Page SEO: Optimization of titles and meta descriptions for initial SEO boost.",
                    "Google Analytics Setup: Essential for tracking website traffic and user behavior.",
                    "Monthly SEO Report: Overview of traffic, keyword rankings, and basic performance metrics.",
                    "Customer Support: Access to email support for any SEO queries.",
                ],
            },
            {
                header: "Standard E-commerce SEO Package",
                price: "$1,500/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Comprehensive Keyword Strategy: Extensive research and application of high-intent keywords.",
                    "Enhanced On-Page SEO: Detailed optimization of all content and HTML tags on product pages.",
                    "Technical SEO Audit: Identification and resolution of crawl errors and broken links.",
                    "Content Creation: Monthly blog posts or guides to engage and attract more traffic.",
                    "Backlink Strategy: Basic link-building from niche-related websites to improve authority."
                ],

            },
            {
                header: "Premium E-commerce SEO Package",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Advanced Keyword Optimization: Targeting both broad and niche market keywords for maximum reach.",
                    "Full On-Page and Off-Page SEO: Comprehensive site-wide and external optimizations to enhance SERP rankings.",
                    "Mobile Optimization: Ensuring the store is fully responsive and optimized for all mobile devices.",
                    "Robust Link Building Campaign: High-quality backlinks from high-authority sites to boost SEO.",
                    "Custom Analytics Dashboard: Real-time SEO tracking and insights with actionable analytics."
                ],

            },
        ],
    },


    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },


}

export const LocalSEOData = {

    heroSection: {
        //Hero section data start
        heading: "Unlock the Power of Local SEO",
        para: "Enhance your local presence with our expert Local SEO strategies, designed to bring your business to the forefront of your community. We optimize your Google My Business profile, perform targeted local keyword research, and enhance your online reputation to increase visibility. Our approach boosts in-store visits, improves local rankings, and connects you with customers ready to purchase.",
        img: heroImg,
        bg: BG,
    },
    // Hero section data ends


    customPricing: {

        heading: 'Local SEO Services Custom Pricing Tailored to Your Business Goals',

        mainHeading: "Custom Local SEO Package",

        overview: "Designed specifically for local businesses aiming to dominate their local markets, this package leverages advanced Local SEO strategies to significantly enhance visibility and engagement within the local community.",

        benifits: [
            { heading: "Enhanced Local Visibility: ", description: "Elevates your business's discoverability, connecting you with local customers actively searching for your products or services." },
            { heading: "Increased In-Store Traffic: ", description: " Drives higher foot traffic to your physical locations through optimized local listings. " },
            { heading: "Boosted Online Interactions: ", description: "Encourages more calls, bookings, and purchases by improving your local online presence." },

        ],

        keyFeatures: [
            { heading: "Google My Business Optimization ", description: "Complete optimization for maximal local search visibility, including regular posts and response man~ement." },
            { heading: "Local Keyword Optimization ", description: "Strategic implementation of local keywords to target essential local search traffic effectively." },
            { heading: "On-Page Local SEO Adjustments ", description: "Precision adjustments of on-page SEO elements like content, meta tags, and NAP consistency to boost local relevance." },
            { heading: "Reputation Management ", description: "Proactive management of online reviews and ratings to build local trust and authority." },
            { heading: "SEO Audit for E-commerce", description: "Conduct regular SEO audits to identify and resolve issues impacting site performance." },
            { heading: "Local Backlink Building ", description: "Building high-quality backlinks from reputable local sources to strengthen your SEO." },
            { heading: "Localized Content Creation ", description: "Developing content that resonates with your local audience and establishes a strong community presence." },
            { heading: "NAP Consistency Checks ", description: "Ensuring your business information is consistent across all online platforms to improve SEO." },
            { heading: "Advanced Analytics and Reporting ", description: "Utilizing sophisticated tools to provide detailed analytics and monthly performance reports." }
        ],

        startingAt: "$1,200/Month",
    },


    //Booster Section start here 
    boostSection: {
        heading: "Boost Your Local Visibility with Services. <span class= 'text-[#207DE9]'> Specialized <br/> Local SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of Local SEO, such as enhancing local search visibility, optimizing for geo-specific keywords, and improving local user engagement to drive foot traffic and local conversions.",

        boostContent: [
            {name: "Google My Business Optimization",
                icon: popularPlatform,
                whyMatters: "Properly optimized Google My Business (GMB) profiles increase your visibility in local search results and Google Maps, crucial for attracting local customers.",

                includes: [
                    "Claiming and verifying your GMB listing.",
                    "Optimizing your profile with complete and accurate business information.",
                    "Regularly updating the profile with posts, offers, and responding to reviews.",
                ],
                benifit: "Enhances local search presence and increases the likelihood of appearing in Google's Local Pack, directly driving more local inquiries and visits.",

            },

            {name: "Local Keyword Optimization",
                icon: popularPlatform,
                whyMatters: "Targeting local keywords allows you to capture the search intent of consumers in specific geographic areas, crucial for businesses serving local communities.",

                includes: [
                    "Research and identification of high-value local keywords.",
                    "Integration of local keywords into your website's content, titles, meta descriptions, and URLs.",
                ],
                benifit: "Increases local search rankings and drives targeted traffic to your website, enhancing the chances of conversion from local customers.",

            },

            {name: "Reputation Management",
                icon: popularPlatform,
                whyMatters: "Positive reviews and active response management build trust and credibility with local consumers, influencing their decision-making process.",

                includes: [
                    "Monitoring major review platforms and local directories.",
                    "Strategically responding to both positive and negative reviews.",
                    "Encouraging satisfied customers to leave positive reviews.",
                ],
                benifit: "Improves online reputation and encourages more local customers to choose your business over competitors.",

            },

            {name: "Local Backlink Building",
                icon: popularPlatform,
                whyMatters: "Backlinks from reputable local sources signal to search engines that your business is recognized and trusted within the community.",

                includes: [
                    "Establishing partnerships with other local businesses and websites.",
                    "Participating in community events and sponsorships that generate local press coverage.",
                    "Creating locally relevant content that local sites want to link to.",
                ],
                benifit: "Strengthens your website's local SEO profile, enhancing your overall search engine credibility and rankings.",

            },




        ],
    },

            //PowerBy starts here 
    powerBySection: {
        heading: "Local SEO Data-Driven Insights  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of targeted local optimization to increase your visibility in community search results and drive customer engagement.",


        statistics: [

            { benefit: "Increase in Local Search Traffic", benefitText: "Through optimizing Google My Business listings, refining local keywords, and enhancing local citations, we substantially increase your visibility in local searches", increasePercentage: 150, explanation: "This significant rise in local search traffic illustrates how effectively Local SEO can expose your business to potential customers in your area, increasing foot traffic and online inquiries." },

            { benefit: "Improvement in Local Conversion Rates", benefitText: "By creating more engaging local content and ensuring NAP consistency across directories, we make it easier for customers to interact with your business.", increasePercentage: 80, explanation: "These strategies effectively convert local searches into real customer interactions, such as store visits or direct calls, by making your business information accessible and engaging." },

            { benefit: "ROI from Local SEO Investments", benefitText: "Investing in comprehensive Local SEO tactics enhances your online and offline presence, attracting more local customers and increasing sales. ", increasePercentage: 250, explanation: "This ROI reflects the direct financial gains from Local SEO, demonstrating its efficiency in boosting profitability through targeted, local customer engagement." },

        ],
    },
            //PowerBy ends here 


    tailoredSection: {
        heading: "Tailored <span class= 'text-[#207DE9]'> Specialized Local SEO </span> for Every Type of Local Business  for Every Platform",
        para: "In a competitive digital landscape, local businesses need more than just an online presence—they need to dominate their local search results. Our Local SEO services are custom-built for your unique business needs, ensuring you reach the right customers in your community. From enhancing your visibility in local searches to increasing foot traffic, our strategies are designed to help you succeed in your local market.",

        tailoredItems: [
            {heading: "Maximize Your Business's Potential with Expert Local SEO Services",
                para: "Our Local SEO services focus on building a strong online foundation for your business. We leverage cutting-edge techniques and data-driven insights to connect you with nearby customers actively searching for the products and services you offer. With our expertise, your business will enjoy greater visibility, higher traffic, and more meaningful customer engagement, driving sustainable growth.",
                offers: [
                    "<strong>Google My Business Optimization: </strong>Transform your Google My Business (GMB) profile into a powerful tool for attracting local customers. We ensure your GMB listing is fully optimized with accurate business details, engaging posts, and regular updates. This helps your business appear in Google's Local Pack and Maps, where most local searchers click first.",

                    "<strong>Local Keyword Strategy: </strong>We perform in-depth research to identify high-impact, location-specific keywords that your target audience is using. These keywords are seamlessly integrated into your website content, meta tags, and GMB profile, ensuring you rank higher for the searches that matter most.",

                    "<strong>Local Citations and Listings: </strong>Consistency is key when it comes to local SEO. We create, manage, and optimize your business listings across popular directories and local platforms, ensuring your business information (Name, Address, Phone) is accurate and consistent everywhere.",

                    "<strong>Reputation Management: </strong>Your online reputation can make or break a local business. We monitor your reviews on platforms like Google, Yelp, and social media, respond to customer feedback, and implement strategies to encourage positive reviews-all while building trust and credibility with your audience.",

                    "<strong>Mobile Optimization for Local Search: </strong>With the majority of local searches happening on mobile devices, we ensure your website is fully responsive and loads quickly. From mobile-friendly designs to click-to-call features, we make it easy for customers to find and contact you on the go.",

                    "<strong>Content Strategy Tailored to Local Audiences: </strong>We create engaging, locally relevant content-such as blogs, guides, and community-focused updates that speaks directly to your audience. This not only improves SEO but also establishes your business as a trusted part of the local community.",

                    "<strong>Local Community Link Building: </strong>Strengthen your local authority with high-quality backlinks from trusted local sources. We collaborate with local businesses, news outlets, and organizations to generate links that boost your rankings and connect you with the community.",

                    "<strong>Custom Analytics and Reporting: </strong>Get actionable insights into your local SEO performance with detailed monthly reports. Track your rankings, traffic, and engagement, and see exactly how our strategies are driving growth for your business.",
                ],
                
                image : ''
            },
        ]

    },

    approachSection: {
        heading: "Our Proven <span class= 'text-[#207DE9]'> Local SEO </span> Strategy ",
        para: "Get everything needed to develop, implement, and manage a revenue-generating Local SEO plan with our comprehensive services.",

        approaches: [
            { heading: "Google My Business Optimization", detail: 'Optimize your Google My Business profile to enhance visibility in local search results and on Google Maps, attracting more local customers.', icon: <FaMapMarkedAlt /> },

            { heading: "Local Keyword Optimization", detail: 'Identify and implement local-specific keywords to capture search traffic from potential customers in your area, driving more relevant inquiries and visits.', icon: <FaKey /> },

            { heading: "Consistency Across the Web", detail: 'Ensure your business information is consistent and accurate across all local directories and listings, improving your local search rankings.', icon: <FaGlobeAmericas /> },

            { heading: "Reputation Management", detail: 'Monitor and manage online reviews and local customer feedback to enhance your business\'s reputation and local customer trust.', icon: <MdOutlineRateReview /> },

            { heading: "Local Content Marketing", detail: 'Develop and share locally relevant content that resonates with your community, establishing your business as a local authority and engaging potential customers.', icon: <MdContentCopy /> },

            { heading: "Local Link Building", detail: 'Acquire backlinks from reputable local sources to boost your site\'s authority and improve local search visibility.', icon: <FaLink /> },

            { heading: "Performance Analytics", detail: 'Utilize advanced analytics to monitor and refine your Local SEO strategy, ensuring maximum impact and continuous improvement.', icon: <FaChartLine /> },
        ],
    },

    
    pathToSuccess: {
        heading: "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R</span>.<span class= 'text-[#207DE9]'>O</span>.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to Local SEO Success",

        paths: [
            {
                letter: "G", heading: "Generate Traffic", matters: "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products.", how: ["Keyword research to identify high-intent, transactional search terms.", "Target long-tail keywords that align with buyer needs", "Optimize for Google Shopping and other search engines."],
                outcome: "More targeted visitors who are ready to buy."
            },
            {
                letter: "R", heading: "Rank Higher", matters: "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first.", how: ["On-page optimization (titles, meta tags, headers).", "Implement schema markup for product details, reviews, and rich snippets.", "Build high-quality backlinks to improve domain authority."],
                outcome: "Improved search engine rankings that boost brand visibility."
            },

            {
                letter: "O",
                heading: "Optimize Content",
                matters: "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers.",
                how: [
                    "Write detailed, keyword-optimized product descriptions.",
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs.",
                    "Optimize multimedia (images and videos) with proper alt text and titles."],
                outcome: "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {
                letter: "W",
                heading: "Win Clicks*",
                matters: "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings.",
                how: [
                    "Craft irresistible meta titles and descriptions that drive clicks.",
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs",
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."],
                outcome: "Higher CTRs, more traffic, and better engagement with your products."
            },

            {
                letter: "T",
                heading: "Target Keywords",
                matters: "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark.",
                how: [
                    "Research high-converting, buyer-intent keywords for product and category pages.",
                    "Implement long-tail keywords that capture niche search queries.",
                    "Monitor keyword rankings and refine strategies based on performance."],
                outcome: "Increased visibility in search results for terms your audience is actively searching."
            },

            {
                letter: "H",
                heading: "Highlight Products",
                matters: "Showcasing your products effectively helps customers find the right solution quickly and drives conversions",
                how: [
                    "Use product schema to highlight key details like price, reviews, and availability.",
                    "Optimize product images, videos, and descriptions for clarity and SEO.",
                    "Create internal links to popular and high-converting product pages."],
                outcome: "Improved visibility in search results and higher engagement on product pages."
            },

            {
                letter: <MdOutlineStarPurple500 />,
                focus: "By focusing on :",
                focusOn: ["Generating Traffic", "Ranking Higher", "Optimizing Content", "Winning Clicks", "Targeting Keywords", "Highlighting Products"],
                how: [
                    "Increased organic traffic.",
                    "Higher search rankings.",
                    "More conversions and sales."],
                outcome: "Improved visibility in search results and higher engagement on product pages."

            },


        ]
    },

    
    platformSection: {
        heading: "We Optimize Local Businesses for Local SEO on These Platforms",
        para: "Our Local SEO experts specialize in enhancing visibility for your local business across diverse community and community platforms. Whether you run a small cafe, a local boutique, a professional service office, or a community organization, we tailor Local SEO strategies specific to your niche and local ecosystem.",

        platforms: [
            {
                heading: "Popular Local Business Types", 
                items: [
                    { itemName: "Retail Stores ", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s" },
                    { itemName: "Restaurants and Cafes", itemImg : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png"},

                    { itemName: "Local Service Providers", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s"},

                    { itemName: "Healthcare Practices", itemImg : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/magento-icon.png"},
                ],
                
            },

            {
                heading: "Community Engagement Platforms", items: [
                    { itemName: "Local Business Directories", itemImg : "https://w7.pngwing.com/pngs/425/614/png-transparent-netsuite-hd-logo-thumbnail.png"},
                    { itemName: "Local Event Sites", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqJ70oLX1StlSR697nOOOojwrE8gmDqMncg&s"},
                    { itemName: "Local News and Blog Sites", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJjPCE3EsXWL3NLTmJaO6KkTVTN7df-lOQ&s"},
                ],
            },

            {
                heading: "Specialized Local Platforms", items: [
                    { itemName: "Local Marketplaces", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "Professional Networks", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Educational Institutions", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ChnjmwSlQ7zDVIGkGI38zqlZFrfrLC8V8g&s"},
                ],
            },

        ]
    },

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth with Local SEO",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Local SEO for Retail Businesses", challenge: "Increase foot traffic and local online visibility for retail stores in competitive marketplaces.", approaches: [
                    "Google My Business Optimization: Enhance local search presence and attract more in-store visits.",
                    "Targeted Local Campaigns: Run local promotions and event-based SEO strategies to engage the community.",
                ], increase: 35, increaseIn: "Increase in store visits and customer engagement through improved local search rankings."
            },
            {
                header: "Local SEO for Service Providers", challenge: "Improve local discovery and booking rates for service-based businesses like plumbers and electricians.", approaches: [
                    "Local Keyword Optimization: Implement targeted keyword strategies to capture local service searches.",
                    "Reputation Management: Enhance online reviews and ratings to build trust and authority in the local area.",
                ], increase: 50, increaseIn: "Increase in service bookings and inquiries from local search engine results."
            },
            {
                header: "Local SEO for Restaurants", challenge: "Boost reservations and local awareness in a crowded restaurant market.", approaches: [
                    "Menu Optimization: Ensure online menus are optimized for local searches including dish- specific keywords.",
                    "Local Event Integration: Leverage local food events and festivals for promotions and visibility.",
                ], increase: 30, increaseIn: "Increase in reservations and walk-ins through strategic Local SEO and event marketing."
            },
            {
                header: "Local SEO for Healthcare Practices", challenge: "Enhance patient acquisition and visibility for local healthcare providers like dentists and chiropractors.", approaches: [
                    "Optimized Local Listings: Ensure healthcare practices are prominently listed and accurate across all local health directories.",
                    "Educational Content Creation: Develop health-related content that addresses local community concerns and integrates local SEO keywords.",
                ], increase: 40, increaseIn: "Increase in new patient appointments and higher search engine placement, improving practice visibility and community trust."
            },
            {
                header: "Local SEO for Real Estate Agents", challenge: "Increase property listing visibility and agent recognition in specific local real estate markets.", approaches: [
                    "Targeted Property Listings SEO: Optimize property listings with local keywords and high-quality images to attract potential buyers.",
                    "Community Resource Building: Create guides and blog posts about the local real estate market, positioning agents as local experts.",
                ], increase: 25 , increaseIn: "Increase in property inquiries and enhanced agent profiles, leading to greater sales opportunities and community engagement."
            },


        ],
    },



    pricingSection: {
        heading: "Transparent Pricing for Local SEO",
        para: "Discover our clear and flexible Local SEO pricing plans designed to grow with your local business. From boosting site traffic to enhancing service and product visibility in your community, our plans are crafted to provide tangible results and help you dominate your local market.",

        pricingCards: [
            {
                header: "Basic Local SEO Plan",                //<strong>
                price: "$1,000/month",
                fitFor: "Small local businesses or startups looking to establish a local online presence.",
                youGet: [
                    "Google My Business Setup: Complete creation and optimization.",
                    "Local Keyword Research: Basic local keywords tailored to your business type and location.",
                    "Local Citations: Setup on up to 10 local directories.",
                    "Monthly Performance Reporting: Basic insights into traffic and local search ranking improvements.",
                    "Email Support: Ongoing assistance and consultation.",
                ],
                spans : 4,
            },
            {
                header: "Standard Local SEO Plan",
                price: "$2,500/month",
                fitFor: "Growing local businesses seeking to enhance their visibility and capture more local market share.",
                youGet: [
                    "Includes all features in the Basic Plan.",
                    "Enhanced GMB Features: Posts, Q&A, and review management.",
                    "Advanced Local Keyword Strategy: Comprehensive keyword mapping and optimization.",
                    "Content Creation: Up to 5 locally targeted blog posts or pages.",
                    "Reputation Management: Monitoring and responding to reviews online.",
                    "Bi-monthly Updates and Maintenance: Regular updates and optimizations.",
                    "Phone and Email Support: Direct access for quicker response times.",
                ],
                spans : 2,

            },
            {
                header: "Professional Local SEO Plan",
                price: "$5,000/month",
                fitFor: "Established local businesses or franchises needing advanced strategies for multiple locations.",
                youGet: [
                    "Includes all features in the Standard Plan.",
                    "Multi-location Optimization: Tailored strategies for up to 5 locations.",
                    "Comprehensive Content Strategy: Including local event promotions and local community engagement.",
                    "Advanced Link Building: Developing local backlinks and community-based partnerships.",
                    "Social Media Integration: Localized social media strategy for engagement.",
                    "Weekly Performance Reviews: Detailed analytics with conversion tracking.",
                    "Dedicated Account Management: Personalized client service and strategy adjustments.",
                ],
                spans : 2,

            },
            {
                header: "Enterprise Local SEO Plan",
                price: "$10,000/month",
                fitFor: "Large enterprises or complex businesses with extensive local presence needing a fully integrated local SEO strategy.",
                youGet: [
                    "Includes all features in the Professional Plan.",
                    "Custom Local SEO Strategy Development: Fully tailored approach involving extensive market and competitor analysis.",
                    "Full-scale Local Content Marketing: Advanced content initiatives including video and local influencers.",
                    "Complete Local Ecosystem Integration: Coordination with local news, events, and other platforms for maximum visibility.",
                    "Integrated Local CRM Strategies: To enhance customer retention and engagement.",
                    "Real-time Monitoring and Adjustments: Continuous oversight with immediate strategy adjustments based on market dynamics.",
                    "24/7 Priority Support: Around-the-clock support for all SEO concerns and opportunities.",
                ],
                spans : 4,
            },
        ],
    },

    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },

}

export const TechnicalSEOData = {
    heroSection: {
        //Hero section data start
        heading: "Elevate Your Site with Technical SEO",
        para: "Optimize your website's architecture with our expert Technical SEO services, ensuring high performance and strong search rankings. We focus on enhancing site speed, ensuring mobile compatibility, securing connections, and structuring data effectively. Our streamlined approach boosts your site’s efficiency and visibility, helping it perform flawlessly across all devices.",
        img: heroImg,
        bg: BG,
    },
    // Hero section data ends


    customPricing: {

        heading: 'Technical SEO Services Custom Pricing Tailored to Your Business Goals',

        mainHeading: "Custom Technical SEO Package",

        overview: "Unlock your website's full potential with our specialized Technical SEO services. This package is designed to address and optimize the technical aspects of your website that influence search engine visibility and user experience.",

        benifits: [
            { heading: "Enhanced Site Performance: ", description: "Faster load times and improved responsiveness enhance user engagement and reduce bounce rates." },
            { heading: "Increased Search Visibility: ", description: "Optimized technical elements lead to better search engine rankings and increased organic traffic." },
            { heading: "Secure User Experience: ", description: "HTTPS implementation safeguards user data, enhancing trust and compliance." },
            { heading: "Rich Search Results: ", description: "Structured data leads to richer search results, improving click-through rates and visibility." },
        ],

        keyFeatures: [
            { heading: "Google My Business Optimization ", description: "Complete optimization for maximal local search visibility, including regular posts and response man~ement." },
            { heading: "Local Keyword Optimization ", description: "Strategic implementation of local keywords to target essential local search traffic effectively." },
            { heading: "On-Page Local SEO Adjustments ", description: "Precision adjustments of on-page SEO elements like content, meta tags, and NAP consistency to boost local relevance." },
            { heading: "Reputation Management ", description: "Proactive management of online reviews and ratings to build local trust and authority." },
            { heading: "SEO Audit for E-commerce", description: "Conduct regular SEO audits to identify and resolve issues impacting site performance." },
            { heading: "Site Speed Optimization:  ", description: "We analyze and enhance your website's loading times using advanced compression techniques, optimized code, and efficient server settings" },
            { heading: "Mobile Optimization: ", description: "Ensure your site is fully responsive and provides an optimal viewing experience on all devices, crucial for ranking well in Google's mobile-first indexing." },
            { heading: "SSL Security Implementation: ", description: "Secure your website with HTTPS to protect user data and improve trust with search engines and visitors alike." },
            { heading: "Structured Data Implementation: ", description: "Use Schema.org markup to help search engines understand your site content better and enhance your presence in search results with rich snippets." },
            { heading: "Technical Audit and Error Resolution: ", description: "Identify and fix technical issues that could be harming your site’s performance, including broken links, redirect errors, and crawl errors." },
            { heading: "XML Sitemap and Robots.txt Optimization: ", description: "Ensure search engines can efficiently index your site by optimizing your XML sitemap and configuring your Robots.txt file correctly." },
            { heading: "Ongoing Technical Support: ", description: "Monthly monitoring of your website's technical health to keep it running smoothly and efficiently." }
        ],

        startingAt: "$30,000/Month",
    },

    //Booster Section start here 
    boostSection: {
        heading: "Boost Your Website’s Performance with <span class= 'text-[#207DE9]'> Specialized Technical SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of technical SEO, such as improving site architecture, enhancing server response times, and ensuring robust security protocols to drive better search engine rankings and user experiences.",

        boostContent: [
            {name: "Site Speed Optimization",
                whyMatters: "A fast-loading site retains users and is favored by search engines, directly impacting your SEO rankings and user satisfaction.",

                includes: [
                    "Compressing images",
                    "Leveraging browser caching",
                    "Optimizing CSS and JavaScript to reduce load times",
                ],
                benifit: "Enhanced site performance leads to improved user experience and higher search engine rankings, reducing bounce rates and increasing time on site.",

            },

            {name: "Mobile Optimization",
                whyMatters: "With the increasing prevalence of mobile browsing, a mobile-friendly website is essential for reaching more users and improving search performance.",

                includes: [
                    "Responsive design adjustments",
                    "Mobile-specific speed enhancements",
                    "Usability testing"
                ],
                benifit: "Improved mobile user experience and engagement, leading to increased organic traffic from mobile devices and better conversion rates.",

            },

            {name: "Secure Sockets Layer (SSL) Implementation",
                whyMatters: "SSL secures the connection between your website and its visitors, which is crucial for user trust and a ranking factor for search engines.",

                includes: [
                    "Installation and configuration of SSL certificates to encrypt data transmitted to and from your website.",
                ],
                benifit: "Boosts website security, enhances user trust, and contributes positively to your website's SEO metrics.",

            },

            {name: "Structured Data Implementation",
                whyMatters: "Structured data helps search engines understand your website content better and enhances the display of your pages in SERPs (Search Engine Results Pages).",

                includes: [
                    "Implementation of Schema markup to highlight important information like products, reviews, and events directly in search results.",
                ],
                benifit: "Increased visibility in search results through rich snippets, leading to higher click-through rates and improved SEO performance.",

            },
            {name: "Continuous Technical Audits",
                whyMatters: "Regular technical audits help identify and rectify potential issues that could affect your site's SEO performance.",

                includes: [
                    "Comprehensive checks for crawl errors, broken links, redirect issues, and optimization opportunities.",
                ],
                benifit: "Ensures your website remains technically sound and fully optimized for the best SEO results.",

            },




        ],
    },
    //PowerBy starts here 
    powerBySection: {
        heading: "Technical SEO Optimization Powered by <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced technical optimizations to elevate your website's architecture, improve search engine indexing, and significantly enhance performance metrics.",


        statistics: [

            { benefit: "Increase in Site Speed", benefitText: "Speed optimizations are implemented to reduce load times significantly, utilizing techniques such as resource compression and efficient coding practices.", increasePercentage: 150, explanation: "This notable improvement in site speed enhances user experience by reducing wait times, which is critical for retaining visitors and improving search engine rankings." },

            { benefit: "Increase in Crawl Efficiency", benefitText: "Optimizing the website’s structure and resolving technical issues that hinder search engine crawlers, such as broken links and improper redirects.", increasePercentage: 80, explanation: "These optimizations allow search engines to index your site more thoroughly and efficiently, increasing the visibility of your content in search results and boosting your SEO performance." },

            { benefit: "ROI from Technical SEO Investments", benefitText: "Strategic investments in technical SEO focus on overhauling key website elements that affect search engine visibility and user engagement. ", increasePercentage: 250, explanation: "The return on investment is realized through enhanced rankings, reduced bounce rates, and improved conversion metrics, all resulting from a more robust and technically sound website." },

        ],
    },
    //PowerBy ends here 


    tailoredSection: {
        heading: "Technical SEO for <span class= 'text-[#207DE9]'>  Enhanced Site </span> Performance for Every Platform",
        para: "Optimize your website's backend across all platforms like WordPress, Drupal, and Magento with our expert Technical SEO strategies. We ensure your site is technically sound to boost SEO performance and user experience.",

        tailoredItems: [
            {heading: "Streamline Your Website with Professional Technical SEO",
                para: "Improve your website’s technical framework with our streamlined Technical SEO services. By enhancing critical technical aspects, we not only boost your search rankings but also enhance site functionality, making it more efficient and user-friendly. Our targeted strategies are designed to maximize site performance and meet modern web standards.",
                offers: [
                    "<strong>Site Architecture Refinement: </strong>Simplify structure for better search engine indexing.",

                    "<strong>Enhanced Security Protocols: </strong>Secure your site with HTTPS and modern security measures.",

                    "<strong>Load Time Optimization: </strong>Reduce server response times and optimize resource loading.",

                    "<strong>Mobile-First Adjustments: </strong>Ensure optimal performance on mobile devices.",
                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading: "Optimize Your Core Web Vitals for Better Rankings",
                para: "Enhance your site’s Core Web Vitals, crucial metrics that Google uses to measure user experience. We focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to ensure your website delivers a superior user experience that aligns with SEO best practices.",
                offers: [
                    "<strong>LCP Optimization: </strong>Speed up loading times for the largest content element on the page.",

                    "<strong>FID Improvement: </strong>Reduce interaction delays for a smoother user experience.",

                    "<strong>CLS Minimization: </strong>Stabilize layout shifts to prevent unexpected content movement.",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading: "Elevate Accessibility and Usability Standards",
                para: "Ensure your website is accessible to all users, including those with disabilities. Enhancing accessibility not only broadens your audience but also improves site usability, a factor increasingly considered in SEO rankings.",
                offers: [
                    "<strong>Accessibility Audits: </strong>Identify and resolve barriers that prevent accessibility.",

                    "<strong>Usability Enhancements: </strong>Make navigation intuitive and content easily consumable.",

                    "<strong>SEO Alignment: </strong>Ensure accessibility improvements align with SEO strategies.",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading: "Harden Your Site Security and Build Trust",
                para: "Strengthen your website’s security protocols to protect user data and build trust with visitors. High security is essential for maintaining not just user safety but also for improving search rankings as search engines favor secure sites.",
                offers: [
                    "<strong>SSL/TLS Implementation: </strong>Encrypt data transmissions to safeguard sensitive information.",

                    "<strong>Security Audits: </strong>Regularly scan for vulnerabilities and apply necessary patches.",

                    "<strong>Trust Signals: </strong>Implement visible security measures that reassure visitors.",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading: "Implement Advanced Structured Data for Rich Snippets",
                para: "Utilize structured data to enhance how search engines understand and display your content in search results. Structured data helps in achieving rich snippets, which can improve click-through rates and visibility.",
                offers: [
                    "<strong>Schema Markup: </strong>Implement and optimize Schema.org markup to highlight key information.",

                    "<strong>Rich Snippets: </strong>Enhance visibility in search results with detailed snippets.",

                    "<strong>Data Testing: </strong>Validate structured data to ensure it is implemented correctly.",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
        ]

    },

    approachSection: {
        heading: "Our Proven <span class= 'text-[#207DE9]'> Technical SEO </span> Strategy ",
        para: "Get everything needed to develop, implement, and manage a comprehensive Technical SEO plan with our services designed to improve your website’s technical health and search rankings.",

        approaches: [
            {heading: "Server and Hosting Optimization",
                detail: "Optimize your server settings and hosting environment to reduce latency and increase page load speed, enhancing both user experience and SEO.",
                icon: <FaServer />,
            },
            {heading: "Advanced Security Measures",
                detail: "Implement advanced security measures like HTTPS, secure headers, and robust authentication to safeguard user data and improve search engine trust.",
                icon: <FaShieldAlt />,
              },
            {heading: "Site Architecture Optimization",
                detail: "Enhance your website’s architecture for better crawlability and indexing by search engines, ensuring all pages are optimized for SEO.",
                icon: <FaSitemap />,
              },
            {heading: "Mobile Optimization",
                detail: "Ensure your website is optimized for mobile devices with responsive design and accelerated mobile pages (AMP) to cater to the mobile-first indexing approach of search engines.",
                icon: <FaMobileAlt />,
              },
            {heading: "Code Efficiency",
                detail: "Clean up and streamline your website’s source code including HTML, CSS, and JavaScript to remove redundancies, enhance execution speed, and reduce page load times.",
                icon: <FaCode />,
              },
        ],
    },

    
    pathToSuccess: {
        heading: "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R</span>.<span class= 'text-[#207DE9]'>O</span>.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to Local SEO Success",

        paths: [
            {
                letter: "G", heading: "Guarantee Security", matters: "Ensuring that your website adheres to the best security practices, protecting user data and enhancing trust with search engines.", how: ["Secure websites are trusted more by users and search engines, affecting your SEO positively."],
                outcome: "Enhanced security leads to better search rankings and increased user confidence."
            },
            {
                letter: "R", heading: "Refine Site Architecture", matters: "Improving the structure of your website to ensure it is logical, efficient, and easy to navigate for both users and search engines.", how: ["A well-structured website ensures better crawlability and indexing, crucial for SEO.", ],
                outcome: "Improved site structure results in more efficient crawling and higher visibility in search results."
            },

            {
                letter: "O",
                heading: "Optimize Mobile Experience",
                matters: "Adjusting your website to provide an optimal viewing and interaction experience on mobile devices, crucial for ranking in search engines.",
                how: [
                    "Mobile optimization is essential as mobile-first indexing is now a standard for Google.",
                ],
                outcome: "A mobile-optimized site reaches a wider audience and performs better in search rankings."
            },

            {
                letter: "W",
                heading: "Web Performance Optimization",
                matters: "Enhancing the speed and overall responsiveness of your website to improve user satisfaction and SEO rankings.",
                how: [
                    "Site speed and user experience directly influence bounce rates and search engine rankings.",
                ],
                outcome: "Faster site speeds lead to lower bounce rates and higher engagement."
            },

            {
                letter: "T",
                heading: "Technical Audit Regularity",
                matters: "Conducting systematic checks and updates to identify and resolve technical issues that could impact your site's SEO performance.",
                how: [
                    "Regular audits help identify and fix issues that could impact SEO performance.",
                ],
                outcome: "Keeping your site technically sound ensures sustained SEO performance and visibility."
            },

            {
                letter: "H",
                heading: "Harness Advanced Technologies",
                matters: "Leveraging cutting-edge web technologies to boost site functionality, enhance user engagement, and support SEO efforts.",
                how: [
                    "Using the latest web technologies can improve functionality and SEO.",
                ],
                outcome: "Advanced technologies enhance user experience and SEO through better performance and innovative features."
            },




        ]
    },

    platformSection: {
        heading: "We Optimize Technical SEO Across Diverse Platforms",
        para: "Our SEO experts specialize in enhancing technical SEO elements to boost your website’s architecture, security, and performance across all major web platforms. Whether you manage a small business site or an extensive enterprise system, we customize technical SEO strategies to ensure peak performance and compliance.",

        platforms: [
            {
                heading: "Popular Platforms", 
                items: [
                    { itemName: "WordPress ", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s" },
                    { itemName: "Restaurants and Cafes", itemImg : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png"},

                    { itemName: "Drupal", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s"},

                    { itemName: "Joomla", itemImg : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/magento-icon.png"},
                ],
                
            },

            {
                heading: "Enterprise-Level Solutions", items: [
                    { itemName: "Magento", itemImg : "https://w7.pngwing.com/pngs/425/614/png-transparent-netsuite-hd-logo-thumbnail.png"},
                    { itemName: "Salesforce Commerce Cloud", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqJ70oLX1StlSR697nOOOojwrE8gmDqMncg&s"},
                    { itemName: "SAP Commerce Cloud", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJjPCE3EsXWL3NLTmJaO6KkTVTN7df-lOQ&s"},
                ],
            },

            {
                heading: "Custom CMS and Frameworks Optimization", items: [
                    { itemName: "Laravel", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "Symfony", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Django", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ChnjmwSlQ7zDVIGkGI38zqlZFrfrLC8V8g&s"},
                ],
            },
            {
                heading: "Specialized Technologies for Modern Web Platforms", items: [
                    { itemName: "React", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "Vue Js", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Angular:", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ChnjmwSlQ7zDVIGkGI38zqlZFrfrLC8V8g&s"},
                ],
            },

        ]
    },

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real </span> Growth with Technical SEO",
            para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Site Speed Enhancement", challenge: "Improve website speed to reduce bounce rates and enhance SEO rankings.", approaches: [
                    "Implement advanced caching mechanisms.",
                    "Optimize images and compress content.",
                    "Minimize JavaScript and CSS files.",

                ], increase: 35, increaseIn: "Decrease in page load times, leading to improved user experience and higher rankings."
            },
            {
                header: "Secure Architecture Implementation", challenge: "Strengthen website security to protect data and improve trust signals for search engines.", approaches: [
                    "Deploy HTTPS across the site.",
                    "Implement strict security headers and Content Security Policy (CSP).",
                    "Conduct regular security audits and updates.",

                ], increase: 50, increaseIn: "Reduction in security vulnerabilities, increasing search rankings and user trust."
            },
            {
                header: "Mobile Optimization Strategy", challenge: "Ensure websites are optimized for mobile-first indexing to enhance mobile search rankings.", 
                approaches: [
                    "Design fully responsive layouts for different screen sizes.",
                    "Optimize for touch interactions and fast-loading experiences.",
                    "Accelerate mobile page speeds using AMP (Accelerated Mobile Pages).",

                ], increase: 45, increaseIn: "Increase in mobile search rankings, improving engagement and conversion rates."
            },



        ],
    },

    pricingSection: {
        heading: "Transparent Pricing for Technical SEO",
        para: "Discover our clear and flexible Technical SEO pricing plans designed to grow with your local business. From boosting site traffic to enhancing service and product visibility in your community, our plans are crafted to provide tangible results and help you dominate your local market.",

        pricingCards: [
            {
                header: "Basic Plan",                //<strong>
                price: "$1,500/month",
                fitFor: "Startups and small businesses needing foundational technical SEO improvements.",
                youGet: [
                    "Site speed optimization (basic caching & image compression)",
                    "Mobile-friendliness audit and fixes",
                    "SSL & security implementation",
                    "XML sitemap creation and submission",
                    "Basic crawlability & indexing improvements",
                    "Google Search Console & Analytics setup",
                    "Monthly technical SEO reports",
                ],
            },
            {
                header: "Advanced Plan",
                price: "$4,000/month",
                fitFor: "Growing businesses looking to enhance their website’s technical performance and rankings.",
                youGet: [
                    "All features in the Basic Plan",
                    "Advanced site speed optimization (lazy loading, code minification)",
                    "Mobile-first optimization and Core Web Vitals improvements",
                    "Structured data (Schema Markup) implementation",
                    "Fixing broken links and crawl errors",
                    "Advanced security hardening & HTTPS enforcement",
                    "Weekly technical SEO audits and monitoring",
                ],
            },
            {
                header: "Pro Plan",
                price: "$7,500/month",
                fitFor: "Large enterprises and e-commerce sites requiring extensive SEO improvements.",
                youGet: [
                    "All features in the Advanced Plan",
                    "Enterprise-level speed optimization (CDN & server tuning)",
                    "Dynamic rendering and JavaScript SEO for SPAs",
                    "Advanced structured data for e-commerce (product, reviews, FAQs)",
                    "Log file analysis to optimize crawl budget",
                    "API integrations for automated technical audits",
                    "Bi-weekly SEO maintenance and real-time monitoring",
                ],
            },
            {
                header: "Enterprise Plan",
                price: "$12,000/month",
                fitFor: "High-traffic websites, global enterprises, and large e-commerce platforms.",
                youGet: [
                    "All features in the Pro Plan",
                    "AI-driven SEO audits & automation for issue resolution",
                    "AI-powered UX optimization for search engine performance",
                    "Custom scripts for auto-fixing common technical issue",
                    "Real-time crawl & indexing issue detection",
                    "Full-stack integration with DevOps teams",
                    "24/7 technical SEO support and consultancy",
                ],
            },
        ],
    },

    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },

}

export const ContentSEOData = {
    
   
    heroSection: {
        //Hero section data start
        heading: "Boost Your Store’s Reach with Content SEO",
        para: "Optimize your store with advanced Content SEO strategies to improve search rankings and drive organic traffic. Our experts refine product pages, blogs, and category descriptions with targeted keywords to enhance visibility and engagement. We create content that resonates with both search engines and customers, delivering measurable results.",
        img: heroImg,
        bg: BG,
    },
    // Hero section data ends
    customPricing: {

        heading: 'Content SEO Services Custom Pricing Tailored to Your Business Goals',

        mainHeading: "Custom Content SEO Package",

        overview: "Designed for businesses looking to boost organic traffic and enhance content visibility, this package focuses on strategic content optimization, keyword integration, and engagement-driven writing to improve search rankings and user experience.",

        benifits: [
            { heading: "Higher Organic Traffic :  ", description: "Content optimized for search engines to attract relevant visitors" },
            { heading: "Better Engagement : ", description: " Compelling and informative content keeps users on your site longer. " },
            { heading: "Increased Conversions : ", description: "SEO-optimized copy that converts visitors into customers." },

        ],

        keyFeatures: [
            { heading: "SEO-Optimized Blog Content ", description: "Engaging, high-ranking articles tailored for your audience" },
            { heading: "Product Page Optimization ", description: " Keyword-rich product descriptions for better discoverability. " },
            { heading: "Category Page SEO ", description: "Structuring category content for better rankings and navigation." },
            { heading: "Meta Tag & Header Optimization", description: "Improved titles, meta descriptions, and headers for search visibility." },
            { heading: "Internal Linking Strategy", description: "Enhancing navigation and link equity for SEO benefits." },
            { heading: "Content Performance Tracking ", description: "Regular audits to measure and refine content effectiveness" },
            { heading: "Competitor Content Research ", description: "Gaining insights to outperform competitors in search rankings. " },
            { heading: "Schema Markup for Rich Snippets", description: "Enhancing content visibility in SERPs with structured data." },

        ],

        startingAt: "$4200/Month",
    },
    //Booster Section start here 
    boostSection: {
        heading: "Boost Your Local Visibility with Services. <span class= 'text-[#207DE9]'> Specialized <br/> Local SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of Local SEO, such as enhancing local search visibility, optimizing for geo-specific keywords, and improving local user engagement to drive foot traffic and local conversions.",

        boostContent: [
            {name: "SEO-Optimized Blog Content",
                whyMatters: "High-quality blog content plays a crucial role in driving organic traffic, establishing authority, and engaging audiences with valuable insights. Well-researched blog posts not only improve search rankings but also keep visitors on your site longer, signaling relevance to search engines.",

                includes: [
                    "Keyword-driven blog topics aligned with user intent.",
                    "Engaging and informative content optimized for search engines.",
                    "SEO-friendly formatting, including headers, bullet points, and structured data.",
                ],
                benifit: "Boosts organic traffic, strengthens your brand's credibility, and creates a sustainable source of inbound traffic that converts visitors into loyal customers.",

            },

            {name: "Product & Category Page Optimization",
                whyMatters: "Optimized product and category pages help search engines understand your product offerings better, increasing their chances of ranking higher for buyer-intent keywords. A well-structured product page with SEO-rich descriptions, high-quality images, and keyword placement enhances user experience and encourages faster purchasing decisions.",

                includes: [
                    "SEO-friendly product titles, descriptions, and bullet points.",
                    "Optimized category structures with strategic keyword placement.",
                    "High-quality images with alt text for better rankings.",

                ],
                benifit: "Increases visibility in search results, attracts high-intent shoppers, and boosts conversions by making it easier for users to find and buy your products.",

            },

            {name: "Content Structuring for Readability & Engagement",
                whyMatters: "Content that is structured logically and easy to read helps users navigate effortlessly and consume information faster. This improves user experience, reduces bounce rates, and encourages deeper exploration of your website. Additionally, well-structured content helps search engines better understand the hierarchy of your pages.",

                includes: [
                    "Short paragraphs, bullet points, and easy-to-read formatting.",
                    "Logical content flow to enhance user navigation.",
                    "Readability enhancements for improved retention rates.",
                ],
                benifit: "Enhances user engagement, keeps visitors on your site longer, and improves the chances of conversion by making information more accessible.",

            },

            {name: "Keyword-Rich Metadata & Descriptions",
                whyMatters: "Metadata plays a crucial role in how users and search engines perceive your content. Well- optimized title tags and meta descriptions improve click-through rates (CTR), making your pages more appealing in search results. When users see clear, engaging, and keyword-optimized metadata, they are more likely to click and explore further.",

                includes: [
                    "SEO-optimized title tags and meta descriptions.",
                    "Compelling call-to-action (CTA) in meta descriptions",
                    "Keyword placement for improved search visibility.",
                ],
                benifit: "Increases CTR, enhances search visibility, and drives highly targeted traffic that is more likely to convert into customers.",

            },

            {name: "Competitor Content Analysis",
                whyMatters: "Understanding what works for your top competitors allows you to refine your strategy and gain an edge in search rankings. By identifying content gaps, keyword opportunities, and high-performing strategies, you can develop a content plan that outperforms competitors while maintaining originality.",

                includes: [
                    "Deep analysis of top-ranking competitor pages.",
                    "Identifying keyword and content gaps for improvement.",
                    "Reverse-engineering high-performing content strategies.",
                ],
                benifit: "Gives a competitive edge, helps refine content strategies, and ensures your content ranks higher and attracts a larger audience.",

            },

            {name: "Multimedia Optimization for SEO",
                whyMatters: "Modern SEO is not just about text-it's about engaging visual and multimedia content that keeps visitors interested. Optimizing images and videos helps improve load times, enhances user experience, and provides additional ranking opportunities through Google Image and Video search.",
                includes: [
                    "Optimizing images with SEO-friendly alt text and compression.",
                    "Embedding videos with schema markup for better visibility.",
                    "Ensuring fast-loading multimedia content.",
                ],
                benifit: "Enhances user engagement, improves page load speed, and boosts rankings by making content visually appealing and accessible.",

            },

            {name: "Conversion-Focused Copywriting",
                whyMatters: "SEO isn't just about rankings; it's about turning visitors into customers. Persuasive, action-driven copywriting ensures that your content is not only search-friendly but also designed to generate leads and sales. Well-crafted copy enhances user experience and builds trust.",
                includes: [
                    "Action-oriented headlines and persuasive language.",
                    "Strategic placement of keywords without overstuffing.",
                    "Strong CTAs to encourage user action.",
                ],
                benifit: "Increases engagement, builds brand credibility, and drives higher conversion rates by persuading users to take action.",

            },




        ],
    },

    tailoredSection: {
        heading: "Tailored <span class= 'text-[#207DE9]'> Specialized Content SEO </span> For Every Type of  Business ",
        para: "In a competitive digital landscape, local businesses need more than just an online presence—they need to dominate their local search results. Our Local SEO services are custom-built for your unique business needs, ensuring you reach the right customers in your community. From enhancing your visibility in local searches to increasing foot traffic, our strategies are designed to help you succeed in your local market.",

        tailoredItems: [
            {heading: "Drive More Traffic with SEO-Optimized Content",
                para: "High-quality, search-engine-friendly content is the foundation of online success. Our Content SEO strategies ensure your web pages, blog posts, and landing pages are optimized with targeted keywords, engaging writing, and structured formatting to improve rankings and user engagement.",
                offers: [
                    "<strong>Keyword-Optimized Content Strategy: </strong>Create data-driven, keyword-optimized content.",

                    "<strong>Structured Formatting for Readability: </strong>Implement structured formatting (H1, H2, H3, etc.) for readability.",

                    "<strong>Meta & Tags for Better Indexing: </strong>Use meta descriptions, title tags, and alt texts for better indexing.",

                    "<strong>SEO-Friendly Content for Higher Traffic: </strong>Boost your traffic with high-quality, SEO-friendly content that converts!",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },

            {heading: "Maximize Engagement with Audience-Centric Content",
                para: "Great content doesn't just rank; it engages and converts visitors into customers. We create compelling, user-focused content that speaks directly to your audience while meeting Google's latest ranking factors.",
                offers: [
                    "<strong>Solution-Driven Content for Audience Needs: </strong>Research audience pain points and create valuable, solution-driven content.",

                    "<strong>Engaging Tone & Readable Structure </strong>Optimize tone, readability, and content structure for better engagement.",

                    "<strong>Balanced Content for All Preferences: </strong>Ensure long-form and short-form content balance for diverse audience preferences.",

                    "<strong>Deep Audience Connection Through Strategy: </strong>Connect with your audience like never be with our content strategy!",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },

            {heading: "Build Authority with Strategic Content Marketing",
                para: "Search engines prioritize websites with high-authority, in-depth content. We craft well-researched, expert-level blog posts, guides, and pillar content that position your brand as an industry leader while driving organic traffic and backlinks.",
                offers: [
                    "<strong>Evergreen Content for Long-Term Success: </strong>Develop evergreen, research-backed content for long-term rankings.",

                    "<strong>Credibility Through Guest Blogging: </strong>Leverage guest blogging and influencer collaborations to boost credibility.",

                    "<strong>Optimize for Snippets & Rich Results: </strong>Optimize for Featured Snippets and rich results on Google.",

                    "<strong>SEO-Friendly Content for Higher Traffic: </strong>Strengthen your online authority with content that stands out.",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },

            {heading: "Convert Visitors into Customers with High-Intent SEO Copywriting",
                para: "Optimized content isn't just about rankings—it's about conversions. We create persuasive, high- intent content that guides visitors through the buyer journey, from awareness to decision-making, leading to higher sales and engagement.",
                offers: [
                    "<strong>Action-Driven Content with Clear CTAs: </strong>Write action-driven content with clear CTAs for conversion.",

                    "<strong>SEO & Sales-Optimized Copy: </strong>Optimize product descriptions, landing pages, and sales copy for SEO & sales. ",

                    "<strong>A/B Testing for Better Engagement: </strong>Implement A/B testing to refine messaging and increase engagement.",

                    "<strong>Convert Visitors into Loyal Customers: </strong>W Turn visitors into loyal customers with perasive, SEO-optimized content!",

                ],
                
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
        ]

    },

    //PowerBy starts here 
    powerBySection: {
        heading: "Content SEO <span class= 'text-[#207DE9]'> Data-Driven Insights  </span> for Maximum Visibility",
        para: "Harness the power of high-quality content to elevate your website's search rankings, attract the right audience, and drive more engagement.",


        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Optimized content helps search engines better understand your pages, ranking them higher for relevant keywords and bringing in a steady stream of organic visitors.", increasePercentage: 250, explanation: "A well-structured content strategy with keyword-focused blogs, product pages, and category descriptions ensures that your brand gets noticed by search engines and potential customers alike." },

            { benefit: "Improvement in Engagement & Dwell Time", benefitText: "Engaging and informative content keeps visitors on your website longer, reducing bounce rates and increasing conversions.", increasePercentage: 120, explanation: "Crafting compelling, reader-friendly content ensures users stay on your site, interact with your brand, and take action-whether it's making a purchase, signing up, or engaging with your business." },

            { benefit: "ROI from Local SEO Investments", benefitText: "Content marketing is one of the highest ROI strategies, generating long-term results without ongoing ad spend.", increasePercentage: 350, explanation: "Consistently publishing high-quality, SEO-optimized content drives sustainable growth, improves rankings, and establishes your brand as an industry authority." },

        ],
    },
    //PowerBy ends here 



    approachSection: {
        heading: "Our Proven <span class= 'text-[#207DE9]'> Content SEO </span> Strategy ",
        para: "We help you develop and implement a powerful Content SEO plan that enhances visibility, drives engagement, and delivers measurable results.",

        approaches: [
            {
                heading: "Comprehensive Keyword Research",
                detail: "We identify the most relevant, high-intent keywords tailored to your target audience, ensuring your content ranks for the right search terms.",
                icon: <FaSearch />,
              },
              {
                heading: "Content Optimization for SEO",
                detail: "We craft SEO-optimized content that aligns with search engine algorithms and user intent, boosting visibility and increasing organic traffic.",
                icon: <FaFileAlt />,
              },
              {
                heading: "Quality Backlink Acquisition",
                detail: "Building high-authority backlinks from trusted sources enhances your content's credibility and improves its search engine rankings.",
                icon: <FaLink />,
              },
              {
                heading: "Mobile-Optimized Content Strategy",
                detail: "We ensure your content is fully optimized for mobile, making it accessible, responsive, and engaging for mobile users—critical for search rankings.",
                icon: <FaMobileAlt />,
              },
              {
                heading: "Content Performance Analysis",
                detail: "We analyze and refine your content strategy based on performance insights, ensuring consistent growth and improved search rankings.",
                icon: <FaChartLine />,
              },

        ],
    },


    pathToSuccess: {
        heading: "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R</span>.<span class= 'text-[#207DE9]'>O</span>.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to Content SEO Success",

        paths: [
            {
                letter: "G", heading: "Generate Engaging Content", matters: "Without high-quality content, your website won't attract or retain visitors. Content SEO ensures your pages provide valuable, engaging, and optimized content that drives organic traffic.", 
                how: [
                    "Helps rank for relevant search queries by using targeted keywords.", 
                    "Enhances readability and engagement, reducing bounce rates.", 
                    "Establishes authority in your niche through well-structured content."],
                outcome: "More engaged visitors who find value in your content and take action."
            },
            {
                letter: "R", heading: "Refine Keyword Strategy", matters: "A strong content SEO strategy starts with identifying and using the right keywords. By refining keyword selection, you ensure your content aligns with what your audience is searching for.", 
                how: [
                    "Boosts search engine rankings for specific queries.", 
                    "Increases chances of reaching potential customers.", 
                    "Helps optimize different content types, from blogs to product pages."],
                outcome: "Higher visibility in search engines and more organic traffic."
            },

            {
                letter: "O",
                heading: "Optimize Content Structure",
                matters: "SEO-friendly content isn't just about keywords it's about structure, too. Proper headings, meta tags, and internal linking enhance search rankings and user experience.",
                how: [
                    "Helps search engines crawl and index your pages more effectively.",
                    "Improves readability, making it easier for users to navigate.",
                    "Encourages better on-page engagement with strategic CTAs."],
                outcome: "Better rankings and increased dwell time on your pages."
            },

            {
                letter: "W",
                heading: "Write for User Intent",
                matters: "Content that satisfies user intent is key to driving conversions. Writing content that directly addresses audience needs improves performance in search engines.",
                how: [
                    "Aligns with different user search intents (informational, transactional, etc.).",
                    "Encourages longer on-page time and more interactions.",
                    "Builds trust with potential customers."],
                outcome: "More qualified leads and better conversion rates."
            },

            {
                letter: "T",
                heading: "Tailor for Mobile & Voice Search",
                matters: "As mobile and voice search continue to rise, optimizing content for different devices and search methods is crucial.",
                how: [
                    "Voice search-friendly content helps capture featured snippets.",
                    "Mobile optimization ensures smooth browsing and engagement.",
                    "Short, direct answers improve search rankings."],
                outcome: "Better mobile experience and higher visibility in voice searches."
            },

            {
                letter: "H",
                heading: "Harness Data for Continuous Improvement",
                matters: "Content SEO isn't a one-time effort-it's an ongoing process. Using analytics and performance tracking helps refine your strategy over time.",
                how: [
                    "Allows data-driven improvements to content strategy.",
                    "Identifies what's working and what needs optimization.",
                    "Ensures sustained content performance over time."],
                outcome: "Consistent organic growth and better content ROI."
            },




        ]
    },

    
    platformSection: {
        heading: "We Optimize Content SEO Across These Platforms",
        para: "Our content SEO experts work across various platforms to enhance visibility and engagement. Whether you run a blog, an eCommerce store, or a corporate website, we tailor our strategies to maximize your content's reach.",

        platforms: [
            {
                heading: "Popular Platforms for Content Optimization", 
                items: [
                    { itemName: "WordPress ", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s" },
                    { itemName: "Shopify", itemImg : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png"},

                    { itemName: "BigCommerce", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s"},

                ],
                
            },

            {
                heading: "Enterprise-Level Content Solutions", items: [
                    { itemName: "HubSpot CMS", itemImg : "https://w7.pngwing.com/pngs/425/614/png-transparent-netsuite-hd-logo-thumbnail.png"},
                    { itemName: "Drupal", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqJ70oLX1StlSR697nOOOojwrE8gmDqMncg&s"},
                    { itemName: "Sitecore ", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJjPCE3EsXWL3NLTmJaO6KkTVTN7df-lOQ&s"},
                ],
            },

            {
                heading: "Content Performance & Analytics Platforms", items: [
                    { itemName: "Google Search Console", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "SEMrush & Ahrefs", itemImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},

                ],
            },

        ]
    },
    
    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth with Content SEO",
        para: "At the heart of our Content SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {header: "Keyword-Driven Content Optimizations", challenge: "Crafting content that aligns with search intent and ranks high in search results.", 
                approaches: [
                    "Perform in-depth keyword research to find high-value terms.",
                    "Optimize content structure with relevant keywords and meta tags.",
                ], increase: 50, increaseIn: "Increase in organic search traffic."
            },
            {header: "Engaging Blog Content Strategy", challenge: "Creating compelling blog content that attracts, retains, and converts audiences.", approaches: [
                    "Develop SEO-friendly blog content based on audience interests.",
                    "Implement content clustering and internal linking for better visibility.",
                ], increase: 65, increaseIn: "Increase in user engagement and timen site."
            },
            {header: "E-commerce Product Content Optimization", 
                challenge: "Enhancing product descriptions and category pages to drive conversions.", approaches: [
                    "Optimize product pages with compelling copy and structured data.",
                    "Implement schema markup to improve search engine visibility.",
                ], increase: 40, increaseIn: "Boost in conversion rates."
            },
        ],
    },

    pricingSection: {
        heading: "Transparent Pricing for Content SEO",
        para: "Discover our clear and flexible Content SEO pricing plans designed to grow with your online business. From boosting site traffic to enhancing service and product visibility in your community, our plans are crafted to provide tangible results.",

        pricingCards: [
            {
                header: "Starter Plan",                //<strong>
                price: "$2,000/month",
                fitFor: "Small businesses & startups looking to build a strong content foundation.",
                youGet: [
                    "Keyword research & topic suggestions (up to 10 keywords)",
                    "4 SEO-optimized blog posts (1,000 words each)",
                    "On-page optimization (meta titles, descriptions, headers) Internal linking strategy",
                    "Monthly performance report & recommendations",
                ],
            },
            {
                header: "Growth Plan",
                price: "$4,500/month",
                fitFor: "Businesses looking to scale their content marketing efforts",
                youGet: [
                    "All features from the Starter Plan",
                    "8 SEO-optimized blog posts (1,500 words each)",
                    "SEO-friendly product descriptions (up to 15 pages) Content calendar planning & publishing",
                    "Advanced internal linking & content silo strategy Competitor content gap analysis",

                ],
            },
            {
                header: "Authority Plan ",
                price: "$7,000/month",
                fitFor: "Large businesses & eCommerce stores focused on industry authority.",
                youGet: [
                    "All features from the Growth Plan",
                    "12 premium blog posts (2,000+ words each) ",
                    "High-quality guest post backlinks (3 per month)",
                    "Video & infographic content optimization",
                    "Conversion-focused landing pages.(up to 5 pages)",
                    "Monthly content performance audits",
                ],
            },
            {
                header: "Elite Plan",
                price: "$12,000/month",
                fitFor: "Enterprises & brands aiming for content dominance",
                youGet: [
                    "All features from the Authority Plan",
                    "20+ SEO-optimized blog posts (3,000+ words each)",
                    " Al-driven content optimization & NLP keyword strategy",
                    "E-book & whitepaper content creation (1 per month)",
                    "Advanced content automation & distribution strategy",
                    "Dedicated content strategist & SEO consul.",
                ],
            },
        ],
    },

    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },
}

export const InternationalSEOData = {
    heroSection: {
        heading: "Unlock Global Success for Your E-commerce Business with Our Advanced International SEO Strategies",
        para: "Expand your brand globally with our proven International SEO strategies. We optimize your online store for diverse regions, languages, and search engines to boost visibility and drive targeted traffic. From tailored keyword research to localized content, we ensure your products get noticed worldwide, increasing sales and global growth.",
        img: heroImg,
        bg: BG,
    },
    customPricing: {
        heading: 'International SEO Services Custom Pricing Tailored to Your Global Business Goals',
    
        mainHeading: "Custom <br/> International SEO <br/> Package",
    
        overview: "Designed for businesses expanding into global markets, this package focuses on multilingual SEO strategies, geo-targeted optimization, and technical implementations to improve international search visibility and user engagement.",
    
        benifits: [
            { heading: "Expanded Global Reach: ", description: "SEO strategies tailored for different countries and languages to attract international audiences." },
            { heading: "Improved Search Visibility: ", description: "Optimized website structure and hreflang implementation for better rankings in multiple regions." },
            { heading: "Higher Conversion Rates: ", description: "Localized content and user experience enhancements to boost engagement and conversions across global markets." },
        ],
    
        keyFeatures: [
            { heading: "Global Keyword Optimization", description: "Multilingual keyword research and localization for high-ranking opportunities." },
            { heading: "Hreflang Implementation", description: "Ensuring correct language and regional targeting for search engines." },
            { heading: "Geo-Targeted Content Strategy", description: "Developing region-specific content to connect with diverse audiences." },
            { heading: "International Technical SEO", description: "Optimizing site architecture, domain structures, and page speed for global users." },
            { heading: "Localized Meta Tags & Headers", description: "Optimized titles, descriptions, and headers for different regions." },
            { heading: "Cross-Border Link Building", description: "Acquiring high-authority backlinks from country-specific sources." },
            { heading: "International Competitor Analysis", description: "Researching global competitors to refine SEO strategies for different markets." },
            { heading: "Structured Data & Schema Markup", description: "Enhancing search presence with region-specific structured data implementation." },
        ],
    
        startingAt: "$5200/Month",
    },
    
    boostSection: {
        heading: "Expand Your Global Reach with <span class='text-[#207DE9]'> Specialized <br/> International SEO </span> Services.",
        para: "Maximize your brand’s visibility in international markets with expert strategies tailored for global search engines. Our services focus on multilingual SEO, geo-targeted optimization, and technical enhancements to ensure seamless user experiences and higher rankings worldwide.",
    
        boostContent: [
            {
                name: "Global Keyword Optimization",
                whyMatters: "Targeting the right keywords across multiple languages and regions ensures that your content reaches the right audience. A localized keyword strategy helps improve search rankings and relevance in different countries.",
                includes: [
                    "Multilingual keyword research aligned with regional search trends.",
                    "Localization and translation of high-impact search terms.",
                    "Strategic keyword placement to enhance global rankings.",
                ],
                benifit: "Increases international visibility, ensures relevance across diverse markets, and improves ranking potential for different languages.",
            },
    
            {
                name: "Hreflang & Geo-Targeting Implementation",
                whyMatters: "Hreflang tags help search engines understand which language version of your site to show in different regions, preventing duplicate content issues and ensuring correct indexing for global audiences.",
                includes: [
                    "Correct hreflang implementation for multilingual and multi-regional targeting.",
                    "Geo-targeted website structuring (subdomains, subdirectories, ccTLDs).",
                    "Optimized sitemaps to guide search engines on language preferences.",
                ],
                benifit: "Enhances search engine understanding of content localization, improves international rankings, and ensures accurate search results for different regions.",
            },
    
            {
                name: "Localized Content Strategy",
                whyMatters: "Engaging and culturally relevant content is crucial for connecting with international audiences. A localized content strategy ensures better engagement and trust in different markets.",
                includes: [
                    "Creation of region-specific content tailored to local audiences.",
                    "SEO-optimized translations and adaptations for cultural relevance.",
                    "Geo-targeted content recommendations for each market.",
                ],
                benifit: "Improves user engagement, increases search rankings in local markets, and enhances credibility with international customers.",
            },
    
            {
                name: "Technical SEO for International Sites",
                whyMatters: "A well-optimized website structure ensures smooth indexing, fast loading times, and high performance across different regions. Proper technical implementation prevents search engine confusion and enhances user experience globally.",
                includes: [
                    "Optimizing international site architecture for fast loading speeds.",
                    "Implementing mobile-friendly designs for global usability.",
                    "Technical audits to detect and resolve international SEO issues.",
                ],
                benifit: "Ensures seamless user experience, boosts global rankings, and prevents indexing issues across multiple regions.",
            },
    
            {
                name: "International Competitor SEO Analysis",
                whyMatters: "Analyzing global competitors provides valuable insights into successful SEO strategies in different regions. This allows businesses to refine their own approach and gain a competitive edge.",
                includes: [
                    "Detailed competitor analysis for global search trends.",
                    "Identifying keyword gaps and ranking opportunities.",
                    "Benchmarking against top international competitors.",
                ],
                benifit: "Helps refine SEO strategy, improves competitive positioning, and maximizes opportunities in international markets.",
            },
    
            {
                name: "Multilingual Backlink Building",
                whyMatters: "High-quality backlinks from region-specific domains improve authority and credibility in global search engines. A localized link-building strategy strengthens rankings in targeted countries.",
                includes: [
                    "Outreach for high-authority backlinks in different languages.",
                    "Guest posting and content collaborations with international partners.",
                    "Building local citations and business listings for geo-targeting.",
                ],
                benifit: "Boosts domain authority, enhances rankings in specific regions, and strengthens international credibility.",
            },
    
            {
                name: "Schema Markup for Global SEO",
                whyMatters: "Structured data helps search engines understand content context, improving visibility in search results. Schema markup enhances rich snippets, boosting click-through rates (CTR) worldwide.",
                includes: [
                    "Implementation of language-specific structured data.",
                    "Rich snippets for product pages, reviews, and FAQs.",
                    "Optimization for Google, Bing, and regional search engines.",
                ],
                benifit: "Increases SERP visibility, improves CTR, and enhances local search presence across multiple markets.",
            },
        ],
    },
    
    tailoredSection: {
        "heading": "Tailored <span class='text-[#207DE9]'> Specialized <br/> International SEO </span> for Every Platform",
        "para": "Every E-commerce platform has unique SEO challenges and opportunities worldwide. Our team provides <strong> customized international SEO strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher globally, drives organic traffic from different regions, and converts visitors into loyal customers.",

        "tailoredItems": [
            {
                "heading": "Shopify International SEO Services",
                "para": "Shopify powers millions of online stores worldwide, but standing out globally requires specific international SEO tactics. Our Shopify SEO strategies are designed to maximize global product visibility, improve regional rankings, and drive more international sales.",
                "offers": [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve global rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent across different regions.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure for international users.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich international results on Google"
                ],
                "chooseUs": "Our global experience with Shopify ensures measurable results, improved search rankings, and higher conversions worldwide.",
                "image": "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {
                "heading": "WooCommerce International SEO Services",
                "para": "WooCommerce offers global flexibility, but optimizing it for international markets requires expertise. Our WooCommerce SEO services help businesses reach customers worldwide by optimizing stores, targeting region-specific keywords, and improving site performance.",
                "offers": [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues for global visibility.",
                    "<strong>Keyword Mapping: </strong>Aligning international keywords to product and category pages for better global targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages optimized for different regions.",
                    "<strong>Performance Enhancements: </strong>Speed optimization, schema markup, and Core Web Vitals fixes for global users."
                ],
                "chooseUs": "We combine WordPress expertise with proven international SEO strategies to deliver higher rankings, better global performance, and increased ROI.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s"
            },
            {
                "heading": "Magento International SEO Services",
                "para": "Magento is a powerhouse for large stores globally, but its complexity creates SEO challenges for international markets. Our Magento SEO services focus on optimizing your store for performance, global search visibility, and scalability.",
                "offers": [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic international keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed for global reach.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings across regions"
                ],
                "chooseUs": "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better in international markets.",
                "image": "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },
            {
                "heading": "BigCommerce International SEO Services",
                "para": "BigCommerce offers robust tools for global e-commerce success, but SEO is key to maximizing its international potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales from across the world.",
                "offers": [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links for international customers.",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs for a global audience.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers globally."
                ],
                "chooseUs": "We leverage BigCommerce's strengths to improve global search visibility, user experience, and conversions.",
                "image": "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },
            {
                "heading": "Wix and Squarespace International SEO Services",
                "para": "Wix and Squarespace make building stores easy, but achieving global SEO success requires expertise. Our international SEO services for Wix and Squarespace focus on regional visibility and user experience.",
                "offers": [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs for international users",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract global organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach international customers in specific regions."
                ],
                "chooseUs": "We help you transform Wix and Squarespace stores into globally SEO-optimized platforms that rank higher and drive sales.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },
            {
                "heading": "Multi-Platform International SEO Consulting",
                "para": "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom international consulting services to streamline your SEO strategies across all systems for better global reach.",
                "offers": [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across multiple platforms to enhance global reach.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently across all platforms for international visibility.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform international e-commerce."
                ],
                "chooseUs": "We ensure seamless international SEO execution across multiple platforms to maximize global growth and ROI.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            }
        ]
    },
    //PowerBy starts here 
    powerBySection: {
        heading: "International SEO <span class='text-[#207DE9]'> Data-Driven Insights </span> for Global Visibility",
        para: "Leverage cutting-edge international SEO strategies to expand your reach, enhance search engine visibility in multiple regions, and attract the right global audience.",

        statistics: [
            {
                benefit: "Increase in Global Search Visibility",
                benefitText: "Optimized multilingual and geo-targeted content helps search engines rank your website for international audiences, driving organic traffic across different regions.",
                increasePercentage: 300,
                explanation: "Implementing country-specific keywords, localized content, and hreflang tags ensures search engines properly index your site, resulting in higher rankings in multiple countries.",
            },

            {
                benefit: "Improvement in International Engagement & Dwell Time",
                benefitText: "Localized and culturally relevant content keeps visitors engaged, reducing bounce rates and increasing conversions from international markets.",
                increasePercentage: 150,
                explanation: "Custom-tailored content strategies for different regions enhance user experience, ensuring visitors find content that resonates with their preferences and needs.",
            },

            {
                benefit: "ROI from Global SEO Investments",
                benefitText: "International SEO provides long-term value, enabling businesses to scale in multiple regions without relying heavily on paid advertising.",
                increasePercentage: 400,
                explanation: "A well-executed global SEO strategy ensures sustainable organic growth, allowing businesses to dominate new markets with region-specific content and technical SEO enhancements.",
            },
        ],
    },
    //PowerBy ends here 

    approachSection: {
        heading: "Our Proven International E-commerce <span class='text-[#207DE9]'>SEO Strategy</span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan tailored to international markets with our e-commerce SEO services.",

        approaches: [
            {
                heading: "Multilingual Keyword Research",
                detail: "Identify high-intent, region-specific keywords in multiple languages to ensure your products appear in search results globally when customers are ready to buy.",
                icon: <FaMagnifyingGlass />
            },
            {
                heading: "Localized Product Page Optimization",
                detail: "Optimize product titles, descriptions, and images with targeted keywords for various markets. This boosts individual product rankings and increases discoverability internationally.",
                icon: <FaCartShopping />
            },
            {
                heading: "Global Backlink Building",
                detail: "Acquire backlinks from high-authority, region-specific websites to improve your store’s credibility. This builds trust with search engines in multiple countries, helping your site rank higher globally.",
                icon: <FaLink />
            },
            {
                heading: "Mobile-First International SEO",
                detail: "Ensure your e-commerce store is optimized for mobile devices worldwide, with fast load times and seamless navigation. Mobile users in different regions contribute significantly to online shopping, and search engines prioritize mobile-friendly sites.",
                icon: <MdOutlineMobileFriendly />
            },
            {
                heading: "International Site Speed Optimization",
                detail: "Improve load times across different regions by compressing images, optimizing scripts, and leveraging browser caching. Faster sites reduce bounce rates and improve global user engagement.",
                icon: <GrOptimize />,
            }
        ]
    },
    
    pathToSuccess: {
        heading: "<span class='text-[#207DE9]'>G</span>.<span class='text-[#207DE9]'>R</span>.<span class='text-[#207DE9]'>O</span>.<span class='text-[#207DE9]'>W</span>.<span class='text-[#207DE9]'>T</span>.<span class='text-[#207DE9]'>H</span> Your International SEO Success",

        paths: [
            {
                letter: "G",
                heading: "Generate International Traffic",
                matters: "To gain visibility in international markets, SEO helps attract targeted traffic from global audiences actively searching for your products.",
                how: [
                    "Conduct international keyword research tailored to various languages and markets.",
                    "Target long-tail keywords that align with regional buyer needs.",
                    "Optimize for international search engines like Baidu, Yandex, and others."
                ],
                outcome: "Increase global reach with more targeted international visitors."
            },
            {
                letter: "R",
                heading: "Rank Higher Globally",
                matters: "Higher rankings in multiple international search engines bring visibility and conversions from global users. Outrank competitors on a global scale.",
                how: [
                    "Optimize your website for hreflang tags to help Google understand language and regional targeting.",
                    "Implement schema markup for products and reviews across multiple countries.",
                    "Focus on building backlinks from high-authority international sites."
                ],
                outcome: "Improved rankings across global search engines, boosting brand visibility worldwide."
            },
            {
                letter: "O",
                heading: "Optimize Global Content",
                matters: "Content optimization needs to cater to the needs of different global markets while remaining culturally relevant.",
                how: [
                    "Write keyword-optimized content that is localized for specific regions.",
                    "Develop content that reflects local languages, cultural preferences, and purchasing habits.",
                    "Optimize multimedia (images, videos) with local context and proper alt text."
                ],
                outcome: "Enhanced user experience for international customers, increasing the chances of ranking well across different markets."
            },
            {
                letter: "W",
                heading: "Win International Clicks",
                matters: "Ranking globally is important, but you need to capture clicks from different regions with compelling, localized listings.",
                how: [
                    "Craft meta titles and descriptions in the language of your target audience to drive clicks.",
                    "Add rich snippets with localized information, like currency, availability, and reviews.",
                    "Use strong calls-to-action that resonate with customers from different countries."
                ],
                outcome: "Increased CTRs globally, driving more targeted traffic from multiple regions."
            },
            {
                letter: "T",
                heading: "Target International Keywords",
                matters: "The right keywords, adapted for different languages and markets, are key to connecting your products to international customers.",
                how: [
                    "Research high-converting, buyer-intent keywords in various languages and regions.",
                    "Implement regional long-tail keywords and local variations of search queries.",
                    "Monitor global keyword performance and refine strategies based on regional results."
                ],
                outcome: "Boost visibility for relevant international search terms."
            },
            {
                letter: "H",
                heading: "Highlight Products for Global Markets",
                matters: "Effectively showcasing products in international markets helps drive higher conversions.",
                how: [
                    "Implement product schema for multiple countries, including region-specific pricing and shipping details.",
                    "Optimize product images and descriptions for regional markets.",
                    "Create internal links between globally relevant product pages."
                ],
                outcome: "Enhanced product visibility in global search results, boosting engagement worldwide."
            }
        ]
    },

    
    platformSection: {
        heading: "We Optimize International SEO Across These Platforms",
        para: "Our international SEO experts optimize websites for global visibility and market expansion. Whether you manage a multinational eCommerce store, a regional business website, or a multilingual blog, we tailor our strategies to ensure success in diverse markets.",
        
        platforms: [
            {
                heading: "Global Website Platforms", 
                items: [
                    { itemName: "WordPress (Multilingual SEO)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s" },
                    { itemName: "Shopify (International Expansion)", itemImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png"},
                    { itemName: "BigCommerce (Cross-border eCommerce)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s"}
                ]
            },
            {
                heading: "Enterprise-Level Global SEO Solutions",
                items: [
                    { itemName: "HubSpot CMS (Localized Marketing)", itemImg: "https://w7.pngwing.com/pngs/425/614/png-transparent-netsuite-hd-logo-thumbnail.png"},
                    { itemName: "Drupal (Multilingual Content)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqJ70oLX1StlSR697nOOOojwrE8gmDqMncg&s"},
                    { itemName: "Sitecore (Enterprise Localization)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJjPCE3EsXWL3NLTmJaO6KkTVTN7df-lOQ&s"}
                ]
            },
            {
                heading: "International SEO & Analytics Tools",
                items: [
                    { itemName: "Google Search Console (Hreflang Optimization)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "SEMrush & Ahrefs (Global Keyword Research)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Google Analytics 4 (International Traffic Insights)", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0D6Wv0qBqOlmB10xAt4m07DPBj2D-zmMI1g&s"}
                ]
            }
        ]
    },

    realResultsSection: {
        heading: "Real Global Results <span class='text-[#207DE9]'>for International SEO Success</span>",
        para: "Our international SEO strategies drive measurable results, from increasing global search visibility to boosting conversions in multiple markets. Whether expanding to new regions or optimizing multilingual content, we help businesses scale internationally with data-driven SEO tactics.",

        results: [
            {
                header: "Multinational SaaS Company",
                challenge: "Expanding into new international markets while maintaining strong search visibility.",
                approaches: [
                    "Hreflang implementation for accurate language and region targeting.",
                    "Country-specific keyword research and localization.",
                    "Building high-authority backlinks from region-specific sources."
                ],
                increase: "400",
                increaseIn: "Organic traffic from new international markets"
            },
            {
                header: "Global E-commerce - Consumer Goods",
                challenge: "Optimizing multilingual content and improving international conversion rates.",
                approaches: [
                    "Localized SEO strategies for different markets.",
                    "Mobile-first and voice search optimization for global users.",
                    "Technical SEO enhancements for better international indexing."
                ],
                increase: "350",
                increaseIn: "Revenue from international markets"
            }
        ]
    },

    pricingSection: {
        heading: "Transparent Pricing for International SEO",
        para: "Explore our tailored International SEO pricing plans designed to expand your global reach. Whether you're entering new markets or optimizing existing ones, our plans ensure visibility, engagement, and conversions worldwide.",
    
        pricingCards: [
            {
                header: "Starter Plan",
                price: "$3,000/month",
                fitFor: "Small businesses & startups looking to establish a global presence.",
                youGet: [
                    "Multilingual keyword research & targeting (up to 10 keywords)",
                    "Geo-targeted on-page SEO (titles, meta, hreflang setup)",
                    "Localized content strategy & optimization (up to 5 pages)",
                    "Basic international site structure recommendations",
                    "Monthly performance report & insights",
                ],
            },
            {
                header: "Growth Plan",
                price: "$6,500/month",
                fitFor: "Businesses expanding into multiple international markets.",
                youGet: [
                    "All features from the Starter Plan",
                    "Advanced hreflang implementation & country-specific URLs",
                    "International competitor keyword gap analysis",
                    "SEO-optimized multilingual blog posts (up to 8 articles/month)",
                    "Localized backlink acquisition strategy",
                    "Monthly performance tracking & market insights",
                ],
            },
            {
                header: "Authority Plan",
                price: "$10,000/month",
                fitFor: "Enterprises and large brands targeting diverse global audiences.",
                youGet: [
                    "All features from the Growth Plan",
                    "Comprehensive international technical SEO audit",
                    "High-authority international link-building strategy",
                    "E-commerce product & category page optimization (up to 20 pages)",
                    "Video & multimedia content optimization for multiple regions",
                    "Conversion-focused multilingual landing pages (up to 10 pages)",
                    "In-depth quarterly international SEO strategy review",
                ],
            },
            {
                header: "Elite Plan",
                price: "$18,000/month",
                fitFor: "Global enterprises aiming for top rankings in multiple countries.",
                youGet: [
                    "All features from the Authority Plan",
                    "AI-powered international content strategy & NLP keyword optimization",
                    "Enterprise-level international domain & subdirectory strategy",
                    "E-book & whitepaper content creation (1 per month) for global markets",
                    "AI-driven translation & localization for all website content",
                    "Advanced automation & multilingual content distribution",
                    "Dedicated international SEO strategist & monthly consultation",
                ],
            },
        ],
    },
    
    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving International Brands</span>",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses across the globe. Read on to discover how our tailored international SEO solutions have transformed their visions into reality!"
    },


}

export const AuditSEOData = {
    heroSection: {
        heading: " SEO Audits for Enhanced Online Sales",
        para: "Boost your online store’s visibility and sales with expert E-commerce SEO audits. We analyze your SEO, optimize listings, and enhance rankings for higher conversions. Unlock your store’s full potential today!",
        img: heroImg,
        bg: BG
    },

    customPricing: {
        heading: "Audit SEO Services Custom Pricing Tailored to Your Website’s Health",
    
        mainHeading: "Custom <br/> Audit SEO <br/> Package",
    
        overview: "Designed for businesses seeking a deep analysis of their website’s SEO health, this package provides a comprehensive audit covering technical SEO, content optimization, and backlink quality. We deliver actionable insights to fix critical issues, improve search rankings, and enhance overall website performance.",
    
        benifits: [
            { heading: "Identify SEO Issues:", description: "Uncover technical and content-related bottlenecks that affect search performance." },
            { heading: "Improve Site Health:", description: "Ensure a well-optimized website with enhanced speed, usability, and indexability." },
            { heading: "Boost Organic Traffic:", description: "Resolve SEO gaps to increase rankings and drive more qualified visitors." }
        ],
    
        keyFeatures: [
            { heading: "Technical SEO Audit", description: "Comprehensive site analysis to detect errors, broken links, and crawl issues." },
            { heading: "On-Page SEO Evaluation", description: "Detailed review of meta tags, content quality, and keyword optimization." },
            { heading: "Website Speed & Performance Analysis", description: "Identify slow-loading elements and improve Core Web Vitals." },
            { heading: "Mobile-Friendliness & UX Audit", description: "Ensure a seamless experience across all devices." },
            { heading: "Backlink Profile Assessment", description: "Analyze link quality, detect toxic backlinks, and provide link-building opportunities." },
            { heading: "Competitor SEO Benchmarking", description: "Compare SEO performance against top competitors to find growth opportunities." },
            { heading: "Indexing & Crawlability Check", description: "Ensure search engines can properly crawl and index your website." },
            { heading: "Comprehensive SEO Report & Action Plan", description: "Detailed findings with prioritized recommendations for SEO improvements." }
        ],
    
        startingAt: "$1500/One-Time"
    },
    

    boostSection: {
        heading: "Optimize Your Website’s Performance with <span class='text-[#207DE9]'> Comprehensive <br/> SEO Audit </span> Services.",
        para: "Identify and fix SEO issues with our in-depth audit services. Our expert analysis covers technical, on-page, and off-page factors to enhance search visibility, boost website performance, and ensure long-term growth in search rankings.",
    
        boostContent: [
            {
                name: "Technical SEO Audit",
                whyMatters: "A deep technical analysis helps uncover issues affecting crawlability, indexing, and overall site performance. Fixing these technical flaws improves rankings and ensures a seamless user experience.",
                includes: [
                    "Comprehensive crawl analysis to detect errors and broken links.",
                    "Assessment of website speed, mobile-friendliness, and Core Web Vitals.",
                    "Indexation and XML sitemap evaluation for better search engine accessibility.",
                ],
                benifit: "Enhances website functionality, ensures smooth indexing, and improves search engine rankings by fixing technical issues.",
            },
    
            {
                name: "On-Page SEO Audit",
                whyMatters: "On-page SEO elements impact how search engines understand and rank your pages. Optimizing metadata, content, and internal linking improves visibility and relevance.",
                includes: [
                    "Detailed review of meta titles, descriptions, headers, and keyword placement.",
                    "Analysis of content quality, readability, and engagement metrics.",
                    "Internal linking structure evaluation to improve website navigation.",
                ],
                benifit: "Optimizes content relevance, improves user engagement, and ensures better rankings with a well-structured page strategy.",
            },
    
            {
                name: "Website Performance & Speed Analysis",
                whyMatters: "Website speed and performance are crucial for user experience and SEO. A slow website leads to higher bounce rates and lower rankings.",
                includes: [
                    "Page speed and Core Web Vitals assessment for better performance.",
                    "Optimization recommendations for faster loading times.",
                    "Mobile responsiveness audit to ensure compatibility across devices.",
                ],
                benifit: "Reduces page load times, enhances user satisfaction, and boosts rankings by improving site speed and performance.",
            },
    
            {
                name: "Backlink & Off-Page SEO Audit",
                whyMatters: "Your backlink profile directly impacts your domain authority and rankings. Analyzing link quality helps identify harmful links and uncover new opportunities for growth.",
                includes: [
                    "Evaluation of backlink quality, toxicity, and spam risks.",
                    "Competitor backlink analysis to identify high-authority link opportunities.",
                    "Recommendations for building strong, relevant backlinks.",
                ],
                benifit: "Improves domain authority, enhances trust signals, and strengthens your website’s credibility in search engines.",
            },
    
            {
                name: "Competitor SEO Audit & Benchmarking",
                whyMatters: "Understanding how competitors perform in search rankings helps identify gaps and opportunities to refine your SEO strategy.",
                includes: [
                    "Keyword and ranking analysis of top competitors.",
                    "Identification of content gaps and untapped SEO opportunities.",
                    "Comparative study of backlink strategies for competitive advantage.",
                ],
                benifit: "Provides valuable insights to outperform competitors and gain a strategic edge in search rankings.",
            },
    
            {
                name: "Content Quality & SEO Audit",
                whyMatters: "Content plays a crucial role in SEO success. Analyzing existing content helps improve engagement, keyword optimization, and search relevance.",
                includes: [
                    "Evaluation of content structure, keyword density, and readability.",
                    "Identifying outdated or underperforming content for updates.",
                    "Recommendations for improving user engagement and conversions.",
                ],
                benifit: "Enhances content effectiveness, improves rankings, and increases user engagement with high-quality, SEO-friendly content.",
            },
    
            {
                name: "Schema Markup & Structured Data Audit",
                whyMatters: "Properly implemented structured data improves how search engines interpret and display content, enhancing visibility in search results.",
                includes: [
                    "Analysis of existing schema markup for errors or missing elements.",
                    "Implementation recommendations for rich snippets and enhanced SERP results.",
                    "Ensuring compatibility with Google, Bing, and other search engines.",
                ],
                benifit: "Boosts search appearance, increases click-through rates, and improves search engine understanding of website content.",
            },
        ],
    },
    

    
    tailoredSection: {
        heading: "Tailored <span class='text-[#207DE9]'> Specialized Audit SEO </span> For Every Type of Business",
        para: "A thorough SEO audit is essential for identifying critical issues and optimizing your website's performance. Our Audit SEO services are tailored to your business needs, ensuring that your site remains technically sound, optimized for search engines, and ready for growth.",

        tailoredItems: [
            {
                heading: "Identify & Fix Technical SEO Issues",
                para: "A technical SEO audit helps uncover hidden issues affecting your website’s search visibility. We analyze every aspect of your site’s infrastructure to ensure it’s fully optimized for crawling and indexing.",
                offers: [
                    "<strong>Comprehensive Site Crawl Analysis:</strong> Detect crawl errors, broken links, and indexing issues.",
                    "<strong>Improve Site Speed & Performance:</strong> Identify speed bottlenecks and optimize Core Web Vitals.",
                    "<strong>Mobile Usability Optimization:</strong> Ensure a seamless experience across all devices.",
                    "<strong>Fix Technical Issues for Better Rankings:</strong> Resolve site errors to improve organic search rankings."
                ],
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },

            {
                heading: "Enhance On-Page SEO for Higher Visibility",
                para: "Optimized on-page elements are crucial for better search rankings. Our Audit SEO approach focuses on refining content, meta tags, and internal linking for maximum impact.",
                offers: [
                    "<strong>Meta Tags & Headers Optimization:</strong> Improve title tags, meta descriptions, and header structure.",
                    "<strong>Keyword & Content Relevance Analysis:</strong> Ensure your content is aligned with user search intent.",
                    "<strong>Structured Data & Schema Markup:</strong> Implement schema for better SERP visibility.",
                    "<strong>Boost Search Rankings with On-Page Fixes:</strong> Optimize on-page factors for higher organic traffic."
                ],
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },

            {
                heading: "Strengthen Website Authority with Backlink Analysis",
                para: "Backlinks play a crucial role in search rankings. Our SEO audit evaluates your backlink profile to remove toxic links and strengthen your domain authority.",
                offers: [
                    "<strong>Backlink Quality Assessment:</strong> Identify and remove toxic or spammy links.",
                    "<strong>Authority Building Strategy:</strong> Analyze and improve your link-building efforts.",
                    "<strong>Competitor Backlink Benchmarking:</strong> Compare your profile with top competitors.",
                    "<strong>Strengthen SEO with High-Quality Links:</strong> Improve your site’s authority and trust score."
                ],
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },

            {
                heading: "Ensure Proper Indexing & Crawlability",
                para: "If search engines can’t properly index your website, your rankings will suffer. We analyze indexing issues, robots.txt, sitemaps, and canonical tags to ensure smooth search engine visibility.",
                offers: [
                    "<strong>Google Indexing & Crawlability Check:</strong> Ensure all important pages are properly indexed.",
                    "<strong>Fix Robots.txt & Sitemap Errors:</strong> Optimize robots.txt and XML sitemaps for better crawling.",
                    "<strong>Canonical & Duplicate Content Audit:</strong> Resolve duplicate content issues with proper canonicalization.",
                    "<strong>Ensure Smooth Search Engine Visibility:</strong> Optimize site structure for easy indexing."
                ],
                image: "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            }
        ]
    },

    //PowerBy starts here 
    powerBySection: {
        heading: "Audit SEO <span class='text-[#207DE9]'> Data-Driven Insights </span> for Website Health & Performance",
        para: "Uncover critical SEO issues, enhance website performance, and optimize for higher search rankings with an in-depth Audit SEO approach.",

        statistics: [

            { benefit: "Technical Issues Identified & Fixed", benefitText: "A detailed audit helps detect and resolve site errors, ensuring optimal crawlability and indexability.", increasePercentage: 300, explanation: "By identifying broken links, slow-loading pages, and crawl errors, businesses can significantly improve their search engine visibility and overall site health." },

            { benefit: "Increase in Website Speed & Performance", benefitText: "Optimized site structure and technical fixes lead to faster load times and better user experience.", increasePercentage: 200, explanation: "Addressing speed bottlenecks and enhancing Core Web Vitals improves rankings, reduces bounce rates, and increases user engagement." },

            { benefit: "Improvement in Search Rankings", benefitText: "Fixing on-page and technical SEO issues boosts search engine trust and rankings.", increasePercentage: 180, explanation: "A comprehensive SEO audit ensures that metadata, structured data, and content optimization align with best practices, leading to improved search visibility and organic traffic growth." }

        ]
    },
    //PowerBy ends here 

    approachSection: {
        heading: "Our Proven <span class= 'text-[#207DE9]'> Audit SEO Strategy </span>",
        para: "Discover and fix critical SEO issues with our structured Audit SEO approach. We analyze every aspect of your website to enhance search visibility, performance, and user experience.",

        approaches: [
            { heading: "Comprehensive Technical SEO Audit", detail: "Identify technical SEO issues like broken links, crawl errors, and indexing problems to ensure seamless search engine visibility.", icon: <MdBugReport /> },

            { heading: "Website Speed & Performance Optimization", detail: "Analyze Core Web Vitals, compress images, and optimize scripts to enhance page load speed and user experience.", icon: <AiOutlineDashboard /> },

            { heading: "Mobile Usability & Responsiveness Analysis", detail: "Ensure a mobile-friendly experience with responsive design, fast-loading pages, and seamless navigation.", icon: <MdOutlineMobileFriendly /> },

            { heading: "On-Page SEO & Content Audit", detail: "Review meta tags, header structures, keyword optimization, and internal linking for improved search rankings.", icon: <FaFileAlt /> },

            { heading: "Backlink Profile & Toxic Link Removal", detail: "Analyze backlink quality, remove harmful links, and develop an authority-building link strategy.", icon: <FaLinkSlash /> },

            { heading: "Indexing & Crawlability Assessment", detail: "Ensure proper indexing with optimized robots.txt, XML sitemaps, and canonical tags to prevent duplicate content.", icon: <RiSearchEyeLine /> }
        ]
    },

    pathToSuccess: {
        heading: "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R</span>.<span class= 'text-[#207DE9]'>O</span>.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to Audit SEO Success",

        paths: [
            {
                letter: "G", heading: "Gather Critical SEO Insights", matters: "A successful SEO audit starts with gathering data on technical performance, content gaps, and backlink quality. Understanding where your site stands is the first step to improvement.", 
                how: [
                    "Conduct a full website crawl to identify technical issues.", 
                    "Analyze search visibility, keyword performance, and user experience.", 
                    "Assess backlink profile for toxic or low-quality links."],
                outcome: "A clear roadmap for fixing SEO issues and improving search rankings."
            },
            {
                letter: "R", heading: "Resolve Technical SEO Errors", matters: "Technical SEO issues can prevent search engines from properly indexing and ranking your site. Fixing these issues ensures that your website is optimized for search visibility.", 
                how: [
                    "Identify and fix broken links, redirect errors, and duplicate content.", 
                    "Optimize robots.txt and XML sitemaps for better indexing.", 
                    "Improve website speed and Core Web Vitals for better performance."],
                outcome: "A technically sound website that is easy for search engines to crawl and rank."
            },

            {
                letter: "O",
                heading: "Optimize On-Page Elements",
                matters: "SEO isn’t just about fixing errors; it’s about making content work better. Optimizing meta tags, headings, and keyword usage ensures pages perform well in search results.",
                how: [
                    "Update meta tags, headers, and internal linking for better readability.",
                    "Ensure keyword relevance across title tags, descriptions, and content.",
                    "Implement structured data (schema markup) for enhanced SERP visibility."],
                outcome: "Improved rankings and higher organic traffic from well-optimized pages."
            },

            {
                letter: "W",
                heading: "Work on Mobile & User Experience",
                matters: "With mobile-first indexing, optimizing for mobile and user experience is essential. A slow, unresponsive website can impact rankings and conversions.",
                how: [
                    "Ensure full mobile responsiveness for all devices.",
                    "Optimize page load speed by compressing images and reducing server response time.",
                    "Improve navigation and UX design for better user engagement."],
                outcome: "Higher mobile search rankings and reduced bounce rates."
            },

            {
                letter: "T",
                heading: "Track Indexing & Crawlability",
                matters: "If search engines can’t index your pages properly, they won’t rank. Tracking indexing and crawlability ensures all important pages are discoverable.",
                how: [
                    "Check Google Search Console for indexing errors and crawl issues.",
                    "Fix canonicalization errors to avoid duplicate content problems.",
                    "Ensure hreflang tags are correctly set up for multilingual SEO (if applicable)."],
                outcome: "Improved discoverability and accurate indexing of all key pages."
            },

            {
                letter: "H",
                heading: "Harness Data for Continuous Improvements",
                matters: "SEO auditing isn’t a one-time task. Regular tracking and analysis help maintain long-term search visibility and website performance.",
                how: [
                    "Use analytics tools to monitor rankings, traffic, and user behavior.",
                    "Identify new technical issues and fix them before they impact rankings.",
                    "Refine and update SEO strategies based on performance data."],
                outcome: "Consistent organic growth and a well-maintained, SEO-friendly website."
            }
        ]
    },

    platformSection: {
        heading: "We Conduct <span class= 'text-[#207DE9]'> Audit SEO </span> Across These Platforms",
        para: "Our Audit SEO experts analyze websites on various platforms to uncover technical issues, improve search visibility, and enhance overall website performance. Whether you operate a corporate site, an eCommerce store, or an enterprise platform, our audit strategies ensure peak optimization.",

        platforms: [
            {
                heading: "Popular Platforms for SEO Audits", 
                items: [
                    { itemName: "WordPress", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s" },
                    { itemName: "Shopify", itemImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png"},
                    { itemName: "BigCommerce", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s"}
                ]
            },

            {
                heading: "Enterprise-Level SEO Audit Solutions", 
                items: [
                    { itemName: "HubSpot CMS", itemImg: "https://w7.pngwing.com/pngs/425/614/png-transparent-netsuite-hd-logo-thumbnail.png"},
                    { itemName: "Drupal", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqJ70oLX1StlSR697nOOOojwrE8gmDqMncg&s"},
                    { itemName: "Sitecore", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJjPCE3EsXWL3NLTmJaO6KkTVTN7df-lOQ&s"}
                ]
            },

            {
                heading: "SEO Audit & Performance Tools", 
                items: [
                    { itemName: "Google Search Console", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s"},
                    { itemName: "SEMrush & Ahrefs", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s"},
                    { itemName: "Google PageSpeed Insights", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAX9uY0DO3cT65m64Usv7XX0-VX0v_7Ko1PA&s"}
                ]
            }
        ]
    },

    realResultsSection: {
        heading: "Real Results <span class='text-[#207DE9]'>for Real SEO Audits</span> Success",
        para: "At the heart of our SEO audit strategy lies a commitment to delivering measurable outcomes. From identifying website issues to fixing technical errors, we’ve helped countless businesses improve their SEO performance. Our tailored audit approach ensures that every technical issue, on-page optimization, and content strategy drives real results—helping your website rank higher and perform better.",

        results: [
            {
                header: "Website SEO - Technical Optimization",
                challenge: "We will uncover and address technical SEO issues to improve the website's health and performance.",
                approaches: [
                    "Technical SEO audit for site speed improvements",
                    "Fixing crawlability issues and improving indexation",
                    "Mobile optimization and responsive design improvements"
                ],
                increase: "50%",
                increaseIn: "Growth in site crawlability and page speed"
            },
            {
                header: "E-commerce SEO - User Experience",
                challenge: "Optimizing the user experience by improving navigation and reducing bounce rates.",
                approaches: [
                    "Website design improvements for better UX",
                    "Streamlined navigation and product page optimization",
                    "Content optimization based on user intent"
                ],
                increase: "35%",
                increaseIn: "Improvement in user engagement and page interaction"
            },
            {
                header: "SEO Audit - Keyword Strategy",
                challenge: "Identifying missed keyword opportunities to enhance visibility on search engines.",
                approaches: [
                    "Comprehensive keyword research and strategy development",
                    "Keyword mapping to relevant landing pages",
                    "Optimizing underperforming pages with target keywords"
                ],
                increase: "40%",
                increaseIn: "Increase in keyword rankings and organic traffic"
            },
            {
                header: "SEO Audit - Backlink Strategy",
                challenge: "Building high-quality backlinks to enhance domain authority and increase traffic.",
                approaches: [
                    "Conducting backlink audit to remove toxic links",
                    "Outreach campaigns for link building",
                    "Focusing on high-authority backlinks"
                ],
                increase: "30%",
                increaseIn: "Growth in organic backlinks and domain authority"
            }
        ]
    },

    pricingSection: {
        heading: "Transparent <span class= 'text-[#207DE9]'>  Pricing </span>  for Audit SEO",
        para: "Our Audit SEO pricing plans are designed to identify and fix critical SEO issues, ensuring your website operates at peak performance. Whether you're a small business or an enterprise, our plans provide detailed analysis and actionable recommendations.",
    
        pricingCards: [
            {
                header: "Basic Audit Plan",
                price: "$1,500/one-time",
                fitFor: "Small businesses & startups looking for an in-depth SEO health check.",
                youGet: [
                    "Comprehensive technical SEO audit",
                    "On-page SEO analysis (meta tags, headings, keyword usage)",
                    "Website speed & Core Web Vitals assessment",
                    "Basic backlink analysis & toxic link detection",
                    "Detailed audit report with recommendations"
                ]
            },
            {
                header: "Advanced Audit Plan",
                price: "$3,500/one-time",
                fitFor: "Growing businesses needing a deeper audit with actionable fixes.",
                youGet: [
                    "All features from the Basic Audit Plan",
                    "Mobile-friendliness & user experience audit",
                    "Internal linking structure & content optimization insights",
                    "Schema markup & structured data analysis",
                    "Competitor benchmarking & SEO strategy recommendations"
                ]
            },
            {
                header: "Professional Audit Plan",
                price: "$6,000/one-time",
                fitFor: "Enterprises & large businesses requiring a full-scale SEO audit.",
                youGet: [
                    "All features from the Advanced Audit Plan",
                    "Comprehensive backlink profile audit & disavow strategy",
                    "Indexing & crawlability assessment",
                    "Hreflang & multilingual SEO evaluation",
                    "Monthly follow-up audit report & progress tracking"
                ]
            },
            {
                header: "Enterprise SEO Audit Plan",
                price: "$10,000/one-time",
                fitFor: "Large-scale enterprises & eCommerce stores requiring continuous optimization.",
                youGet: [
                    "All features from the Professional Audit Plan",
                    "AI-driven audit insights & NLP keyword analysis",
                    "Conversion rate optimization (CRO) audit",
                    "E-commerce SEO analysis & structured data improvements",
                    "Ongoing support & consulting from an SEO strategist"
                ]
            }
        ]
    },

    reviewsSection: {
        heading: "Join Our Community of <span class='text-[#207CE7]'>Successful Businesses with Audit SEO</span>",
        para: "Every SEO audit we conduct is aimed at uncovering critical issues and providing actionable insights to boost search visibility, site performance, and user experience. Our clients’ testimonials showcase the real impact our audit strategies have had on their digital success. Read their stories and see how our Audit SEO services have transformed their websites!"
    }
    

}

export const VideoSEOData = {
    heroSection: {
        heading: "Video SEO for Enhanced Online Visibility",
        para: "Boost your video visibility and engagement with expert Video SEO strategies. We optimize rankings, enhance user experience, and drive targeted views that convert. Turn your videos into powerful marketing tools!",
        img: heroImg,
        bg: BG
    },

    customPricing: {
        heading: "Video SEO Services Custom Pricing Tailored to Your Content’s Success",
        
        mainHeading: "Custom <br/> Video SEO <br/> Package",
        
        overview: "Designed for businesses and content creators looking to maximize their video reach, this package provides a deep analysis of video optimization strategies, technical enhancements, and audience engagement metrics. We deliver actionable insights to improve video rankings, increase visibility, and drive more engagement across platforms.",
        
        benifits: [
            { heading: "Boost Video Rankings:", description: "Optimize metadata, thumbnails, and descriptions to rank higher in search results." },
            { heading: "Increase Video Engagement:", description: "Enhance user interaction with strategic content structuring and watch-time optimization." },
            { heading: "Expand Audience Reach:", description: "Utilize keyword research and distribution strategies to attract a global audience." }
        ],
        
        keyFeatures: [
            { heading: "Video Platform Optimization", description: "Optimize titles, descriptions, and tags for higher discoverability." },
            { heading: "CTR Enhancement", description: "Design eye-catching thumbnails that improve click-through rates." },
            { heading: "Video Metadata ", description: "Implement structured data to help search engines understand video content." },
            { heading: "Watch-Time Strategies", description: "Optimize video structure to keep viewers engaged longer." },
            { heading: "Competitive Analysis", description: "Identify high-performing keywords and analyze competitor strategies." },
            { heading: "Content Repurposing", description: "Distribute and optimize videos for YouTube, TikTok, Instagram, and more." },
            { heading: "Technical Video SEO Audit", description: "Check video load times, mobile-friendliness, and performance metrics." },
            { heading: "Comprehensive Report ", description: "Detailed insights with an action plan for long-term video growth." }
        ],
        
        startingAt: "$1200/One-Time"
    },

    

    boostSection: {
        heading: "Optimize Your Video’s Visibility with <span class='text-[#207DE9]'> Comprehensive <br/> Video SEO </span> Services.",
        para: "Maximize your video content’s reach with our in-depth Video SEO services. Our expert analysis covers metadata optimization, audience engagement strategies, and platform-specific enhancements to improve search rankings, watch time, and overall performance.",
    
        boostContent: [
            {
                name: "Video Metadata Optimization",
                whyMatters: "Well-optimized titles, descriptions, and tags help search engines and video platforms understand and rank your videos effectively.",
                includes: [
                    "Keyword-rich title and description optimization.",
                    "Strategic use of video tags and hashtags for discoverability.",
                    "Custom video thumbnails designed for higher click-through rates."
                ],
                benifit: "Improves search rankings, enhances click-through rates, and increases video impressions."
            },
    
            {
                name: "Watch-Time Enhancement",
                whyMatters: "Longer watch times signal quality content to platforms like YouTube, leading to better recommendations and higher rankings.",
                includes: [
                    "Content structuring for maximum retention and engagement.",
                    "Interactive elements (cards, end screens) for viewer interaction.",
                    "A/B testing of intros and outros to improve retention rates."
                ],
                benifit: "Increases audience retention, boosts session duration, and enhances video performance in algorithms."
            },
    
            {
                name: "YouTube Optimization",
                whyMatters: "Optimizing your video for YouTube and other platforms ensures better visibility and discoverability in search results and recommendations.",
                includes: [
                    "Channel and playlist optimization for content organization.",
                    "SEO-friendly video scripting to increase engagement.",
                    "Utilizing closed captions and transcripts for accessibility and SEO."
                ],
                benifit: "Improves video discoverability, increases organic reach, and enhances accessibility."
            },
    
            {
                name: "Off-Page Video SEO",
                whyMatters: "Off-page SEO plays a crucial role in boosting video authority and attracting traffic from external sources.",
                includes: [
                    "Video embed and backlink strategy to increase authority.",
                    "Cross-platform promotion for wider audience reach.",
                    "Influencer and social media collaboration for engagement boosts."
                ],
                benifit: "Enhances video authority, drives external traffic, and improves rankings in search results."
            },
    
            {
                name: "Competitor Analysis",
                whyMatters: "Understanding how competitors optimize their videos provides insights into content strategies and ranking factors.",
                includes: [
                    "Analyzing competitor video metadata and keyword usage.",
                    "Identifying top-performing content and engagement strategies.",
                    "Reverse-engineering backlink and promotion tactics."
                ],
                benifit: "Gains a competitive advantage, helps refine content strategy, and improves video ranking potential."
            },
    
            {
                name: "Video Performance Audit",
                whyMatters: "A detailed content audit ensures that videos are optimized for both users and search engines, improving engagement and conversion rates.",
                includes: [
                    "Review of video pacing, structure, and engagement levels.",
                    "Identifying content gaps and opportunities for improvement.",
                    "Optimization recommendations for better audience retention."
                ],
                benifit: "Enhances video effectiveness, increases engagement, and drives more conversions."
            },
    
            {
                name: "Schema Markup Optimization",
                whyMatters: "Implementing structured data ensures that search engines properly index and display videos with rich snippets for better visibility.",
                includes: [
                    "Implementation of video schema markup for rich results.",
                    "Ensuring compatibility with Google and other search engines.",
                    "Enhancing video appearance in search with key metadata."
                ],
                benifit: "Boosts video search visibility, increases CTR, and improves search engine understanding of video content."
            }
        ]
    },

    tailoredSection: {
        "heading": "Tailored <span class='text-[#207DE9]'> Specialized <br/> Video SEO </span> for Every Platform",
        "para": "Every video platform has unique SEO challenges and opportunities. Our team provides <strong> customized Video SEO strategies </strong> for platforms like YouTube, Vimeo, TikTok, and more to ensure your content ranks higher, attracts more views, and maximizes engagement.",
    
        "tailoredItems": [
            {
                "heading": "YouTube Video SEO Services",
                "para": "YouTube is the second-largest search engine, and ranking higher requires a strategic SEO approach. Our YouTube Video SEO strategies focus on optimizing metadata, increasing watch time, and enhancing discoverability.",
                "offers": [
                    "<strong>Video Metadata Optimization:</strong> Titles, descriptions, and tags optimized for search visibility.",
                    "<strong>Thumbnail & CTR Enhancement:</strong> Custom thumbnails designed to increase click-through rates.",
                    "<strong>Audience Retention Strategies:</strong> Structuring videos to boost watch time and engagement.",
                    "<strong>YouTube Analytics Optimization:</strong> Tracking and improving key performance metrics."
                ],
                "chooseUs": "Our expertise in YouTube SEO ensures your videos gain more views, rank higher, and attract a loyal audience.",
                "image": "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {
                "heading": "TikTok & Short-Form Video SEO",
                "para": "Short-form content platforms like TikTok and Instagram Reels require a unique SEO approach. Our strategies help your content get discovered through trending hashtags, keyword-optimized captions, and engagement tactics.",
                "offers": [
                    "<strong>Hashtag & Keyword Optimization:</strong> Selecting trending and niche hashtags for higher reach.",
                    "<strong>Engagement Boosting Strategies:</strong> Optimizing content structure for better interactions.",
                    "<strong>Video Hook & Retention Optimization:</strong> Creating attention-grabbing intros and engaging storytelling.",
                    "<strong>Cross-Promotion Strategy:</strong> Distributing content across multiple short-form platforms."
                ],
                "chooseUs": "We help brands optimize short-form videos for maximum reach, engagement, and algorithmic visibility.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s"
            },
            {
                "heading": "Vimeo & Professional Video SEO Services",
                "para": "Vimeo is popular for high-quality video hosting, but optimizing content for SEO requires a different strategy. Our Vimeo Video SEO services focus on enhancing discoverability and audience engagement.",
                "offers": [
                    "<strong>Video Descriptions & Metadata Optimization:</strong> Enhancing video descriptions and titles for SEO.",
                    "<strong>Backlinking & Off-Page SEO:</strong> Promoting videos through high-authority backlinks.",
                    "<strong>Embedding Strategies:</strong> Optimizing videos for maximum reach on external websites.",
                    "<strong>Schema Markup Implementation:</strong> Adding structured data for improved search visibility."
                ],
                "chooseUs": "We specialize in optimizing Vimeo videos for search engines, increasing visibility, and attracting high-quality traffic.",
                "image": "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },
            {
                "heading": "Facebook & LinkedIn Video SEO Services",
                "para": "Social media videos have their own set of ranking factors. Our Video SEO services for Facebook and LinkedIn help boost engagement, visibility, and conversions through algorithm-friendly optimization.",
                "offers": [
                    "<strong>Native Video Optimization:</strong> Optimizing videos for platform-specific ranking factors.",
                    "<strong>Video Captioning & Accessibility:</strong> Adding captions and subtitles for better engagement.",
                    "<strong>Social Sharing & Distribution Strategy:</strong> Leveraging social media algorithms for higher visibility.",
                    "<strong>Retargeting & Engagement Metrics Tracking:</strong> Using insights to optimize future content."
                ],
                "chooseUs": "We maximize your video reach and engagement on social platforms through expert optimization strategies.",
                "image": "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },
            {
                "heading": "Multi-Platform Video SEO Consulting",
                "para": "For brands using multiple video platforms, we offer custom Video SEO consulting to streamline optimization strategies across all platforms and maximize reach.",
                "offers": [
                    "<strong>Cross-Platform Optimization:</strong> Unifying video SEO strategies across YouTube, TikTok, Vimeo, and more.",
                    "<strong>Keyword Strategy for Video SEO:</strong> Ensuring effective keyword usage across platforms.",
                    "<strong>Content Repurposing & Distribution:</strong> Creating multi-platform strategies for better audience reach."
                ],
                "chooseUs": "Our expertise in multi-platform Video SEO ensures your content performs well across all channels.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            }
        ]
    },
    
    //PowerBy starts here 
    powerBySection: {
        heading: "Video SEO <span class='text-[#207DE9]'> Data-Driven Insights </span> for Maximum Visibility & Engagement",
        para: "Leverage the power of Video SEO to boost rankings, attract the right audience, and drive higher watch time. Our proven strategies ensure your videos perform well on search engines and video platforms.",
    
        statistics: [
    
            { 
                benefit: "Increase in Video Views & Reach", 
                benefitText: "Optimized video metadata, tags, and descriptions help search engines and platforms rank your videos higher, making them easier to discover.", 
                increasePercentage: 300, 
                explanation: "A well-optimized video strategy using keyword-rich titles, engaging descriptions, and structured data ensures your videos appear in search results and recommendations." 
            },
    
            { 
                benefit: "Improvement in Watch Time & Engagement", 
                benefitText: "Engaging videos with optimized intros, structured storytelling, and interactive elements keep viewers watching longer.", 
                increasePercentage: 150, 
                explanation: "Retention-focused strategies like compelling hooks, timestamps, and calls-to-action encourage users to stay engaged, boosting your rankings on platforms like YouTube and TikTok." 
            },
    
            { 
                benefit: "Higher ROI from Video Content", 
                benefitText: "Video SEO is one of the most effective strategies for long-term organic growth, maximizing views without paid promotion.", 
                increasePercentage: 400, 
                explanation: "Optimized video content generates sustainable traffic, improves conversions, and enhances brand authority across multiple platforms." 
            }
        ]
    }
    ,
    //PowerBy ends here 

    approachSection: {
        heading: "Our Proven Video SEO Strategy",
        para: "Get everything needed to develop, implement, and manage a revenue-generating Video SEO plan with our Video SEO services",

        approaches: [
            {
                heading: "Keyword Research Tailored to Video Content",
                detail: "Identify high-intent, video-specific keywords your target audience is searching for. Helps your videos appear in search results when customers are ready to watch.",
                icon: <FaMagnifyingGlass />
            },

            {
                heading: "Video Title and Description Optimization",
                detail: "Optimize video titles, descriptions, and tags with targeted keywords to improve visibility and increase engagement in search engines.",
                icon: <FaVideo />
            },

            {
                heading: "Backlink Building for Video Content",
                detail: "Acquire backlinks from high-authority websites and blogs that host video content to improve your video’s credibility and search rankings.",
                icon: <FaLink />
            },

            {
                heading: "Mobile-First Video SEO Implementation",
                detail: "Ensure your video content is fully optimized for mobile devices with fast loading times and seamless playback. Mobile users account for a large portion of video views.",
                icon: <MdOutlineMobileFriendly />
            },

            {
                heading: "Optimizing Video Load Speed",
                detail: "Minimize video load times by compressing files, optimizing streaming settings, and utilizing adaptive bitrate streaming. Faster videos retain viewers and rank better.",
                icon: <GrOptimize />
            }
        ]
    },

    pathToSuccess: {
        heading: "<span class='text-[#207DE9]'>V</span>.<span class='text-[#207DE9]'>I</span>.<span class='text-[#207DE9]'>D</span>.<span class='text-[#207DE9]'>E</span>.<span class='text-[#207DE9]'>O</span>.<span class='text-[#207DE9]'>S</span> Your Path to Video SEO Success",
        paths: [
            {
                letter: "V",
                heading: "Video Content Optimization",
                matters: "Optimizing video content for search engines is crucial for improving visibility. It ensures your videos are discoverable and engaging to your target audience.",
                how: [
                    "Optimize video titles, descriptions, and tags with relevant keywords.",
                    "Create custom thumbnails and add captions for better user engagement.",
                    "Leverage video transcripts for better search engine indexing."
                ],
                outcome: "Better video visibility and engagement through optimized content."
            },
            {
                letter: "I",
                heading: "Improve Video Technical SEO",
                matters: "Technical SEO is critical for videos, impacting how easily search engines crawl and index your content. A technical SEO audit helps improve discoverability.",
                how: [
                    "Optimize video loading speed to reduce bounce rates.",
                    "Ensure proper video hosting and embedding to enhance SEO.",
                    "Use video schema markup to enable rich snippets in search results."
                ],
                outcome: "Faster loading, better crawling, and improved user experience."
            },
            {
                letter: "D",
                heading: "Discover Optimization Opportunities",
                matters: "SEO audits help uncover new opportunities for video optimization, improving rankings and driving more traffic to your content.",
                how: [
                    "Identify trending video topics and keywords for targeting.",
                    "Analyze competitors’ video content and ranking strategies.",
                    "Review video engagement metrics to find areas for improvement."
                ],
                outcome: "Increased engagement and new opportunities for video optimization."
            },
            {
                letter: "E",
                heading: "Enhance Video Performance",
                matters: "Improving the performance of your video is key to boosting rankings. Metrics such as watch time and audience retention are crucial for SEO.",
                how: [
                    "Improve video length and structure for better user engagement.",
                    "Encourage likes, comments, and shares to boost social signals.",
                    "Increase watch time by creating high-quality, relevant content."
                ],
                outcome: "Better performance in search rankings and user engagement."
            },
            {
                letter: "O",
                heading: "Optimize for Mobile",
                matters: "Mobile optimization ensures that your video content is accessible to a broader audience, including mobile users who form a large part of the audience.",
                how: [
                    "Ensure videos are responsive and load well on mobile devices.",
                    "Optimize video player size and functionality for mobile views.",
                    "Use mobile-friendly video descriptions and calls to action."
                ],
                outcome: "Improved user experience on mobile, leading to higher engagement."
            },
            {
                letter: "S",
                heading: "Strengthen Video SEO Strategy",
                matters: "A solid SEO strategy will continually improve video rankings and engagement. Ongoing analysis and strategy optimization ensure consistent growth.",
                how: [
                    "Review video performance regularly to track metrics.",
                    "Update video content with new keywords and trends.",
                    "Strengthen backlinking and share video content across channels."
                ],
                outcome: "A stronger, more effective video SEO strategy leading to long-term success."
            }
        ]
    },

    platformSection: {
        heading: "We Optimize <span class='text-[#207DE9]'> Video SEO </span> Across These Platforms",
        para: "Our Video SEO experts enhance video visibility and engagement across multiple platforms. Whether you're creating content for YouTube, TikTok, Vimeo, or other video-sharing sites, our optimization strategies ensure your videos rank higher, reach wider audiences, and maximize watch time.",
    
        platforms: [
            {
                heading: "Popular Platforms for Video SEO", 
                items: [
                    { itemName: "YouTube", itemImg: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" },
                    { itemName: "TikTok", itemImg: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
                    { itemName: "Instagram Reels", itemImg: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" }
                ]
            },
    
            {
                heading: "Professional & Enterprise Video Platforms", 
                items: [
                    { itemName: "Vimeo", itemImg: "https://w7.pngwing.com/pngs/959/270/png-transparent-logo-vimeo-social-media-vimeo-blue-text-trademark-thumbnail.png" },
                    { itemName: "Wistia", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_YJTFUMwYQH_4oB8q6TSF3PoBDBROUu2LA&s" },
                    { itemName: "Dailymotion", itemImg: "https://static1.dmcdn.net/images/dailymotion-logo-ogtag-new.png.va3e30462476a82772" }
                ]
            },
    
            {
                heading: "Video SEO & Analytics Tools", 
                items: [
                    { itemName: "YouTube Analytics", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TTbvhT2GIUJic85PKVAKE3yhQpB5s_BTKw&s" },
                    { itemName: "TubeBuddy", itemImg: "https://play-lh.googleusercontent.com/Dw0EhIXzf1KweXeRxvoOBJcglPQEJr0FsiQY5uXTBuer08cRuD9yfvSck1mOmSoH0Q" },
                    { itemName: "VidIQ", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14M3tdSL5n7QolHLgdl4wygZak5XFv0kOVw&s" },
                    { itemName: "Google Search Console", itemImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oDs54RBKAQhM_lOqKcg2YFoF8G4lECSrP7-2G1w3Caew19x4qKI91LZ2CBMrfajyGh0&usqp=CAU" }
                ]
            }
        ]
    } ,

    approachSection: {
        heading: "Our Proven Video SEO Strategy",
        para: "Get everything needed to develop, implement, and manage a revenue-generating Video SEO plan with our Video SEO services",

        approaches: [
            {
                heading: "Keyword Research Tailored to Video Content",
                detail: "Identify high-intent, video-specific keywords your target audience is searching for. Helps your videos appear in search results when customers are ready to watch.",
                icon: <FaMagnifyingGlass />
            },

            {
                heading: "Video Title and Description Optimization",
                detail: "Optimize video titles, descriptions, and tags with targeted keywords to improve visibility and increase engagement in search engines.",
                icon: <FaVideo />
            },

            {
                heading: "Backlink Building for Video Content",
                detail: "Acquire backlinks from high-authority websites and blogs that host video content to improve your video’s credibility and search rankings.",
                icon: <FaLink />
            },

            {
                heading: "Mobile-First Video SEO Implementation",
                detail: "Ensure your video content is fully optimized for mobile devices with fast loading times and seamless playback. Mobile users account for a large portion of video views.",
                icon: <MdOutlineMobileFriendly />
            },

            {
                heading: "Optimizing Video Load Speed",
                detail: "Minimize video load times by compressing files, optimizing streaming settings, and utilizing adaptive bitrate streaming. Faster videos retain viewers and rank better.",
                icon: <GrOptimize />
            }
        ]
    },

    realResultsSection: {
        heading: "Real Results for Real Video SEO Growth",
        para: "At the heart of our Video SEO strategy lies a commitment to delivering measurable outcomes. From increasing video views to boosting engagement, we've helped numerous video channels and platforms achieve sustainable growth. Our tailored approach ensures every optimization effort drives real results—transforming your video content into a revenue-generating powerhouse.",

        results: [
            {
                header: "Video SEO - Educational Content",
                challenge: "We’ll walk through the various methods of optimizing video content for better discoverability and engagement.",
                approaches: [
                    "Optimizing video titles and descriptions",
                    "Improving video thumbnail design",
                    "Building backlinks to video content"
                ],
                increase: "250",
                increaseIn: "Growth in video views"
            },
            {
                header: "Video SEO - Entertainment Industry",
                challenge: "Optimizing video content to increase views and engagement in the highly competitive entertainment industry.",
                approaches: [
                    "Keyword targeting for video content",
                    "Engaging video content strategies",
                    "Leveraging social media for video sharing"
                ],
                increase: "320",
                increaseIn: "Increase in subscriber growth"
            },
            {
                header: "Video SEO - Fitness Niche",
                challenge: "Targeting specific video content for fitness enthusiasts to improve rankings and visibility.",
                approaches: [
                    "Improving video content structure",
                    "Using social signals for ranking boost",
                    "Optimizing for mobile video consumption"
                ],
                increase: "450",
                increaseIn: "Increase in video engagement and interactions"
            },
            {
                header: "Video SEO - E-commerce Products",
                challenge: "Optimizing product video content for e-commerce websites to boost sales and improve product visibility.",
                approaches: [
                    "Using rich snippets and schema for product videos",
                    "Building backlinks to product videos",
                    "Optimizing product video thumbnails"
                ],
                increase: "500",
                increaseIn: "Growth in product video views"
            }
        ]
    },

    pricingSection: {
        heading: "Transparent <span class='text-[#207DE9]'> Pricing </span> for Video SEO",
        para: "Our Video SEO pricing plans are designed to maximize your content’s reach, improve video rankings, and boost engagement. Whether you're a content creator, business, or enterprise, our plans provide comprehensive optimization and actionable insights.",
    
        pricingCards: [
            {
                header: "Basic Video SEO Plan",
                price: "$1,200/one-time",
                fitFor: "Small content creators & businesses looking to optimize their video SEO basics.",
                youGet: [
                    "YouTube & video metadata optimization (titles, descriptions, tags)",
                    "Thumbnail design optimization for higher CTR",
                    "Basic keyword research for video content",
                    "Video transcript & closed captions for better indexing",
                    "Detailed Video SEO report & recommendations"
                ]
            },
            {
                header: "Advanced Video SEO Plan",
                price: "$3,500/one-time",
                fitFor: "Businesses & influencers wanting to scale video performance.",
                youGet: [
                    "All features from the Basic Video SEO Plan",
                    "Audience retention & watch-time optimization strategies",
                    "End-screen & CTA optimization for engagement",
                    "Cross-platform video SEO (YouTube, TikTok, Instagram, etc.)",
                    "Competitor benchmarking & keyword gap analysis"
                ]
            },
            {
                header: "Professional Video SEO Plan",
                price: "$6,000/one-time",
                fitFor: "Brands & enterprises looking for a full-scale Video SEO strategy.",
                youGet: [
                    "All features from the Advanced Video SEO Plan",
                    "Comprehensive YouTube channel audit & strategy",
                    "Backlinking & video embed strategy for higher authority",
                    "Schema markup & structured data for video indexing",
                    "Monthly performance tracking & recommendations"
                ]
            },
            {
                header: "Enterprise Video SEO Plan",
                price: "$10,000/one-time",
                fitFor: "Large-scale media companies & enterprises requiring continuous optimization.",
                youGet: [
                    "All features from the Professional Video SEO Plan",
                    "AI-driven video optimization & NLP keyword insights",
                    "Advanced audience segmentation & analytics",
                    "E-commerce video SEO & shoppable video strategies",
                    "Ongoing support & consulting from a Video SEO expert"
                ]
            }
        ]
    }
    ,



    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },
}

