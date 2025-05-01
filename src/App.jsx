import { useState } from 'react';
import { moods } from './moods.js';
import './App.css';

export default function App() {
  const [mood, setMood] = useState('polite');
  const [entry, setEntry] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = () => {
    if (!entry.trim()) return;
    const moodReplies = moods[mood].responses;
    const randomReply = moodReplies[Math.floor(Math.random() * moodReplies.length)];
    setReply(randomReply);
    setEntry('');
  };

  return (
    <div className={`app ${moods[mood].className}`}>
      <h1 className="title">MoodMorph 🌀</h1>

      <select onChange={(e) => setMood(e.target.value)} value={mood}>
        {Object.keys(moods).map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        className="entry-box"
      ></textarea>

      <button onClick={handleSubmit}>Submit</button>

      {reply && <div className="reply-box">{reply}</div>}
    </div>
  );
}