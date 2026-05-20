import React, { useState } from 'react';
import './App.css';

function RegistrationForm() {
    const [theme, setTheme] = useState('dark');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        skills: [],
        country: 'USA',
        dob: '',
        startDate: '',
        endDate: '',
        comments: '',
    });

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setFormData((prev) => {
                const nextSkills = checked
                    ? [...prev.skills, value]
                    : prev.skills.filter((skill) => skill !== value);
                return { ...prev, skills: nextSkills };
            });
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Replace this with actual submit logic if needed.
        alert(`Form submitted:\n${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div className={"registration-page" + (theme === 'light' ? ' theme-light' : '')}>
            <div className="page-header">
                <h2>User Registration Form</h2>
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
                </button>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>

                <div className="field-group">
                    <span>Gender:</span>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="dropdown"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>

                <div className="field-group">
                    <span>Skills:</span>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            value="java"
                            checked={formData.skills.includes('java')}
                            onChange={handleChange}
                        />
                        Java
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            value="react"
                            checked={formData.skills.includes('react')}
                            onChange={handleChange}
                        />
                        React
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            value="sql"
                            checked={formData.skills.includes('sql')}
                            onChange={handleChange}
                        />
                        SQL
                    </label>
                </div>

                <label>
                    Country:
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                    </select>
                </label>

                <label>
                    Date of Birth:
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </label>

                <label>
                    Start Date:
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                </label>

                <label>
                    End Date:
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                </label>

                <label>
                    Comments:
                    <textarea name="comments" value={formData.comments} onChange={handleChange} />
                </label>

                <div className="button-row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
