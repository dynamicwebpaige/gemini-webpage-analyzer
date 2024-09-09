function callApi(apiKey, systemInstruction, text) {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const data = {
      systemInstruction: {
          parts: [
              {
                  text: systemInstruction
              }
          ]
      },
      contents: [{
          parts: [{
              text: text
          }]
      }]
  };

  return fetch(apiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
      .then(response => response.json())
      .then(data => {
          return data.candidates[0].content.parts[0].text;
      })
      .catch((error) => {
          console.error('Error:', error);
          return { error: error.toString() };
      });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "callAPI") {
      chrome.storage.local.get(['geminiKey', 'systemInstruction'], function (result) {
          callApi(result.geminiKey, result.systemInstruction, request.text).then(response => {
              sendResponse({ response: response });
          });
      });
      // Return true to indicate you will send a response asynchronously
      return true;
  }
});