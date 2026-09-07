export const blogs = [
    {
        id: 'modern-web-architecture',
        title: 'Building Scalable Web Architectures in 2025',
        excerpt: 'Exploring the shift from traditional monoliths to distributed micro-frontends and edge computing.',
        content: `
            <p>The landscape of web architecture is evolving at an unprecedented pace. In 2025, we are seeing a definitive shift towards distributed systems that prioritize user experience and low latency.</p>
            <h2>The Rise of Edge Computing</h2>
            <p>Edge computing isn't just a buzzword anymore. By moving business logic closer to the user, we reduce transit times and improve the perceived performance of our applications significantly.</p>
            <pre><code>// Example of an Edge Function
export default async function handler(req) {
  const { city } = req.geo;
  return new Response(\`Hello from \${city}!\`);
}</code></pre>
            <h2>Micro-Frontends: Maturity or Complexity?</h2>
            <p>While micro-frontends offer team autonomy, they come with significant orchestration overhead. The key is finding the right balance between isolation and shared resources.</p>
        `,
        date: 'Dec 24, 2024',
        author: 'Sarah Mitchell',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        tags: ['Architecture', 'Tech']
    },
    {
        id: 'react-server-components-deep-dive',
        title: 'React Server Components: A New Era of Performance',
        excerpt: 'Understanding how RSCs change the way we think about data fetching and client-side interactivity.',
        content: `
            <p>React Server Components (RSC) represent one of the biggest shifts in the React ecosystem since hooks. They allow us to render components on the server, reducing the amount of JavaScript sent to the client.</p>
            <h2>Why Server Components?</h2>
            <p>The main benefit is the ability to access server-side resources directly (like databases or file systems) without the need for an intermediate API layer.</p>
        `,
        date: 'Dec 18, 2024',
        author: 'Sarah Mitchell',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        tags: ['React', 'Frontend']
    }
];

export const getBlogById = (id) => blogs.find(blog => blog.id === id);
