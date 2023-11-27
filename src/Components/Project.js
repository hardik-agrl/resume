import React from "react";

export default function Project() {
  return (
    <div className="container my-2">
      <h2>PERSONAL PROJECTS</h2>
      <ul>
        <li>
          <a href="https://cloud-notebook-vn7o.onrender.com/login"><h3 className="my-3">CloudNotes-React App</h3></a>
          Developed CloudNotes-React, a React application for managing personal notes on the cloud.
Created using Create React App, demonstrating proficiency in modern React development tools.
Implemented a user-friendly interface for creating, editing, and organizing notes.
Leveraged cloud storage to ensure data accessibility and synchronization across devices.
Contributed to a well-structured and maintainable codebase.
        </li>
        <li>
          <h3 className="my-3">NewsZone-React App</h3>
          Designed and developed NewsZone-React, a news app built with React and NewsAPI.
Gained hands-on experience in building user interfaces and integrating third-party APIs using React.
Demonstrated expertise in responsive design and mobile-friendly development to ensure a seamless user experience across various devices.
Successfully delivered a production-ready React project, showcasing strong technical skills and problem-solving abilities.

        </li>
        {/* <li>
          <h3>Diabetic Retinopathy using Deep Learning</h3>
          Convolutional neural networks (CNNs) and transfer learning techniques
          were used to develop and train a deep learning model for diabetic
          retinopathy detection. Achieved high accuracy in classifying retinal
          images as normal or showing signs of diabetic retinopathy, potentially
          improving diabetic patients' early diagnosis and treatment outcomes.
        </li> */}
        {/* <li>
          <h3>Image Denoising Using Autoencoders</h3>
          It removes the noise in an image using convolutional neural networks
          and autoencoders. Used MNIST datasets. Normalize the input, add noise
          to prepare the input dataset and prepared the model using convolution
          and filters.
        </li>
        <li>
          <h3>Speech Recognition using Matlab</h3>
          Build a speech recognition system using matlab which will take the
          speech of users as input and will display which word was spoken using
          correlation.
        </li> */}
      </ul>
    </div>
  );
}
