import { HeartIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AyushKumar2555",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.762-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-kumar-2b5064228/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.786-1.75-1.75s.784-1.75 1.75-1.75 1.75.786 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.605c0-1.337-.027-3.062-1.866-3.062-1.867 0-2.152 1.458-2.152 2.963v5.704h-3v-11h2.884v1.507h.041c.402-.761 1.384-1.562 2.847-1.562 3.043 0 3.607 2.001 3.607 4.604v6.451z" />
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ayushusername",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.924 4.924 0 0 0-8.384 4.482c-4.092-.205-7.725-2.164-10.158-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.216 2.188 4.099a4.904 4.904 0 0 1-2.228-.616v.062a4.927 4.927 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.936 4.936 0 0 0 4.604 3.419 9.869 9.869 0 0 1-6.102 2.105c-.395 0-.786-.023-1.17-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636A9.935 9.935 0 0 0 24 4.557z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ayushusername",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.632.422 3.678 1.376c-.954.954-1.245 2.097-1.304 3.374C2.013 5.668 2 6.077 2 9.335v5.33c0 3.259.013 3.667.074 4.948.059 1.277.35 2.42 1.304 3.374.954.954 2.097 1.245 3.374 1.304 1.281.061 1.689.074 4.948.074s3.667-.013 4.948-.074c1.277-.059 2.42-.35 3.374-1.304.954-.954 1.245-2.097 1.304-3.374.061-1.281.074-1.689.074-4.948v-5.33c0-3.258-.013-3.667-.074-4.948-.059-1.277-.35-2.42-1.304-3.374-.954-.954-2.097-1.245-3.374-1.304C15.667.013 15.259 0 12 0z" />
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
      </svg>
    )
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-primary-400">Port</span>folio
            </a>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Creating digital experiences that inspire and innovate.
              Let's build the future together, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm flex items-center">
            Made with <HeartIcon className="h-4 w-4 text-red-500 mx-1" /> by Ayush Kumar
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <a href="#home" className="mt-4 md:mt-0 p-2 bg-primary-500 rounded-full hover:bg-primary-600 transition-colors">
            <ArrowUpIcon className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
