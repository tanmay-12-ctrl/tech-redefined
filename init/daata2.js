const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      content:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 42, // Hardcoded likeCount
      category: "Outwear",
      owner: "6778b983df2a55bdfa8964f9", // Hardcoded owner ID
    },
    {
      title: "Modern Loft in Downtown",
      content:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 67, // Hardcoded likeCount
      category: "Tops",
      owner: "6778b983df2a55bdfa8964fb", // Hardcoded owner ID
    },
    {
      title: "Mountain Retreat",
      content:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      likeCount: 12, // Hardcoded likeCount
      category: "Footwear",
      owner: "6778b983df2a55bdfa8964fd", // Hardcoded owner ID
    },
    {
      title: "Historic Villa in Tuscany",
      content:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      likeCount: 89, // Hardcoded likeCount
      category: "Dresses",
      owner: "6778b983df2a55bdfa8964ff", // Hardcoded owner ID
    },
    {
      title: "Secluded Treehouse Getaway",
      content:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 33, // Hardcoded likeCount
      category: "Accessories",
      owner: "6778b983df2a55bdfa896501", // Hardcoded owner ID
    },
    {
      title: "Beachfront Paradise",
      content:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 21, // Hardcoded likeCount
      category: "Bottomwear",
      owner: "6778b983df2a55bdfa8964f9", // Hardcoded owner ID
    },
    {
      title: "Rustic Cabin by the Lake",
      content:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      likeCount: 54, // Hardcoded likeCount
      category: "Dresses",
      owner: "6778b983df2a55bdfa8964fb", // Hardcoded owner ID
    },
    {
      title: "Luxury Penthouse with City Views",
      content:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image:
        "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 76, // Hardcoded likeCount
      category: "Footwear",
      owner: "6778b983df2a55bdfa8964fd", // Hardcoded owner ID
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      content:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image:
        "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      likeCount: 65, // Hardcoded likeCount
      category: "Tops",
      owner: "6778b983df2a55bdfa8964f9", // Hardcoded owner ID
    },
    {
      title: "Safari Lodge in the Serengeti",
      content:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      likeCount: 54, // Hardcoded likeCount
      category: "Dresses",
      owner: "6778b983df2a55bdfa8964ff", // Hardcoded owner ID
    },
    {
      title: "Historic Canal House",
      content:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 99, // Hardcoded likeCount
      category: "Accessories",
      owner: "6778b983df2a55bdfa896501", // Hardcoded owner ID
    },
    {
      title: "Private Island Retreat",
      content:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image:
        "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 34, // Hardcoded likeCount
      category: "Bottomwear",
      owner: "6778b983df2a55bdfa8964f9", // Hardcoded owner ID
    },
    {
      title: "Charming Cottage in the Cotswolds",
      content:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image:
        "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      likeCount: 88, // Hardcoded likeCount
      category: "Tops",
      owner: "6778b983df2a55bdfa8964fb", // Hardcoded owner ID
    }
  ];
  module.exports = { data: sampleListings };  