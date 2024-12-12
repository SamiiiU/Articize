import { FaCartShopping, FaLink, FaMagnifyingGlass } from 'react-icons/fa6'
import heroImg from '../../Assets/Images/ServicesIMG/EcommerceBG.png'
import { MdOutlineMobileFriendly } from 'react-icons/md'
import { GrAchievement, GrOptimize } from 'react-icons/gr'
import { IoAnalytics } from 'react-icons/io5'
import { SiGooglecontaineroptimizedos } from 'react-icons/si'



export const SEOData = {
    
        SEO : {
            EcommerceSEO : {
                //Hero section data start
                heroHeading : "E-commerce SEO for Enhanced Online Sales",
                heroText : "Unlock the full potential of your online store with specialized E-commerce SEO strategies designed to boost your visibility and sales. Our expert team combines industry-leading techniques with deep e-commerce insights to optimize your product listings, improve user experience, and drive targeted traffic that converts. From technical SEO to content optimization and competitor analysis, we provide a comprehensive approach that not only enhances your search engine rankings but also increases your conversion rate. Partner with us to transform your e-commerce platform into a sales powerhouse!",
                heroIMG : heroImg ,

                // Hero section data ends 
                // Why Section start 
        
                whyHeading : "Why <span class= 'text-[#207DE9]'>E-Commerce SEO</span> matters? ",
                whyPara : "By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.",
        
                whyKeys : [
                    {heading : "Keyword Optimization" , explanation : 'Conduct thorough keyword research to identify the most effective keywords for your products. Optimize product titles, descriptions, and meta tags with these keywords to increase search visibility.' , icon : <FaMagnifyingGlass/>},
        
                    {heading : "Product Page SEO" , explanation : 'Write clear, informative, and keyword-rich descriptions for each product. This helps search engines understand your products and improves the chances of ranking higher for relevant searches.' , icon : <FaMagnifyingGlass/>},
        
                    {heading : "Content Strategy for Ecommerce" , explanation : 'Create helpful content like product guides, how-to blogs, and FAQs to drive organic traffic. Content should focus on solving customer problems and using keywords naturally.' , icon : <FaMagnifyingGlass/>},
        
                    {heading : "Backlink Building" , explanation : 'Work on building backlinks from authoritative websites within your industry. This helps increase domain authority and improves rankings for product pages.' , icon : <FaMagnifyingGlass/>}
                ],
                // why section end
                //Booster Section start here 

                boostHeading : "Boost Your Online Store's Performance with <span class= 'text-[#207DE9]'>  Specialized <br/> E-commerce SEO </span> Services.",
                boostPara : "Emphasize the unique challenges and opportunities of e-commerce SEO, such as improving product visibility, optimizing for buyer-intent keywords, and enhancing user experience to drive conversions.",

                boostContent : [
                    {navigator : "Overview" , heading : "Customized E-commerce SEO" ,  para : "Instead of a generic overview, focus specifically on how you tailor SEO strategies to e-commerce platforms, considering factors like seasonal trends, product turnover, and competitive benchmarking." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "SEO Audits" , heading : "E-commerce Specific Audits" ,  para : "Detail audits that focus on product pages, category structure, and user navigation paths, which are critical for e-commerce sites." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Keyword Research" , heading : "Buyer-Intent Keywords" ,  para : "Highlight the importance of researching and targeting keywords that are specifically geared towards buying intent, critical for driving sales in e-commerce." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Link Building" , heading : "Supplier and Manufacturer Links" ,  para : "Discuss the importance of building relationships with suppliers and manufacturers for backlinks, which can be highly beneficial for e-commerce sites." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "On-page SEO" , heading : "Product Page Optimization" ,  para : "Focus on optimizing product pages with high-quality images, compelling descriptions, and SEO-friendly URLs." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Off-page SEO" , heading : "Customer Reviews and Social Proof" ,  para : "Explain strategies for leveraging customer reviews and social proof as part of off-page SEO to enhance trust and authority." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Technical SEO" , heading : "Site Speed and Mobile Optimization " ,  para : "Emphasize the importance of technical SEO with a focus on improving site speed and mobile responsiveness, crucial for e-commerce sites where users often shop on mobile devices." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Content Creation and Optimization" , heading : "Engaging Product Descriptions" ,  para : "Discuss creating engaging, unique product descriptions and using rich media content like videos to enhance product listings." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Visual and Interactive Elements" , heading : "Infographic or Video" ,  para : "Replace the existing video or image with content that explains your unique approach to E-commerce SEO, possibly an infographic outlining your process or a video testimonial from a satisfied e-commerce client." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },

                    {navigator : "Call to Action" , heading : "Specific to E-commerce" ,  para : "Tailor the call to action to encourage e-commerce businesses to request a free audit or consultation ." , image : "https://png.pngitem.com/pimgs/s/215-2159037_careers-in-digital-marketing-web-development-career-development.png" },
                ],

                //Booster Section ends here 
                
                //PowerBy starts here 

                powerByHeading : "E-commerce Optimization Powered by Data-Driven Insights",
                powerBySubtitle : "Harness the power of advanced analytics to elevate your online store's search rankings and drive more sales.",
                powerByDescription : "Content Description Introduction: Briefly describe your specialized tool or methodology for e-commerce SEO, emphasizing how it integrates with popular e-commerce platforms (like Shopify, WooCommerce) to drive specific improvements",

                powerByFeatures: [
                    {navigator : "Real-Time Analytics" , text : "Discuss how your tool provides real-time analytics on product performance, customer engagement, and SEO effectiveness, allowing clients to make informed decisions quickly." , icon : <IoAnalytics className='text-4xl text-[#6ADFD7] '/>},

                    {navigator : "Competitor Benchmarking" , text : "Highlight features that enable clients to benchmark their SEO practices against competitors, focusing on pricing strategies, keyword utilization, and market positioning." , icon : < GrAchievement className='text-4xl text-[#6ADFD7] '/>},

                    {navigator : "Conversion Optimization" , text : "Mention how the tool helps identify and implement changes that boost conversion rates, such as optimized product descriptions, improved site navigation, and mobile optimization." , icon : <SiGooglecontaineroptimizedos className='text-4xl text-[#6ADFD7] '  />},                   
                ],

                powerByStatistics : [
                    
                    {benefit : "Increase in Organic Traffic" , benefitText : "Adapt the statistics to reflect the measurable outcomes relevant to e-commerce, such as" , increasePercentage : 200},

                    {benefit : "Improvement in Conversion Rates" , benefitText : "average improvement in conversion rates after implementing your SEO strategies." , increasePercentage : 100},

                    {benefit : "ROI from SEO Investments" , benefitText : "return on investment that e-commerce businesses typically see when they use our SEO services." , increasePercentage : 300},

                ],

                // Aproach section starts 

                approachHeading : "Our Proven E-commerce <span class= 'text-[#207DE9]'> SEO Strategy </span>",
                approachPara : "Get everything needed to develop, implement, and manage a revenue-generating SEO plan with our ecommerce SEO services",

                approaches : [
                    {heading : "Keyword Research Tailored to Products" , detail : 'Identify high-intent, product-specific keywords your customers are searching for. Helps your products appear directly in search results when customers are ready to buy.' , icon : <FaMagnifyingGlass/>},

                    {heading : "Product Page Optimization" , detail : 'Optimize product titles, descriptions, and alt text for images with targeted keywords. Boosts individual product rankings and increases discoverability in search engines.' , icon : <FaCartShopping/>},

                    {heading : "Backlink Building for E-commerce" , detail : 'Acquire backlinks from niche-relevant, high-authority websites to improve your store’s credibility. Builds trust with search engines, helping your site rank higher.' , icon : <FaLink/>},

                    {heading : " Mobile-First SEO Implementation" , detail : 'Ensure your e-commerce store is fully optimized for mobile devices with fast load times and seamless navigation. Mobile users make up a large percentage of online shoppers, and search engines prioritize mobile-friendly sites.' , icon : <MdOutlineMobileFriendly/>},

                    {heading : "Optimizing for Site Speed" , detail : 'Minimize load times by compressing images, optimizing scripts, and leveraging browser caching. Faster sites rank higher and reduce cart abandonment rates.' , icon : <GrOptimize/>},
        
                  
                ],

                // approach section ends here 
                
                // results section starts 
                resultHeading : "Real Results <span class= 'text-[#207DE9]'>for Real E-commerce</span> Growth" ,
                resultPara : "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

                results : [
                    {header : "Ecommerce - Tools and Hardware" , challenge : "We'll walk through all the different ways to use gradients in your work, as well as techniques" , approaches : [
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy"
                    ], increase : "450" , increaseIn : "Growth in organic calls"},
                    {header : "Ecommerce - Tools and Hardware" , challenge : "We'll walk through all the different ways to use gradients in your work, as well as techniques" , approaches : [
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy"
                    ], increase : "450" , increaseIn : "Growth in organic calls"},
                    {header : "Ecommerce - Tools and Hardware" , challenge : "We'll walk through all the different ways to use gradients in your work, as well as techniques" , approaches : [
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy"
                    ], increase : "450" , increaseIn : "Growth in organic calls"},
                    {header : "Ecommerce - Tools and Hardware" , challenge : "We'll walk through all the different ways to use gradients in your work, as well as techniques" , approaches : [
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy",
                        "PPC investment reaallocation strategy"
                    ], increase : "450" , increaseIn : "Growth in organic calls"},
                ],

                // results section ends here 

                pricingHeading : "Transparent Pricing for Every Stage of Growth",
                pricingPara : "At the heart of our e-commerce SEO strategy lies a commitment to delivering measurable outcomes. From boosting organic traffic to skyrocketing product sales, we’ve helped countless online stores achieve sustainable growth. Our tailored approach ensures that every keyword, backlink, and optimization effort drives tangible results—turning your store into a revenue-generating powerhouse.",

                pricingCards : [
                    {
                    name : "basic plan" ,
                    header : "Starter Plan – \"The Essentials\"" ,
                    price : "499/month",
                    fitFor : "We'll walk through all the different ways to use gradients in your work, as well as techniques",
                    youGet : [
                        "Advanced SEO (Keyword Strategy, Link Building, Technical Optimization)" ,
                        "On-Page SEO (Meta Tags, Headers, Product Descriptions)",
                        "PPC Campaign Management (Mid-Budget Campaigns)",
                        "Basic Technical SEO (Site Audit & Fixes)",
                        "XML Sitemap Creation & Submission",
                        "Monthly Performance Report"
                     ],

                    }, 
                    {
                        name : "basic plan" ,
                        header : "Starter Plan – \"The Essentials\"" ,
                        price : "499/month",
                        fitFor : "We'll walk through all the different ways to use gradients in your work, as well as techniques",
                        youGet : [
                            "Advanced SEO (Keyword Strategy, Link Building, Technical Optimization)" ,
                            "On-Page SEO (Meta Tags, Headers, Product Descriptions)",
                            "PPC Campaign Management (Mid-Budget Campaigns)",
                            "Basic Technical SEO (Site Audit & Fixes)",
                            "XML Sitemap Creation & Submission",
                            "Monthly Performance Report"
                         ],
    
                        }, 

                        {
                            name : "basic plan" ,
                            header : "Starter Plan – \"The Essentials\"" ,
                            price : "499/month",
                            fitFor : "We'll walk through all the different ways to use gradients in your work, as well as techniques",
                            youGet : [
                                "Advanced SEO (Keyword Strategy, Link Building, Technical Optimization)" ,
                                "On-Page SEO (Meta Tags, Headers, Product Descriptions)",
                                "PPC Campaign Management (Mid-Budget Campaigns)",
                                "Basic Technical SEO (Site Audit & Fixes)",
                                "XML Sitemap Creation & Submission",
                                "Monthly Performance Report"
                             ],
        
                            }, 
                    
                ]

                
            }
        }

    
}