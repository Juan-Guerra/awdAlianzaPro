var app = angular.module("store", []);

app.controller("StoreController", function() {
  this.products = product;
});

app.controller("PanelController", function() {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };
});


var product = [
  {
    name: "Amiga 1000",
    price: 2.95,
    description: "First model which cames out",
    canPurchase: true,
    images: [
      {
        full: "amiga1000_thumb.jpg",
        thumb: "amiga1000_full.jpg"
      }
    ]
  },
  {
    name: "Amiga 2000",
    price: 5.95,
    description: "A more professional attempt",
    canPurchase: true,
    images: [
      {
        full: "Amiga2000_thumb.jpg",
        thumb: "Amiga2000_full.jpg"
      }
    ]
  },

  {
    name: "Amiga 500",
    price: 5.95,
    description: "First commercial success, due to its low price",
    canPurchase: true,
    images: [
      {
        full: "Amiga500_thumb.jpg",
        thumb: "Amiga500_full.jpg"
      }
    ]
  },

  {
    name: "Amiga 600",
    price: 5.95,
    description: "Compacting with new chipset",
    canPurchase: true,
    images: [
      {
        full: "amiga600_thumb.jpg",
        thumb: "amiga600_full.jpg"
      }
    ]
  },

  {
    name: "Amiga 1200",
    price: 5.95,
    description: "A new generation",
    canPurchase: true,
    images: [
      {
        full: "A1200_thumb.jpg",
        thumb: "amiga_1200_full.jpg"
      }
    ]
  },

  {
    name: "Amiga 4000",
    price: 6.95,
    description: "Endless processing and colour power",
    canPurchase: true,
    images: [
      {
        full: "A4000_thumb.jpg",
        thumb: "A4000_full.jpg"
      }
    ]
  }
];
