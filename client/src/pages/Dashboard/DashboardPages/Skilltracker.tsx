import React, { useState } from 'react';

export default function Skilltracker() {
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js']);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Skill Tracker</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <p className="text-gray-600 mb-6">Keep track of your technical skills and proficiency.</p>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill..."
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customColor focus:border-transparent transition"
          />
          <button
            onClick={addSkill}
            className="px-6 py-3 bg-customColor text-white font-medium rounded-lg hover:bg-opacity-90 transition shadow-md"
          >
            Add Skill
          </button>
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100 shadow-sm transition hover:shadow-md">
              <span className="font-medium">{skill}</span>
              <button onClick={() => removeSkill(index)} className="ml-1 text-blue-400 hover:text-red-500 focus:outline-none text-xl leading-none">
                &times;
              </button>
            </div>
          ))}
          {skills.length === 0 && <p className="text-gray-500 italic">No skills added yet. Start adding your top skills!</p>}
        </div>
      </div>
    </div>
  )
}
