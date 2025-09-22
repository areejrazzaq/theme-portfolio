import { XIcon } from 'lucide-react';

interface NotificationProps {
  isVisible: boolean;
  onClose: () => void;
  email: string;
}

export function Notification({ isVisible, onClose, email }: NotificationProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-lg">Thank You!</h3>
            <p className="text-gray-700 text-sm mt-1">
              We'll be in touch at <span className="font-semibold">{email}</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">Sent just now</p>
          </div>
          
          {/* Action buttons */}
          <div className="flex space-x-2">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close notification"
            >
              <XIcon size={20} />
            </button>
            {/* <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
              aria-label="Confirm"
            >
              <CheckIcon size={20} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
