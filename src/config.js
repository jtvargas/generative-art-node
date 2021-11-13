const layersOrder = [
    { name: 'background', number: 5 },
    { name: 'outfit', number: 6 },
    { name: 'hands', number: 2 },
    { name: 'outfitHands', number: 2 },
    { name: 'horns', number: 4 },
    { name: 'face', number: 3 },
    { name: 'eyes', number: 2 },
    { name: 'nose', number: 1 },
    { name: 'mouth', number: 2 },
    { name: 'secondaryAccessory', number: 4 },
    { name: 'primaryAccessory', number: 2 },
];
  
const format = {
    width: 5000,
    height: 5000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1;

module.exports = { layersOrder, format, rarity, defaultEdition };