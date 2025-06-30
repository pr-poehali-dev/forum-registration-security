import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ForumHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-forum-red to-forum-blue rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-forum-red to-forum-blue bg-clip-text text-transparent">
              forumsTIK
            </h1>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-forum-blue text-forum-blue hover:bg-forum-blue hover:text-white"
            >
              Войти
            </Button>
            <Button className="bg-forum-red hover:bg-forum-darkRed text-white">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForumHeader;
