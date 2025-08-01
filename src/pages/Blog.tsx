import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import hacker from '@/assets/hacker.jpeg';
import WhatsApp from '@/assets/Whatsapp.png';
import cyber from '@/assets/cyber.png';

const blogPosts = [
  {
    id: 1,
    title: "Vulnerability haunts over a million Kenyan Businesses, more could be at risk!",
    excerpt: "Kenya’s Business Registration Service (BRS) experienced a significant cyberattack on the night of 31 January 2025, resulting in a data breach that exposed sensitive information.",
    author: "Afrensics Security",
    date: "February 25, 2025",
    category: "Threats",
    image: hacker,
    featured: true
  },
  {
    id: 2,
    title: "Bugs target mobile money in WhatsApp attacks ",
    excerpt: "Users of WhatsApp, one of the most popular messaging platforms globally, have faced various vulnerabilities in recent years, affecting users worldwide, like the zero-click, no-interaction required hacking attack acknowledged by Meta this year. ",
    author: "Afrensics Security",
    date: "May 26, 2025",
    category: "Tips",
    image: WhatsApp,
  },
  {
    id: 3,
    title: "May 2025 Africa Cyber Incidents and Responses",
    excerpt: "The state-owned Commercial Bank of Ethiopia (CBE), which has denied losing $51m from its internal account. The Addis Standard news website reported on 29 May that an attempted fraud was thwarted within minutes. ",
    author: "Afrensics Security",
    date: "May 30, 2025",
    category: "Trends",
    image: cyber,
  },
  {
    id: 4,
    title: "Cloud Security Best Practices for Kenyan SMEs",
    excerpt: "Small and medium enterprises are increasingly moving to the cloud. Here's how to ensure your cloud infrastructure remains secure and compliant.",
    author: "",
    date: "Coming Soon",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Phishing Attacks Target Mobile Banking Users in Kenya",
    excerpt: "Mobile money and banking users are facing sophisticated phishing attacks. Learn how to identify and avoid these dangerous scams.",
    author: "",
    date: "Coming Soon",
    category: "Threats",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "The Rise of AI in Cybersecurity: Opportunities and Challenges",
    excerpt: "Artificial Intelligence is transforming cybersecurity. Explore how AI is being used to enhance security and the new challenges it brings.",
    author: "",
    date: "Coming Soon",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  }
];

const categories = ["All", "Threats", "Tips", "Trends", "Breaches", "Updates"];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity threats, trends, and best practices. 
            Expert insights from Kenya's leading security professionals.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map(post => (
                <Card key={post.id} className="mb-12 card-gradient shadow-hero overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white">
                        Featured
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm">
                            Read More <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Regular Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <Card key={post.id} className="card-gradient shadow-card hover:shadow-hero transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <CardTitle className="text-lg font-semibold line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <Card className="mb-8 card-gradient shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search Articles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="flex-1 px-3 py-2 border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button size="sm" className="rounded-l-none">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-8 card-gradient shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button 
                        key={category}
                        className="block w-full text-left px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Posts */}
              <Card className="card-gradient shadow-card">
                <CardHeader>
                  <CardTitle>Latest Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex space-x-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 mb-1">{post.title}</h4>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;