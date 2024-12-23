import { FaBullhorn, FaBullseye, FaCartShopping, FaChartLine, FaChartPie, FaComments, FaLayerGroup, FaLink, FaMagnifyingGlass, FaMoneyBillWave, FaPalette, FaRegChartBar, FaRegNewspaper, FaRocket, FaUsers, FaUserTag } from 'react-icons/fa6'
import heroImg from '../../Assets/Images/ServicesIMG/EcommerceBG.png'
import { MdOutlineMobileFriendly, MdOutlineStarPurple500 } from 'react-icons/md'
import { GrAchievement, GrOptimize } from 'react-icons/gr'
import { IoAnalytics } from 'react-icons/io5'
import { SiGooglecontaineroptimizedos } from 'react-icons/si'

import BG from '../../Assets/Images/CommonImages/HeroServices.png'
import { FaAd, FaBuilding, FaCog, FaCogs, FaCommentDots, FaFileAlt, FaGlobe, FaGoogle, FaImage, FaLanguage, FaLock, FaMapMarkerAlt, FaMobileAlt, FaPenAlt, FaPlusCircle, FaRedoAlt, FaSearch, FaSitemap, FaSpider, FaStar, FaStarAndCrescent, FaTachometerAlt, FaTags, FaThumbsUp, FaUserAlt, FaUserFriends, FaVideo } from 'react-icons/fa'
import popularPlatform from '../../Assets/Images/ServicesIMG/SEOImages/popular.png'
import enterpricePlatform from '../../Assets/Images/ServicesIMG/SEOImages/enterprice.png'
import cmsPlatform from '../../Assets/Images/ServicesIMG/SEOImages/cms.png'
import otherPlatform from '../../Assets/Images/ServicesIMG/SEOImages/other.png'
import { head } from 'framer-motion/client'

export const SEOData ={}


export const EcommerceSEOData = {

    heroSection: {
        //Hero section data start
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
    // Hero section data ends 

    // Why Section start         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },
    // why section end

    //Booster Section start here 
    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    },
    //Booster Section ends here 

    //PowerBy starts here 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },
    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },

    // Aproach section starts 

    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    // approach section ends here 

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    // results section ends here 

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
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
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
    // Hero section data ends 

    // Why Section start         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },
    // why section end

    //Booster Section start here 
    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    },
    //Booster Section ends here 

    //PowerBy starts here 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },
    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },

    // Aproach section starts 

    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    // approach section ends here 

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    // results section ends here 

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
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
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },

    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    }, 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },
    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },

    // Aproach section starts 

    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    // approach section ends here 

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    // results section ends here 

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
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
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },

    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    }, 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },
    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },

    // Aproach section starts 

    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    // approach section ends here 

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    // results section ends here 

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
        ],

        
    },


    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },

}

export const InternationalSEOData = {
    heroSection: {
        //Hero section data start
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },

    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    }, 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },

    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },

    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
        ],

        
    },

    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },


}

export const AuditSEOData = {
    heroSection: {
        //Hero section data start
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },

    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    }, 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },

    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },
    
    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
        ],

        
    },

    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },
}

