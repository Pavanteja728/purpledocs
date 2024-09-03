import React from 'react';

const Settings = ({ handleLanguageChange, language }) => {
  const languages = ['French', 'German', 'Russian', 'Spanish', 'Chinese'];

  return (
    <div className="settings">
      <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
        {languages.map((lang) => (
          <option value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default Settings;