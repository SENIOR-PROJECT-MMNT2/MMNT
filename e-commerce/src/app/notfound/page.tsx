export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-semibold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-4">Oops! Looks like you're lost.</p>
      <div className="animate-bounce">
        <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <p className="text-gray-600 mt-4">Let's get you back <a href="/" className="text-blue-500">home</a>.</p>
    </div>
  );
}
