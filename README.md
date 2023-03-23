# CringeShieldX
CringeShieldX is a browser extension that helps you filter out cringe-worthy content on YouTube. With CringeShieldX, you can block videos that make you feel uncomfortable, embarrassed, or awkward, so you can enjoy your browsing experience without worrying about encountering cringe content.

## Installation
Install Tampermonkey extension on your browser.

- [Tampermonkey for Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Tampermonkey for Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Tampermonkey for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

Install the CringeShieldX script from [here](https://github.com/NurTasin/CringeShieldX/blob/main/script.js).

Once the script is installed, it will automatically start blocking videos that contain cringe-worthy content.

## Customizing the Block List
By default, CringeShieldX uses a built-in block list of cringe keywords and channels. However, you can create and use your own block list by following these steps:

Create a JSON file that contains a list of keywords and channels that you want to block. The JSON file should have the following format:

```json
{
  "keywords": [
    "cringe",
    "keywords",
    "here"
  ],
  "channels": [
    "Cringe",
    "Channels",
    "Here"
  ]
}
```
In the "keywords" attribute, add a list of words or phrases that you want to block. In the "channels" attribute, add a list of YouTube channel names that you want to block.

Once you have created your custom database, you can use it in the CringeShieldX script by updating the databaseUrl variable at the script with the URL of your JSON file.

```javascript
// Change the Database Link According to Your Choice
const DatabaseLink="URL_TO_YOUR_DATABASE.json";
```

## Contributing
If you find a bug or have a feature request, please create an issue on the GitHub repository.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.