"use client"
import React, { useState } from 'react';
import { Upload, User, Lock, Mail, LogOut, Sparkles, X } from 'lucide-react';

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [personImage, setPersonImage] = useState(null);
  const [clothImage, setClothImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleAuth = () => {
    // Backend integration will go here
    setIsAuthenticated(true);
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'person') {
          setPersonImage(reader.result);
        } else {
          setClothImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = async () => {
    if (!personImage || !clothImage) return;
    
    setIsProcessing(true);
    // Simulate processing - Backend integration will go here
    setTimeout(() => {
      setResultImage(personImage);
      setIsProcessing(false);
    }, 2000);
  };

  const resetAll = () => {
    setPersonImage(null);
    setClothImage(null);
    setResultImage(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform hover:scale-105 transition-transform duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              InstantStyle
            </h1>
            <p className="text-gray-600 mt-2">Your Virtual Fashion Destination</p>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                isLogin
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                !isLogin
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              onClick={handleAuth}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                InstantStyle
              </h1>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                resetAll();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Virtual Try-On Studio</h2>
          <p className="text-gray-600">Upload your photo and the clothing item to see the magic!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Your Photo
            </h3>
            <div className="relative">
              {personImage ? (
                <div className="relative">
                  <img src={personImage} alt="Person" className="w-full h-80 object-cover rounded-xl" />
                  <button
                    onClick={() => setPersonImage(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-80 border-3 border-dashed border-purple-300 rounded-xl cursor-pointer bg-purple-50 hover:bg-purple-100 transition-colors">
                  <Upload className="w-12 h-12 text-purple-500 mb-3" />
                  <span className="text-purple-600 font-semibold">Upload Your Photo</span>
                  <span className="text-gray-500 text-sm mt-1">PNG, JPG up to 10MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'person')}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-600" />
              Clothing Item
            </h3>
            <div className="relative">
              {clothImage ? (
                <div className="relative">
                  <img src={clothImage} alt="Cloth" className="w-full h-80 object-cover rounded-xl" />
                  <button
                    onClick={() => setClothImage(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-80 border-3 border-dashed border-pink-300 rounded-xl cursor-pointer bg-pink-50 hover:bg-pink-100 transition-colors">
                  <Upload className="w-12 h-12 text-pink-500 mb-3" />
                  <span className="text-pink-600 font-semibold">Upload Clothing</span>
                  <span className="text-gray-500 text-sm mt-1">PNG, JPG up to 10MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'cloth')}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={handleTryOn}
            disabled={!personImage || !clothImage || isProcessing}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isProcessing ? 'Processing Magic...' : 'Try It On!'}
          </button>
          {(personImage || clothImage) && (
            <button
              onClick={resetAll}
              className="ml-4 px-8 py-4 bg-gray-500 text-white text-lg font-bold rounded-xl hover:bg-gray-600 transition-colors"
            >
              Reset All
            </button>
          )}
        </div>

        {resultImage && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Virtual Try-On Result
            </h3>
            <img src={resultImage} alt="Result" className="w-full rounded-xl shadow-lg" />
            <div className="flex gap-4 mt-6">
              <button className="flex-1 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Download Result
              </button>
              <button className="flex-1 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Share
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}