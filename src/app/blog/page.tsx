export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-500">
            We're preparing insightful articles about product development, 
            startup building, and technology trends.
          </p>
          <a 
            href="/" 
            className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}