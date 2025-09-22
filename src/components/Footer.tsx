import { useState } from 'react';
import { CoffeeIcon, HeartIcon, MailIcon, GithubIcon, LinkedinIcon, SendIcon } from 'lucide-react';
import { Notification } from './Notification';
export function Footer() {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    setSubmittedEmail(email);
    setShowNotification(true);
    setEmail('');
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  return <footer className="bg-friends-maroon text-white py-10 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-friends-nude opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-friends-nude opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white opacity-5 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-white opacity-5 transform -translate-y-1/2"></div>
      {/* Left side silhouette */}
      <div className="absolute bottom-0 left-0 w-40 h-32 opacity-50">
        <img 
          src="/IMG_6890.png" 
          alt="Friends silhouette" 
          className="w-full h-full object-cover filter" 
        />
      </div>
      
      {/* Right side silhouette */}
      <div className="absolute top-0 right-0 w-32 h-40 opacity-55">
        <img 
          src="/IMG_6890.png" 
          alt="Friends silhouette" 
          className="w-full h-full object-cover filter" 
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full mb-8">
            <h3 className="text-xl font-bold mb-4 text-center">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-friends-nude" required />
              <button type="submit" className="bg-friends-nude text-friends-maroon px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2">
                <SendIcon size={18} />
                Send
              </button>
            </form>
          </div>
          <div className="flex space-x-6 mb-6">
            <a href="mailto:areejrazzaq00@gmail.com" className="hover:text-friends-nude transition-colors transform hover:scale-110 transition-transform duration-300">
              <MailIcon size={24} />
            </a>
            <a href="https://github.com/areejrazzaq" target="_blank" className="hover:text-friends-nude transition-colors transform hover:scale-110 transition-transform duration-300">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/areej-razzaq/" target="_blank" className="hover:text-friends-nude transition-colors transform hover:scale-110 transition-transform duration-300">
              <LinkedinIcon size={24} />
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <CoffeeIcon size={16} className="mr-2" />
            <p className="text-sm">
              I'll be there for you (in your coding journey)
            </p>
          </div>
          <p className="text-sm flex items-center">
            Made with{' '}
            <HeartIcon size={14} className="mx-1 text-friends-nude animate-pulse" />{' '}
            and a lot of coffee
          </p>
        </div>
      </div>
      <Notification 
        isVisible={showNotification}
        onClose={handleCloseNotification}
        email={submittedEmail}
      />
    </footer>;
}