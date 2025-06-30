import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface Reply {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  avatar?: string;
}

interface TopicViewProps {
  topicId: number;
  onBack: () => void;
}

const TopicView: React.FC<TopicViewProps> = ({ topicId, onBack }) => {
  const [newReply, setNewReply] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data for the topic
  const topic = {
    id: topicId,
    title: "Добро пожаловать в forumsTIK!",
    author: "Администратор",
    content:
      "Привет всем! Добро пожаловать в наш новый форум forumsTIK. Здесь вы можете обсуждать любые темы, делиться опытом и находить новых друзей. Регистрация проходит через SMS, а форум работает даже в офлайн режиме!",
    timestamp: "2 часа назад",
    views: 1337,
    category: "Объявления",
    isHot: true,
  };

  const replies: Reply[] = [
    {
      id: 1,
      author: "TechGuru2010",
      content:
        "Отличная идея с SMS регистрацией! Очень удобно, не нужно запоминать пароли.",
      timestamp: "1 час назад",
      likes: 15,
    },
    {
      id: 2,
      author: "RetroFan",
      content:
        "А винтажные смайлики просто супер! 😀 Напоминают старые добрые времена форумов.",
      timestamp: "45 минут назад",
      likes: 8,
    },
    {
      id: 3,
      author: "MobileUser",
      content:
        "Офлайн режим - это то что нужно! Можно читать форум даже без интернета.",
      timestamp: "30 минут назад",
      likes: 12,
    },
  ];

  const handleSubmitReply = () => {
    if (!newReply.trim()) return;

    setIsSubmitting(true);
    // Simulate reply submission
    setTimeout(() => {
      setNewReply("");
      setIsSubmitting(false);
      // Here would be the logic to add the reply to the list
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back button */}
      <Button
        variant="outline"
        onClick={onBack}
        className="mb-6 border-forum-blue text-forum-blue hover:bg-forum-blue hover:text-white"
      >
        <Icon name="ArrowLeft" size={16} className="mr-2" />
        Назад к темам
      </Button>

      {/* Topic header */}
      <Card className="mb-6">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {topic.title}
                </h1>
                {topic.isHot && (
                  <Badge className="bg-forum-red text-white">
                    <Icon name="Flame" size={12} className="mr-1" />
                    Горячая
                  </Badge>
                )}
                <Badge variant="outline">{topic.category}</Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>
                  <Icon name="User" size={14} className="inline mr-1" />
                  {topic.author}
                </span>
                <span>
                  <Icon name="Clock" size={14} className="inline mr-1" />
                  {topic.timestamp}
                </span>
                <span>
                  <Icon name="Eye" size={14} className="inline mr-1" />
                  {topic.views} просмотров
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{topic.content}</p>
        </CardContent>
      </Card>

      {/* Replies */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Ответы ({replies.length})
        </h2>

        {replies.map((reply) => (
          <Card key={reply.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-forum-blue to-forum-lightBlue rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">
                      {reply.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {reply.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{reply.content}</p>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-forum-red"
                    >
                      <Icon name="Heart" size={14} className="mr-1" />
                      {reply.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-forum-blue"
                    >
                      <Icon name="Reply" size={14} className="mr-1" />
                      Ответить
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reply form */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">
            Написать ответ
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Напишите ваш ответ..."
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            className="min-h-[120px] border-forum-blue focus:ring-forum-blue"
          />
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Для отправки ответа необходимо войти в аккаунт
            </div>
            <Button
              onClick={handleSubmitReply}
              disabled={isSubmitting || !newReply.trim()}
              className="bg-forum-red hover:bg-forum-darkRed"
            >
              {isSubmitting ? (
                <>
                  <Icon
                    name="Loader2"
                    size={16}
                    className="mr-2 animate-spin"
                  />
                  Отправляем...
                </>
              ) : (
                <>
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить ответ
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopicView;
