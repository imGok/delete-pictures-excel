# Pictures filter based on CSV
This script filters pictures according to an "ID" column

## Installation

- Install [Node.js](https://nodejs.org/en/download/)
- `npm install`

## Usage
- Create a folder "data" in the root of the project
- Create a folder "images" in the data folder
- Put all your pictures in the "images" folder
- Put your CSV file in the "data" folder with the name "data.csv"
- Launch `node index`

## Example of the folder structure

├── data  
│   ├── images  
│   │   ├── picture1.jpg  
│   │   ├── picture2.jpg  
│   │   ├── picture3.jpg  
│   │   ├── **.jpg  
│   ├── data.csv  
├── index.js  


## Config
- Delimiter property corresponds to the delimiter in your .csv
- RefColumnIndex property corresponds to the index of the "ID" column (starting to 1)
