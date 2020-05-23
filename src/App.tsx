import React, { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  const downloadFile = async () => {
    const data = {
      name: 'file',
      content: {
        hello: 'world',
      },
    };

    const fileName = data.name;
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);

    setUrl(href);
  };

  useEffect(() => {
    downloadFile();
  }, []);

  return (
    <div className="App">
      <h1>Hello React</h1>
      <a href={url} download="file.json">
        Download
      </a>
    </div>
  );
}

export default App;
