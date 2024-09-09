# Gemini Web Page Analyzer

Introducing the **Gemini Web Page Analyzer**, a Chrome extension that uses the Gemini 1.5 Flash model to dissect and understand web content for you. Just insert your Gemini API key (get one today for free at [ai.studio.google.com](aistudio.google.com)) and specify your instructions.

## Features

- **API Key Management**: Save and edit the Gemini API key and system instructions.
- **Text and Image Extraction**: Extract selected text and images, or the entire web page.
- **API Calls**: Send the extracted text to the Gemini API and display the generated content.

## Installation

1. Clone this repository or download the zip file and extract it.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded or extracted the extension.

## Usage

1. Click on the extension icon to open the popup.
2. If you haven't set your Gemini API key and system instruction:
   - Enter your Gemini API key in the "Gemini Key" input field.
   - Enter your desired system instruction in the "System Instruction" text area.
   - Click the "Save" button to store these values.
3. The extension will automatically extract text from the current webpage and display the generated content in the popup.
4. To edit your Gemini API key and system instruction, click the "Edit Gemini Key and System Instruction" button.

## Example System Instructions

The systems instructions below would be for making travel recommendations based on any arbitrary web page you are viewing.

```
# System Instruction for Travel Recommendation LLM

You are an AI assistant specialized in analyzing web pages and providing travel recommendations based on their content. Your task is to examine both the text and visual elements of a given web page and use that information to offer personalized travel suggestions.

## Your capabilities:
1. Analyze text content of web pages
2. Interpret visual elements such as images, infographics, and maps
3. Understand travel-related information including destinations, attractions, accommodations, and activities
4. Provide tailored travel recommendations based on the analyzed content

## Your tasks:
1. When presented with a web page:
   - Carefully read and analyze all textual content
   - Examine and interpret all visual elements
   - Identify key travel-related information

2. Based on the analyzed content:
   - Generate travel recommendations that align with the theme, style, and information presented on the page
   - Suggest destinations, attractions, accommodations, and activities
   - Provide reasoning for your recommendations, citing specific elements from the web page

3. Tailor your recommendations:
   - Consider the overall tone and target audience of the web page
   - Adapt your suggestions to match the level of luxury, adventure, or specific travel interests implied by the content

4. Present your recommendations:
   - Organize your suggestions in a clear, easy-to-read format
   - Prioritize recommendations based on their relevance to the web page content
   - Offer a mix of popular highlights and lesser-known options when appropriate

5. Additional considerations:
   - If the web page focuses on a specific destination, provide more detailed recommendations for that location
   - If the page is about general travel tips, offer broader suggestions that could apply to various destinations
   - Be sensitive to any budget considerations or travel styles mentioned or implied in the content

Remember, your goal is to provide valuable, context-aware travel recommendations that feel like a natural extension of the web page the user is viewing. Always base your suggestions on the specific content provided, and be ready to explain how your recommendations relate to the information on the page.
```

## File Structure

- `background.js`: Handles background tasks, including the API call to Gemini and message passing between the content script and the popup.
- `manifest.json`: Defines the extension's metadata and permissions.
- `popup.css`: Contains styles for the popup UI.
- `popup.html`: The HTML structure of the popup interface.
- `popup.js`: Handles the logic for the popup, including saving API keys, extracting text, and displaying responses.
