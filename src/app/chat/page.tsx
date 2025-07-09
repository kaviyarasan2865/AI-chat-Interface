"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import {
  Send,
  ArrowLeft,
  MoreVertical,
  Sparkles,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Plus,
  Search,
  MessageSquare,
  Trash2,
  Menu,
  X,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  isTyping?: boolean
}

interface Conversation {
  id: string
  title: string
  messages: Message[]
  lastUpdated: Date
}

export default function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      title: "Machine Learning vs AI Explanation",
      lastUpdated: new Date(Date.now() - 300000),
      messages: [
        {
          id: "1",
          content:
            "Hello! I'm your AI assistant. I'm here to help you with questions, provide information, assist with tasks, and engage in meaningful conversations. How can I assist you today?",
          sender: "assistant",
          timestamp: new Date(Date.now() - 300000),
        },
        {
          id: "2",
          content: "Can you help me understand the difference between machine learning and artificial intelligence?",
          sender: "user",
          timestamp: new Date(Date.now() - 240000),
        },
        {
          id: "3",
          content:
            "Great question! I'd be happy to explain the difference between AI and machine learning.\n\n**Artificial Intelligence (AI)** is the broader concept of creating machines that can perform tasks that typically require human intelligence. This includes reasoning, learning, perception, and decision-making.\n\n**Machine Learning (ML)** is actually a subset of AI. It's a specific approach where we train algorithms on data so they can learn patterns and make predictions or decisions without being explicitly programmed for every scenario.",
          sender: "assistant",
          timestamp: new Date(Date.now() - 180000),
        },
      ],
    },
    {
      id: "2",
      title: "React Component Best Practices",
      lastUpdated: new Date(Date.now() - 86400000),
      messages: [
        {
          id: "1",
          content: "What are the best practices for writing React components?",
          sender: "user",
          timestamp: new Date(Date.now() - 86400000),
        },
        {
          id: "2",
          content:
            "Here are some key React component best practices:\n\n**1. Keep Components Small and Focused**\n- Single responsibility principle\n- Easier to test and maintain\n\n**2. Use Functional Components with Hooks**\n- More concise and easier to understand\n- Better performance with React 18+\n\n**3. Proper State Management**\n- Use useState for local state\n- Consider useReducer for complex state logic\n- Lift state up when needed",
          sender: "assistant",
          timestamp: new Date(Date.now() - 86300000),
        },
      ],
    },
    {
      id: "3",
      title: "JavaScript Array Methods Guide",
      lastUpdated: new Date(Date.now() - 172800000),
      messages: [
        {
          id: "1",
          content: "Can you explain the most useful JavaScript array methods?",
          sender: "user",
          timestamp: new Date(Date.now() - 172800000),
        },
        {
          id: "2",
          content:
            "Here are the most essential JavaScript array methods:\n\n**Transformation Methods:**\n• `map()` - Transform each element\n• `filter()` - Create new array with elements that pass a test\n• `reduce()` - Reduce array to single value\n\n**Search Methods:**\n• `find()` - Find first element that matches\n• `findIndex()` - Find index of first match\n• `includes()` - Check if array contains value",
          sender: "assistant",
          timestamp: new Date(Date.now() - 172700000),
        },
      ],
    },
    {
      id: "4",
      title: "CSS Grid vs Flexbox Comparison",
      lastUpdated: new Date(Date.now() - 259200000),
      messages: [
        {
          id: "1",
          content: "When should I use CSS Grid vs Flexbox?",
          sender: "user",
          timestamp: new Date(Date.now() - 259200000),
        },
        {
          id: "2",
          content:
            "Great question! Here's when to use each:\n\n**Use Flexbox for:**\n- One-dimensional layouts (row or column)\n- Component-level layout\n- Centering items\n- Distributing space between items\n\n**Use CSS Grid for:**\n- Two-dimensional layouts (rows AND columns)\n- Page-level layout\n- Complex grid systems\n- Overlapping elements",
          sender: "assistant",
          timestamp: new Date(Date.now() - 259100000),
        },
      ],
    },
    {
      id: "5",
      title: "API Design Best Practices",
      lastUpdated: new Date(Date.now() - 345600000),
      messages: [
        {
          id: "1",
          content: "What are the key principles for designing good REST APIs?",
          sender: "user",
          timestamp: new Date(Date.now() - 345600000),
        },
      ],
    },
    {
      id: "6",
      title: "Database Optimization Techniques",
      lastUpdated: new Date(Date.now() - 432000000),
      messages: [
        {
          id: "1",
          content: "How can I optimize database performance?",
          sender: "user",
          timestamp: new Date(Date.now() - 432000000),
        },
      ],
    },
  ])

  const [currentConversationId, setCurrentConversationId] = useState<string>("1")
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

  const currentConversation = conversations.find((conv) => conv.id === currentConversationId)
  const currentMessages = React.useMemo(() => currentConversation?.messages || [], [currentConversation])

  const filteredConversations = conversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [currentMessages])

  const createNewChat = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [
        {
          id: "1",
          content: "Hello! I'm your AI assistant. How can I help you today?",
          sender: "assistant",
          timestamp: new Date(),
        },
      ],
      lastUpdated: new Date(),
    }

    setConversations((prev) => [newConversation, ...prev])
    setCurrentConversationId(newConversation.id)
    setSidebarOpen(false)
  }

  const deleteConversation = (conversationId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setConversations((prev) => prev.filter((conv) => conv.id !== conversationId))
    if (currentConversationId === conversationId) {
      const remaining = conversations.filter((conv) => conv.id !== conversationId)
      if (remaining.length > 0) {
        setCurrentConversationId(remaining[0].id)
      } else {
        createNewChat()
      }
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    // Update current conversation with new message
    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === currentConversationId) {
          const updatedMessages = [...conv.messages, userMessage]
          // Update title if it's the first user message
          const newTitle =
            conv.title === "New Chat" && conv.messages.length === 1
              ? inputValue.slice(0, 50) + (inputValue.length > 50 ? "..." : "")
              : conv.title

          return {
            ...conv,
            messages: updatedMessages,
            title: newTitle,
            lastUpdated: new Date(),
          }
        }
        return conv
      }),
    )

    setInputValue("")
    setIsTyping(true)

    // Auto-resize textarea
    if (inputRef.current) {
      inputRef.current.style.height = "auto"
    }

    // Simulate AI response
    setTimeout(
      () => {
        const responses = [
          "That's an excellent question! Let me break this down for you step by step.\n\nFirst, it's important to understand that this topic has several key aspects to consider. The main points I'd highlight are:\n\n1. **Context matters** - The situation you're describing depends heavily on the specific circumstances\n2. **Multiple approaches** - There are usually several ways to tackle this kind of challenge\n3. **Best practices** - Industry standards suggest following certain guidelines\n\nWould you like me to elaborate on any of these points?",
          "I understand what you're looking for! This is actually a common scenario that many people encounter.\n\nHere's my recommended approach:\n\n**Step 1:** Start by gathering all the relevant information\n**Step 2:** Analyze the key factors that might influence your decision\n**Step 3:** Consider both short-term and long-term implications\n**Step 4:** Make a decision based on your priorities and constraints\n\nThe key is to be systematic about it. Would you like me to help you work through any specific part of this process?",
          "Great point! You've touched on something really important here.\n\nFrom my analysis, there are a few different perspectives to consider:\n\n• **Technical perspective:** The implementation details matter significantly\n• **User experience perspective:** How this affects the end user is crucial\n• **Business perspective:** The cost-benefit analysis is important\n\nEach of these viewpoints might lead to different conclusions, which is why it's valuable to consider them all. What's your primary concern or goal in this situation?",
        ]

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: responses[Math.floor(Math.random() * responses.length)],
          sender: "assistant",
          timestamp: new Date(),
        }

        setConversations((prev) =>
          prev.map((conv) => {
            if (conv.id === currentConversationId) {
              return {
                ...conv,
                messages: [...conv.messages, assistantMessage],
                lastUpdated: new Date(),
              }
            }
            return conv
          }),
        )

        setIsTyping(false)
      },
      2000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    e.target.style.height = "auto"
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return date.toLocaleDateString()
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile sidebar overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-400 bg-opacity-40" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-80 flex-col bg-gray-50 shadow-xl">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-900">HelloAI</span>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-900">
              <X className="h-6 w-6" />
            </button>
          </div>
          {/* Mobile sidebar content */}
          <div className="flex-1 overflow-y-auto p-4">
            <button
              onClick={createNewChat}
              className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg mb-4 transition-colors border border-gray-200"
            >
              <Plus className="w-4 h-4" />
              <span>New chat</span>
            </button>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search chats"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 border border-gray-200"
              />
            </div>

            <div className="space-y-1">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => {
                    setCurrentConversationId(conversation.id)
                    setSidebarOpen(false)
                  }}
                  className={`group flex items-center justify-between px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                    currentConversationId === conversation.id
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <MessageSquare className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    <span className="truncate">{conversation.title}</span>
                  </div>
                  <button
                    onClick={(e) => deleteConversation(conversation.id, e)}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                  >
                    <Trash2 className="w-3 h-3 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col bg-gray-50 border-r border-gray-200">
        <div className="flex h-16 items-center px-4 border-b border-gray-200">
          <span className="text-lg font-semibold text-gray-900">HelloAI</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <button
            onClick={createNewChat}
            className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg mb-4 transition-colors border border-gray-200"
          >
            <Plus className="w-4 h-4" />
            <span>New chat</span>
          </button>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 border border-gray-200"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Chats</h3>
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setCurrentConversationId(conversation.id)}
                className={`group flex items-center justify-between px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                  currentConversationId === conversation.id
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {/* <MessageSquare className="w-4 h-4 flex-shrink-0 text-gray-400" /> */}
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{conversation.title}</p>
                    <p className="text-xs text-gray-400">{formatTime(conversation.lastUpdated)}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => deleteConversation(conversation.id, e)}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                >
                  <Trash2 className="w-3 h-3 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">{currentConversation?.title || "HelloAI"}</h1>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
            {currentMessages.map((message, index) => (
              <div
                key={message.id}
                className={`group message-enter ${message.sender === "assistant" ? "assistant-message" : "user-message"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.sender === "assistant" ? (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="prose prose-sm max-w-none">
                        <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{message.content}</div>
                      </div>
                      <div className="flex items-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => copyMessage(message.content)}
                          className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                          title="Copy message"
                        >
                          <Copy className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors" title="Good response">
                          <ThumbsUp className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors" title="Bad response">
                          <ThumbsDown className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors" title="Regenerate">
                          <RotateCcw className="w-4 h-4 text-gray-500" />
                        </button>
                        <span className="text-xs text-gray-400 ml-2">{formatTime(message.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md xl:max-w-lg">
                      <div className="bg-blue-800 text-white px-4 py-3 rounded-2xl rounded-br-md">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 text-right">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3 message-enter">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Message HelloAI..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent resize-none min-h-[48px] max-h-[120px] leading-6"
                disabled={isTyping}
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 bottom-4 p-2 bg-blue-800 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              HelloAI can make mistakes. Consider checking important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
