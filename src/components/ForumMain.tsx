import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const ForumMain: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const vintageEmojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Добро пожаловать в forumsTIK!",
      author: "Администратор",
      replies: 42,
      views: 1337,
      lastPost: "2 часа назад",
      category: "Объявления",
      isHot: true,
    },
    {
      id: 2,
      title: "Как работает SMS регистрация?",
      author: "TechGuru2010",
      replies: 15,
      views: 234,
      lastPost: "30 минут назад",
      category: "Помощь",
      isHot: false,
    },
    {
      id: 3,
      title: "Лучшие смайлики из 2010-х",
      author: "RetroFan",
      replies: 89,
      views: 567,
      lastPost: "1 час назад",
      category: "Общение",
      isHot: true,
    },
    {
      id: 4,
      title: "Как работает офлайн режим?",
      author: "MobileUser",
      replies: 23,
      views: 345,
      lastPost: "3 часа назад",
      category: "Технологии",
      isHot: false,
    },
  ];

  const handleRegistration = () => {
    setIsRegistering(true);
    // Placeholder for SMS registration
    setTimeout(() => {
      alert("SMS отправлено на номер " + phoneNumber);
      setIsRegistering(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="topics" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="topics">Темы</TabsTrigger>
              <TabsTrigger value="popular">Популярное</TabsTrigger>
              <TabsTrigger value="new">Новое</TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Все темы</h2>
                <Button className="bg-forum-red hover:bg-forum-darkRed">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать тему
                </Button>
              </div>

              <div className="space-y-3">
                {forumTopics.map((topic) => (
                  <Card
                    key={topic.id}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900 hover:text-forum-red">
                              {topic.title}
                            </h3>
                            {topic.isHot && (
                              <Badge className="bg-forum-red text-white">
                                <Icon name="Flame" size={12} className="mr-1" />
                                Горячая
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>
                              <Icon
                                name="User"
                                size={14}
                                className="inline mr-1"
                              />
                              {topic.author}
                            </span>
                            <span>
                              <Icon
                                name="MessageCircle"
                                size={14}
                                className="inline mr-1"
                              />
                              {topic.replies} ответов
                            </span>
                            <span>
                              <Icon
                                name="Eye"
                                size={14}
                                className="inline mr-1"
                              />
                              {topic.views} просмотров
                            </span>
                            <Badge variant="outline">{topic.category}</Badge>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>{topic.lastPost}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="text-center py-12">
                <Icon
                  name="TrendingUp"
                  size={48}
                  className="mx-auto text-forum-blue mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Популярные темы</h3>
                <p className="text-gray-500">
                  Здесь будут отображаться самые популярные темы недели
                </p>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="text-center py-12">
                <Icon
                  name="Sparkles"
                  size={48}
                  className="mx-auto text-forum-blue mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Новые темы</h3>
                <p className="text-gray-500">
                  Здесь будут отображаться самые свежие темы
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <Card className="border-forum-blue">
            <CardHeader>
              <CardTitle className="text-forum-red">
                Присоединяйтесь к forumsTIK!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Регистрируйтесь по номеру телефона и получайте доступ ко всем
                функциям форума
              </p>
              <div className="space-y-3">
                <Input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border-forum-blue focus:ring-forum-blue"
                />
                <Button
                  onClick={handleRegistration}
                  disabled={isRegistering || !phoneNumber}
                  className="w-full bg-forum-red hover:bg-forum-darkRed"
                >
                  {isRegistering ? (
                    <>
                      <Icon
                        name="Loader2"
                        size={16}
                        className="mr-2 animate-spin"
                      />
                      Отправляем SMS...
                    </>
                  ) : (
                    <>
                      <Icon name="Smartphone" size={16} className="mr-2" />
                      Получить SMS
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vintage Emojis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-forum-blue">
                Винтажные смайлики
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-2">
                {vintageEmojis.slice(0, 18).map((emoji, index) => (
                  <button
                    key={index}
                    className="text-2xl hover:bg-gray-100 rounded p-1 transition-colors"
                    title={`Смайлик ${emoji}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Forum Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-forum-blue">
                Статистика форума
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Всего тем:</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Сообщений:</span>
                <span className="font-semibold">15,678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Участников:</span>
                <span className="font-semibold">892</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Онлайн:</span>
                <span className="font-semibold text-green-600">
                  <Icon
                    name="Circle"
                    size={8}
                    className="inline mr-1 fill-current"
                  />
                  47
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Offline Mode */}
          <Card className="border-forum-lightBlue">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-forum-lightBlue rounded-full flex items-center justify-center">
                  <Icon name="Wifi" size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Офлайн режим</div>
                  <div className="text-xs text-gray-500">
                    Работает без интернета
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForumMain;
