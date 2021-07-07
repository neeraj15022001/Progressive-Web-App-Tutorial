// Extracting binary object ( blob = binary large object )
const readResponsesAsBlob = (response) => {
  if (!response.ok) throw response.statusText;
  return response.blob();
};

// Making a DOM Node
const makeImageNode = (imgBlob) => {
  const url = URL.createObjectURL(imgBlob);
  const myImage = document.createElement("img");
  myImage.src = url;
  return myImage;
};

// Appending it in DOM
const appendNode = (imageNode) => {
  const container = document.getElementById("container");
  container.appendChild(imageNode);
};

// Processing an image

fetch("https://i.ibb.co/px2XJnS/profile.png")
  .then(readResponsesAsBlob)
  .then(makeImageNode)
  .then(appendNode);

// Fetch API uses CORS(Cross Origin Resource Sharing) by default
