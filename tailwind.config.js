module.exports = {
  // Configuration for Tailwind CSS to scan for classes and generate utility styles
  content: [
    // Scan the index.html file for classes
    "./index.html",
    // Scan all files with the following extensions in the src directory and its subdirectories
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Custom theme configuration
  theme: {
    extend: {
      // Custom color palette
      colors: {
        // Primary color (used for buttons, links, etc.)
        primary: "#1E40AF",
        // Secondary color (used for backgrounds, hover effects, etc.)
        secondary: "#6366F1",
        // Accent color (used for highlights, icons, etc.)
        accent: "#F59E0B",
        // Background color (used for page backgrounds, etc.)
        background: "#F3F4F6",
        // Primary text color (used for headings, paragraphs, etc.)
        textPrimary: "#FFF",
        // Muted text color (used for secondary text, etc.)
        textMuted: "#6B7280",
        // Error color (used for error messages, etc.)
        error: "#EF4444",
      },

      // Custom font family
      fontFamily: {
        // Sans-serif font family (used for body text, etc.)
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  // List of plugins to use with Tailwind CSS
  plugins: [],
};
