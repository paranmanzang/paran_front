"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

type PostEditorProps = {
  onSubmit: (content: string, imageFiles: File[], group: string) => void;
};

const PostEditor = ({ onSubmit }: PostEditorProps) => {
  const [content, setContent] = useState<string>('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string>(''); // group selection
  
  // Handle text input
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // Handle image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setImageFiles([...imageFiles, ...fileArray]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(content, imageFiles, selectedGroup);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg space-y-4">
      {/* Group/Board Selection */}
      <div className="mb-4">
        <label htmlFor="groupSelect" className="block text-sm font-medium text-gray-700">
          Select Group or Board
        </label>
        <select
          id="groupSelect"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        >
          <option value="" disabled>Select...</option>
          <option value="Group 1">Group 1</option>
          <option value="Group 2">Group 2</option>
          <option value="Board 1">Board 1</option>
          <option value="Board 2">Board 2</option>
        </select>
      </div>

      {/* Text Area for Content */}
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Post Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
          placeholder="Write your post content here..."
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
          Upload Images
        </label>
        <input
          type="file"
          id="imageUpload"
          onChange={handleImageUpload}
          accept="image/*"
          multiple
          className="mt-1"
        />
        <div className="mt-2">
          {imageFiles.length > 0 && (
            <ul>
              {imageFiles.map((file, index) => (
                <li key={index} className="text-sm text-gray-500">
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Post
      </button>
    </form>
  );
};

export default PostEditor;