export const VideoSEOData = {
    heroSection: {
        //Hero section data start
        heading: "E-commerce SEO for Enhanced Online Sales",
        para: "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
        img: heroImg,
        bg: BG,
    },
         
    whySection: {
        heading: "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
        para: "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",

        whyKeys: [
            { heading: "Keyword Optimization", explanation: 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page SEO", explanation: 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.', icon: <FaMagnifyingGlass /> },

            { heading: "Content Strategy for Ecommerce", explanation: 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.', icon: <FaMagnifyingGlass /> },

            { heading: "Backlink Building", explanation: 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.', icon: <FaMagnifyingGlass /> }
        ],
    },

    boostSection: {
        heading: "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
        para: "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

        boostContent: [
            {navigator: "Optimized Product Categories", 

            matters : "Product category pages are often the most searched pages on an E-commerce website. Optimizing these ensures that customers can find relevant products quickly, while search engines can better understand your site's structure.", 

            includes: [
                " Optimized category titles and meta descriptions with target keywords." , 
                "Clean, SEO-friendly URL structures (e.g., /electronics/laptops/).",
                "Well-structured category descriptions with relevant keywords",
                "Strategic use of internal links to promote related products or popular categories."
            ], 

            benefit : "Higher rankings in search results for category-level searches and improved user experience",
            
            image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "User-Generated Reviews & SEO", 

                matters : "Customer reviews are a source of fresh, keyword-rich content that search engines love. They also build trust and increase conversion rates.", 

                includes: [
                    "Enabling user reviews on product pages." , 
                    "Using schema markup to display star ratings in search results.",
                    "Moderating and showcasing reviews to ensure quality and relevance",
                ], 

                benefit : "Boosts credibility, increases organic traffic with rich snippets, and enhances customer decision-making",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
                
            {navigator: "Mobile-First Optimization", 
    
                    matters : "Over 60% of E-commerce traffic now comes from mobile devices. Google prioritizes mobile-friendly sites in its rankings.", 
    
                    includes: [
                        "Responsive design that adapts seamlessly to all screen sizes." , 
                        "Optimized product images and page load speed for mobile users.",
                        "Easy-to-use mobile navigation and checkout processes.",
                        "Reducing intrusive pop-ups that hurt mobile user experience."
                    ], 
    
                    benefit : "Improves rankings in mobile search results, reduces bounce rates, and increases mobile conversions.",
                    
                    image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png"
            },  

            {navigator: "Schema Markup for E-commerce", 
        
                matters : ": Schema markup (structured data) helps search engines understand your content better and display rich snippets in search results. This leads to higher visibility and click-through rates (CTR)", 

                includes: [
                    "Product Schema: Displays product details like price, availability, and ratings" , 
                    "Review Schema: Highlights customer ratings and feedback.",
                    "FAQ Schema: Adds answers to common customer questions directly in search results",
                ], 

                benefit : "Enhanced search engine listings with rich snippets, resulting in improved visibility and more organic clicks.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Internal Linking Strategies", 
                matters : "Effective internal linking helps search engines crawl your site efficiently, spreads link equity, and enhances navigation for users.", 

                includes: [
                    "Linking related product pages to encourage upsells and cross-sells." , 
                    "Highlighting featured or best-selling products within category pages.",
                    "Using keyword-rich anchor text to strengthen page relevancy.",
                ], 

                benefit : "Boosts SEO rankings, improves user engagement, and increases time spent on the website.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  
            {navigator: "E-commerce Site Speed Optimization", 
                matters : "Site speed is a key ranking factor for Google. Faster sites reduce bounce rates, improve user satisfaction, and lead to higher sales.", 

                includes: [
                    "Compressing images and using next-gen formats (like WebP)." , 
                    "Enabling browser caching and minifying CSS/JavaScript files.",
                    "Leveraging Content Delivery Networks (CDNs) for faster load times",
                    "Optimizing server response time and hosting performance.",
                ], 

                benefit : "A fast-loading site enhances SEO rankings, user experience, and conversion rates.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },  

            {navigator: "Competitor Analysis for E-commerce SEO", 
                matters : "Understanding competitors' SEO strategies helps identify gaps and opportunities to outperform them.", 

                includes: [
                    "Analyzing competitor keywords and rankings." , 
                    "Identifying their top-performing content and product pages.",
                    "Reviewing their backlink profiles to find link-building opportunities.",
                ], 

                benefit : "Develops a data-driven SEO strategy to stay ahead of competitors and capture more market share.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },
            
            {navigator: "Conversion-Focused SEO Content", 
                matters : "Content optimized for search engines should also be persuasive enough to convert visitors into paying customers.", 

                includes: [
                    "Writing detailed, keyword-optimized product descriptions that answer buyer questions." , 
                    "Crafting engaging headlines and meta tags to increase CTR.",
                    "Using calls-to-action (CTAs) to guide users toward purchasing.",
                    "Adding visuals like videos, infographics, or customer testimonials to enhance content value",
                ], 

                benefit : "Drives organic traffic and improves conversion rates by aligning SEO goals with buyer intent.",
                
                image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" 
            },

        ],
    }, 

    tailoredSection : {
        heading : "Tailored <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> for Every Platform",
        para : "Every E-commerce platform has unique SEO challenges and opportunities. Our team provides <strong> customized strategies </strong> for platforms like Shopify, WooCommerce, Magento, and more to ensure your store ranks higher, drives organic traffic, and converts visitors into loyal customers",

        tailoredItems : [
            {heading : "Shopify E-commerce SEO Services" ,
                para : "Shopify powers millions of online stores, but without proper SEO, it's hard to stand out. Our Shopify SEO strategies are designed to maximize product visibility, improve rankings, and drive more sales.",
                offers : [
                    "<strong>Product Page Optimization: </strong>SEO-optimized product titles, descriptions, and images to improve rankings",
                    "<strong>Content Strategy: </strong>Creating blogs, product guides, and FAQs to target buyer intent.",
                    "<strong>Technical SEO Fixes: </strong>Improving page load speed, mobile-friendliness, and site structure.",
                    "<strong>Schema Markup: </strong>Adding product, review, and stock schema for rich results on Google",
                ],
                chooseUs : "Our hands-on experience with Shopify ensures measurable results, improved search rankings, and higher conversions.",
                image : "https://cdn.shopify.com/app-store/listing_images/d365f0a485daaf1e2b77efe06bc1c352/desktop_screenshot/CLLBrfHV-YkDEAE=.png?height=720&width=1280"
            },
            {heading : "WooCommerce SEO Services" ,
                para : "WooCommerce is highly flexible, but unlocking its full potential requires expertise. Our WooCommerce SEO services help businesses optimize their stores, target buyer-focused keywords, and improve site performance.",
                offers : [
                    "<strong>Technical SEO Audits: </strong>Identifying and fixing duplicate content, slow speeds, and indexing issues.",
                    "<strong>Keyword Mapping: </strong>Aligning keywords to product and category pages for better targeting.",
                    "<strong>Content Optimization: </strong>Creating SEO-rich product descriptions, blogs, and landing pages.",
                    "<strong>Performance Enhancements: </strong> Speed optimization, schema markup, and Core Web Vitals fixes.",
                ],
                chooseUs : "We combine WordPress expertise with proven SEO strategies to deliver higher rankings, better site performance, and increased ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt5rsjor4r2f45uUD2Kat226K6liAOQJWLQ&s",
            },

            {heading : "Magento E-commerce SEO Services" ,
                para : "Magento is a powerhouse for large stores, but its complexity creates SEO challenges. Our MagentoSEO services focus on optimizing your store for performance, search visibility, and scalability.",
                offers : [
                    "<strong>Advanced Keyword Strategy: </strong>Targeting high-traffic keywords for product and category pages.",
                    "<strong>Technical SEO: </strong>Fixing indexing errors, duplicate content, and improving site speed.",
                    "<strong>Custom Schema Implementation: </strong>Adding product, review, and breadcrumb schema to boost rankings",
                ],
                chooseUs : "We specialize in handling Magento's complexity, ensuring large product catalogs rank high and convert better",
                image : "https://www.goivvy.com/blg/wp-content/uploads/2018/10/Installing-Magento-2-step1.png"
            },

            {heading : "BigCommerce SEO Services" ,
                para : "BigCommerce offers robust tools for E-commerce success, but SEO is key to maximizing its potential. Our BigCommerce SEO strategies focus on delivering consistent traffic and sales.",
                offers : [
                    "<strong>On-Page Optimization: </strong>Optimizing product pages, category structures, and internal links",
                    "<strong>Content Strategy: </strong>Creating keyword-optimized content like product descriptions, guides, and blogs.",
                    "<strong>Mobile SEO: </strong>Ensuring fast, mobile-friendly pages to attract on-the-go shoppers.",
                ],
                chooseUs : "We leverage BigCommerce's strengths to improve search visibility, user experience, and conversions.",
                image : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/07/26133900/bigcommerce-checkout.png"
            },

            {heading : "Wix and Squarespace SEO Services" ,
                para : "Wix and Squarespace make building stores easy, but achieving SEO success requires expertise. Our SEO services for Wix and Squarespace focus on visibility and user experience.",
                offers : [
                    "<strong>Site Structure Optimization: </strong>Creating clean, SEO-friendly navigation and URLs",
                    "<strong>Content Optimization: </strong>Improving product pages, blogs, and FAQs to attract organic traffic",
                    "<strong>Local SEO: </strong>Optimizing for local searches to reach nearby customers.",
                ],
                chooseUs : "We help you transform Wix and Squarespace stores into SEO-optimized platforms that rank higher and drive sales.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdJTqqMQwzjZu9reCWQzvUZ8PkfP1g97eyA&s"
            },

            {heading : "Multi-Platform SEO Consulting" ,
                para : "For businesses using multiple platforms (Shopify, WooCommerce, Magento), we offer custom consulting services to streamline your SEO strategies across all systems.",
                offers : [
                    "<strong>Comprehensive SEO Audits: </strong>Identify SEO issues across platforms.",
                    "<strong>Keyword Harmonization: </strong>Optimize keywords consistently for all stores.",
                    "<strong>Content Planning: </strong>Unified content strategies for multi-platform E-commerce.",
                ],
                chooseUs : "We ensure seamless SEO execution across multiple platforms to maximize organic growth and ROI.",
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM2Iw25hyCOxDPJsCGy6kpV1hsG2ZshlLdA&s"
            },

        ]

    },

    powerBySection: {
        heading: "E-commerce  <span class= 'text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
        para: "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",


        features: [
            { navigator: "Real-Time Analytics", text: "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Competitor Benchmarking", text: "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning.", icon: < GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

            { navigator: "Conversion Optimization", text: "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
        ],

        statistics: [

            { benefit: "Increase in Organic Traffic", benefitText: "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as", increasePercentage: 200 },

            { benefit: "Improvement in Conversion Rates", benefitText: "average improvement in conversion rates after implementing your SEO strategies.", increasePercentage: 100 },

            { benefit: "ROI from SEO Investments", benefitText: "return on investment that e-commerce businesses typically see when they use our SEO services.", increasePercentage: 300 },

        ],
    },

    platformSection : {
        heading : "We Optimize eCommerce Stores on These Platforms",
        para : "Our SEO experts work across all major eCommerce platforms to boost your store's visibility and drive sales. Whether you're a small business or an enterprise, we tailor strategies for your platform.",
        
        platforms : [
            {heading : "Popular Platforms" , items : [
                {itemName : "Shopify",  },
                {itemName : "WoCommerce",},
                {itemName : "BigCommerce",},
                {itemName : "Magento",},
            ],
            image : popularPlatform, 
        },

            {heading : "Enterprise-Level Solutions" , items : [
                {itemName : "NetSuite", },
                {itemName : "nopCommerce", },
                {itemName : "Celerant", },
                {itemName : "Unilog",},
            ],
            image : enterpricePlatform,
        },

            {heading : "Content Management Systems (CMS)" , items : [
                {itemName : "WordPress", },
                {itemName : "Drupal", },
                {itemName : "Umbraco", },
            ],
            image : cmsPlatform,
        },

            {heading : "Other Platforms" , items : [
                {itemName : "Volusion", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zpHzTUUF2Q5DNw4RLUwDgpa8tyMX-FOhXQ6ZFQ1URQYNw1EeZpH-Fwrp_HdBs3yzCE&usqp=CAU'},
                {itemName : "Drupal", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwvjsgNfWYlq8CZfLArIWsl6q-u91Mc_MMQ&s'},
                {itemName : "Umbraco", logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQlUEA6zTkG960A80jSJqnROP5BRjsXnC-g&s'},
            ],
            image : otherPlatform,
        }
        ]
    },

    pathToSuccess : {
        heading : "<span class= 'text-[#207DE9]'>G</span>.<span class= 'text-[#207DE9]'>R.</span>O.<span class= 'text-[#207DE9]'>W</span>.<span class= 'text-[#207DE9]'>T</span>.<span class= 'text-[#207DE9]'>H</span> Your Path to E-commerce SEO Success",
        
        paths : [
            {letter : "G" , heading : "Generate Traffic" , matters : "Without traffic, your online store won't get the visibility it deserves. SEO helps attract qualified, organic visitors who are actively searching for your products." , how : ["Keyword research to identify high-intent, transactional search terms." ,"Target long-tail keywords that align with buyer needs" , "Optimize for Google Shopping and other search engines."] ,
                outcome : "More targeted visitors who are ready to buy."
            },
            {letter : "R" , heading : "Rank Higher" , matters : "Higher rankings in search engines mean more visibility, clicks, and conversions. Outranking competitors puts your products in front of customers first." , how : ["On-page optimization (titles, meta tags, headers)." ,"Implement schema markup for product details, reviews, and rich snippets." , "Build high-quality backlinks to improve domain authority."] ,
                outcome : "Improved search engine rankings that boost brand visibility."
            },

            {letter : "O" , 
                heading : "Optimize Content" , 
                matters : "Content is the backbone of SEO. Product pages, blog posts, and FAQs need to be optimized for both search engines and customers." , 
                how : [
                    "Write detailed, keyword-optimized product descriptions." ,
                    "Develop engaging blogs around buying guides, product comparisons, and FAQs." , 
                    "Optimize multimedia (images and videos) with proper alt text and titles."] ,
                outcome : "Enhanced user experience and higher chances of ranking for relevant searches."
            },

            {letter : "W" , 
                heading : "Win Clicks*" , 
                matters : "Ranking on Google is just the first step-you need to win clicks with compelling and optimized listings." , 
                how : [
                    "Craft irresistible meta titles and descriptions that drive clicks." ,
                    "Add rich snippets (star ratings, prices, availability) to stand out in SERPs" , 
                    "Use strong CTAs (calls-to-action) to boost click-through rates (CTR)."] ,
                outcome : "Higher CTRs, more traffic, and better engagement with your products."
            },

            {letter : "T" , 
                heading : "Target Keywords" , 
                matters : "The right keywords connect your products to the customers searching for them. SEO without targeted keywords is like shooting in the dark." , 
                how : [
                    "Research high-converting, buyer-intent keywords for product and category pages." ,
                    "Implement long-tail keywords that capture niche search queries." , 
                    "Monitor keyword rankings and refine strategies based on performance."] ,
                outcome : "Increased visibility in search results for terms your audience is actively searching."
            },

            {letter : "H" , 
                heading : "Highlight Products" , 
                matters : "Showcasing your products effectively helps customers find the right solution quickly and drives conversions" , 
                how : [
                    "Use product schema to highlight key details like price, reviews, and availability." ,
                    "Optimize product images, videos, and descriptions for clarity and SEO." , 
                    "Create internal links to popular and high-converting product pages."] ,
                outcome : "Improved visibility in search results and higher engagement on product pages."
            },

            {letter : <MdOutlineStarPurple500/> , 
                focus : "By focusing on :" , 
                focusOn : ["Generating Traffic" , "Ranking Higher", "Optimizing Content" , "Winning Clicks", "Targeting Keywords" , "Highlighting Products"], 
                how : [
                    "Increased organic traffic." ,
                    "Higher search rankings." , 
                    "More conversions and sales."] ,
            },

            
        ]
    },
    
    approachSection: {
        heading: "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
        para: "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

        approaches: [
            { heading: "Keyword Research Tailored to Products", detail: 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.', icon: <FaMagnifyingGlass /> },

            { heading: "Product Page Optimization", detail: 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.', icon: <FaCartShopping /> },

            { heading: "Backlink Building for E-commerce", detail: 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.', icon: <FaLink /> },

            { heading: " Mobile-First SEO Implementation", detail: 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.', icon: <MdOutlineMobileFriendly /> },

            { heading: "Optimizing for Site Speed", detail: 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.', icon: <GrOptimize /> },

        ],
    },

    realResultsSection: {
        // results section starts 
        heading: "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth",
        para: "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

        results: [
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
            {
                header: "Ecommerce - Tools and Hardware", challenge: "We'll walk through all the different ways to use gradients in your work, as well as techniques", approaches: [
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy",
                    "PPC investment reaallocation strategy"
                ], increase: "450", increaseIn: "Growth in organic calls"
            },
        ],
    },

    pricingSection: {
        heading: "Transparent Pricing for E-commerce SEO",
        para: "Discover our clear and flexible E-commerce SEO pricing plans designed to grow with your online store. From boosting site traffic to enhancing product visibility, our plans are crafted to provide tangible results and help you dominate your niche market.",

        pricingCards: [
            {name: "Silver plan",
                header: "Silver Plan",                //<strong>
                price: "$750/month",
                fitFor: "Small businesses or startups new to SEO, with a limited product catalog.",
                youGet: [
                    "Up to <strong>50</strong> number of keywords optimized",
                    "Up to <strong>20</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Basic Audit",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Basic Schema (Title, Price)",
                    "<strong>Internal Linking Optimization :</strong> Basic Links",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 1 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 3 Links/Month",
                    "<strong>Competitor Analysis :</storng> Basic Insights",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Basic Recommendations",
                    "<storng>Monthly SEO </storng>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email Support",
                    "<strong>Campaign Setup Fee (One-time) : </storng> $750",
                    "<strong>Monthly Investment : </strong> $750",
                ],
            },
            {name: "Gold Plan",
                header: "Gold Plan",
                price: "$1,800/month",
                fitFor: "Growing E-commerce businesses looking to improve rankings and organic traffic.",
                youGet: [
                    "Up to <strong>150</strong> number of keywords optimized",
                    "Up to <strong>50</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Full Technical Audit ",
                    "Keyword Research & Strategy",
                    "Keyword Mapping to Product Pages",
                    "Title Tags & Meta Descriptions",
                    "Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Advanced Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Product Image Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 3 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 8 Links/Month",
                    "<strong>Competitor Analysis :</strong> Advanced Analysis",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Basic Setup",
                    "<strong>Conversion Rate Optimization (CRO)</sroong> : Strategic Suggestions",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Email & Phone Support",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $2,000",
                    "<strong>Monthly Investment : </strong> $1,800",
                ],
            },
            {name: "Platinum plan",
                header: "Platinum Plan",
                price: "$3,500/month",
                fitFor: "Established E-commerce stores targeting aggressive growth and improved conversions.",
                youGet: [
                    "Up to <strong>300</strong> number of keywords optimized",
                    "Up to <strong>100</strong> product pages optimized",
                    "<strong>Technical SEO Audit & Fixes : </strong> Advanced Optimization",
                    "Advanced Keyword Research & Strategy",
                    "Detailed Keyword Mapping to Product Pages",
                    "Advanced Title Tags & Meta Descriptions",
                    "Enhanced Performance Mobile Optimization",
                    "<strong>Schema Markup for Products :</strong> Full Schema",
                    "<strong>Internal Linking Optimization :</strong> Strategic Optimization",
                    "Full Image SEO Optimization",
                    "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> 6 Content Piece/Month",

                    "<strong>Backlink Building (Quality Outreach) :</strong> 15 Links/Month",
                    "<strong>Competitor Analysis :</strong> Detailed Competitor Tracking",
                    "<strong>Google Analytics Setup & Conversion Tracking :</strong> Advanced Tracking",
                    "<strong>Conversion Rate Optimization (CRO)</strong> : Advanced CRO Strategy",
                    "<strong>Monthly SEO </strong>Reports & Performance Insights",
                    "<strong>Customer Support : </strong> Dedicated Account Manager",
                    "<strong>Campaign Setup Fee (One-time) : </strong> $4,000",
                    "<strong>Monthly Investment : </strong> $3,500",
                ],
            },
        ],
    },

    customPricing : {

        heading : 'Ecommerce SEO Services Custom Pricing Tailored to Your Business Goals',

        upperPart : {
            header : "Custom E-commerce SEO Plans",
            price : "Starting at $3,000/month"

        },
        leftPart : [
                "<strong>Custom</strong> number of keywords optimized",
                "<strong>Custom</strong> number of product pages optimized",
                "<strong>Technical SEO Audit & Fixes : </strong> Custom Strategy",
                "Custom Research Plan ",
                "Custom Keyword Mapping to Product Pages",
                "Full Optimization Title Tags & Meta Descriptions",
                "Advanced Optimization Mobile Optimization",
                "<strong>Schema Markup for Products :</strong> Custom Implementation",
                "<strong>Internal Linking Optimization :</strong> Custom Strategy",
                "Full Image SEO Optimization",

            ],
        

        centerPart: {
            text : "Drive traffic, boost conversions, and maximize ROI with advanced AI-powered strategies.",
            pricing : ["<strong>Campaign Setup Fee (One-time) : </strong> Custom Quote",
            "<strong>Monthly Investment : </strong> Custom Quote",]
        },
        rightPart : [
            
            "<strong>Content Creation (Blogs, Guides, FAQs) :</strong> Custom Content Plan",

            "<strong>Backlink Building (Quality Outreach) :</strong> Custom Plan",
            "<strong>Competitor Analysis :</strong> Custom Analysis",
            "<strong>Google Analytics Setup & Conversion Tracking :</strong> Custom Integration",
            "<strong>Conversion Rate Optimization (CRO)</strong> : Custom CRO Strategy",
            "<strong>Dedicated Monthly SEO </strong>Reports & Performance Insights",
            "<strong>Customer Support : </strong> Dedicated Team Support",
        ],

        
    },

    reviewsSection: {
        heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
        para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

    },
}






export const PPCData = {
    GoogleAdsPPC: {

        heroSection: {
            //Hero section data start
            heading: "Enhance Your Business with Our Expert Google Ads PPC Management",
            para: "As a specialized Google Ads PPC management service, we focus on maximizing your Return on Ad Spend (ROAS) by optimizing your campaigns for higher conversions. Whether you aim to increase sales, boost lead generation, or enhance online visibility, our expert team is equipped to help you achieve your marketing objectives efficiently.",
            img: heroImg,
            bg: BG,//t3.ftcdn.net/jpg/03/28/99/96/360_F_328999611_R7dZbaVTV9ygDlVNGYn9rFGe8m3Slah3.jpg",
        },

        // Hero section data ends 

        // Why Section start         
        whySection: {
            heading: "Why <span class= 'text-[#207DE9]'>Google Ads PPC</span> matters? ",
            para: "Unlock the full potential of your online presence with our tailored Google Ads PPC strategies. At DEVXCLOUD, we specialize in creating highly targeted, data-driven campaigns that place your brand directly in front of your ideal customers. By leveraging the precision of Google Ads, we help you maximize ROI, increase conversions, and drive meaningful traffic to your site. Say goodbye to the hassle of managing multiple agencies and hello to seamless, result-oriented advertising with a trusted leader in the industry. Partner with us to transform clicks into customers and boost your revenue effortlessly.",

            whyKeys: [
                { heading: "Targeted Ad Placement", explanation: 'Utilize Google Ads to strategically place your ads in front of targeted audiences who are actively searching for products like yours. Tailored ad placements lead to higher conversion rates and more effective use of your advertising budget.', icon: <FaBullseye /> },

                { heading: "Immediate Visibility", explanation: 'Achieve instant visibility on Google, bypassing the time it takes to see results from organic SEO strategies. Google Ads puts your brand at the top of search results, ensuring immediate exposure to potential customers.', icon: <FaRocket /> },

                { heading: "Flexible Budgeting", explanation: 'Control your spending with Google Ads’ flexible budgeting options. Set maximum bid amounts and daily spending limits to stay within your budget while maximizing ad performance and ROI.', icon: <FaMoneyBillWave /> },

                { heading: "Measurable ROI", explanation: 'Track the performance of your campaigns with precision. Google Ads provides detailed analytics that help you understand the effectiveness of your ads, allowing you to optimize your strategies and achieve better returns on investment.', icon: <FaChartLine /> },

                { heading: "Advanced Targeting Options", explanation: 'Google Ads offers advanced targeting options including demographic, geographic, and device targeting, ensuring your ads reach the exact audience you want.', icon: <FaUserTag /> },

                { heading: "Remarketing Capabilities", explanation: 'Re-engage visitors who have left your site without making a purchase. Google Ads remarketing helps you stay in front of these potential customers, increasing the likelihood of conversion.', icon: <FaRedoAlt /> },

                { heading: "Ad Extensions", explanation: 'Enhance your ads with additional information such as contact details, links to specific parts of your website, and more. Ad extensions improve visibility and increase click-through rates.', icon: <FaPlusCircle /> }
            ],
        },
        // why section end

        //Booster Section start here 
        boostSection: {
            heading: "Elevate Your Campaigns with <span class='text-[#207DE9]'>Advanced Google Ads PPC</span> Services.",
            para: "Harness the power of Google Ads to target buyer-intent keywords, enhance ad visibility, and optimize campaigns for maximum ROI. Explore how strategic PPC can drive high-quality traffic and increase conversions effectively.",

            boostContent: [
                { navigator: "Overview", heading: "Strategic Google Ads Management", para: "Customize your PPC strategies to fit your specific business needs, focusing on maximizing impact through strategic bid management, ad placement, and continuous optimization. Our approach involves a deep analysis of market trends and competitor strategies to ensure that your ads are not only seen but also perform better than the competition.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Campaign Setup", heading: "Efficient Campaign Structure", para: "Build campaigns with a structure optimized for high performance, including detailed segmentation of ad groups and tailored ad creatives for different market segments. This method helps to streamline your ad spend, ensuring that each dollar is used effectively to target potential customers most likely to convert.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Targeting Techniques", heading: "Precision Targeting", para: "Employ advanced targeting options to reach specific demographics, geographic areas, and user behaviors, ensuring your ads are seen by your ideal audience. We use sophisticated tools to analyze audience data, allowing us to refine targeting strategies continuously for better results.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Ad Optimization", heading: "Continuous Ad Optimization", para: "Optimize ads through A/B testing, adjusting copy and visuals based on performance data to continually improve the effectiveness of your campaigns. This iterative process helps to maximize response rates and ROI by fine-tuning the messaging and design elements that resonate best with your audience.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Performance Tracking", heading: "Data-Driven Insights", para: "Track campaign performance with detailed analytics to make data-informed decisions that enhance your PPC results and drive meaningful growth. Our comprehensive tracking systems provide insights into which ads perform well, allowing for quick pivots and strategic reallocations to optimize campaign effectiveness.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Remarketing Strategies", heading: "Effective Remarketing", para: "Implement remarketing strategies to re-engage users who have previously interacted with your site, increasing the chances of conversion with highly targeted ads. This technique boosts overall conversion rates by reminding past visitors of their interest in your products or services, effectively bringing them back into the sales funnel.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Conversion Optimization", heading: "Boost Conversion Rates", para: "Focus on conversion optimization to transform your PPC traffic into actual sales, using compelling calls-to-action and continuous landing page improvements. By analyzing user behavior and feedback, we implement changes that significantly enhance the user experience and drive conversions.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Budget Management", heading: "Budget Efficiency", para: "Manage your ad spend efficiently to maximize return on investment, ensuring that every dollar spent contributes to achieving your business objectives. Our budget management strategies involve careful planning and constant monitoring to adjust spending dynamically based on campaign performance and market conditions.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Call to Action", heading: "Get Started with PPC", para: "Invite potential clients to start with a free PPC audit or consultation, showcasing the potential benefits and custom solutions your agency offers. This initial step provides valuable insights into how we can enhance your digital advertising strategies to achieve superior results.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },
            ],

        },

        //Booster Section ends here 

        //PowerBy starts here 

        powerBySection: {
            heading: "Google Ads PPC <span class='text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
            para: "Utilize cutting-edge analytics to boost your ad performance, optimize your spending, and maximize ROI. Discover the power of data in transforming your PPC campaigns into high-converting marketing tools.",

            features: [
                { navigator: "Real-Time Analytics", text: "Leverage real-time analytics to monitor ad performance, track spending, and gauge user engagement. This immediate insight allows for quick adjustments to optimize campaigns and improve outcomes.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7] ' /> },

                { navigator: "Competitive Analysis", text: "Use detailed competitor analyses to understand their ad strategies, budget allocation, and keyword targeting. This information helps you refine your own strategies to stay ahead in the market.", icon: <GrAchievement className='text-4xl text-[#6ADFD7] ' /> },

                { navigator: "Conversion Optimization", text: "Enhance ad conversions by optimizing call-to-action placements, improving landing page designs, and refining audience targeting. Data-driven tweaks to these areas can significantly increase your conversion rates.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] ' /> },
            ],

            statistics: [
                { benefit: "Increase in Ad Click-through Rate", benefitText: "Average percentage increase in click-through rates after strategic optimization of ad placements and targeting.", increasePercentage: 40 },

                { benefit: "Improvement in Cost-per-Conversion", benefitText: "Reduction in cost-per-conversion, highlighting more efficient use of advertising budgets.", increasePercentage: 35 },

                { benefit: "ROI from PPC Campaigns", benefitText: "Return on investment from PPC campaigns, demonstrating the effectiveness of targeted ad strategies.", increasePercentage: 120 },
            ],
        },


        // Aproach section starts 
        approachSection: {
            heading: "Maximize Your Ad Spend with Our <span class='text-[#207DE9]'>Proven Google Ads PPC Strategy</span>",
            para: "Leverage our expert Google Ads PPC services to develop, implement, and manage an efficient advertising plan that maximizes ROI and drives sales.",

            approaches: [
                { heading: "Strategic Keyword Targeting", detail: 'Identify and target high-conversion keywords that align with user intent and your product offerings. This focused approach ensures your ads appear to the right audience, boosting click-through rates and conversions.', icon: <FaMagnifyingGlass /> },

                { heading: "Optimized Ad Creatives", detail: 'Craft compelling ad texts and use eye-catching visuals that resonate with your target demographic. Regular testing and optimization of ad creatives lead to better engagement and higher conversion rates.', icon: <FaBullhorn /> },

                { heading: "Precision Audience Targeting", detail: 'Utilize advanced targeting options such as demographics, interests, and behaviors to reach potential customers who are most likely to convert. Tailoring ads to specific audiences enhances relevance and effectiveness.', icon: <FaUserFriends /> },

                { heading: "Conversion Rate Optimization", detail: 'Implement tactics designed to turn clicks into sales, including optimizing landing pages and using strong calls-to-action. Continuous A/B testing and landing page improvements drive higher ROI.', icon: <FaChartLine /> },

                { heading: "Performance Tracking and Analytics", detail: 'Monitor ad performance meticulously with analytics tools to understand impact and areas for improvement. Use data-driven insights to refine strategies and ensure optimal spending.', icon: <FaRegChartBar /> },
            ],
        },

        // approach section ends here 

        realResultsSection: {
            // results section starts
            heading: "Real Results <span class='text-[#207DE9]'>for Real PPC Impact</span>",
            para: "At the core of our Google Ads PPC services is a commitment to achieving measurable results. From elevating click-through rates to driving higher conversion rates, we’ve propelled many businesses toward remarkable growth. Our customized PPC strategies ensure that every ad, keyword, and bid adjustment contributes to significant outcomes—maximizing your ad spend and transforming your campaigns into profit-generating machines.",

            results: [
                {
                    header: "Ecommerce - Apparel and Accessories", challenge: "Struggling with low visibility and poor ad performance in a competitive market.", approaches: [
                        "Comprehensive keyword optimization",
                        "Ad creative redesign and A/B testing",
                        "Audience retargeting adjustments"
                    ], increase: "200", increaseIn: "Increase in conversion rate"
                },

                {
                    header: "Ecommerce - Electronics", challenge: "High ad spend with minimal returns and low conversion rates.", approaches: [
                        "Bid management refinement",
                        "Landing page optimization",
                        "Enhanced ad scheduling"
                    ], increase: "150", increaseIn: "Growth in ROI"
                },

                {
                    header: "Ecommerce - Health and Wellness", challenge: "Inadequate reach to targeted demographics and stagnant sales.", approaches: [
                        "Demographic-focused targeting strategy",
                        "Geo-targeting enhancements",
                        "Campaign structure reorganization"
                    ], increase: "120", increaseIn: "Improvement in click-through rate"
                },

                {
                    header: "Ecommerce - Home and Garden", challenge: "Need for better qualified leads and reduced cost-per-acquisition.", approaches: [
                        "Improved ad copy and keyword relevance",
                        "Conversion tracking and analytics",
                        "Strategic ad placements"
                    ], increase: "175", increaseIn: "Reduction in CPA"
                },
            ],
        },


        // results section ends here 

        pricingSection: {
            heading: "Transparent Pricing for Every Stage of Growth",
            para: "Explore our straightforward and flexible pricing plans designed to scale with your business. Whether you're looking to test the waters with PPC or you're ready to dominate the market, our plans offer measurable outcomes and strategic insights to optimize your advertising spend and drive sales.",

            pricingCards: [
                {
                    name: "basic plan",
                    header: "Basic Plan – \"Getting Started\"",
                    price: "$299/month",
                    fitFor: "Ideal for small businesses or newcomers to PPC looking to establish a presence without a large initial investment.",
                    youGet: [
                        "Keyword Strategy Development",
                        "PPC Campaign Setup & Launch",
                        "Basic Ad Copy Creation",
                        "Google Analytics Integration",
                        "Monthly Performance Report"
                    ],
                },
                {
                    name: "medium plan",
                    header: "Medium Plan – \"Growth Focused\"",
                    price: "$599/month",
                    fitFor: "Perfect for growing businesses aiming to expand their reach and enhance ROI through more aggressive PPC strategies.",
                    youGet: [
                        "Advanced Keyword Optimization",
                        "Dynamic Ad Campaign Management",
                        "A/B Testing for Ad Copies",
                        "Enhanced Conversion Tracking",
                        "Bi-weekly Performance Adjustments",
                        "Geo-Targeting Adjustments"
                    ],
                },
                {
                    name: "premium plan",
                    header: "Premium Plan – \"Market Leader\"",
                    price: "$999/month",
                    fitFor: "Designed for large-scale enterprises or those seeking to dominate the market, offering comprehensive PPC management and strategic insights.",
                    youGet: [
                        "Complete PPC Strategy Overhaul",
                        "High-Budget PPC Campaign Management",
                        "Multivariate Testing for Multiple Ad Sets",
                        "Advanced Audience Segmentation",
                        "Continuous Optimization of Bid Strategy",
                        "Detailed Monthly Analytics and Insights Report",
                        "Dedicated Account Manager"
                    ],
                },
            ],
        },


        reviewsSection: {
            heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Ecommerce Brands</span>  ",
            para: "Every project we undertake is fueled by a commitment to excellence and a passion for helping our clients succeed. Our clients' testimonials reflect the real impact we've made on their businesses. Read on to discover how our tailored solutions have transformed their visions into reality!",

        },


    }
}

export const SMAData = {
    BasicSMA: {

        heroSection: {
            //Hero section data start
            heading: "Elevate Your Brand with Expert Social Media Advertising",
            para: "Unlock the power of social media with our tailored advertising solutions. Whether you want to increase brand awareness, drive website traffic, or generate high-quality leads, our team creates engaging campaigns that deliver results. Let us help you connect with your audience and achieve your marketing goals on platforms like Facebook, Instagram, and LinkedIn.",
            img: heroImg,
            bg: BG,
        },
        // Hero section data ends 

        // Why Section start         
        whySection: {
            heading: "Why <span class= 'text-[#207DE9]'>Google Ads PPC</span> matters? ",
            para: "Unlock the full potential of your online presence with our tailored Google Ads PPC strategies. At DEVXCLOUD, we specialize in creating highly targeted, data-driven campaigns that place your brand directly in front of your ideal customers. By leveraging the precision of Google Ads, we help you maximize ROI, increase conversions, and drive meaningful traffic to your site. Say goodbye to the hassle of managing multiple agencies and hello to seamless, result-oriented advertising with a trusted leader in the industry. Partner with us to transform clicks into customers and boost your revenue effortlessly.",

            whyKeys: [
                { heading: "Targeted Ad Placement", explanation: 'Utilize Google Ads to strategically place your ads in front of targeted audiences who are actively searching for products like yours. Tailored ad placements lead to higher conversion rates and more effective use of your advertising budget.', icon: <FaBullseye /> },

                { heading: "Immediate Visibility", explanation: 'Achieve instant visibility on Google, bypassing the time it takes to see results from organic SEO strategies. Google Ads puts your brand at the top of search results, ensuring immediate exposure to potential customers.', icon: <FaRocket /> },

                { heading: "Flexible Budgeting", explanation: 'Control your spending with Google Ads’ flexible budgeting options. Set maximum bid amounts and daily spending limits to stay within your budget while maximizing ad performance and ROI.', icon: <FaMoneyBillWave /> },

                { heading: "Measurable ROI", explanation: 'Track the performance of your campaigns with precision. Google Ads provides detailed analytics that help you understand the effectiveness of your ads, allowing you to optimize your strategies and achieve better returns on investment.', icon: <FaChartLine /> },

                { heading: "Advanced Targeting Options", explanation: 'Google Ads offers advanced targeting options including demographic, geographic, and device targeting, ensuring your ads reach the exact audience you want.', icon: <FaUserTag /> },

                { heading: "Remarketing Capabilities", explanation: 'Re-engage visitors who have left your site without making a purchase. Google Ads remarketing helps you stay in front of these potential customers, increasing the likelihood of conversion.', icon: <FaRedoAlt /> },

                { heading: "Ad Extensions", explanation: 'Enhance your ads with additional information such as contact details, links to specific parts of your website, and more. Ad extensions improve visibility and increase click-through rates.', icon: <FaPlusCircle /> }
            ],
        },

        // why section end

        //Booster Section start here 
        boostSection: {
            heading: "Elevate Your Campaigns with <span class='text-[#207DE9]'>Advanced Social Media Advertising</span> Services.",
            para: "Leverage the power of social media platforms to connect with your audience, boost engagement, and drive conversions. Explore how strategic advertising can amplify your brand presence and deliver measurable results.",

            boostContent: [
                { navigator: "Overview", heading: "Strategic Social Media Advertising", para: "Tailor your advertising strategies to your unique business goals by focusing on audience engagement, creative content, and performance-driven campaigns. Our expertise ensures your brand stands out in the crowded social media space.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Campaign Setup", heading: "Optimized Campaign Structures", para: "Create well-organized campaigns with segmented ad sets targeting different audience groups. This approach allows for precise allocation of resources, ensuring your ads resonate with diverse customer segments.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Targeting Techniques", heading: "Advanced Targeting Options", para: "Utilize advanced audience targeting based on demographics, interests, behaviors, and location to reach the right people. This ensures your ads are shown to users most likely to engage with your brand.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Creative Content", heading: "Engaging Ad Creatives", para: "Design visually appealing ads using eye-catching visuals, videos, and compelling copy. Our creative team crafts content that grabs attention and encourages clicks, likes, and shares.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Performance Tracking", heading: "Data-Driven Insights", para: "Monitor campaign performance with detailed analytics to measure success and make informed adjustments. Our approach ensures continuous improvement and maximized ROI.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Remarketing Strategies", heading: "Effective Retargeting", para: "Re-engage users who’ve shown interest in your brand but haven’t converted. Retargeting campaigns bring these potential customers back with personalized ads that drive them to take action.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Conversion Optimization", heading: "Maximize Conversions", para: "Focus on turning ad interactions into measurable results by optimizing calls-to-action, landing pages, and user experiences. This ensures that your campaigns are designed to convert clicks into customers.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Budget Management", heading: "Efficient Budget Allocation", para: "Maximize your ad spend by allocating resources strategically across platforms. We continuously monitor and adjust your budget to achieve optimal performance and ensure cost-effectiveness.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                { navigator: "Call to Action", heading: "Get Started Today", para: "Invite potential clients to begin with a free consultation or social media audit, showcasing the benefits of partnering with your agency. This first step helps build trust and highlights your ability to deliver results.", image: "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },
            ],
        },


        //Booster Section ends here 

        //PowerBy starts here 

        powerBySection: {
            heading: "Social Media Advertising <span class='text-[#207DE9]'> Optimization Powered by </span> Data-Driven Insights",
            para: "Leverage the power of analytics to enhance ad performance, refine your strategies, and achieve exceptional ROI. Discover how data-driven decisions can transform your social media campaigns into high-performing marketing tools.",

            features: [
                { navigator: "Real-Time Analytics", text: "Track your campaign performance in real-time to identify what’s working and what needs adjustment. Immediate insights enable quick optimization, improving engagement and results.", icon: <IoAnalytics className='text-4xl text-[#6ADFD7]' /> },

                { navigator: "Audience Insights", text: "Dive deep into audience behavior and preferences with advanced data tools. These insights allow for tailored content and precise targeting, ensuring your ads resonate with the right audience.", icon: <GrAchievement className='text-4xl text-[#6ADFD7]' /> },

                { navigator: "Engagement Optimization", text: "Optimize engagement by analyzing interactions, refining ad creatives, and testing different formats. Data-driven enhancements can significantly boost likes, shares, and comments.", icon: <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7]' /> },
            ],

            statistics: [
                { benefit: "Increase in Engagement Rates", benefitText: "Average percentage increase in likes, comments, and shares after optimization of ad creatives and targeting.", increasePercentage: 50 },

                { benefit: "Improvement in Cost-per-Click", benefitText: "Reduction in cost-per-click, ensuring a more efficient use of your advertising budget.", increasePercentage: 30 },

                { benefit: "ROI from Social Media Ads", benefitText: "Return on investment from social media campaigns, reflecting the effectiveness of precise targeting and compelling content.", increasePercentage: 150 },
            ],
        },


        // Aproach section starts 
        approachSection: {
            heading: "Maximize Engagement with Our <span class='text-[#207DE9]'>Proven Social Media Marketing Strategy</span>",
            para: "Leverage our expert social media marketing services to create, implement, and manage campaigns that increase engagement, build brand loyalty, and drive conversions.",

            approaches: [
                {
                    heading: "Content-Driven Campaigns",
                    detail: 'Develop engaging and visually appealing content tailored to your target audience. From striking visuals to compelling copy, we ensure every post resonates with your audience and encourages interaction.',
                    icon: <FaRegNewspaper />,
                },

                {
                    heading: "Precision Audience Targeting",
                    detail: 'Utilize advanced targeting tools to reach users based on demographics, interests, and behaviors. This ensures your campaigns connect with the most relevant audience, driving meaningful engagement and conversions.',
                    icon: <FaUsers />,
                },

                {
                    heading: "Social Media Ad Optimization",
                    detail: 'Design and optimize ads for platforms like Facebook, Instagram, LinkedIn, and more. Continuous A/B testing of visuals, copy, and CTAs ensures your campaigns deliver maximum ROI.',
                    icon: <FaAd />,
                },

                {
                    heading: "Analytics-Driven Insights",
                    detail: 'Track campaign performance in real-time with detailed analytics. Use these insights to refine strategies, optimize spending, and achieve better results for your brand.',
                    icon: <FaChartPie />,
                },

                {
                    heading: "Community Engagement Strategies",
                    detail: 'Foster strong connections with your audience through active engagement strategies. Respond to comments, create interactive polls, and encourage user-generated content to build trust and loyalty.',
                    icon: <FaComments />,
                },
            ],
        },


        // approach section ends here 

        realResultsSection: {
            heading: "Real Results <span class='text-[#207DE9]'>for Social Media Success</span>",
            para: "Our social media advertising services are designed to deliver tangible outcomes. From boosting engagement to driving conversions, we’ve helped businesses achieve remarkable growth. By leveraging tailored strategies, compelling creatives, and precise targeting, we transform your campaigns into high-performing assets that maximize ROI and strengthen your brand presence.",

            results: [
                {
                    header: "Fashion and Apparel",
                    challenge: "Low engagement rates and limited audience reach on social platforms.",
                    approaches: [
                        "Eye-catching ad creative development",
                        "Demographic and interest-based targeting",
                        "Consistent campaign monitoring and optimization"
                    ],
                    increase: "180",
                    increaseIn: "Increase in engagement rates"
                },

                {
                    header: "Electronics and Gadgets",
                    challenge: "High ad spend with minimal sales conversions.",
                    approaches: [
                        "Custom retargeting campaigns",
                        "Optimized ad scheduling for peak activity hours",
                        "Compelling call-to-action strategies"
                    ],
                    increase: "140",
                    increaseIn: "Growth in conversion rates"
                },

                {
                    header: "Health and Fitness",
                    challenge: "Difficulty connecting with niche audiences and stagnant follower growth.",
                    approaches: [
                        "Community-driven content creation",
                        "Geo-targeted ad campaigns",
                        "Enhanced video and carousel ad formats"
                    ],
                    increase: "200",
                    increaseIn: "Improvement in audience reach"
                },

                {
                    header: "Home and Décor",
                    challenge: "High cost-per-click with low returns on ad spend.",
                    approaches: [
                        "Keyword relevance and ad copy improvements",
                        "Ad placement testing on multiple platforms",
                        "Data-driven budget allocation"
                    ],
                    increase: "170",
                    increaseIn: "Reduction in cost-per-click"
                },
            ],
        },


        // results section ends here 

        pricingSection: {
            heading: "Affordable Pricing Plans for Every Stage of Growth",
            para: "Choose from our transparent and flexible social media marketing plans, crafted to meet your business needs. Whether you're just starting or aiming to dominate your niche, our plans provide measurable results, strategic guidance, and maximum ROI.",

            pricingCards: [
                {
                    name: "basic plan",
                    header: "Basic Plan – \"Social Starter\"",
                    price: "$199/month",
                    fitFor: "Ideal for small businesses or individuals looking to establish a presence on social media with foundational strategies.",
                    youGet: [
                        "Platform Account Setup (Up to 2 Platforms)",
                        "Content Calendar Creation (8 Posts/Month)",
                        "Basic Graphic Design for Posts",
                        "Performance Tracking and Monthly Report",
                        "Hashtag Research and Application"
                    ],
                },
                {
                    name: "medium plan",
                    header: "Medium Plan – \"Engagement Booster\"",
                    price: "$499/month",
                    fitFor: "Perfect for growing businesses aiming to increase engagement and expand their reach with data-driven strategies.",
                    youGet: [
                        "Content Creation (Up to 4 Platforms, 16 Posts/Month)",
                        "Custom Ad Campaigns with A/B Testing",
                        "Community Engagement Management",
                        "Bi-weekly Performance Reports",
                        "Targeted Growth Strategies (Geo, Demographics, and Interests)",
                        "In-depth Analytics and Insights"
                    ],
                },
                {
                    name: "premium plan",
                    header: "Premium Plan – \"Social Powerhouse\"",
                    price: "$999/month",
                    fitFor: "Designed for large-scale businesses or influencers seeking to dominate their market with an advanced and comprehensive strategy.",
                    youGet: [
                        "Full Social Media Management (Up to 6 Platforms)",
                        "Unlimited Content Creation (Posts, Stories, Reels)",
                        "Advanced Ad Campaign Strategies with Budget Optimization",
                        "24/7 Community Engagement Support",
                        "Detailed Weekly Analytics and Strategic Insights",
                        "Dedicated Social Media Account Manager",
                        "Influencer Marketing Collaboration Support"
                    ],
                },
            ],
        },



        reviewsSection: {
            heading: "Join Our Community of <span className='text-[#207CE7]'>Thriving Brands</span>",
            para: "Every project we handle is fueled by a passion for helping businesses succeed. Our clients' testimonials show the real impact we've made on their growth. Read on to discover how our tailored social media strategies have helped brands gain visibility, engagement, and success!",
        },


    }
}