export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Discover the power of utility-first CSS with Tailwind",
    },
    {
      id: 3,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development",
    },
  ];

  return (
    <div className="space-y-6">
      <h1>Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
