function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <svg
        width="70"
        height="70"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path d="M22.883 28.825a1.042 1.042 0 0 1-.735-.304l-1.552-1.548a1.042 1.042 0 1 1 1.471-1.475l.817.815 2.46-2.458a1.042 1.042 0 0 1 1.475 1.473l-3.198 3.194a1.05 1.05 0 0 1-.738.304zm19.485-.306 3.196-3.192a1.042 1.042 0 0 0-1.473-1.473l-2.46 2.458-.817-.815a1.042 1.042 0 1 0-1.471 1.475l1.554 1.548a1.035 1.035 0 0 0 1.471-.002zM9.431 15.525l5.327-3.302a2.083 2.083 0 0 0 .013-3.535L9.444 5.333A2.083 2.083 0 0 0 6.25 7.096v6.658a2.085 2.085 0 0 0 3.181 1.771zm4.229-5.075-5.327 3.304V7.096l5.327 3.354zM50 26.042c0 4.021-3.271 7.292-7.292 7.292a7.298 7.298 0 0 1-7.208-6.25h-4.333a7.298 7.298 0 0 1-7.208 6.25 7.296 7.296 0 0 1-7.208-6.25h-1.163a7.226 7.226 0 0 1-5.171-2.171v10.504a6.257 6.257 0 0 0 6.25 6.25h.083c.508-3.527 3.542-6.25 7.208-6.25 4.021 0 7.292 3.271 7.292 7.292S27.979 50 23.958 50a7.296 7.296 0 0 1-7.208-6.25h-.083c-4.596 0-8.333-3.738-8.333-8.333V20.623A10.433 10.433 0 0 1 0 10.417C0 4.673 4.673 0 10.417 0s10.417 4.673 10.417 10.417A10.427 10.427 0 0 1 10.517 20.83 5.171 5.171 0 0 0 15.588 25h1.163c.508-3.527 3.542-6.25 7.208-6.25A7.296 7.296 0 0 1 31.167 25H35.5a7.298 7.298 0 0 1 7.208-6.25c4.021 0 7.292 3.271 7.292 7.292zM18.75 42.709c0 2.871 2.338 5.208 5.208 5.208s5.208-2.338 5.208-5.208-2.338-5.208-5.208-5.208-5.208 2.337-5.208 5.207zM10.417 18.75c4.596 0 8.333-3.738 8.333-8.333s-3.737-8.334-8.333-8.334-8.334 3.738-8.334 8.334 3.738 8.333 8.333 8.333zm18.75 7.292c0-2.871-2.338-5.208-5.208-5.208s-5.209 2.337-5.209 5.208 2.338 5.208 5.208 5.208 5.208-2.338 5.208-5.208zm18.75 0c0-2.871-2.338-5.208-5.208-5.208S37.5 23.171 37.5 26.042s2.338 5.208 5.208 5.208 5.208-2.338 5.208-5.208zM20.834 42.709a1.042 1.042 0 1 0 2.083 0 1.042 1.042 0 0 0-2.083 0zm4.167 0a1.042 1.042 0 1 0 2.083 0 1.042 1.042 0 0 0-2.083 0zm25 0c0 4.021-3.271 7.292-7.292 7.292a7.298 7.298 0 0 1-7.208-6.254c-.015.002-.027.01-.044.01l-1.054.035h-.035a1.042 1.042 0 0 1-.033-2.081l1.054-.035c.037-.004.073.013.108.015a7.298 7.298 0 0 1 7.211-6.274c4.021 0 7.292 3.271 7.292 7.292zm-2.083 0c0-2.871-2.338-5.208-5.208-5.208s-5.21 2.337-5.21 5.207 2.338 5.208 5.208 5.208 5.208-2.338 5.208-5.208z" />
      </svg>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;