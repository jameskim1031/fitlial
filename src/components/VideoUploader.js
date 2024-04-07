import React, { useState, useRef } from 'react';

function VideoUploader() {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('video', file);

      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload video');
      }

      const data = await response.json();
      setVideoUrl(data.url); // Store the video URL in state
      console.log('Video uploaded successfully');
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  // const handleUploadButtonClick = () => {
  //   if (file) {
  //     handleFileUpload(); // Call handleFileUpload if file is selected
  //   } else {
  //     fileInputRef.current.click(); // Trigger file input click event if file is not selected
  //   }
  // };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} style={{ display: 'none' }}/> */}
      <input type="file" onChange={handleFileChange}/>
      {/* <button onClick={handleUploadButtonClick} className='TodayWorkoutListItemBottomButton'>Upload</button> */}
      {/* {videoUrl && (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )} */}
      <button onClick={handleFileUpload} className='TodayWorkoutListItemBottomButton'>Upload</button>
      {/* <button onClick={handleUploadButtonClick}>Upload</button> */}
    </div>
  );
}

export default VideoUploader;