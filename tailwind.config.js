/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
      extend: {
        colors: {
            'text': 'var(--text)',
            'background': 'var(--background)',
            'primary': 'var(--primary)',
            'secondary': 'var(--secondary)',
            'accent': 'var(--accent)',
           },
           
      },
    },
    plugins: [],
  }
  