 const residentialProjects = [
    {
      id: 1,
      title: "Shivalik Avenue",
      subtitle: "Modern Urban Living",
      category: "Residential",
      details: ["3 BHK", "1500 sqft", "Ahmedabad"],
      bg:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      locality:'Bodakdev, Ahmedabad',
      area:'Bodakdev | Ready to move',
      bt1:'Apartment',
      bt2:'Buy',
      bt3:'Invest',
      images : [
       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3',
       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
      ],
      segment:"Luxury",
      address:'Shivalik Avenue, Near Nirma Vidya Vihar School, Bodakdev Fire Station Road, Bodakdev, Ahmedabad 380054',
      bhk:"4 BHK",
      build:"3270 - 3275 Sq Ft",
      price :'₹ 2.4 Cr - 2.45 Cr',
      possession:'Ready to Move',
      nou:'121 Units',
      rera : "PR/GJ/AHMEDABAD/AHMEDABAD CI TY/AUDA/MAA02517/260418",
      developer:'Shivalik Group',
      ptype:'Apartment',
      parea:'1.26 Acres',
      ownership:'Freehold',
      not:'1 Towers',
      nof:'7 Floors',
      parking:'Two Wheeler, Four Wheeler',
      overviewpara1:'Shivalik Avenue is one of the finest buildings built by the renowned Shivalik House in Ahmedabad. This property is a perfect blend of classy designs with a fusion of vision and thoughts that add convenience.',
      overviewpara2:'The project is crafted with the addition of technology and aesthetic touch. This place is a perfect destination to live your life how you want. It is a place for those individuals who wish to experience a rejuvenating experience with lifetime scenic views. Surrounded by a friendly neighborhood and many landmark places such as Bharat Petrol Pump, Bodakdev Police Station, Nirma Vidyamandir, The Grand Bhagwati, IDBI Bank, and for free travelers SG Highway.',
      floorimg:'https://houssed.com/Assets/Files/Projects/1491/BHK_Configuration/1491_1678021504_8c303b82f90dc4958f8739feeea6444c.webp',
      video:'https://www.youtube.com/embed/QV9v6MGfcWs',
   

    },

    {
      id: 2,
      title: "Zion Z1",
      subtitle: "A Retreat in Nature",
      images: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      category: "Residential",
      details: ["4 BHK", "2500 sqft", "Suburban"],
    },
    {
      id: 3,
      title: "Skyline Towers",
      subtitle: "Living Above the Clouds",
      images: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      category: "Residential",
      details: ["2 BHK", "1200 sqft", "City Center"],
    },
    {
      id: 4,
      title: "Cozy Cottages",
      subtitle: "Warm and Comfortable Living",
      images: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      category: "Residential",
      details: ["3 BHK", "1800 sqft", "Hillside"],
    },
    {
      id: 5,
      title: "Eco Homes",
      subtitle: "Green Living for Modern Families",
      images: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      category: "Residential",
      details: ["2 BHK", "1000 sqft", "Eco Park"],
    },
    {
      id: 6,
      title: "Urban Villas",
      subtitle: "Luxury in the Heart of the City",
      images: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      category: "Residential",
      details: ["5 BHK", "3000 sqft", "Metro Area"],
    },
    {
      id: 7,
      title: "Shreeji Villa",
      subtitle: "Perfect Homes for Families",
      images: "https://images.pexels.com/photos/29334668/pexels-photo-29334668/free-photo-of-modern-luxury-villa-with-pool-in-brazil.png?auto=compress&cs=tinysrgb&w=600",
      category: "Residential",
      details: ["4 BHK", "2200 sqft", "Residential Zone"],
    },
    {
      id: 8,
      title: "Affordable House",
      subtitle: "Homes Within Your Budget",
      images: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80",
      category: "Residential",
      details: ["1 BHK", "600 sqft", "Outer Suburb"],
    },
  ];
  
  const commercialProjects = [
    {
      id: 1,
      title: "Tech Park",
      subtitle: "High-tech Office Spaces",
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Commercial",
      details: ["Office Spaces", "5000 sqft", "IT Hub"],
    },
    {
      id: 2,
      title: "Law Park",
      subtitle: "Ganesh Glory",
      image: "https://images.pexels.com/photos/4515802/pexels-photo-4515802.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Commercial",
      details: ["Retail Units", "1200 sqft", "Mall Road"],
    },
    {
      id: 3,
      title: "Business Towers",
      subtitle: "Premium Office Buildings",
      image: "https://www.shivalikgroup.com/wp-content/uploads/2024/11/wave-img-5.webp",
      category: "Commercial",
      details: ["Office Spaces", "8000 sqft", "City Center"],
    },
    {
      id: 4,
      title: "Innovation Hub",
      subtitle: "Co-working Spaces",
      image: "https://www.shivalikgroup.com/wp-content/uploads/2024/11/trophy-banner.webp",
      category: "Commercial",
      details: ["Co-working Spaces", "3000 sqft", "Tech Park Area"],
    },
    {
      id: 5,
      title: "Conference Center",
      subtitle: "State-of-the-art Facilities",
      image: "https://www.shivalikgroup.com/wp-content/uploads/2024/10/curv-listing.webp",
      category: "Commercial",
      details: ["Event Spaces", "1500 sqft", "Downtown"],
    },
    {
      id: 6,
      title: "Creative Studios",
      subtitle: "Art and Design Offices",
      image: "https://images.pexels.com/photos/5523243/pexels-photo-5523243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Commercial",
      details: ["Studio Offices", "2200 sqft", "Creative District"],
    },
    {
      id: 7,
      title: "Corporate Park",
      subtitle: "Office Buildings for Enterprises",
      image: "https://images.pexels.com/photos/9737575/pexels-photo-9737575.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      category: "Commercial",
      details: ["Office Units", "10000 sqft", "Business District"],
    },
    {
      id: 8,
      title: "Luxury Mall",
      subtitle: "Upscale Shopping Experience",
      image: "https://images.pexels.com/photos/8200435/pexels-photo-8200435.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      category: "Commercial",
      details: ["Retail Shops", "7000 sqft", "Luxury Street"],
    },
 
  ];
  
  
  
  const plotProjects = [
    {
      id: 1,
      title: "Suburban Plot",
      subtitle: "Perfect for Villas",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "2500 sqft", "Suburbia"],
    },
    {
      id: 2,
      title: "City View Plot",
      subtitle: "Ideal for Residential Buildings",
      image: "https://images.unsplash.com/photo-1506150194731-e3f392f8d52b?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "3500 sqft", "City Center"],
    },
    {
      id: 3,
      title: "Mountain View Plot",
      subtitle: "Perfect for Summer Homes",
      image: "https://images.unsplash.com/photo-1518290193666-56de63c0d48b?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "4000 sqft", "Mountain Side"],
    },
    {
      id: 4,
      title: "Coastal Plot",
      subtitle: "Beachfront Development Opportunity",
      image: "https://images.unsplash.com/photo-1555285736-cfe4a31abf63?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "5000 sqft", "Seaside"],
    },
    {
      id: 5,
      title: "Urban Residential Plot",
      subtitle: "Close to Amenities",
      image: "https://images.unsplash.com/photo-1529208220849-7249a29f77db?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "3000 sqft", "Urban Area"],
    },
    {
      id: 6,
      title: "Green Acres",
      subtitle: "Ideal for Eco-friendly Homes",
      image: "https://images.unsplash.com/photo-1567405299-0da5a1e503bc?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "6000 sqft", "Greenbelt"],
    },
    {
      id: 7,
      title: "Prime Commercial Plot",
      subtitle: "Strategic Location for Businesses",
      image: "https://images.unsplash.com/photo-1535683561310-73a507fba537?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "7000 sqft", "Business Hub"],
    },
    {
      id: 8,
      title: "Vibrant Neighborhood Plot",
      subtitle: "For Modern Housing",
      image: "https://images.unsplash.com/photo-1570145208083-bdd2a5f88b30?auto=format&fit=crop&q=80",
      category: "Plots",
      details: ["Plot", "5500 sqft", "Vibrant Area"],
    },
 
  ];
  

  const industrialProjects = [
    {
      id: 1,
      title: "Industrial Park",
      subtitle: "For Manufacturing Units",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Factory Spaces", "10000 sqft", "Industrial Area"],
    },
    {
      id: 2,
      title: "Tech Manufacturing Hub",
      subtitle: "State-of-the-art Industrial Spaces",
      image: "https://images.unsplash.com/photo-1581005195875-1f57bfcba04a?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Manufacturing Units", "15000 sqft", "Tech District"],
    },
    {
      id: 3,
      title: "Logistics Center",
      subtitle: "Distribution and Warehousing Spaces",
      image: "https://images.unsplash.com/photo-1580587769992-d980157597f7?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Warehouses", "20000 sqft", "Logistics Zone"],
    },
    {
      id: 4,
      title: "Advanced Factory Space",
      subtitle: "Modern Facilities for Production",
      image: "https://images.unsplash.com/photo-1601015676342-c5dbeb6c5d1f?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Production Units", "25000 sqft", "Manufacturing District"],
    },
    {
      id: 5,
      title: "Heavy Industrial Units",
      subtitle: "For Large Scale Manufacturing",
      image: "https://images.unsplash.com/photo-1531164733484-83163d8f100b?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Industrial Units", "30000 sqft", "Heavy Industry Area"],
    },
    {
      id: 6,
      title: "Automotive Production Park",
      subtitle: "Dedicated to Automotive Manufacturing",
      image: "https://images.unsplash.com/photo-1589307423030-e17613c55172?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Manufacturing Units", "35000 sqft", "Automotive Hub"],
    },
    {
      id: 7,
      title: "Green Energy Facility",
      subtitle: "For Renewable Energy Production",
      image: "https://images.unsplash.com/photo-1594721944589-d11b16b65c8b?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Energy Units", "18000 sqft", "Renewable Energy Zone"],
    },
    {
      id: 8,
      title: "Cold Storage Complex",
      subtitle: "Temperature-controlled Warehouse",
      image: "https://images.unsplash.com/photo-1591345427589-11e37488a59c?auto=format&fit=crop&q=80",
      category: "Industrial",
      details: ["Cold Storage", "22000 sqft", "Industrial Park"],
    },
  
   
  ];
  
  
  export { residentialProjects, commercialProjects, plotProjects, industrialProjects };
  